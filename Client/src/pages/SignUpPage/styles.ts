import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    background-color: var(--color-background);

    .content{
        display: flex;

        width: 90%;
        height: 90%;
        
        border-radius: 5rem;
    }
`;

export const SignUpContainer = styled.div`
    position: relative;

    width: 50%;
    max-height: 100%;
    padding: 2rem;

    background-color: var(--color-modal-login);
    border-radius: 5rem 0 0 5rem;

    header{
        display: flex;
        gap: 1rem;
    }

    header h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 4rem;
    }

    header img{
        width: 5rem;
    }

    .signup-area{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 90%;
        height: 100%;
        margin-left: 3rem;
        margin-top: -5rem;

        form{
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 3rem;

            width: 100%;
        }


        form .hasnotaccount{
            display: flex;
            gap: .5rem;

            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            font-weight: 300;

            .linktosignup{
                color: var(--color-ball);
                text-decoration: underline;

                transition: color .2s;
                &:hover{
                    color: var(--color-ball-hover);
                }
            }
        }

        form .submit-button{
            width: 90%;
            height: 7rem;

            background-color: var(--color-ball);
            border: none;
            border-radius: 2rem;

            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            font-weight: 600;
            color: white;

            cursor: pointer;
            transition: background-color .3s;
            &:hover{
                background-color: var(--color-ball-hover);
            }
        }
    }

    form .signup-title{
        font-size: 5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

        margin: 0 auto;
    }
    
    footer{
        position: absolute;
        bottom: 1rem;
        left: 3rem;

        height: 5rem;
        width: 100%;

        span{
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: 2rem;
            color: gray;
        }
    }
    
    @media(max-width: 950px){
        width: 100%;
        border-radius: 5rem;

        .signup-area{
            width: 100%;

        }
    } 
`;

export const AsideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 50%;
    height: 100%;

    background-color: var(--color-modal-aside);
    border-radius: 0 5rem 5rem 0;

    .logo-image{
        pointer-events: none;
    }

    @media(max-width: 950px){
        display: none;
    } 
`;