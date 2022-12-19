import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { SignUpPage } from './pages/SignUpPage';

export const RoutesPath = () => {

    return(
        <Router>
            <Routes>
                <Route 
                path="/"
                element={<ProfilePage />}
                />

                <Route 
                path="/login"
                element={<LoginPage />}
                />

                <Route 
                path="/signup"
                element={<SignUpPage />}
                />
            </Routes>
        </Router>
    )
};