import { AsideContainer, Container, LoginContainer } from './styles';
import logoImg from '../../assets/images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Input } from '../../components/Input';
import { useEffect, useState } from 'react';

interface ResponseMask{
    data:{
        token: string,
        user:{
            email: string,
            id: number,
            name: string
        }
    }
};

export const LoginPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        token && navigate('/')
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function Login(e: React.FormEvent){
        e.preventDefault();

        try{
            const data = {
                email: email,
                password: password
            };
    
            const request: ResponseMask = await axios.post('http://localhost:4001/login', data);
            localStorage.setItem('token', request.data.token);

            navigate('/')
        }catch(err){
            window.alert('Invalid email or password')
        }

        
    }
    
    return ( !token &&
        <Container>
            <main className="content">
                <LoginContainer>
                    <header>
                        <h1>Auth</h1>
                        <img src={logoImg} alt="JWTAuth image" />
                    </header>
                    
                    <div className="login-area">
                        <form onSubmit={Login}>
                            <h2 className='login-title'>Faça seu login</h2>

                            <Input 
                            type="email"
                            name='email'
                            label='Email:'
                            placeholder='Digite seu email'
                            required
                            autoComplete='off'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />

                            <Input 
                            type="password"
                            name='password'
                            label='Senha:'
                            placeholder='Digite sua senha'
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />

                            <button type='submit' className='submit-button'>
                                Entrar
                            </button>

                            <span className="hasnotaccount">
                                Não possui cadastro?
                                <Link className='linktosignup' to="/signup">Cadastre-se</Link>
                            </span>
                        </form>

                    </div>

                    <footer>
                        <span>
                            &#169; JWtAuth {new Date().getFullYear()} 
                        </span>
                    </footer>
                </LoginContainer>

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