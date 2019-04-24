(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
  name: "documentation-portlets-samples",
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
      }],
      actions: [{
        icons: 'la-close'
      }, {
        icons: 'la-refresh'
      }, {
        icons: 'la-angle-down'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=template&id=8db62b2a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=template&id=8db62b2a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
          title: "Portlets",
          icon: "la-home",
          heading: "Base Portlets",
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
              _c("portlet-type-4", {
                attrs: {
                  title: "Basic Portlet",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c(
                "nits-portlet",
                {
                  attrs: {
                    title: "Hello World",
                    subTitle: "Testing Description area <code>Test</code>",
                    headIcon: "flaticon-multimedia",
                    headSubTitle: "portlet sub title",
                    footer: "",
                    headActions: _vm.actions,
                    actionType: "toolbar-background",
                    creative: "",
                    headerLine: "",
                    creativeColor: "info",
                    headSolidBg: "success"
                  }
                },
                [
                  _c("p", { attrs: { slot: "content" }, slot: "content" }, [
                    _vm._v(
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                    )
                  ])
                ]
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
              _c("portlet-type-5", {
                attrs: {
                  title: "Icon Title",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("portlet-type-6", {
                attrs: {
                  title: "Rounded Style",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("portlet-type-7", {
                attrs: {
                  title: "Portlet Footer",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(2)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("portlet-type-8", {
                attrs: {
                  title: "Non-shadow Style",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(3)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("portlet-type-9", {
                attrs: {
                  title: "\tScrollable Content",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.\n\t\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.\n\t\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.\n\t\t\t\t\t\t\t\t\t"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(4)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("portlet-type-10", {
                attrs: {
                  title: "Portlet Action Icons",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(5)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("portlet-type-11", {
                attrs: {
                  title: "Portlet Action Icons",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(6)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("portlet-type-12", {
                attrs: {
                  title: "Dark Skin",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(7)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("portlet-type-13", {
                attrs: {
                  title: "Solid Background Dark Skin",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(8)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("portlet-type-14", {
                attrs: {
                  title: "Bordered Style",
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(9)
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-5")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-6")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-7")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-8")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-9")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-10")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-11")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-12")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-13")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-6" }, [
      _c("div", [
        _vm._v(" We need use component name "),
        _c("code", [_vm._v("portlet-type-14")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/admin/apps/Documentations/Components/Portlets/Samples.vue":
/*!*****************************************************************************!*\
  !*** ./resources/admin/apps/Documentations/Components/Portlets/Samples.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Samples_vue_vue_type_template_id_8db62b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Samples.vue?vue&type=template&id=8db62b2a&scoped=true& */ "./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=template&id=8db62b2a&scoped=true&");
/* harmony import */ var _Samples_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Samples.vue?vue&type=script&lang=js& */ "./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Samples_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Samples_vue_vue_type_template_id_8db62b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Samples_vue_vue_type_template_id_8db62b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8db62b2a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/apps/Documentations/Components/Portlets/Samples.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Samples_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Samples.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Samples_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=template&id=8db62b2a&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=template&id=8db62b2a&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Samples_vue_vue_type_template_id_8db62b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Samples.vue?vue&type=template&id=8db62b2a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/apps/Documentations/Components/Portlets/Samples.vue?vue&type=template&id=8db62b2a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Samples_vue_vue_type_template_id_8db62b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Samples_vue_vue_type_template_id_8db62b2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);