import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthMethods } from '@Components/index';

export default function withAuth(AuthComponent) {

	const auth = new AuthMethods();

	function AuthWrapped() {

		const [decodedToken, setDecodedToken] = useState(null);
		const [loaded, setLoaded] = useState(false);

    	const navigate = useNavigate()

    	useEffect(() => {
      		if (!auth.loggedIn()) {
          		navigate('/login');
      		} else {
          		try {
					const decodedData = auth.decode();
					if (decodedData) {
						setDecodedToken(decodedData);
						console.log("Decoded token is:", decodedToken);
						setLoaded(true);
					};
        		} catch (err) {
					auth.logout();
					navigate('/login');
				}
     		}
    	}, []);

		return (
			<AuthComponent token={ decodedToken } loaded={ loaded } />
		)

	}

  	return AuthWrapped;
}
