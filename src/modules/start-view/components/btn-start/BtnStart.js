import styled from "styled-components";

export const  BtnStart = styled.button`
  position: absolute;
  bottom: 10vh;
  right: 10vw;
  display: block;
  padding: 28px 20px;
  color:#474747;
  font-size: 30px;
  background-color: #c6c6c6;
  border: none;
  border-radius: 40%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  transition: 1s opacity ease-in-out;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.show ? '1' : '0'};
`;