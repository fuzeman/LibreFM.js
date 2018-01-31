"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AuthInterface", {
  enumerable: true,
  get: function get() {
    return _auth.default;
  }
});
Object.defineProperty(exports, "TrackInterface", {
  enumerable: true,
  get: function get() {
    return _track.default;
  }
});
Object.defineProperty(exports, "UserInterface", {
  enumerable: true,
  get: function get() {
    return _user.default;
  }
});
exports.default = void 0;

var _auth = _interopRequireDefault(require("./auth"));

var _track = _interopRequireDefault(require("./track"));

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  auth: _auth.default,
  track: _track.default,
  user: _user.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map
