import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Container, Content } from './styles';
import logoImg from '../../assets/images/logo.svg';
import leaveIcon from '../../assets/images/leave-icon.svg';

interface RequestMask{
    data:{
        name: string
    }
}

export const ProfilePage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [name, setName] = useState('');

    function logOut(){
        localStorage.removeItem('token');

        window.location.reload();
    }

    async function getInfo(){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        const request: RequestMask = await axios.get('http://localhost:4001/profile', config);

        setName(request.data.name);
    };

    useEffect(() => {
        !token ? navigate('/login') : getInfo();
    }, []);

    return ( token &&

        <Container>

            <Content>
                <header>
                    <div className="logo-wrapper">
                        <h1>Auth</h1>  
                        <img src={logoImg} alt="Logo JWTAuth" />
                    </div>

                    <button onClick={logOut}>
                        Sair
                        <img src={leaveIcon} alt="Uma porta de saída" />
                    </button>
                </header>

                <div className="content">
                    <h2>Olá,</h2>
                    <h2>{name}!</h2>
                    <h2>Você está logado(a).</h2>
                    <h2>Tenha um ótimo dia!</h2>
                </div>
            </Content>

        </Container>
    )
}