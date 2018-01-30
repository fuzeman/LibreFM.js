import Interface from './base';
import {isDefined} from '../core/helpers';


export default class TrackInterface extends Interface {
    scrobble(items) {
        var params = {};
        var item;
        var i;

        if(!isDefined(items) || !Array.isArray(items) || items.length < 1) {
            throw new Error('Invalid value provided for the "items" parameter');
        }

        if(items.length > 50) {
            throw new Error('Exceeded scrobble batch limit, only 50 scrobbles can be sent in a single batch');
        }

        // Build parameters
        for(i = 0; i < items.length; ++i) {
            item = items[i];

            // Ensure required parameters have been defined
            if(!isDefined(item.track)) {
                throw new Error('Missing required "track" parameter in item #' + i);
            }

            if(!isDefined(item.artist)) {
                throw new Error('Missing required "artist" parameter in item #' + i);
            }

            if(!isDefined(item.timestamp)) {
                throw new Error('Missing required "timestamp" parameter in item #' + i);
            }

            // Add parameters for each item property
            Object.keys(item).forEach((key) => {
                if(!isDefined(item[key])) {
                    return;
                }

                params[key + '[' + i + ']'] = item[key];
            });
        }

        // Send request
        return this.http.post('track.scrobble', {
            params: params,

            authenticated: true
        }).then(function(body) {
            if(isDefined(body) && isDefined(body.scrobbles)) {
                return body.scrobbles;
            }

            return null;
        });
    }

    updateNowPlaying(item) {
        if(!isDefined(item)) {
            throw new Error('Invalid value provided for the "item" parameter');
        }

        if(!isDefined(item.track)) {
            throw new Error('Invalid value provided for the "track" property in the "item" object');
        }

        if(!isDefined(item.artist)) {
            throw new Error('Invalid value provided for the "artist" property in the "item" object');
        }

        // Send request
        return this.http.post('track.updateNowPlaying', {
            params: item,

            authenticated: true
        }).then(function(body) {
            if(isDefined(body) && isDefined(body.nowplaying)) {
                return body.nowplaying;
            }

            return null;
        });
    }

    love(track, artist) {
        if(!isDefined(track)) {
            throw new Error('Invalid value provided for the "track" parameter');
        }

        if(!isDefined(artist)) {
            throw new Error('Invalid value provided for the "artist" parameter');
        }

        throw new Error('Not Implemented');
    }

    unlove(track, artist) {
        if(!isDefined(track)) {
            throw new Error('Invalid value provided for the "track" parameter');
        }

        if(!isDefined(artist)) {
            throw new Error('Invalid value provided for the "artist" parameter');
        }

        throw new Error('Not Implemented');
    }
}
