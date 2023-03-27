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
					const confirm_data = auth.getConfirm();
					console.log("Confirmation is:", confirm_data);
					setConfirm(confirm_data);
					setLoaded(true);
        	} catch (err) {
				console.log(`AuthWrapped useEffect error: ${err}`);
				auth.logout();
				navigate('/login');
				}
     		}
    	}, []);

		return (
			<AuthComponent confirm={ confirm } loaded={ loaded } />
		)

	}
	
  	return AuthWrapped;
}
