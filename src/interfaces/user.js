import Interface from './base';
import {isDefined} from '../core/helpers';


export default class UserInterface extends Interface {
    getInfo(username) {
        var authenticated = true;
        var params = {};

        if(isDefined(username)) {
            authenticated = false;
            params['user'] = username;
        }

        // Send request
        return this.http.get('user.getInfo', {
            params: params,

            authenticated: authenticated
        }).then(function(body) {
            if(isDefined(body) && isDefined(body.user)) {
                return body.user;
            }

            return null;
        });
    }
}
