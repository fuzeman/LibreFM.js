import HttpClient from './core/http';
import Interfaces from './interfaces';
import {isDefined} from './core/helpers';


export class Client {
    constructor(key, secret, options) {
        options = isDefined(options) ? options : {};

        this.key = key || null;
        this.secret = secret || null;

        this.session = null;

        if(isDefined(options.session)) {
            this.session = options.session;
        } else if(isDefined(options.sessionKey)) {
            this.session = {key: options.sessionKey};
        }

        // Construct http client
        this.http = new HttpClient(this);

        // Construct interfaces
        this._interfaces = this._constructInterfaces();
    }

    get auth() {
        return this._interfaces['auth'];
    }

    get track() {
        return this._interfaces['track'];
    }

    get user() {
        return this._interfaces['user'];
    }

    getSessionKey() {
        if(!isDefined(this.session) || !isDefined(this.session.key)) {
            return null;
        }

        return this.session.key;
    }

    _constructInterfaces() {
        var result = {};

        Object.keys(Interfaces).forEach((key) => {
            result[key] = new Interfaces[key](this);
        });

        return result;
    }
}
