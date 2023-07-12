const data = [
    {
        "_id": "64ad2b21f65d0d4af2a60a48",
        "title": "Sapporo Yebisu",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_221",
        "rating": "2.60",
        "country": "🇯🇵 Tokyo, Tokyo, Japan",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 221
    },
    {
        "_id": "64ad2b1ef65d0d4af2a60a47",
        "title": "Castlemaine XXXX Gold Lager",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_1486",
        "rating": "2.06",
        "country": "🇦🇺 Milton, Queensland, Australia",
        "alcohol": "3.5%",
        "type": "Pale Lager - International / Premium",
        "beerId": 1486
    },
    {
        "_id": "64ad2b1af65d0d4af2a60a46",
        "title": "Warsteiner Premium Verum",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_1417",
        "rating": "2.77",
        "country": "🇩🇪 Warstein, North Rhine-Westphalia, Germany",
        "alcohol": "4.8%",
        "type": "Pilsener / Pils / Pilsner",
        "beerId": 1417
    },
    {
        "_id": "64ad2b17f65d0d4af2a60a45",
        "title": "Volfas Engelman Grünberger",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_452525",
        "rating": "1.93",
        "country": "🇱🇹 Kaunas, Lithuania",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 452525
    },
    {
        "_id": "64ad2b14f65d0d4af2a60a44",
        "title": "Victoria Bitter",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_7580",
        "rating": "2.14",
        "country": "🇦🇺 Southbank, Victoria, Australia",
        "alcohol": "4.9%",
        "type": "Pale Lager - International / Premium",
        "beerId": 7580
    },
    {
        "_id": "64ad2b12f65d0d4af2a60a43",
        "title": "Tsingtao Wheat Beer",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_621308",
        "rating": "2.83",
        "country": "🇨🇳 Qinqdao, China",
        "alcohol": "4.7%",
        "type": "Weissbier - Hefeweizen",
        "beerId": 621308
    },
    {
        "_id": "64ad2b0ff65d0d4af2a60a42",
        "title": "Tsingtao Draft Beer 11º (Pure Draft Beer)",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_64518",
        "rating": "1.98",
        "country": "🇨🇳 Qinqdao, China",
        "alcohol": "4.3%",
        "type": "Pale Lager - International / Premium",
        "beerId": 64518
    },
    {
        "_id": "64ad2b0cf65d0d4af2a60a41",
        "title": "Tsingtao 4.7% 11°P",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_211962",
        "rating": "2.22",
        "country": "🇨🇳 Qinqdao, China",
        "alcohol": "4.7%",
        "type": "Pale Lager - International / Premium",
        "beerId": 211962
    },
    {
        "_id": "64ad2b08f65d0d4af2a60a40",
        "title": "Tsingtao",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_730",
        "rating": "2.18",
        "country": "🇨🇳 Qinqdao, China",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 730
    },
    {
        "_id": "64ad2b05f65d0d4af2a60a3f",
        "title": "Tiger Radler Lemon",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_268685",
        "rating": "2.47",
        "country": "🇸🇬 Singapore, Singapore",
        "alcohol": "2.0%",
        "type": "Radler / Shandy",
        "beerId": 268685
    },
    {
        "_id": "64ad2b02f65d0d4af2a60a3e",
        "title": "Tiger Radler Grapefruit",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_480225",
        "rating": "2.78",
        "country": "🇸🇬 Singapore, Singapore",
        "alcohol": "2.0%",
        "type": "Radler / Shandy",
        "beerId": 480225
    },
    {
        "_id": "64ad2afff65d0d4af2a60a3d",
        "title": "Tiger Beer",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_3126",
        "rating": "2.26",
        "country": "🇸🇬 Singapore, Singapore",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 3126
    },
    {
        "_id": "64ad2afbf65d0d4af2a60a3c",
        "title": "Terra",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_718172",
        "rating": "2.41",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "4.6%",
        "type": "Pale Lager - International / Premium",
        "beerId": 718172
    },
    {
        "_id": "64ad2af8f65d0d4af2a60a3b",
        "title": "Suntory The Premium Malt's",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_15747",
        "rating": "2.80",
        "country": "🇯🇵 Osaka, Osaka, Japan",
        "alcohol": "5.5%",
        "type": "Pale Lager - International / Premium",
        "beerId": 15747
    },
    {
        "_id": "64ad2ad6f65d0d4af2a60a3a",
        "title": "Stephans Bräu Premium Lager",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_146725",
        "rating": "2.12",
        "country": "🇩🇪 Neckarsulm, Baden-Württemberg, Germany",
        "alcohol": "4.9%",
        "type": "Pale Lager - American",
        "beerId": 146725
    },
    {
        "_id": "64ad2ad3f65d0d4af2a60a39",
        "title": "Stephans Bräu Hefe-Weizen Hefetrüb (Eichbaum)",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_146878",
        "rating": "2.67",
        "country": "🇩🇪 Neckarsulm, Baden-Württemberg, Germany",
        "alcohol": "5.3%",
        "type": "Weissbier - Hefeweizen",
        "beerId": 146878
    },
    {
        "_id": "64ad2ad0f65d0d4af2a60a38",
        "title": "Stella Artois",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_1478",
        "rating": "2.74",
        "country": "🇧🇪 Leuven, Flemish Brabant, Belgium",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 1478
    },
    {
        "_id": "64ad2acdf65d0d4af2a60a37",
        "title": "Somersby Apple Cider",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_86387",
        "rating": "2.44",
        "country": "🇩🇰 Copenhagen, Denmark",
        "alcohol": "4.5%",
        "type": "Apple Cider",
        "beerId": 86387
    },
    {
        "_id": "64ad2acaf65d0d4af2a60a36",
        "title": "ARK Seoulite Ale",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_634182",
        "rating": "3.05",
        "country": "🇰🇷 Eumseong-gu, Chungcheongbuk-do, South Korea",
        "alcohol": "5.0%",
        "type": "Pale Ale - American (APA)",
        "beerId": 634182
    },
    {
        "_id": "64ad2ac7f65d0d4af2a60a35",
        "title": "Schöfferhofer Grapefruit",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_71458",
        "rating": "3.03",
        "country": "🇩🇪 Frankfurt am Main, Hesse, Germany",
        "alcohol": "2.5%",
        "type": "Radler / Shandy",
        "beerId": 71458
    },
    {
        "_id": "64ad2ac3f65d0d4af2a60a34",
        "title": "Sapporo Premium Beer / Draft Beer",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_729",
        "rating": "2.42",
        "country": "🇯🇵 Tokyo, Tokyo, Japan",
        "alcohol": "4.9%",
        "type": "Pale Lager - International / Premium",
        "beerId": 729
    },
    {
        "_id": "64ad2ac0f65d0d4af2a60a33",
        "title": "San Miguel",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_2811",
        "rating": "2.04",
        "country": "🇵🇭 Mandaluyong City, Metro Manila, Philippines",
        "alcohol": "4.8%",
        "type": "Pale Lager - International / Premium",
        "beerId": 2811
    },
    {
        "_id": "64ad2abdf65d0d4af2a60a32",
        "title": "Reeper B. Blondes Weissbier",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_667837",
        "rating": "2.84",
        "country": "🇩🇪 Oettingen, Bavaria, Germany",
        "alcohol": "5.4%",
        "type": "Weissbier - Hefeweizen",
        "beerId": 667837
    },
    {
        "_id": "64ad2abaf65d0d4af2a60a31",
        "title": "Red Rock",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_21936",
        "rating": "2.39",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "5.0%",
        "type": "Amber Lager - International / Vienna",
        "beerId": 21936
    },
    {
        "_id": "64ad2ab6f65d0d4af2a60a30",
        "title": "Queen's Ale Blonde Type",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_252000",
        "rating": "2.87",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "5.4%",
        "type": "Pale Ale - English",
        "beerId": 252000
    },
    {
        "_id": "64ad2ab4f65d0d4af2a60a2f",
        "title": "Platinum White Ale",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_580686",
        "rating": "4.10",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "5.4%",
        "type": "Witbier / Belgian White Ale",
        "beerId": 580686
    },
    {
        "_id": "64ad2ab0f65d0d4af2a60a2e",
        "title": "Platinum Pale Ale",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_553245",
        "rating": "3.30",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "5.2%",
        "type": "Pale Ale - American (APA)",
        "beerId": 553245
    },
    {
        "_id": "64ad2aadf65d0d4af2a60a2d",
        "title": "Pilsner Urquell",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_717",
        "rating": "3.38",
        "country": "🇨🇿 Pilsen, Plzen Region, Czech Republic",
        "alcohol": "4.4%",
        "type": "Pilsener - Bohemian / Czech",
        "beerId": 717
    },
    {
        "_id": "64ad2aaaf65d0d4af2a60a2c",
        "title": "Peroni Nastro Azzurro",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_3029",
        "rating": "2.43",
        "country": "🇮🇹 Roma, Lazio, Italy",
        "alcohol": "5.1%",
        "type": "Pale Lager - International / Premium",
        "beerId": 3029
    },
    {
        "_id": "64ad2aa7f65d0d4af2a60a2b",
        "title": "Reeper B. Exotisches IPA",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_632627",
        "rating": "2.73",
        "country": "🇩🇪 Oettingen, Bavaria, Germany",
        "alcohol": "5.0%",
        "type": "IPA",
        "beerId": 632627
    },
    {
        "_id": "64ad2aa4f65d0d4af2a60a2a",
        "title": "Paulaner Hefe-Weissbier",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_647",
        "rating": "TOP 50",
        "country": "🇩🇪 München, Bavaria, Germany",
        "alcohol": "5.5%",
        "type": "Weissbier - Hefeweizen",
        "beerId": 647
    },
    {
        "_id": "64ad2aa1f65d0d4af2a60a29",
        "title": "Patagonia Weisse",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_136785",
        "rating": "3.25",
        "country": "🇦🇷 San Carlos de Bariloche, Río Negro, Argentina",
        "alcohol": "5.0%",
        "type": "Witbier / Belgian White Ale",
        "beerId": 136785
    },
    {
        "_id": "64ad2a9ef65d0d4af2a60a28",
        "title": "OB Premier Pilsner",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_303473",
        "rating": "2.28",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "5.2%",
        "type": "Pale Lager - International / Premium",
        "beerId": 303473
    },
    {
        "_id": "64ad2a9bf65d0d4af2a60a27",
        "title": "Miller Genuine Draft (MGD)",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_405",
        "rating": "1.85",
        "country": "🇺🇸 Milwaukee, Wisconsin, United States",
        "alcohol": "4.7%",
        "type": "Pale Lager - American",
        "beerId": 405
    },
    {
        "_id": "64ad2a97f65d0d4af2a60a26",
        "title": "Löwenbräu Original (4.2%)",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_288954",
        "rating": "2.22",
        "country": "🇭🇷 Zagreb, Croatia",
        "alcohol": "4.2%",
        "type": "Pale Lager - International / Premium",
        "beerId": 288954
    },
    {
        "_id": "64ad2a94f65d0d4af2a60a25",
        "title": "Leffe Brune / Bruin / Brown",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_2516",
        "rating": "TOP 50",
        "country": "🇧🇪 Leuven, Flemish Brabant, Belgium",
        "alcohol": "6.5%",
        "type": "Belgian Ale - Dark / Amber",
        "beerId": 2516
    },
    {
        "_id": "64ad2a92f65d0d4af2a60a24",
        "title": "Leffe Blonde / Blond",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_2514",
        "rating": "3.46",
        "country": "🇧🇪 Leuven, Flemish Brabant, Belgium",
        "alcohol": "6.6%",
        "type": "Belgian Ale - Pale / Golden / Single",
        "beerId": 2514
    },
    {
        "_id": "64ad2a8ef65d0d4af2a60a23",
        "title": "Lapin Kulta IV A",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_4701",
        "rating": "2.27",
        "country": "🇫🇮 Lahti, Päijänne Tavastia, Finland",
        "alcohol": "5.2%",
        "type": "Pale Lager - International / Premium",
        "beerId": 4701
    },
    {
        "_id": "64ad2a8bf65d0d4af2a60a22",
        "title": "Kronenbourg 1664 Blanc",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_35424",
        "rating": "3.04",
        "country": "🇫🇷 Obernai, Grand Est, France",
        "alcohol": "5.0%",
        "type": "Witbier / Belgian White Ale",
        "beerId": 35424
    },
    {
        "_id": "64ad2a87f65d0d4af2a60a21",
        "title": "Krombacher Weizen",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_71469",
        "rating": "3.17",
        "country": "🇩🇪 Kreuztal, North Rhine-Westphalia, Germany",
        "alcohol": "5.3%",
        "type": "Weissbier - Hefeweizen",
        "beerId": 71469
    },
    {
        "_id": "64ad2a85f65d0d4af2a60a20",
        "title": "Kozel Černý (Dark) 10°",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_390",
        "rating": "3.09",
        "country": "🇨🇿 Velké Popovice, Central Bohemia, Czech Republic",
        "alcohol": "3.8%",
        "type": "Dark Lager - Dunkel / Tmavý",
        "beerId": 390
    },
    {
        "_id": "64ad2a82f65d0d4af2a60a1f",
        "title": "Kloud Original Gravity",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_271470",
        "rating": "2.50",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 271470
    },
    {
        "_id": "64ad2a7ff65d0d4af2a60a1e",
        "title": "Kloud Fitz Super Clear",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_550283",
        "rating": "2.26",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "4.5%",
        "type": "Pale Lager - American",
        "beerId": 550283
    },
    {
        "_id": "64ad2a7cf65d0d4af2a60a1d",
        "title": "Kirin Ichiban",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_268",
        "rating": "2.38",
        "country": "🇯🇵 Tokyo, Tokyo, Japan",
        "alcohol": "4.9%",
        "type": "Pale Lager - International / Premium",
        "beerId": 268
    },
    {
        "_id": "64ad2a79f65d0d4af2a60a1c",
        "title": "Kabrew Namsan Mountain Premium Citra Ale",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_906973",
        "rating": "3.60",
        "country": "🇰🇷 Gapyeong-gun, Gyeonggi-do, South Korea",
        "alcohol": "4.5%",
        "type": "ISA - Session IPA",
        "beerId": 906973
    },
    {
        "_id": "64ad2a76f65d0d4af2a60a1b",
        "title": "Kabrew Kumiho Relax Beer",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_911382",
        "rating": "2.63",
        "country": "🇰🇷 Gapyeong-gun, Gyeonggi-do, South Korea",
        "alcohol": "4.2%",
        "type": "Flavored - Pumpkin / Vegetables",
        "beerId": 911382
    },
    {
        "_id": "64ad2a73f65d0d4af2a60a1a",
        "title": "Jeju Wit Ale",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_552713",
        "rating": "3.05",
        "country": "🇰🇷 Hallim, South Korea",
        "alcohol": "5.3%",
        "type": "Witbier / Belgian White Ale",
        "beerId": 552713
    },
    {
        "_id": "64ad2a70f65d0d4af2a60a19",
        "title": "Hop House 13 Lager",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_315443",
        "rating": "3.22",
        "country": "🇮🇪 Dublin, County Dublin, Ireland",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 315443
    },
    {
        "_id": "64ad2a6df65d0d4af2a60a18",
        "title": "Holsten Premium Bier",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_3101",
        "rating": "2.40",
        "country": "🇩🇪 Hamburg, Hamburg, Germany",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 3101
    },
    {
        "_id": "64ad2a69f65d0d4af2a60a17",
        "title": "Hollandia",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_5159",
        "rating": "2.25",
        "country": "🇳🇱 Lieshout, North Brabant, Netherlands",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 5159
    },
    {
        "_id": "64ad2a67f65d0d4af2a60a16",
        "title": "Hoegaarden",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_399",
        "rating": "3.62",
        "country": "🇧🇪 Hoegaarden, Flemish Brabant, Belgium",
        "alcohol": "4.9%",
        "type": "Witbier / Belgian White Ale",
        "beerId": 399
    },
    {
        "_id": "64ad2a63f65d0d4af2a60a15",
        "title": "Hoegaarden Rosée",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_73158",
        "rating": "2.61",
        "country": "🇧🇪 Hoegaarden, Flemish Brabant, Belgium",
        "alcohol": "3.0%",
        "type": "Flavored - Fruit",
        "beerId": 73158
    },
    {
        "_id": "64ad2a60f65d0d4af2a60a14",
        "title": "Hoegaarden Cherry",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_506847",
        "rating": "2.97",
        "country": "🇧🇪 Hoegaarden, Flemish Brabant, Belgium",
        "alcohol": "4.9%",
        "type": "Radler / Shandy",
        "beerId": 506847
    },
    {
        "_id": "64ad2a5df65d0d4af2a60a13",
        "title": "Hite Prime Max",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_13833",
        "rating": "1.94",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "4.5%",
        "type": "Pale Lager - International / Premium",
        "beerId": 13833
    },
    {
        "_id": "64ad2a5af65d0d4af2a60a12",
        "title": "Hite Extra Cold",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_500620",
        "rating": "2.41",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "4.3%",
        "type": "Pale Lager - International / Premium",
        "beerId": 500620
    },
    {
        "_id": "64ad2a56f65d0d4af2a60a11",
        "title": "Hite D (Dry Finish)",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_136165",
        "rating": "1.99",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "4.8%",
        "type": "Pale Lager - International / Premium",
        "beerId": 136165
    },
    {
        "_id": "64ad2a53f65d0d4af2a60a10",
        "title": "Heineken Dark Lager",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_34662",
        "rating": "2.67",
        "country": "🇳🇱 Zoeterwoude, South Holland, Netherlands",
        "alcohol": "5.2%",
        "type": "Dark Lager - International / Premium",
        "beerId": 34662
    },
    {
        "_id": "64ad2a50f65d0d4af2a60a0f",
        "title": "Heineken 3.5%",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_64253",
        "rating": "2.23",
        "country": "🇳🇱 Zoeterwoude, South Holland, Netherlands",
        "alcohol": "3.5%",
        "type": "Pale Lager - American",
        "beerId": 64253
    },
    {
        "_id": "64ad2a2cf65d0d4af2a60a0e",
        "title": "Heineken",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_37",
        "rating": "2.39",
        "country": "🇳🇱 Zoeterwoude, South Holland, Netherlands",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 37
    },
    {
        "_id": "64ad2a29f65d0d4af2a60a0d",
        "title": "Harbin Beer",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_17334",
        "rating": "2.07",
        "country": "🇨🇳 Harbin, China",
        "alcohol": "4.8%",
        "type": "Pale Lager - International / Premium",
        "beerId": 17334
    },
    {
        "_id": "64ad2a26f65d0d4af2a60a0c",
        "title": "Guinness Original 4.2% (Ireland/UK)",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_55",
        "rating": "3.29",
        "country": "🇮🇪 Dublin, County Dublin, Ireland",
        "alcohol": "4.2%",
        "type": "Stout",
        "beerId": 55
    },
    {
        "_id": "64ad2a22f65d0d4af2a60a0b",
        "title": "Guinness Draught",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_1267",
        "rating": "3.56",
        "country": "🇮🇪 Dublin, County Dublin, Ireland",
        "alcohol": "4.2%",
        "type": "Stout - Dry / Irish",
        "beerId": 1267
    },
    {
        "_id": "64ad2a1ff65d0d4af2a60a0a",
        "title": "Grolsch Premium Lager",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_715",
        "rating": "2.70",
        "country": "🇳🇱 Boekelo, Overijssel, Netherlands",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 715
    },
    {
        "_id": "64ad2a1cf65d0d4af2a60a09",
        "title": "Grimbergen Cuvée Blanche",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_75071",
        "rating": "3.22",
        "country": "🇧🇪 Alken, Limburg, Belgium",
        "alcohol": "6.0%",
        "type": "Witbier / Belgian White Ale",
        "beerId": 75071
    },
    {
        "_id": "64ad2a19f65d0d4af2a60a08",
        "title": "Goose Island Goose IPA",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_814",
        "rating": "TOP 50",
        "country": "🇺🇸 Chicago, Illinois, United States",
        "alcohol": "5.9%",
        "type": "IPA - English",
        "beerId": 814
    },
    {
        "_id": "64ad2a16f65d0d4af2a60a07",
        "title": "Goose Island 312 Urban Wheat Ale",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_30913",
        "rating": "2.89",
        "country": "🇺🇸 Chicago, Illinois, United States",
        "alcohol": "4.2%",
        "type": "Wheat Ale",
        "beerId": 30913
    },
    {
        "_id": "64ad2a13f65d0d4af2a60a06",
        "title": "Gambrinus Originál 10° (Desítka)",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_721",
        "rating": "2.61",
        "country": "🇨🇿 Pilsen, Plzen Region, Czech Republic",
        "alcohol": "4.3%",
        "type": "Pilsener - Bohemian / Czech",
        "beerId": 721
    },
    {
        "_id": "64ad2a10f65d0d4af2a60a05",
        "title": "Franziskaner Hefe-Weissbier / Weissbier Naturtrub",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_1088",
        "rating": "TOP 50",
        "country": "🇩🇪 München, Bavaria, Germany",
        "alcohol": "5.0%",
        "type": "Weissbier - Hefeweizen",
        "beerId": 1088
    },
    {
        "_id": "64ad2a0df65d0d4af2a60a04",
        "title": "FiLite",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_553454",
        "rating": "2.33",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "4.5%",
        "type": "Pale Lager - International / Premium",
        "beerId": 553454
    },
    {
        "_id": "64ad2a0af65d0d4af2a60a03",
        "title": "Erdinger Weissbier",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_2468",
        "rating": "3.28",
        "country": "🇩🇪 Erding, Bavaria, Germany",
        "alcohol": "5.3%",
        "type": "Weissbier - Hefeweizen",
        "beerId": 2468
    },
    {
        "_id": "64ad2a07f65d0d4af2a60a02",
        "title": "Erdinger Weissbier Dunkel",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_2469",
        "rating": "3.27",
        "country": "🇩🇪 Erding, Bavaria, Germany",
        "alcohol": "5.3%",
        "type": "Weissbier - Dunkelweizen",
        "beerId": 2469
    },
    {
        "_id": "64ad2a04f65d0d4af2a60a01",
        "title": "Egger Zwickl",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_291276",
        "rating": "2.92",
        "country": "🇦🇹 Unterradlberg, Austria",
        "alcohol": "5.1%",
        "type": "Zwickelbier / Kellerbier / Landbier",
        "beerId": 291276
    },
    {
        "_id": "64ad2a01f65d0d4af2a60a00",
        "title": "Egger Grapefruit Radler",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_221535",
        "rating": "2.40",
        "country": "🇦🇹 Unterradlberg, Austria",
        "alcohol": "2.5%",
        "type": "Radler / Shandy",
        "beerId": 221535
    },
    {
        "_id": "64ad29fef65d0d4af2a609ff",
        "title": "Egger Märzenbier",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_58275",
        "rating": "2.58",
        "country": "🇦🇹 Unterradlberg, Austria",
        "alcohol": "5.0%",
        "type": "Märzen / Oktoberfest Bier",
        "beerId": 58275
    },
    {
        "_id": "64ad29fbf65d0d4af2a609fe",
        "title": "Edelweiss Weissbier Snowfresh",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_72025",
        "rating": "3.27",
        "country": "🇦🇹 Hallein, Austria",
        "alcohol": "4.9%",
        "type": "Weissbier - Hefeweizen",
        "beerId": 72025
    },
    {
        "_id": "64ad29f8f65d0d4af2a609fd",
        "title": "Desperados",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_4007",
        "rating": "2.11",
        "country": "🇫🇷 Rueil-Malmaison, Ile-de-France, France",
        "alcohol": "5.9%",
        "type": "Flavored - Other",
        "beerId": 4007
    },
    {
        "_id": "64ad29f5f65d0d4af2a609fc",
        "title": "Corona Extra",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_742",
        "rating": "2.10",
        "country": "🇲🇽 México DF, Mexico City, Mexico",
        "alcohol": "4.5%",
        "type": "Pale Lager - American",
        "beerId": 742
    },
    {
        "_id": "64ad29f2f65d0d4af2a609fb",
        "title": "Cass Light",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_143730",
        "rating": "1.80",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "4.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 143730
    },
    {
        "_id": "64ad29eff65d0d4af2a609fa",
        "title": "Cass Fresh",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_12775",
        "rating": "1.92",
        "country": "🇰🇷 Seoul, South Korea",
        "alcohol": "4.5%",
        "type": "Pale Lager - International / Premium",
        "beerId": 12775
    },
    {
        "_id": "64ad29ecf65d0d4af2a609f9",
        "title": "Carlsberg Pilsner",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_709",
        "rating": "2.36",
        "country": "🇩🇰 Copenhagen, Denmark",
        "alcohol": "4.6%",
        "type": "Pilsener / Pils / Pilsner",
        "beerId": 709
    },
    {
        "_id": "64ad29e9f65d0d4af2a609f8",
        "title": "Burgemeester",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_36249",
        "rating": "2.37",
        "country": "🇪🇸 El Puig, Valencia, Valencian Community, Spain",
        "alcohol": "4.8%",
        "type": "Pale Lager - American",
        "beerId": 36249
    },
    {
        "_id": "64ad29e5f65d0d4af2a609f7",
        "title": "Budweiser",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_473",
        "rating": "1.77",
        "country": "🇺🇸 St. Louis, Missouri, United States",
        "alcohol": "5.0%",
        "type": "Pale Lager - American",
        "beerId": 473
    },
    {
        "_id": "64ad29e2f65d0d4af2a609f6",
        "title": "BrewDog Punk IPA",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_135361",
        "rating": "3.88",
        "country": "🇬🇧 Ellon, Aberdeenshire, Grampian, Scotland",
        "alcohol": "5.4%",
        "type": "IPA",
        "beerId": 135361
    },
    {
        "_id": "64ad29dff65d0d4af2a609f5",
        "title": "Blue Moon Belgian White",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_2228",
        "rating": "3.14",
        "country": "🇺🇸 Denver, Colorado, United States",
        "alcohol": "5.4%",
        "type": "Witbier / Belgian White Ale",
        "beerId": 2228
    },
    {
        "_id": "64ad29dbf65d0d4af2a609f4",
        "title": "Bintang Pilsener",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_7656",
        "rating": "2.13",
        "country": "🇮🇩 Kota Tangerang, Indonesia",
        "alcohol": "4.7%",
        "type": "Pale Lager - International / Premium",
        "beerId": 7656
    },
    {
        "_id": "64ad29d7f65d0d4af2a609f3",
        "title": "Berliner Kindl Jubiläums Pilsener Premium",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_6668",
        "rating": "2.73",
        "country": "🇩🇪 Berlin, Berlin, Germany",
        "alcohol": "5.1%",
        "type": "Pilsener / Pils / Pilsner",
        "beerId": 6668
    },
    {
        "_id": "64ad29d3f65d0d4af2a609f2",
        "title": "Beck's",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_703",
        "rating": "2.46",
        "country": "🇩🇪 Bremen, Bremen, Germany",
        "alcohol": "4.8%",
        "type": "Pale Lager - International / Premium",
        "beerId": 703
    },
    {
        "_id": "64ad29d0f65d0d4af2a609f1",
        "title": "Bavaria Pilsener / Premium Beer",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_5571",
        "rating": "2.27",
        "country": "🇳🇱 Lieshout, North Brabant, Netherlands",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 5571
    },
    {
        "_id": "64ad29ccf65d0d4af2a609f0",
        "title": "Bavaria 8.6 (Original)",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_5588",
        "rating": "2.32",
        "country": "🇳🇱 Lieshout, North Brabant, Netherlands",
        "alcohol": "8.6%",
        "type": "Pilsener - Imperial",
        "beerId": 5588
    },
    {
        "_id": "64ad29c9f65d0d4af2a609ef",
        "title": "Bali Hai",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_10726",
        "rating": "1.80",
        "country": "🇮🇩 Tambun-Bekasi, West Java, Indonesia",
        "alcohol": "4.9%",
        "type": "Pale Lager - American",
        "beerId": 10726
    },
    {
        "_id": "64ad29c6f65d0d4af2a609ee",
        "title": "Asahi Super Dry",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_251",
        "rating": "2.40",
        "country": "🇯🇵 Sumida-ku, Tokyo, Japan",
        "alcohol": "5.0%",
        "type": "Pale Lager - International / Premium",
        "beerId": 251
    },
    {
        "_id": "64ad29c3f65d0d4af2a609ed",
        "title": "Asahi Super Dry Black",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_169964",
        "rating": "2.77",
        "country": "🇯🇵 Sumida-ku, Tokyo, Japan",
        "alcohol": "5.5%",
        "type": "Dark Lager - International / Premium",
        "beerId": 169964
    },
    {
        "_id": "64ad29c0f65d0d4af2a609ec",
        "title": "Apple Fox",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_614833",
        "rating": "3.30",
        "country": "🇲🇾 Petaling Jaya, Malaysia",
        "alcohol": "4.5%",
        "type": "Apple Cider",
        "beerId": 614833
    },
    {
        "_id": "64ad29bdf65d0d4af2a609eb",
        "title": "Eichbaum Apostel Bräu",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_75661",
        "rating": "2.46",
        "country": "🇩🇪 Mannheim, Baden-Württemberg, Germany",
        "alcohol": "5.0%",
        "type": "Pilsener / Pils / Pilsner",
        "beerId": 75661
    },
    {
        "_id": "64ad29b9f65d0d4af2a609ea",
        "title": "Ambar Especial",
        "image": "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_8666",
        "rating": "2.35",
        "country": "🇪🇸 Zaragoza, Aragon, Spain",
        "alcohol": "5.2%",
        "type": "Pale Lager - International / Premium",
        "beerId": 8666
    }
]

let sorted = data.sort((a,b) => {
    if(a.alcohol > b.alcohol) {
        return 1
    }

    if (a.alcohol < b.alcohol) {
        return -1
    }
    return 0
})


let ratingSorted = data.sort((a,b) => {

    if (a.rating > b.rating) {
        return 1
    } 

    if (a.rating < b.rating) {
        return -1
    }

    return 0
})

let country = []

const countrySort = data.map((v) => {
    if (!country.includes(v.country)) {
        country.push(v.country)
    }
})


// console.log(sorted)
// console.log(ratingSorted)
console.log(country)