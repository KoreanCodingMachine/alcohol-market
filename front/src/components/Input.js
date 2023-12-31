import styled from 'styled-components'

function Input({type, placeholder,onChange,name}) {
    return (  
        <StyledInput type={type} placeholder={placeholder} onChange={onChange} name={name}/>
    );
}

export default Input;

const StyledInput = styled.input`
    background: rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 25px;
    font-weight: bold;
    
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe0;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
        font-size: 25px;
    }

    &::placeholder {
        color: #b9abe099;
        font-weight: 100;
        font-size: 25px;    
    }
`