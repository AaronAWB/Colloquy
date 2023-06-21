import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthMethods, socketDisconnect } from '@Utils/index';

function Header ({ username }) {

    console.log(username)

    const auth = new AuthMethods();
    const navigate = useNavigate();

    const handleLogout = e => {
        e.preventDefault();
        auth.logout();
        socketDisconnect();
        navigate('/login')
        };

    return(
        <>
            <div className='logout-button-container mt-3'>
                <p className='user-id'>
                    Logged in as: <span className='user-id-username'>{username}</span>
                </p>
                <Button className ='logout-button' onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </>
    );
}

export default Header;