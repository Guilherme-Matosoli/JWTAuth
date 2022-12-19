import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: 0 auto;

    label{
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 300;
    }

    input{
        width: 90%;
        height: 6rem;

        border: none;
        outline: none;

        border-radius: 1rem;
        padding: 2rem;

        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        }
`;