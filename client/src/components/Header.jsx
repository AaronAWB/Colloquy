import { Button } from 'react-bootstrap';

function Header ({ username }) {

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