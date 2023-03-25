import axios from 'axios'
import decode from 'jwt-decode';


export default class AuthHelperMethods {
    constructor(domain) {
        this.domain = domain
    }

login = (username, password ) => {
return axios.post('/api/login', {username: username, password: password})
    .then (res => {
        this.setToken(res.access_token)
    })
    .catch(error => console.log(error));
}

loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
    }

isTokenExpired = token => {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
        return true;
        } else return false;
    } catch (err) {
        console.log("expired check failed! Line 42: AuthService.js");
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
    
    return axios({url, headers, ...options})
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


