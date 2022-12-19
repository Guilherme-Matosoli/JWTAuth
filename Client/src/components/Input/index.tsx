import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string,
    name: string
}

export const Input: React.FC<InputProps> = ({
    label,
    name,
    ...props
}) => {
    return(
        <Container>
            <label htmlFor={name}>{label}</label>
            <input
            id={name} 
            {...props}
            />
        </Container>
    )
}