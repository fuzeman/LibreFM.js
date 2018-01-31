"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _http = _interopRequireDefault(require("./core/http"));

var _interfaces = _interopRequireDefault(require("./interfaces"));

var _helpers = require("./core/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Client =
/*#__PURE__*/
function () {
  function Client(key, secret, options) {
    _classCallCheck(this, Client);

    options = (0, _helpers.isDefined)(options) ? options : {};
    this.key = key || null;
    this.secret = secret || null;
    this.session = null;

    if ((0, _helpers.isDefined)(options.session)) {
      this.session = options.session;
    } else if ((0, _helpers.isDefined)(options.sessionKey)) {
      this.session = {
        key: options.sessionKey
      };
    } // Construct http client


    this.http = new _http.default(this); // Construct interfaces

    this._interfaces = this._constructInterfaces();
  }

  _createClass(Client, [{
    key: "getSessionKey",
    value: function getSessionKey() {
      if (!(0, _helpers.isDefined)(this.session) || !(0, _helpers.isDefined)(this.session.key)) {
        return null;
      }

      return this.session.key;
    }
  }, {
    key: "_constructInterfaces",
    value: function _constructInterfaces() {
      var _this = this;

      var result = {};
      Object.keys(_interfaces.default).forEach(function (key) {
        result[key] = new _interfaces.default[key](_this);
      });
      return result;
    }
  }, {
    key: "auth",
    get: function get() {
      return this._interfaces['auth'];
    }
  }, {
    key: "track",
    get: function get() {
      return this._interfaces['track'];
    }
  }, {
    key: "user",
    get: function get() {
      return this._interfaces['user'];
    }
  }]);

  return Client;
}();

exports.Client = Client;
//# sourceMappingURL=index.js.map
