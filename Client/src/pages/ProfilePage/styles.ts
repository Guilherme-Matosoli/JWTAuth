import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    min-width: 100vw;
    min-height: 100vh;

    background-color: var(--color-background);
`; 

export const Content = styled.main`
    position: absolute; 

    padding: 1.5rem;

    width: 90%;
    height: 90%;

    background-color: var(--color-modal-login);
    border-radius: 5rem;


    header{
        position: relative;
        z-index: 10;

        display: flex;
        justify-content: space-between;
        padding: inherit;

        .logo-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }

        h1{
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 4rem;
        }

        img{
            width: 5rem;
        }

        button{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .5rem;
            gap: 1rem;

            width: 15rem;
            background-color: inherit;
            border: none;
            border-radius: 5rem;
            
            font-size: 4rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            
            img{
                width: 5rem;
            }
            
            cursor: pointer;
            transition: background-color .3s;
            &:hover{
                background-color: var(--color-modal-aside);
            }
        }
    }

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 100%;
        height: 90%;

        h2{
            font-size: 5rem;
        }
    }
`;