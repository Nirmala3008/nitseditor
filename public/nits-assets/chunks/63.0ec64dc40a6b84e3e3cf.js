(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Forms/_nits_file_input.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Forms/_nits_file_input.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nits-file-input',
  props: {
    label: String,
    value: String
  },
  render: function render(createElement) {
    var _this = this;

    return createElement('div', {
      "class": 'form-group m-form__group'
    }, [createElement('label', this.label), createElement('div'), createElement('div', {
      "class": 'custom-file'
    }, [createElement('input', {
      "class": 'custom-file-input',
      attrs: {
        type: 'file',
        value: this.value
      },
      domProps: {
        value: self.value
      },
      on: {
        input: function input(event) {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);

          reader.onload = function () {
            var docs = {
              name: event.target.files[0].name,
              size: event.target.files[0].size,
              lastModifiedDate: event.target.files[0].lastModifiedDate,
              base64: reader.result
            };

            _this.$emit('input', docs);
          };
        }
      }
    }), createElement('label', {
      "class": 'custom-file-label'
    }, 'Choose File')])]);
  }
});

/***/ })

}]);