(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./resources/admin/Models/_api.js":
/*!****************************************!*\
  !*** ./resources/admin/Models/_api.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_config.js */ "./resources/admin/Models/_config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "get",

    /**
     * Send GET Request
     * @param  {string} url
     * @return {Promise}
     */
    value: function get(url) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
        headers: Object(_config_js__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
      });
    }
    /**
     * Send FIND Request
     * @param  {string} url
     * @return {Promise}
     */

  }, {
    key: "find",
    value: function find(url) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
        headers: Object(_config_js__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
      });
    }
    /**
     * Send POST Request
     * @param  {string} url
     * @param  {object} payload Data object to send
     * @return {Promise}
     */

  }, {
    key: "create",
    value: function create(url, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, payload, {
        headers: Object(_config_js__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
      });
    }
    /**
     * Send PATCH Request
     * @param  {string} url
     * @param  {object} payload Data Object to send
     * @return {Promise}
     */

  }, {
    key: "update",
    value: function update(url, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(url, payload, {
        headers: Object(_config_js__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
      });
    }
    /**
     * Send DELETE Request
     * @param  {string} url
     * @return {Promise}
     */

  }, {
    key: "delete",
    value: function _delete(url) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"](url, {
        headers: Object(_config_js__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/admin/Models/_config.js":
/*!*******************************************!*\
  !*** ./resources/admin/Models/_config.js ***!
  \*******************************************/
/*! exports provided: getHeader, clientId, clientSecret, appUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientId", function() { return clientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientSecret", function() { return clientSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appUrl", function() { return appUrl; });
var getHeader = function getHeader() {
  var tokenData = JSON.parse(window.localStorage.getItem('authUser'));
  var headers = {
    'Accept': 'application/json',
    'Authorization': tokenData ? 'Bearer ' + tokenData.access_token : null
  };
  return headers;
};
var clientId = Object({"MIX_PUSHER_APP_KEY":"","MIX_PUSHER_APP_CLUSTER":"mt1","NODE_ENV":"development"}).CLIENT_ID;
var clientSecret = Object({"MIX_PUSHER_APP_KEY":"","MIX_PUSHER_APP_CLUSTER":"mt1","NODE_ENV":"development"}).CLIENT_SECRET;
var appUrl = Object({"MIX_PUSHER_APP_KEY":"","MIX_PUSHER_APP_CLUSTER":"mt1","NODE_ENV":"development"}).APP_URL;

/***/ }),

/***/ "./resources/admin/components/Elements/Portlets/_nits_form_portlet.js":
/*!****************************************************************************!*\
  !*** ./resources/admin/components/Elements/Portlets/_nits_form_portlet.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Models_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Models/_api */ "./resources/admin/Models/_api.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nits-form-portlet',
  data: function data() {
    return {
      alert: false,
      statusCode: '',
      message: '',
      form: {},
      error: {},
      loading: false
    };
  },
  props: {
    title: String,
    info: String,
    headIcon: String,
    headSubTitle: String,
    nonShadow: Boolean,
    skins: String,
    bordered: Boolean,
    rounded: Boolean,
    headerLine: Boolean,
    creativeColor: String,
    headSolidBg: String,
    formElements: Array,
    apiUrl: String,
    backUrl: String,
    action: String
  },
  created: function created() {
    if (this.action === 'update') {
      var formValue = new Set(this.formElements);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = formValue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key_value = _step.value;

          if (typeof key_value.attrs.value != 'undefined') {
            this.form[key_value.field_name] = key_value.attrs.value;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  },
  computed: {
    computedFormElements: function computedFormElements() {
      return this.formElements.length ? JSON.parse(JSON.stringify(this.formElements)) : [];
    }
  },
  methods: {
    getClasses: function getClasses() {
      var portletClass = this.nonShadow ? 'm-portlet m-portlet--unair ' : 'm-portlet ';
      portletClass = this.creativeColor ? portletClass + ' m-portlet--creative m-portlet--first ' : portletClass;
      portletClass = this.bordered ? portletClass + ' m-portlet--bordered ' : portletClass;
      portletClass = this.rounded ? portletClass + ' m-portlet--rounded ' : portletClass;
      portletClass = this.headerLine ? portletClass : portletClass + ' m-portlet--bordered-semi ';
      portletClass = this.skins ? portletClass += 'm-portlet--skin-dark m--bg-' + this.skins + ' ' : portletClass;
      portletClass = this.headSolidBg ? portletClass += ' m-portlet--' + this.headSolidBg + ' m-portlet--head-solid-bg ' : portletClass;
      return portletClass;
    },
    submitForm: function submitForm() {
      var _this = this;

      this.error = {};
      this.loading = true;
      if (this.action === 'create') new _Models_api__WEBPACK_IMPORTED_MODULE_0__["default"]().create(this.apiUrl, this.form).then(function (response) {
        _this.loading = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Holla!", "Saved successfully", "success").then(function (a) {
          if (a) {
            _this.$router.push({
              name: _this.backUrl
            });
          }
        });
      })["catch"](function (error) {
        _this.error = _this.errorMessages(error);
        _this.loading = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", _this.error.message, "error");
      });else if (this.action === 'update') new _Models_api__WEBPACK_IMPORTED_MODULE_0__["default"]().update(this.apiUrl, this.form).then(function (response) {
        _this.loading = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Holla!", "Saved successfully", "success").then(function (a) {
          if (a) {
            _this.$router.push({
              name: _this.backUrl
            });
          }
        });
      })["catch"](function (error) {
        _this.error = _this.errorMessages(error);
        _this.loading = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", _this.error.message, "error");
      });
    },
    errorMessages: function errorMessages(error) {
      var errorMessage = {
        message: ''
      };

      switch (error.response.status) {
        case 403:
          errorMessage.message = error.response.data.message;
          break;

        case 405:
          errorMessage.message = 'Method Not Allowed check your api';
          break;

        case 404:
          errorMessage.message = 'API url not found';
          break;

        case 422:
          errorMessage.message = error.response.data.message;
          errorMessage.errors = error.response.data.errors;
          break;

        case 500:
          errorMessage.message = 'Server Error';
          break;

        default:
          break;
      }

      return errorMessage;
    }
  },
  render: function render(createElement) {
    var _this2 = this;

    var element = createElement('h3', {
      "class": 'm-portlet__head-text'
    }, this.title);

    if (this.headIcon) {
      var creativeElement = '';
      var header = '';

      if (this.creativeColor) {
        //If header sub-title is there.
        element = this.headSubTitle ? createElement('h3', {
          "class": 'm-portlet__head-text'
        }, this.headSubTitle) : element;
        creativeElement = createElement('h2', {
          "class": 'm-portlet__head-label m-portlet__head-label--' + this.creativeColor
        }, [createElement('span', this.title)]);
        header = createElement('span', {
          "class": 'm-portlet__head-icon m--hide'
        }, [createElement('i', {
          "class": this.headIcon
        })]);
      } else {
        //If header sub-title is there.
        element = this.headSubTitle ? createElement('h3', {
          "class": 'm-portlet__head-text'
        }, [this.title, createElement('small', this.headSubTitle)]) : element;
        header = createElement('span', {
          "class": 'm-portlet__head-icon'
        }, [createElement('i', {
          "class": this.headIcon
        })]);
      } //Final header render


      element = createElement('div', {
        "class": 'm-portlet__head-title'
      }, [header, element, creativeElement]);
    } else {
      element = createElement('div', {
        "class": 'm-portlet__head-title'
      }, [element]);
    } //Footer element


    var footerElement = '';

    if (this.loading) {
      footerElement = createElement('div', {
        "class": 'm-portlet__foot m-portlet__foot--fit'
      }, [createElement('div', {
        "class": 'm-form__actions'
      }, [createElement('button', {
        "class": 'btn btn-primary m-btn m-loader m-loader--light m-loader--right',
        on: {
          click: function click(event) {
            event.preventDefault(); //this.submitForm()
          }
        }
      }, 'Submit'), createElement('span', ' '), createElement('router-link', {
        attrs: {
          to: {
            name: this.backUrl
          }
        }
      }, [createElement('button', {
        "class": 'btn btn-secondary'
      }, 'Back')])])]);
    } else {
      footerElement = createElement('div', {
        "class": 'm-portlet__foot m-portlet__foot--fit'
      }, [createElement('div', {
        "class": 'm-form__actions'
      }, [createElement('button', {
        "class": 'btn btn-primary',
        on: {
          click: function click(event) {
            event.preventDefault();

            _this2.submitForm();
          }
        }
      }, 'Submit'), createElement('span', ' '), createElement('router-link', {
        attrs: {
          to: {
            name: this.backUrl
          }
        }
      }, [createElement('button', {
        "class": 'btn btn-secondary'
      }, 'Back')])])]);
    } //Error or Info element..


    var infoElement = '';
    if (!('message' in this.error)) infoElement = createElement('div', {
      "class": 'alert m-alert m-alert--default',
      attrs: {
        role: 'alert'
      }
    }, this.info);else infoElement = createElement('div', {
      "class": 'm-alert m-alert--icon m-alert--icon-solid m-alert--outline alert alert-danger alert-dismissible fade show',
      attrs: {
        role: 'alert'
      }
    }, [createElement('div', {
      "class": 'm-alert__icon'
    }, [createElement('i', {
      "class": 'flaticon-exclamation-1'
    }), createElement('span')]), createElement('div', {
      "class": 'm-alert__text'
    }, [createElement('strong', 'Oops! '), this.error.message])]);
    return createElement('div', {
      "class": this.getClasses()
    }, [createElement('div', {
      "class": 'm-portlet__head'
    }, [createElement('div', {
      "class": 'm-portlet__head-caption'
    }, [element])]), createElement('form', {
      "class": 'm-form m-form--fit m-form--label-align-right'
    }, [createElement('div', {
      "class": 'm-portlet__body'
    }, [createElement('div', {
      "class": 'form-group m-form__group m--margin-top-10'
    }, [infoElement]), this.computedFormElements.map(function (a, index) {
      a.config_elements = JSON.parse(JSON.stringify(_this2.formElements[index])).config_elements;

      if (_this2.error && _this2.error.errors && typeof _this2.error.errors[a.field_name] != 'undefined') {
        a.config_elements.error = _this2.error.errors[a.field_name][0];
        return createElement(a.nitsFormType, {
          attrs: a.config_elements,
          on: {
            input: function input(event) {
              _this2.form[a.field_name] = event;
            }
          }
        });
      } else {
        a.config_elements = JSON.parse(JSON.stringify(_this2.formElements[index])).config_elements;
        return createElement(a.nitsFormType, {
          attrs: a.config_elements,
          on: {
            input: function input(event) {
              _this2.form[a.field_name] = event;
            }
          }
        });
      }
    })]), footerElement])]);
  }
});

/***/ })

}]);