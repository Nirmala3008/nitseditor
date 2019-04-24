(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "documentation-base-tables",
  data: function data() {
    return {
      tableHeaders: [{
        title: '#',
        key: 'index'
      }, {
        title: 'First Name',
        key: 'first_name'
      }, {
        title: 'Last Name',
        key: 'last_name'
      }, {
        title: 'Username',
        key: 'username'
      }],
      tableContents: [{
        index: 1,
        first_name: 'John',
        last_name: 'Stone',
        username: '@john'
      }, {
        index: 2,
        first_name: 'Lisa',
        last_name: 'Nilson',
        username: '@lisa'
      }, {
        index: 3,
        first_name: 'Larry',
        last_name: 'the Bird',
        username: '@twitter'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=template&id=3557047c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=template&id=3557047c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-subheader", {
        attrs: {
          title: "Tables",
          icon: "la-home",
          heading: "Base Tables",
          description: "Home"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "m-content" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "portlet-type-3",
                {
                  attrs: {
                    title: "Basic tables",
                    description:
                      "Using the most basic table markup, We need use component name <code>nits-table</code> <br/>"
                  }
                },
                [
                  _c("nits-table", {
                    attrs: {
                      slot: "content",
                      contents: _vm.tableContents,
                      headers: _vm.tableHeaders
                    },
                    slot: "content"
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "portlet-type-3",
                {
                  attrs: {
                    title: "Table head with background colors",
                    description:
                      "We need use component name <code>nits-table</code>. Here we use <code>headerType='bg'</code> for background of headers and <code>headerColor='success'</code> for colors<br/>"
                  }
                },
                [
                  _c("nits-table", {
                    attrs: {
                      slot: "content",
                      contents: _vm.tableContents,
                      headers: _vm.tableHeaders,
                      headerType: "bg",
                      headerColor: "success"
                    },
                    slot: "content"
                  })
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "portlet-type-3",
                {
                  attrs: {
                    title: "Table head with separator",
                    description:
                      "We need use component name <code>nits-table</code>. Here we use <code>headerType='separator'</code> for separator of headers and <code>headerColor='primary'</code> for colors<br/>"
                  }
                },
                [
                  _c("nits-table", {
                    attrs: {
                      slot: "content",
                      contents: _vm.tableContents,
                      headers: _vm.tableHeaders,
                      headerType: "separator",
                      headerColor: "primary"
                    },
                    slot: "content"
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "portlet-type-3",
                {
                  attrs: {
                    title: "Table bordered",
                    description:
                      "We need use component name <code>nits-table</code>. We simply pass <code>bordered</code> and <code>borderColor='brand'</code> for border color<br/>"
                  }
                },
                [
                  _c("nits-table", {
                    attrs: {
                      slot: "content",
                      contents: _vm.tableContents,
                      headers: _vm.tableHeaders,
                      bordered: "",
                      borderColor: "brand"
                    },
                    slot: "content"
                  })
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "portlet-type-3",
                {
                  attrs: {
                    title: "Table bordered with head background",
                    description:
                      "We need use component name <code>nits-table</code>. Here we use <code>headerType='bg'</code> for separator of headers and <code>headerColor='primary'</code> for colors. We simply pass <code>bordered</code> and <code>borderColor='danger'</code> for border color<br/>"
                  }
                },
                [
                  _c("nits-table", {
                    attrs: {
                      slot: "content",
                      contents: _vm.tableContents,
                      headers: _vm.tableHeaders,
                      headerType: "bg",
                      headerColor: "primary",
                      bordered: "",
                      borderColor: "danger"
                    },
                    slot: "content"
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "portlet-type-3",
                {
                  attrs: {
                    title: "Hoverable Table",
                    description:
                      "We need use component name <code>nits-table</code>. We simply pass <code>hover</code> to hover rows of table<br/>"
                  }
                },
                [
                  _c("nits-table", {
                    attrs: {
                      slot: "content",
                      contents: _vm.tableContents,
                      headers: _vm.tableHeaders,
                      hover: ""
                    },
                    slot: "content"
                  })
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "portlet-type-3",
                {
                  attrs: {
                    title: "Small table",
                    description:
                      "We need use component name <code>nits-table</code>. Here we use <code>headerType='bg'</code> for separator of headers and <code>headerColor='primary'</code> for colors. We simply pass <code>small</code> for small table<br/>"
                  }
                },
                [
                  _c("nits-table", {
                    attrs: {
                      slot: "content",
                      contents: _vm.tableContents,
                      headers: _vm.tableHeaders,
                      headerType: "bg",
                      headerColor: "brand",
                      small: ""
                    },
                    slot: "content"
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "portlet-type-3",
                {
                  attrs: {
                    title: "Stripped rows table",
                    description:
                      "We need use component name <code>nits-table</code>. We simply pass <code>stripped</code> for stripped rows<br/>"
                  }
                },
                [
                  _c("nits-table", {
                    attrs: {
                      slot: "content",
                      contents: _vm.tableContents,
                      headers: _vm.tableHeaders,
                      stripped: ""
                    },
                    slot: "content"
                  })
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "portlet-type-3",
                {
                  attrs: {
                    title: "Basic bordered table",
                    description:
                      "We need use component name <code>nits-table</code>. We simply pass <code>bordered</code> <br/>"
                  }
                },
                [
                  _c("nits-table", {
                    attrs: {
                      slot: "content",
                      contents: _vm.tableContents,
                      headers: _vm.tableHeaders,
                      bordered: ""
                    },
                    slot: "content"
                  })
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue":
/*!*************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseTables_vue_vue_type_template_id_3557047c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTables.vue?vue&type=template&id=3557047c&scoped=true& */ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=template&id=3557047c&scoped=true&");
/* harmony import */ var _BaseTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseTables.vue?vue&type=script&lang=js& */ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BaseTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseTables_vue_vue_type_template_id_3557047c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BaseTables_vue_vue_type_template_id_3557047c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3557047c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=template&id=3557047c&scoped=true&":
/*!********************************************************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=template&id=3557047c&scoped=true& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTables_vue_vue_type_template_id_3557047c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseTables.vue?vue&type=template&id=3557047c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Tables/BaseTables.vue?vue&type=template&id=3557047c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTables_vue_vue_type_template_id_3557047c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTables_vue_vue_type_template_id_3557047c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);