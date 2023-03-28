import axios from 'axios'
import decode from 'jwt-decode';


export default class AuthHelperMethods {
   
login = async (username, password) => {

    try {
        const res = await axios.post('/api/authenticate', {
        username: username,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        const res_data = res.data
        this.setToken(res_data.access_token);
        console.log(res_data.access_token)
        return true
    } catch (err) {
        console.log(`Authentication error: ${err}`);
        return false
        }
    };

loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
    }

isTokenExpired = token => {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            return true;
        }
        return false;
    } catch (err) {
        console.log(`Token expired: ${err}`);
        return false;
        }
    };

setToken = access_token => {
    if (access_token) {
        localStorage.setItem('access_token', access_token);
    } 
    console.log('Error setting token to local storage.');
    };

getToken = () => {
    return localStorage.getItem('access_token');
    };

logout = () => {
    localStorage.removeItem('access_token');
    };

decode = () => {
    let decoded_token = decode(this.getToken());
        return decoded_token;
    };
    
}


