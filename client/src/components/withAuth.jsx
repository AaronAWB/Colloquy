import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthMethods } from '@Components/index';

export default function withAuth(AuthComponent) {

	const auth = new AuthMethods();

	function AuthWrapped() {

		const [confirm, setConfirm] = useState(null);
		const [loaded, setLoaded] = useState(false);

    	const navigate = useNavigate()

    	useEffect(() => {
      		if (!auth.loggedIn()) {
          		navigate('/login');
      		} else {
          		try {
					const confirm = auth.getConfirm();
					console.log("confirmation is:", confirm);
					setConfirm(confirm);
					setLoaded(true);
        	} catch (error) {
				console.log(`UseEffect error: ${error}`);
				auth.logout();
				navigate('/login');
				}
     		}
    	}, []);

    if (loaded === true) {
        if (confirm) {
            console.log("confirmed!");
            return (
            	<AuthComponent confirm={confirm} />
            );
        } else {
            console.log("not confirmed!");
            return null;
        }
    } else {
        return null;
    }
  }

  	return AuthWrapped;
}
