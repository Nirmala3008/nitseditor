(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/admin/components/Elements/Tables/_nits_table.js":
/*!*******************************************************************!*\
  !*** ./resources/admin/components/Elements/Tables/_nits_table.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "nits-table",
  methods: {
    getClasses: function getClasses() {
      var ele_class = 'table m-table '; //For header background and separator with colors

      switch (this.headerType) {
        case 'bg':
          ele_class += 'm-table--head-bg-' + this.headerColor + ' ';
          break;

        case 'separator':
          ele_class += 'm-table--head-separator-' + this.headerColor + ' ';
          break;

        default:
          break;
      } // For Border and its colors


      if (this.bordered) {
        if (this.borderColor) ele_class += 'table-bordered m-table--border-' + this.borderColor + ' ';else ele_class += 'table-bordered ';
      } //Fro small tables


      if (this.small) ele_class += 'table-sm '; //For stripped tables

      if (this.stripped) ele_class += 'table-striped '; //For hover tables

      if (this.hover) ele_class += 'table-hover ';
      return ele_class;
    }
  },
  props: {
    headers: Array,
    contents: Array,
    headerType: String,
    headerColor: {
      type: String,
      "default": 'brand'
    },
    bordered: Boolean,
    borderColor: String,
    stripped: Boolean,
    small: Boolean,
    hover: Boolean,
    action: Boolean
  },
  created: function created() {
    if (this.action) {
      this.headers.push({
        title: "View",
        key: 'fa-eye'
      });
      this.headers.push({
        title: "Delete",
        key: 'fa-trash-o'
      });
    }
  },
  render: function render(createElement) {
    var _this = this;

    return createElement('div', {
      "class": 'table-responsive'
    }, [createElement('table', {
      "class": this.getClasses()
    }, [createElement('thead', {}, [createElement('tr', this.headers.map(function (a) {
      if (a.title === 'View' || a.title === 'Delete') return createElement('th', {
        "class": 'text-center'
      }, a.title);else return createElement('th', a.title);
    }))]), createElement('tbody', this.contents.map(function (b) {
      return createElement('tr', _this.headers.map(function (c) {
        if (c['title'] === "View" || c['title'] === "Delete") return createElement('td', {
          "class": 'text-center'
        }, [createElement('button', {
          "class": 'btn btn-accent m-btn m-btn--icon m-btn--icon-only m-btn--pill m-btn--air'
        }, [createElement('i', {
          "class": 'fa ' + c['key']
        })])]);else return createElement('td', b[c['key']]);
      }));
    }))])]);
  }
});

/***/ })

}]);