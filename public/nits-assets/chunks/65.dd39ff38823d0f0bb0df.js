(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./resources/admin/components/Elements/Spinners/_nits_spinner.js":
/*!***********************************************************************!*\
  !*** ./resources/admin/components/Elements/Spinners/_nits_spinner.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "nits-spinners",
  props: {
    loading: Boolean,
    height: Number,
    width: Number,
    color: String,
    design: String
  },
  render: function render(createElement) {
    return createElement('div', [createElement(this.design, {
      attrs: {
        loading: this.loading,
        height: this.height,
        width: this.width,
        color: this.color
      }
    })]);
  }
});

/***/ })

}]);