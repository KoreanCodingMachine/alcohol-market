process.env.PUPPETEER_SKIP_DOWNLOAD = 'true';
import puppeteer from 'puppeteer-core';
import { MongoClient } from 'mongodb'

const valuesArray = [ 8666,  75661, 614833, 169964,    251,  10726,   5588,   5571,
    703,   6668,   7656,   2228, 135361,    473,  36249,    709,
    12775, 143730,    742,   4007,  72025,  58275, 221535, 291276,
    2469,   2468, 553454,   1088,    721,  30913,    814,  75071,
    715,   1267,     55,  17334,     37, 493355,  64253,  34662,
    136165, 500620,  13833, 506847,  73158,    399,   5159,   3101,
    315443, 552713, 911382, 906973,    268, 550283, 271470,    390,
    71469,  35424,   4701,   2514,   2516, 288954,    405, 303473,
    136785,    647, 632627,   3029,    717, 553245, 580686, 252000,
    21936, 667837,   2811,    729,  71458, 634182,  86387,   1478,
    146878, 146725, 149060,  15747, 718172,   3126, 480225, 268685,
    730, 211962,  64518, 621308,   7580, 452525,   1417,   1486,
    221];


const baseURL = 'https://www.ratebeer.com/beer/sdh/';
const mongodb_uri = "mongodb://localhost:27017/sdh";
const mongodb_collection = 'beer';

const crawlURL = async (url, value) => {
 try {
   const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
   });
   
   const page = await browser.newPage();
   await page.goto(url);

   await page.waitForSelector('.MuiTypography-h4');
   await page.waitForSelector('.BeerCard___StyledImg-euvbSt');
   await page.waitForSelector('.colorized__WrappedComponent-hrwcZr.mr-2.MuiTypography-body2');
   await page.waitForSelector('#root > div.App___StyledDiv-icXtoY.dKCeLR > div.App___StyledDiv2-gWnqez.dIfVTu > div > div > div > div.two-column-page-layout__InnerContainer-bOOfEQ.dcJCbA > div:nth-child(1) > div > div.px-4.pt-4 > div.fj-sb > div > div.fa-c.f-wrap > div.BeerCard___StyledDiv2-ieYeaq.eRqQUm.mb-3 > div.MuiTypography-root.Text___StyledTypographyTypeless-bukSfn.pzIrn.colorized__WrappedComponent-hrwcZr.hwjOn.MuiTypography-body2')
   await page.waitForSelector('#root > div.App___StyledDiv-icXtoY.dKCeLR > div.App___StyledDiv2-gWnqez.dIfVTu > div > div > div > div.two-column-page-layout__InnerContainer-bOOfEQ.dcJCbA > div:nth-child(1) > div > div.px-4.pt-4 > div.fj-sb > div > div.fa-c.f-wrap > div.BeerCard___StyledDiv2-ieYeaq.eRqQUm.mb-3 > div.fj-s > div.MuiTypography-root.Text___StyledTypographyTypeless-bukSfn.kbrPIo.colorized__WrappedComponent-hrwcZr.bRPQdN.MuiTypography-caption')

   const title = await page.$eval('.MuiTypography-h4', el => el.innerText.trim());
   const image = await page.$eval('.BeerCard___StyledImg-euvbSt', el => el.getAttribute('src'));
   const rating = await page.$eval('.colorized__WrappedComponent-hrwcZr.mr-2.MuiTypography-body2', el => el.innerText.trim());
   const country = await page.$eval('#root > div.App___StyledDiv-icXtoY.dKCeLR > div.App___StyledDiv2-gWnqez.dIfVTu > div > div > div > div.two-column-page-layout__InnerContainer-bOOfEQ.dcJCbA > div:nth-child(1) > div > div.px-4.pt-4 > div.fj-sb > div > div.fa-c.f-wrap > div.BeerCard___StyledDiv2-ieYeaq.eRqQUm.mb-3 > div.MuiTypography-root.Text___StyledTypographyTypeless-bukSfn.pzIrn.colorized__WrappedComponent-hrwcZr.hwjOn.MuiTypography-body2', el => el.innerText.trim());
   const alcohol = await page.$eval('#root > div.App___StyledDiv-icXtoY.dKCeLR > div.App___StyledDiv2-gWnqez.dIfVTu > div > div > div > div.two-column-page-layout__InnerContainer-bOOfEQ.dcJCbA > div:nth-child(1) > div > div.px-4.pt-4 > div.fj-sb > div > div.fa-c.f-wrap > div.BeerCard___StyledDiv2-ieYeaq.eRqQUm.mb-3 > div.fj-s > div.MuiTypography-root.Text___StyledTypographyTypeless-bukSfn.kbrPIo.colorized__WrappedComponent-hrwcZr.bRPQdN.MuiTypography-caption', el => el.innerText.trim())
   const type = await page.$eval('.fj-s > a', el => el.innerText.trim());

   await browser.close();

   return {
     title,
     image,
     rating,
     country,
     alcohol,
     type,
     beerId: value
   }

 } catch (error) {
   console.error("An error occurred while fetching the data:", error.message);
   return null;
 }
};

const saveToMongoDB = async (data, collection) => {
 try {
   await collection.insertOne(data);
 } catch (error) {
   console.error('An error occurred while inserting data to MongoDB:', error.message);
 }
};

(async () => {
 const client = new MongoClient(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });

 try {
   await client.connect();
   const collection = client.db().collection(mongodb_collection);

   for (const value of valuesArray) {
     const url = `${baseURL}${value}/`;
     const result = await crawlURL(url, value);
     if (result) {
       await saveToMongoDB(result, collection);
       console.log('Saved result to MongoDB:', result);
     }
   }

 } catch (error) {
   console.error('An error occurred while connecting to MongoDB:', error.message);
 } finally {
   await client.close();
 }
})();