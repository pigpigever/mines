import {StyledButton} from '../styles/StyledButton';
import {CSSProperties} from 'react';

export interface ButtonProps {
    text: string;
    hoverText: string;
    style?: CSSProperties;
}

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton style={props.style}>
            <span>{props.text}</span>
            <span>{props.hoverText}</span>
        </StyledButton>
    );
};
