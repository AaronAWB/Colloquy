import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthMethods } from '@Components/index';

export default function withAuth(AuthComponent) {

	const auth = new AuthMethods();

	function AuthWrapped() {

		const [decodedToken, setDecodedToken] = useState(null);
		const [loaded, setLoaded] = useState(false);

    	const navigate = useNavigate();
		
			useEffect(() => {

				if (!auth.loggedIn()) {
					navigate('/login');
				} else {
					setLoaded(true);
					navigate('/')
					// try {
					// 	const decodedData = auth.decode();
					// 	if (decodedData) {
					// 		setDecodedToken(decodedData);
					// 		setLoaded(true);
					// 		navigate('/')
					// 	};
					// } catch (err) {
					// 	auth.logout();
					// 	navigate('/login');
					// }
				}
			}, []);

		return (
			<AuthComponent loaded={ loaded } />
		)
		
	}
  	return AuthWrapped;
}
