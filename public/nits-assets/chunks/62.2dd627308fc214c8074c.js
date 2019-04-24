(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./resources/admin/components/Elements/Forms/_nits_form_class_mixins.js":
/*!******************************************************************************!*\
  !*** ./resources/admin/components/Elements/Forms/_nits_form_class_mixins.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'nits-form-classes',
  props: {
    formControl: Boolean,
    inputStyle: String,
    inputSize: String,
    disabled: Boolean
  },
  methods: {
    labelClasses: function labelClasses() {
      var labelClass = '';
      labelClass = this.formControl && !this.addonType ? 'col-2 col-form-label' : '';
      return labelClass;
    },
    formClasses: function formClasses() {
      var formClass = '';
      formClass = this.formControl && !this.addonType ? 'form-group m-form__group row' : 'form-group m-form__group';
      return formClass;
    },
    inputClasses: function inputClasses() {
      var inputClass = '';
      inputClass = this.formControl ? 'col-10 ' : '';
      inputClass = this.addonType ? 'input-group m-input-group ' + this.layoutStyles() : inputClass;
      return inputClass;
    },
    layoutStyles: function layoutStyles() {
      return this.inputStyle ? 'm-input-group--' + this.inputStyle : '';
    },
    inputStyles: function inputStyles() {
      var inputClass = '';

      switch (this.inputStyle) {
        case 'air':
          inputClass = 'm-input--air';
          break;

        case 'pill':
          inputClass = 'm-input--air m-input--pill';
          break;

        case 'square':
          inputClass = 'm-input--square';
          break;

        case 'solid':
          inputClass = 'm-input--solid';
          break;

        default:
          break;
      }

      return inputClass;
    },
    inputSizes: function inputSizes() {
      var inputBox = '';

      switch (this.inputSize) {
        case 'large':
          inputBox = 'form-control-lg';
          break;

        case 'small':
          inputBox = 'form-control-sm';
          break;

        default:
          break;
      }

      return inputBox;
    },
    isDisabled: function isDisabled() {
      return this.disabled;
    }
  }
}));

/***/ }),

/***/ "./resources/admin/components/Elements/Forms/_nits_textarea.js":
/*!*********************************************************************!*\
  !*** ./resources/admin/components/Elements/Forms/_nits_textarea.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nits_form_class_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nits_form_class_mixins */ "./resources/admin/components/Elements/Forms/_nits_form_class_mixins.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nits-textarea',
  mixins: [_nits_form_class_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    label: String,
    rows: Number,
    error: String,
    hint: String,
    value: String
  },
  render: function render(createElement) {
    var _this = this;

    //Help action text
    var helpText = this.hint ? createElement('span', {
      "class": 'm-form__help'
    }, this.hint) : '';
    var lineBreak = this.hint ? createElement('br') : ''; //Error Text

    var errorText = this.error ? createElement('span', {
      "class": 'm-form__help m--font-danger'
    }, this.error) : '';
    return createElement('div', {
      "class": this.formClasses()
    }, [createElement('label', {
      "class": this.labelClasses()
    }, this.label), createElement('div', {
      "class": this.inputClasses()
    }, [createElement('textarea', {
      "class": 'form-control m-input ' + this.inputStyles(),
      on: {
        input: function input(event) {
          _this.$emit('input', event.target.value);
        }
      },
      attrs: {
        rows: this.rows,
        value: this.value
      }
    })]), helpText, lineBreak, errorText]);
  }
});

/***/ })

}]);