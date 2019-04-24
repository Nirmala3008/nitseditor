(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "general-forms",
  data: function data() {
    return {
      email: 'test@example.com',
      password: '',
      selectedNumber: '2',
      options: [{
        option: 'Select one'
      }, {
        option: '1',
        value: '1'
      }, {
        option: '2',
        value: '2'
      }, {
        option: '3',
        value: '3'
      }, {
        option: '4',
        value: '4'
      }, {
        option: '5',
        value: '5'
      }],
      textarea: '',
      fileInput: '',
      checkboxTest: ['default'],
      formElements: [{
        form: 'nits-input',
        attrs: {
          label: 'Email',
          type: 'email',
          inputStyle: "pill",
          placeholder: "Enter your email",
          formControl: true,
          addonType: "left-right-icon",
          addon: {
            leftAddon: 'la-map-marker',
            rightAddon: 'la-unlock-alt'
          }
        }
      }]
    };
  },
  watch: {
    email: function email() {
      console.log('email console ' + this.email);
    },
    password: function password() {
      console.log('password ' + this.password);
    },
    selectedNumber: function selectedNumber() {
      console.log('from select ' + this.selectedNumber);
    },
    textarea: function textarea() {
      console.log('From text area ' + this.textarea);
    },
    fileInput: function fileInput() {
      console.log(this.fileInput);
    },
    checkboxTest: function checkboxTest() {
      console.log(this.checkboxTest);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=template&id=a67bc416&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=template&id=a67bc416&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
          title: "Forms",
          icon: "la-home",
          heading: "General Forms",
          description: "General Forms Description"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "m-content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-6" }, [_c("portlet-type-form")], 1),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-6" }, [
            _c("div", { staticClass: "m-portlet m-portlet--tab" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "form",
                { staticClass: "m-form m-form--fit m-form--label-align-right" },
                [
                  _c(
                    "div",
                    { staticClass: "m-portlet__body" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("nits-input", {
                        attrs: {
                          label: "Email",
                          type: "email",
                          inputStyle: "pill",
                          placeholder: "Enter your email",
                          formControl: "",
                          addonType: "left-right-icon",
                          addon: {
                            leftAddon: "la-map-marker",
                            rightAddon: "la-unlock-alt"
                          }
                        },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
                        }
                      }),
                      _vm._v(" "),
                      _c("nits-input", {
                        attrs: {
                          label: "Password",
                          type: "password",
                          placeholder: "Enter password",
                          error: "Invalid password"
                        },
                        model: {
                          value: _vm.password,
                          callback: function($$v) {
                            _vm.password = $$v
                          },
                          expression: "password"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group m-form__group" },
                        [
                          _c("static-type-1", {
                            attrs: {
                              label: "Static:",
                              message: "email@example.com"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("nits-select", {
                        attrs: {
                          label: "Example select",
                          options: _vm.options,
                          error: "Invalid Input"
                        },
                        model: {
                          value: _vm.selectedNumber,
                          callback: function($$v) {
                            _vm.selectedNumber = $$v
                          },
                          expression: "selectedNumber"
                        }
                      }),
                      _vm._v(" "),
                      _c("nits-select", {
                        attrs: {
                          label: "Example select",
                          options: _vm.options,
                          multiple: "",
                          error: "Multiple not selected"
                        },
                        model: {
                          value: _vm.selectedNumber,
                          callback: function($$v) {
                            _vm.selectedNumber = $$v
                          },
                          expression: "selectedNumber"
                        }
                      }),
                      _vm._v(" "),
                      _c("nits-textarea", {
                        attrs: {
                          label: "Example textarea",
                          rows: 3,
                          error: "Enter valid text"
                        },
                        model: {
                          value: _vm.textarea,
                          callback: function($$v) {
                            _vm.textarea = $$v
                          },
                          expression: "textarea"
                        }
                      }),
                      _vm._v(" "),
                      _c("nits-file-input", {
                        attrs: { label: "File Browser" },
                        model: {
                          value: _vm.fileInput,
                          callback: function($$v) {
                            _vm.fileInput = $$v
                          },
                          expression: "fileInput"
                        }
                      }),
                      _vm._v(" "),
                      _c("nits-checkbox", {
                        attrs: {
                          label: "Default CheckBox",
                          options: [
                            { label: "Default", value: "default" },
                            { label: "Testing", value: "testing" }
                          ],
                          type: "radio"
                        },
                        model: {
                          value: _vm.checkboxTest,
                          callback: function($$v) {
                            _vm.checkboxTest = $$v
                          },
                          expression: "checkboxTest"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "m-portlet__foot m-portlet__foot--fit" },
                    [
                      _c("div", { staticClass: "m-form__actions" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    Submit\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary",
                            attrs: { type: "reset" }
                          },
                          [
                            _vm._v(
                              "\n                                    Cancel\n                                "
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-6" },
            [
              _c("nits-form-portlet", {
                attrs: {
                  title: "Hello World",
                  info: "Testing Description area <code>Test</code>",
                  headIcon: "flaticon-multimedia",
                  headSubTitle: "form sub title",
                  creative: "",
                  headerLine: "",
                  creativeColor: "info",
                  headSolidBg: "success",
                  apiUrl: "test/benevoto",
                  formElements: _vm.formElements
                }
              })
            ],
            1
          )
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
    return _c("div", { staticClass: "m-portlet__head" }, [
      _c("div", { staticClass: "m-portlet__head-caption" }, [
        _c("div", { staticClass: "m-portlet__head-title" }, [
          _c("span", { staticClass: "m-portlet__head-icon m--hide" }, [
            _c("i", { staticClass: "la la-gear" })
          ]),
          _vm._v(" "),
          _c("h3", { staticClass: "m-portlet__head-text" }, [
            _vm._v(
              "\n                                    Base Form Controls\n                                "
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "form-group m-form__group m--margin-top-10" },
      [
        _c(
          "div",
          {
            staticClass: "alert m-alert m-alert--default",
            attrs: { role: "alert" }
          },
          [
            _vm._v(
              "\n                                    The example form below demonstrates common HTML form elements that receive updated styles from Bootstrap with additional classes.\n                                "
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue":
/*!**************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralForms_vue_vue_type_template_id_a67bc416_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralForms.vue?vue&type=template&id=a67bc416&scoped=true& */ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=template&id=a67bc416&scoped=true&");
/* harmony import */ var _GeneralForms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralForms.vue?vue&type=script&lang=js& */ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneralForms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralForms_vue_vue_type_template_id_a67bc416_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneralForms_vue_vue_type_template_id_a67bc416_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a67bc416",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralForms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=template&id=a67bc416&scoped=true&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=template&id=a67bc416&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForms_vue_vue_type_template_id_a67bc416_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralForms.vue?vue&type=template&id=a67bc416&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/apps/Documentations/Components/Forms/GeneralForms.vue?vue&type=template&id=a67bc416&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForms_vue_vue_type_template_id_a67bc416_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForms_vue_vue_type_template_id_a67bc416_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);