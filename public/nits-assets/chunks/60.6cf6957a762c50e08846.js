(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

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

/***/ "./resources/admin/components/Elements/Forms/_nits_input.js":
/*!******************************************************************!*\
  !*** ./resources/admin/components/Elements/Forms/_nits_input.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nits_form_class_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nits_form_class_mixins */ "./resources/admin/components/Elements/Forms/_nits_form_class_mixins.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "nits-input",
  mixins: [_nits_form_class_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    label: String,
    hint: String,
    error: String,
    type: String,
    placeholder: String,
    addonType: String,
    addon: Object,
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
    }, this.error) : ''; //Addons for text, icons and internal-icons

    var leftAddon = '';
    var rightAddon = '';

    switch (this.addonType) {
      case 'left':
        leftAddon = createElement('div', {
          "class": 'input-group-prepend'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, this.addon.leftAddon)]);
        break;

      case 'right':
        rightAddon = createElement('div', {
          "class": 'input-group-append'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, this.addon.rightAddon)]);
        break;

      case 'joint':
        leftAddon = createElement('div', {
          "class": 'input-group-prepend'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, this.addon.leftAddon), createElement('span', {
          "class": 'input-group-text'
        }, this.addon.rightAddon)]);
        break;

      case 'left-right':
        leftAddon = createElement('div', {
          "class": 'input-group-prepend'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, this.addon.leftAddon)]);
        rightAddon = createElement('div', {
          "class": 'input-group-append'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, this.addon.rightAddon)]);
        break;

      case 'left-icon':
        leftAddon = createElement('div', {
          "class": 'input-group-prepend'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, [createElement('i', {
          "class": 'la ' + this.addon.leftAddon
        })])]);
        break;

      case 'right-icon':
        rightAddon = createElement('div', {
          "class": 'input-group-append'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, [createElement('i', {
          "class": 'la ' + this.addon.rightAddon
        })])]);
        break;

      case 'joint-icon':
        leftAddon = createElement('div', {
          "class": 'input-group-prepend'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, [createElement('i', {
          "class": 'la ' + this.addon.leftAddon
        })]), createElement('span', {
          "class": 'input-group-text'
        }, [createElement('i', {
          "class": 'la ' + this.addon.rightAddon
        })])]);
        break;

      case 'left-right-icon':
        leftAddon = createElement('div', {
          "class": 'input-group-prepend'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, [createElement('i', {
          "class": 'la ' + this.addon.leftAddon
        })])]);
        rightAddon = createElement('div', {
          "class": 'input-group-append'
        }, [createElement('span', {
          "class": 'input-group-text'
        }, [createElement('i', {
          "class": 'la ' + this.addon.rightAddon
        })])]);
        break;

      default:
        break;
    } //Final render


    return createElement('div', {
      "class": this.formClasses()
    }, [createElement('label', {
      "class": this.labelClasses()
    }, this.label), createElement('div', {
      "class": this.inputClasses()
    }, [leftAddon, createElement('input', {
      "class": 'form-control ' + this.inputSizes() + ' m-input ' + this.inputStyles(),
      attrs: {
        type: this.type,
        placeholder: this.placeholder,
        disabled: this.isDisabled(),
        value: this.value
      },
      on: {
        input: function input(event) {
          _this.$emit('input', event.target.value);
        }
      }
    }), rightAddon, this.inputStyle != 'pill' ? helpText : '', this.inputStyle != 'pill' ? lineBreak : '', this.inputStyle != 'pill' ? errorText : '']), this.inputStyle === 'pill' ? helpText : '', this.inputStyle === 'pill' ? lineBreak : '', this.inputStyle === 'pill' ? errorText : '']);
  }
});

/***/ })

}]);