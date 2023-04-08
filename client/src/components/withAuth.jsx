import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthMethods } from '@Utils/index';

export default function withAuth(AuthComponent) {

	const auth = new AuthMethods();

	function AuthWrapped() {

		const [loaded, setLoaded] = useState(false);

    	const navigate = useNavigate();
		
			useEffect(() => {

				if (!auth.loggedIn()) {
					navigate('/login');
				} else {
					setLoaded(true);
					navigate('/')
				}
			}, []);

		return (
			<AuthComponent loaded={ loaded } />
		)
		
	}
  	return AuthWrapped;
}
