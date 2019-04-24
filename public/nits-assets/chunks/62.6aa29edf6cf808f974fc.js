(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Forms/_nits_checkbox.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Forms/_nits_checkbox.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "nits-checkbox",
  data: function data() {
    return {
      checkbox: []
    };
  },
  props: {
    label: String,
    options: Array,
    value: Array,
    type: String
  },
  methods: {
    checkedCheck: function checkedCheck(value) {
      return this.checkbox.includes(value);
    }
  },
  created: function created() {
    this.checkbox = this.value;
  },
  render: function render(createElement) {
    var _this = this;

    return createElement('div', {
      "class": 'm-form__group form-group'
    }, [createElement('label', this.label), createElement('div', {
      "class": 'm-' + this.type + '-list'
    }, this.options.map(function (a) {
      return createElement('label', {
        "class": 'm-' + _this.type
      }, [createElement('input', {
        attrs: {
          type: _this.type,
          value: a.value,
          checked: _this.checkedCheck(a.value)
        },
        on: {
          input: function input(event) {
            var index = _this.checkbox.indexOf(event.target.value);

            if (index > -1) {
              _this.checkbox.splice(index, 1);
            } else _this.checkbox.push(event.target.value);

            _this.$emit('input', _this.checkbox);
          }
        }
      }), a.label, createElement('span')]);
    }))]);
  }
});

/***/ })

}]);