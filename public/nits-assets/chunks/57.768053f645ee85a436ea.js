(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "login",
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=template&id=4964d332&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=template&id=4964d332&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "m-grid m-grid--hor m-grid--root m-page" }, [
    _c(
      "div",
      {
        staticClass:
          "m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-1",
        staticStyle: {
          "background-image": "url(/nits-assets/images/bg-2.jpg)"
        },
        attrs: { id: "m_login" }
      },
      [
        _c(
          "div",
          { staticClass: "m-grid__item m-grid__item--fluid m-login__wrapper" },
          [
            _c("div", { staticClass: "m-login__container" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "m-login__signin" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "m-login__form m-form",
                    attrs: { action: "" }
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-login__form-action" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn m-login__btn--primary",
                          attrs: { id: "m_login_signin_submit" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.login($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                    Sign In\n                                "
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _vm._m(7)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-login__logo" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("img", { attrs: { src: "/nits-assets/images/logo.png" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-login__head" }, [
      _c("h3", { staticClass: "m-login__title" }, [
        _vm._v(
          "\n                                Sign In To Admin\n                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group m-form__group" }, [
      _c("input", {
        staticClass: "form-control m-input",
        attrs: {
          type: "text",
          placeholder: "Email",
          name: "email",
          autocomplete: "off"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group m-form__group" }, [
      _c("input", {
        staticClass: "form-control m-input m-login__form-input--last",
        attrs: { type: "password", placeholder: "Password", name: "password" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row m-login__form-sub" }, [
      _c("div", { staticClass: "col m--align-left m-login__form-left" }, [
        _c("label", { staticClass: "m-checkbox  m-checkbox--light" }, [
          _c("input", { attrs: { type: "checkbox", name: "remember" } }),
          _vm._v(
            "\n                                        Remember me\n                                        "
          ),
          _c("span")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col m--align-right m-login__form-right" }, [
        _c(
          "a",
          {
            staticClass: "m-link",
            attrs: { href: "javascript:;", id: "m_login_forget_password" }
          },
          [
            _vm._v(
              "\n                                        Forget Password ?n\n                                    "
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-login__signup" }, [
      _c("div", { staticClass: "m-login__head" }, [
        _c("h3", { staticClass: "m-login__title" }, [
          _vm._v(
            "\n                                Sign Up\n                            "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "m-login__desc" }, [
          _vm._v(
            "\n                                Enter your details to create your account:\n                            "
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "form",
        { staticClass: "m-login__form m-form", attrs: { action: "" } },
        [
          _c("div", { staticClass: "form-group m-form__group" }, [
            _c("input", {
              staticClass: "form-control m-input",
              attrs: { type: "text", placeholder: "Fullname", name: "fullname" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group m-form__group" }, [
            _c("input", {
              staticClass: "form-control m-input",
              attrs: {
                type: "text",
                placeholder: "Email",
                name: "email",
                autocomplete: "off"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group m-form__group" }, [
            _c("input", {
              staticClass: "form-control m-input",
              attrs: {
                type: "password",
                placeholder: "Password",
                name: "password"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group m-form__group" }, [
            _c("input", {
              staticClass: "form-control m-input m-login__form-input--last",
              attrs: {
                type: "password",
                placeholder: "Confirm Password",
                name: "rpassword"
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row form-group m-form__group m-login__form-sub" },
            [
              _c("div", { staticClass: "col m--align-left" }, [
                _c("label", { staticClass: "m-checkbox m-checkbox--light" }, [
                  _c("input", { attrs: { type: "checkbox", name: "agree" } }),
                  _vm._v(
                    "\n                                        I Agree the\n                                        "
                  ),
                  _c(
                    "a",
                    {
                      staticClass: "m-link m-link--focus",
                      attrs: { href: "#" }
                    },
                    [
                      _vm._v(
                        "\n                                            terms and conditions\n                                        "
                      )
                    ]
                  ),
                  _vm._v(
                    "\n                                        .\n                                        "
                  ),
                  _c("span")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "m-form__help" })
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "m-login__form-action" }, [
            _c(
              "button",
              {
                staticClass:
                  "btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary",
                attrs: { id: "m_login_signup_submit" }
              },
              [
                _vm._v(
                  "\n                                    Sign Up\n                                "
                )
              ]
            ),
            _vm._v(
              "\n                                  \n                                "
            ),
            _c(
              "button",
              {
                staticClass:
                  "btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn",
                attrs: { id: "m_login_signup_cancel" }
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-login__forget-password" }, [
      _c("div", { staticClass: "m-login__head" }, [
        _c("h3", { staticClass: "m-login__title" }, [
          _vm._v(
            "\n                                Forgotten Password ?\n                            "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "m-login__desc" }, [
          _vm._v(
            "\n                                Enter your email to reset your password:\n                            "
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "form",
        { staticClass: "m-login__form m-form", attrs: { action: "" } },
        [
          _c("div", { staticClass: "form-group m-form__group" }, [
            _c("input", {
              staticClass: "form-control m-input",
              attrs: {
                type: "text",
                placeholder: "Email",
                name: "email",
                id: "m_email",
                autocomplete: "off"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "m-login__form-action" }, [
            _c(
              "button",
              {
                staticClass:
                  "btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary",
                attrs: { id: "m_login_forget_password_submit" }
              },
              [
                _vm._v(
                  "\n                                    Request\n                                "
                )
              ]
            ),
            _vm._v(
              "\n                                  \n                                "
            ),
            _c(
              "button",
              {
                staticClass:
                  "btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn",
                attrs: { id: "m_login_forget_password_cancel" }
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-login__account" }, [
      _c("span", { staticClass: "m-login__account-msg" }, [
        _vm._v("\n\t\t\t\t\t\t\t\tDon't have an account yet ?\n\t\t\t\t\t\t\t")
      ]),
      _vm._v("\n                          \n                        "),
      _c(
        "a",
        {
          staticClass: "m-link m-link--light m-login__account-link",
          attrs: { href: "javascript:;", id: "m_login_signup" }
        },
        [
          _vm._v(
            "\n                            Sign Up\n                        "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue":
/*!***********************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4964d332_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4964d332&scoped=true& */ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=template&id=4964d332&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4964d332_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_4964d332_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4964d332",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=template&id=4964d332&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=template&id=4964d332&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4964d332_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=4964d332&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Pages/Login.vue?vue&type=template&id=4964d332&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4964d332_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4964d332_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);