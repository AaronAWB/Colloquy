import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthMethods } from '@Components/index';

export default function withAuth(AuthComponent) {

	const auth = new AuthMethods();

	function AuthWrapped() {

		const [decoded_token, setDecoded_Token] = useState(null);
		const [loaded, setLoaded] = useState(false);

    	const navigate = useNavigate()

    	useEffect(() => {
      		if (!auth.loggedIn()) {
          		navigate('/login');
      		} else {
          		try {
					const decoded_data = auth.decode();
					console.log("Token is:", decoded_data);
					setDecoded_Token(decoded_data);
					setLoaded(true);
        	} catch (err) {
				console.log(`AuthWrapped useEffect error: ${err}`);
				auth.logout();
				navigate('/login');
				}
     		}
    	}, []);

		return (
			<AuthComponent token={ decoded_token } loaded={ loaded } />
		)

	}

  	return AuthWrapped;
}
