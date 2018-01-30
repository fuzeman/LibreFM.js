import Interface from './base';
import {isDefined} from '../core/helpers';


export default class UserInterface extends Interface {
    getInfo(username) {
        if(!isDefined(username)) {
            if(!isDefined(this._client.session) || !isDefined(this._client.session.name)) {
                throw new Error('Invalid value provided for the "username" parameter');
            }

            // Use the username of the current session
            username = this._client.session.name;
        }

        // Send request
        return this.http.get('user.getInfo', {
            params: {
                user: username
            }
        }).then(function(body) {
            if(isDefined(body) && isDefined(body.user)) {
                return body.user;
            }

            return null;
        });
    }
}
