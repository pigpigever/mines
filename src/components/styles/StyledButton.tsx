import styled, {StyledComponent, ThemedStyledProps} from 'styled-components';
import {CSSProperties} from 'react';

interface StyledButtonProps {
    margin: ThemedStyledProps<>;
}

export const StyledButton = styled('div')<StyledButtonProps>`
  border: none;
  bottom: 20px;
  box-shadow: none;
  color: #fff;
  height: 40px;
  line-height: 42px;
  margin: ${props => props.margin};
  perspective: 230px;
  position: relative;
  right: 20px;
  width: 130px;
  span {
    background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
    border-radius: 5px;
    box-sizing: border-box;
    display: block;
    height: 40px;
    margin: 0;
    position: absolute;
    text-align: center;
    transition: all .3s;
    width: 130px;
  }
  
`;

