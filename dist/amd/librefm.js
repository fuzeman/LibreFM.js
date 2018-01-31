(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("querystring"), require("whatwg-fetch"), require("crypto-js/enc-hex"), require("crypto-js/md5"), require("lodash-amd/merge"));
	else if(typeof define === 'function' && define.amd)
		define(["querystring", "whatwg-fetch", "crypto-js/enc-hex", "crypto-js/md5", "lodash-amd/merge"], factory);
	else if(typeof exports === 'object')
		exports["librefm"] = factory(require("querystring"), require("whatwg-fetch"), require("crypto-js/enc-hex"), require("crypto-js/md5"), require("lodash-amd/merge"));
	else
		root["librefm"] = factory(root["querystring"], root["whatwg-fetch"], root["crypto-js/enc-hex"], root["crypto-js/md5"], root["lodash-amd/merge"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDefined = isDefined;

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interface =
/*#__PURE__*/
function () {
  function Interface(client) {
    _classCallCheck(this, Interface);

    this._client = (0, _helpers.isDefined)(client) ? client : null;
  }

  _createClass(Interface, [{
    key: "http",
    get: function get() {
      if (!(0, _helpers.isDefined)(this._client)) {
        return null;
      }

      return this._client.http;
    }
  }]);

  return Interface;
}();

exports.default = Interface;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _http = _interopRequireDefault(__webpack_require__(5));

var _interfaces = _interopRequireDefault(__webpack_require__(7));

var _helpers = __webpack_require__(0);

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _encHex = _interopRequireDefault(__webpack_require__(10));

var _md = _interopRequireDefault(__webpack_require__(11));

var _merge = _interopRequireDefault(__webpack_require__(12));

var _querystring = _interopRequireDefault(__webpack_require__(2));

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HttpClient =
/*#__PURE__*/
function () {
  function HttpClient(client, baseUrl) {
    _classCallCheck(this, HttpClient);

    this._client = client;
    this._baseUrl = baseUrl || 'https://libre.fm/2.0/';
  }

  _createClass(HttpClient, [{
    key: "get",
    value: function get(method, options) {
      options = (0, _merge.default)({
        params: {},
        authenticated: false,
        sessionKey: this._client.getSessionKey()
      }, options || {});
      options.signed = (0, _helpers.isDefined)(options.signed) ? options.signed : options.authenticated; // Set request parameters

      options.params['api_key'] = this._client.key;
      options.params['format'] = 'json';
      options.params['method'] = method;

      if (options.authenticated) {
        // Add session key
        if (!(0, _helpers.isDefined)(options.sessionKey)) {
          throw new Error('Missing required "sessionKey" parameter');
        }

        options.params['sk'] = options.sessionKey;
      }

      if (options.signed) {
        // Generate signature
        options.params['api_sig'] = this._generateSignature(options.params);
      } // Send request


      return fetch(this._baseUrl + '?' + _querystring.default.encode(options.params)).then(function (response) {
        // TODO check status code
        return response.json();
      });
    }
  }, {
    key: "post",
    value: function post(method, options) {
      options = (0, _merge.default)({
        params: {},
        authenticated: false,
        sessionKey: this._client.getSessionKey()
      }, options || {});
      options.signed = (0, _helpers.isDefined)(options.signed) ? options.signed : options.authenticated; // Set request parameters

      options.params['api_key'] = this._client.key;
      options.params['format'] = 'json';
      options.params['method'] = method;

      if (options.authenticated) {
        // Add session key
        if (!(0, _helpers.isDefined)(options.sessionKey)) {
          throw new Error('Missing required "sessionKey" parameter');
        }

        options.params['sk'] = options.sessionKey;
      }

      if (options.signed) {
        // Generate signature
        options.params['api_sig'] = this._generateSignature(options.params);
      } // Send request


      return fetch(this._baseUrl, {
        method: 'POST',
        body: _querystring.default.encode(options.params),
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      }).then(function (response) {
        // TODO check status code
        return response.json();
      });
    }
  }, {
    key: "_generateSignature",
    value: function _generateSignature(params) {
      var signature = ''; // Append parameters

      var value;
      Object.keys(params).sort().forEach(function (key) {
        if (key === 'format') {
          return;
        } // Retrieve value


        value = params[key];

        if (typeof value === 'undefined' || value === null) {
          value = '';
        } // Append parameter


        signature += key + value;
      }); // Append client secret

      signature += this._client.secret; // Generate hash

      return (0, _md.default)(signature).toString(_encHex.default);
    }
  }]);

  return HttpClient;
}();

exports.default = HttpClient;
module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _querystring = _interopRequireDefault(__webpack_require__(2));

var _base = _interopRequireDefault(__webpack_require__(1));

var _helpers = __webpack_require__(0);

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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

var _auth = _interopRequireDefault(__webpack_require__(6));

var _track = _interopRequireDefault(__webpack_require__(8));

var _user = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  auth: _auth.default,
  track: _track.default,
  user: _user.default
};
exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(1));

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackInterface =
/*#__PURE__*/
function (_Interface) {
  _inherits(TrackInterface, _Interface);

  function TrackInterface() {
    _classCallCheck(this, TrackInterface);

    return _possibleConstructorReturn(this, (TrackInterface.__proto__ || Object.getPrototypeOf(TrackInterface)).apply(this, arguments));
  }

  _createClass(TrackInterface, [{
    key: "scrobble",
    value: function scrobble(items) {
      var params = {};
      var item;
      var i;

      if (!(0, _helpers.isDefined)(items) || !Array.isArray(items) || items.length < 1) {
        throw new Error('Invalid value provided for the "items" parameter');
      }

      if (items.length > 50) {
        throw new Error('Exceeded scrobble batch limit, only 50 scrobbles can be sent in a single batch');
      } // Build parameters


      for (i = 0; i < items.length; ++i) {
        item = items[i]; // Ensure required parameters have been defined

        if (!(0, _helpers.isDefined)(item.track)) {
          throw new Error('Missing required "track" parameter in item #' + i);
        }

        if (!(0, _helpers.isDefined)(item.artist)) {
          throw new Error('Missing required "artist" parameter in item #' + i);
        }

        if (!(0, _helpers.isDefined)(item.timestamp)) {
          throw new Error('Missing required "timestamp" parameter in item #' + i);
        } // Add parameters for each item property


        Object.keys(item).forEach(function (key) {
          if (!(0, _helpers.isDefined)(item[key])) {
            return;
          }

          params[key + '[' + i + ']'] = item[key];
        });
      } // Send request


      return this.http.post('track.scrobble', {
        params: params,
        authenticated: true
      }).then(function (body) {
        if ((0, _helpers.isDefined)(body) && (0, _helpers.isDefined)(body.scrobbles)) {
          return body.scrobbles;
        }

        return null;
      });
    }
  }, {
    key: "updateNowPlaying",
    value: function updateNowPlaying(item) {
      if (!(0, _helpers.isDefined)(item)) {
        throw new Error('Invalid value provided for the "item" parameter');
      }

      if (!(0, _helpers.isDefined)(item.track)) {
        throw new Error('Invalid value provided for the "track" property in the "item" object');
      }

      if (!(0, _helpers.isDefined)(item.artist)) {
        throw new Error('Invalid value provided for the "artist" property in the "item" object');
      } // Send request


      return this.http.post('track.updateNowPlaying', {
        params: item,
        authenticated: true
      }).then(function (body) {
        if ((0, _helpers.isDefined)(body) && (0, _helpers.isDefined)(body.nowplaying)) {
          return body.nowplaying;
        }

        return null;
      });
    }
  }, {
    key: "love",
    value: function love(track, artist) {
      if (!(0, _helpers.isDefined)(track)) {
        throw new Error('Invalid value provided for the "track" parameter');
      }

      if (!(0, _helpers.isDefined)(artist)) {
        throw new Error('Invalid value provided for the "artist" parameter');
      }

      throw new Error('Not Implemented');
    }
  }, {
    key: "unlove",
    value: function unlove(track, artist) {
      if (!(0, _helpers.isDefined)(track)) {
        throw new Error('Invalid value provided for the "track" parameter');
      }

      if (!(0, _helpers.isDefined)(artist)) {
        throw new Error('Invalid value provided for the "artist" parameter');
      }

      throw new Error('Not Implemented');
    }
  }]);

  return TrackInterface;
}(_base.default);

exports.default = TrackInterface;
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(1));

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInterface =
/*#__PURE__*/
function (_Interface) {
  _inherits(UserInterface, _Interface);

  function UserInterface() {
    _classCallCheck(this, UserInterface);

    return _possibleConstructorReturn(this, (UserInterface.__proto__ || Object.getPrototypeOf(UserInterface)).apply(this, arguments));
  }

  _createClass(UserInterface, [{
    key: "getInfo",
    value: function getInfo(username) {
      if (!(0, _helpers.isDefined)(username)) {
        if (!(0, _helpers.isDefined)(this._client.session) || !(0, _helpers.isDefined)(this._client.session.name)) {
          throw new Error('Invalid value provided for the "username" parameter');
        } // Use the username of the current session


        username = this._client.session.name;
      } // Send request


      return this.http.get('user.getInfo', {
        params: {
          user: username
        }
      }).then(function (body) {
        if ((0, _helpers.isDefined)(body) && (0, _helpers.isDefined)(body.user)) {
          return body.user;
        }

        return null;
      });
    }
  }]);

  return UserInterface;
}(_base.default);

exports.default = UserInterface;
module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});
//# sourceMappingURL=librefm.js.map