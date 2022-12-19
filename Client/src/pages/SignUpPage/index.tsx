import { AsideContainer, Container, SignUpContainer } from './styles';
import { Input } from '../../components/Input';
import logoImg from '../../assets/images/logo.svg';
import successfullyIcon from '../../assets/images/successfully-icon.svg';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '../LoginPage/styles';


export const SignUpPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        token && navigate('/');
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginSuccessfully, setLoginSucessfully] = useState(false);


    async function SignUp(e: React.FormEvent){
        e.preventDefault();

        try{
            const data = {
                name,
                email,
                password
            };
    
            await axios.post('http://localhost:4001/user', data);

            setName('');
            setEmail('');
            setPassword('');

            setLoginSucessfully(true);
            setTimeout(() => {
                setLoginSucessfully(false)
            }, 2000);

        }catch(err){
            window.alert('Email already exists')
        }

    }
    return ( !token &&

        <Container>
            
            { loginSuccessfully &&

                <Modal>
                    <div className='alert'>
                        <img src={successfullyIcon} alt="Ícone de 'tudo certo'" />
                        Cadastro realizado com sucesso!
                    </div>
                </Modal> 
            }

            <main className="content">
                <SignUpContainer>
                    <header>
                        <h1>
                            Auth
                        </h1>

                        <img src={logoImg} alt="JWTAuth image" />
                    </header>
                    
                    <div className="signup-area">
                        <form onSubmit={SignUp}>
                            <h2 className='signup-title'>Cadastre-se</h2>

                            <Input 
                            type="text"
                            name="name"
                            label='Seu nome'
                            placeholder='Digite seu nome'
                            autoComplete='off'
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />

                            <Input 
                            type="email"
                            name='email'
                            label='Email:'
                            placeholder='Digite seu email'
                            autoComplete='off'
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />

                            <Input 
                            type="password"
                            name='password'
                            label='Senha:'
                            placeholder='Digite sua senha'
                            autoComplete='off'
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />

                            <button type='submit' className='submit-button'>
                                Cadastrar
                            </button>

                            <span className="hasnotaccount">
                                Já possui cadastro?
                                <Link className='linktosignup' to="/login">Entre!</Link>
                            </span>
                        </form>

                    </div>

                    <footer>
                        <span>
                            &#169; JWtAuth {new Date().getFullYear()} 
                        </span>
                    </footer>
                </SignUpContainer>

                <AsideContainer>
                    <img 
                    src={logoImg} 
                    alt="JWT Authentication Logo" 
                    className='logo-image'/>
                </AsideContainer>     
            </main>
        </Container>
    )
}