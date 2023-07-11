import styled from 'styled-components'

function Icon({children}) {
    return (  
        <StyledIcon>{children}</StyledIcon>
    );
}

const StyledIcon  = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: black;
    cursor: pointer;
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`

export default Icon;