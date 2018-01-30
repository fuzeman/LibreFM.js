import _AuthInterface from './auth';
import _TrackInterface from './track';
import _UserInterface from './user';


export {_AuthInterface as AuthInterface};
export {_TrackInterface as TrackInterface};
export {_UserInterface as UserInterface};

export default {
    auth: _AuthInterface,
    track: _TrackInterface,
    user: _UserInterface
};
