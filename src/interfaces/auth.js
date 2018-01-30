import QueryString from 'querystring';

import Interface from './base';
import {isDefined} from '../core/helpers';


export default class AuthInterface extends Interface {
    getAuthorizeUrl(options) {
        var params = {};

        options = isDefined(options) ? options : {};

        // Set parameters
        params['api_key'] = this._client.key;

        if(isDefined(options.callbackUrl)) {
            params['cb'] = options.callbackUrl;
        }

        if(isDefined(options.token)) {
            params['token'] = options.token;
        }

        // Build URL
        return 'https://libre.fm/api/auth/?' + QueryString.encode(params);
    }

    getMobileSession(username, password) {
        if(!isDefined(username)) {
            throw new Error('Invalid value provided for the "username" parameter');
        }

        if(!isDefined(password)) {
            throw new Error('Invalid value provided for the "password" parameter');
        }

        return this.http.get('auth.getMobileSession', {
            params: {
                username: username,
                password: password
            },

            signed: true
        }).then(function(body) {
            if(isDefined(body) && isDefined(body.session)) {
                return body.session;
            }

            return null;
        });
    }

    getSession(token) {
        if(!isDefined(token)) {
            throw new Error('Invalid value provided for the "token" parameter');
        }

        return this.http.get('auth.getSession', {
            params: {
                token: token
            },

            signed: true
        }).then(function(body) {
            if(isDefined(body) && isDefined(body.session)) {
                return body.session;
            }

            return null;
        });
    }

    getToken() {
        return this.http.get('auth.getToken', {
            signed: true
        }).then(function(body) {
            if(isDefined(body) && isDefined(body.token)) {
                return body.token;
            }

            return null;
        });
    }
}
