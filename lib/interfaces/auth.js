"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _querystring = _interopRequireDefault(require("querystring"));

var _base = _interopRequireDefault(require("./base"));

var _helpers = require("../core/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthInterface =
/*#__PURE__*/
function (_Interface) {
  _inherits(AuthInterface, _Interface);

  function AuthInterface() {
    _classCallCheck(this, AuthInterface);

    return _possibleConstructorReturn(this, (AuthInterface.__proto__ || Object.getPrototypeOf(AuthInterface)).apply(this, arguments));
  }

  _createClass(AuthInterface, [{
    key: "getAuthorizeUrl",
    value: function getAuthorizeUrl(options) {
      var params = {};
      options = (0, _helpers.isDefined)(options) ? options : {}; // Set parameters

      params['api_key'] = this._client.key;

      if ((0, _helpers.isDefined)(options.callbackUrl)) {
        params['cb'] = options.callbackUrl;
      }

      if ((0, _helpers.isDefined)(options.token)) {
        params['token'] = options.token;
      } // Build URL


      return 'https://libre.fm/api/auth/?' + _querystring.default.encode(params);
    }
  }, {
    key: "getMobileSession",
    value: function getMobileSession(username, password) {
      if (!(0, _helpers.isDefined)(username)) {
        throw new Error('Invalid value provided for the "username" parameter');
      }

      if (!(0, _helpers.isDefined)(password)) {
        throw new Error('Invalid value provided for the "password" parameter');
      }

      return this.http.get('auth.getMobileSession', {
        params: {
          username: username,
          password: password
        },
        signed: true
      }).then(function (body) {
        if ((0, _helpers.isDefined)(body) && (0, _helpers.isDefined)(body.session)) {
          return body.session;
        }

        return null;
      });
    }
  }, {
    key: "getSession",
    value: function getSession(token) {
      if (!(0, _helpers.isDefined)(token)) {
        throw new Error('Invalid value provided for the "token" parameter');
      }

      return this.http.get('auth.getSession', {
        params: {
          token: token
        },
        signed: true
      }).then(function (body) {
        if ((0, _helpers.isDefined)(body) && (0, _helpers.isDefined)(body.session)) {
          return body.session;
        }

        return null;
      });
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return this.http.get('auth.getToken', {
        signed: true
      }).then(function (body) {
        if ((0, _helpers.isDefined)(body) && (0, _helpers.isDefined)(body.token)) {
          return body.token;
        }

        return null;
      });
    }
  }]);

  return AuthInterface;
}(_base.default);

exports.default = AuthInterface;
module.exports = exports["default"];
//# sourceMappingURL=auth.js.map
