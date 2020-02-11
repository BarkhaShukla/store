import styled from "styled-components";

const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.1rem;
background: transparent;
border: 0.05rem solid var(--mainWhite);
border-color: ${props => (props.cart ? "var(--darkBeige)" : "var(--darkBeige)")};
color:${prop => (prop.cart ? "var(--mainDark)" : "var(--mainDark)")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${prop => (prop.cart ? "var(--darkBeige)" : "var(--darkBeige)")};
    color: var(--mainDark);
}
&:focus{
    outline: none;
}
`;

export default ButtonContainer;