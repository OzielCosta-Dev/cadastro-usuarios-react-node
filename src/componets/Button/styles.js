import styled from "styled-components";

export const Button = styled.button`
      border: ${props => props.border === 'none' ? 'none' : '1px solid #ccc'};
      background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%,  #FF6378 100%) ' : 'transparent'};
      font-size: 16px;                      
      font-size: 16px;
      color: #fff;
      padding: 16px 32px;
      width: fit-content;
      border-radius: 30px;
      cursor: pointer;

      &:hover {
        opacity: ${props => props.theme === 'primary' ? 0.8 : 'none'};
        background-color: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%,  #FF6378 100%) '  : '#FE7E5D '};
        transition: 0.6s;
      }

      &:active {
        opacity: ${props => props.theme === 'primary' ? 0.5 : 'none'};
        background-color: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%,  #FF6378 100%) '  : '#FF6378'};
        color: ${props => props.theme === 'primary' ? 'none' : '#fff'};
      }
`