(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "portlet-type-form",
  data: function data() {
    return {
      options: [{
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
      email: ''
    };
  },
  watch: {
    email: function email(val) {
      console.log(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=template&id=29bbf06a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=template&id=29bbf06a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
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
                  label: "Email Address",
                  type: "email",
                  hint: "We'll never share your email with anyone else.",
                  placeholder: "Enter email"
                }
              }),
              _vm._v(" "),
              _c("nits-input", {
                attrs: {
                  label: "Password",
                  type: "password",
                  placeholder: "Enter password"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group m-form__group" },
                [
                  _c("static-type-1", {
                    attrs: { label: "Static:", message: "email@example.com" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("nits-select", {
                attrs: { label: "Example select", options: _vm.options }
              }),
              _vm._v(" "),
              _c("nits-select", {
                attrs: {
                  label: "Example Multiple select",
                  options: _vm.options,
                  multiple: ""
                }
              }),
              _vm._v(" "),
              _c("nits-textarea", {
                attrs: { label: "Example textarea", rows: 3 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "m-portlet__foot m-portlet__foot--fit" }, [
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
                    "\n                        Submit\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-secondary", attrs: { type: "reset" } },
                [
                  _vm._v(
                    "\n                        Cancel\n                    "
                  )
                ]
              )
            ])
          ])
        ]
      )
    ])
  ])
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
              "\n                        Base Form Controls\n                    "
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
              "\n                        The example form below demonstrates common HTML form elements that receive updated styles from Bootstrap with additional classes.\n                    "
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue":
/*!************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portlet_type_form_vue_vue_type_template_id_29bbf06a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_portlet-type-form.vue?vue&type=template&id=29bbf06a&scoped=true& */ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=template&id=29bbf06a&scoped=true&");
/* harmony import */ var _portlet_type_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_portlet-type-form.vue?vue&type=script&lang=js& */ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _portlet_type_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _portlet_type_form_vue_vue_type_template_id_29bbf06a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _portlet_type_form_vue_vue_type_template_id_29bbf06a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29bbf06a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portlet_type_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./_portlet-type-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portlet_type_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=template&id=29bbf06a&scoped=true&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=template&id=29bbf06a&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_portlet_type_form_vue_vue_type_template_id_29bbf06a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./_portlet-type-form.vue?vue&type=template&id=29bbf06a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Portlets/_portlet-type-form.vue?vue&type=template&id=29bbf06a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_portlet_type_form_vue_vue_type_template_id_29bbf06a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_portlet_type_form_vue_vue_type_template_id_29bbf06a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);