import axios from 'axios'
import decode from 'jwt-decode';


export default class AuthHelperMethods {
   
login = async (username, password) => {

    try {
        const res = await axios.post('/api/authenticate', {
        username: `${username}`,
        password: `${password}`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        console.log(res)
        this.setToken(res.access_token);
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
        console.log(`Failed expiration check: ${err}`);
        return false;
        }
    };

setToken = access_token => {
    localStorage.setItem('access_token', access_token);
    };

getToken = () => {
    return localStorage.getItem('access_token');
    };

logout = () => {
    localStorage.removeItem('access_token');
    };

getConfirm = () => {
    let answer = decode(this.getToken());
        console.log("Recieved answer!");
        return answer;
    };
    
fetch = (url, options) => {

    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
    };
    
    if (this.loggedIn()) {
        headers["Authorization"] = "Bearer " + this.getToken();
    }
    
    return axios.get({url, headers, ...options})
        .then(this._checkStatus)
        .then(res => res.data);
    };

    _checkStatus = res => {
        if (res.status >= 200 && res.status < 300) {
            return response;
        } else {
            const error = new Error(res.statusText);
            error.res = res;
            throw error;
        }
      };
}


