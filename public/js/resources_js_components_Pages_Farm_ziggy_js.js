"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Farm_ziggy_js"],{

/***/ "./resources/js/components/Pages/Farm/ziggy.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Pages/Farm/ziggy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ziggy": () => (/* binding */ Ziggy)
/* harmony export */ });
var Ziggy = {
  "url": "http:\/\/localhost",
  "port": null,
  "defaults": {},
  "routes": {
    "farm-inventory.index": {
      "uri": "farm-inventory",
      "methods": ["GET", "HEAD"]
    },
    "farm-inventory.create": {
      "uri": "farm-inventory\/create",
      "methods": ["GET", "HEAD"]
    },
    "farm-inventory.store": {
      "uri": "farm-inventory",
      "methods": ["POST"]
    },
    "farm-inventory.show": {
      "uri": "farm-inventory\/{farm_inventory}",
      "methods": ["GET", "HEAD"]
    },
    "farm-inventory.edit": {
      "uri": "farm-inventory\/{farm_inventory}\/edit",
      "methods": ["GET", "HEAD"]
    },
    "farm-inventory.update": {
      "uri": "farm-inventory\/{farm_inventory}",
      "methods": ["PUT", "PATCH"]
    },
    "farm-inventory.destroy": {
      "uri": "farm-inventory\/{farm_inventory}",
      "methods": ["DELETE"]
    },
    "dashboard": {
      "uri": "dashboard",
      "methods": ["GET", "HEAD"]
    },
    "register": {
      "uri": "register",
      "methods": ["GET", "HEAD"]
    },
    "login": {
      "uri": "login",
      "methods": ["GET", "HEAD"]
    },
    "password.request": {
      "uri": "forgot-password",
      "methods": ["GET", "HEAD"]
    },
    "password.email": {
      "uri": "forgot-password",
      "methods": ["POST"]
    },
    "password.reset": {
      "uri": "reset-password\/{token}",
      "methods": ["GET", "HEAD"]
    },
    "password.update": {
      "uri": "reset-password",
      "methods": ["POST"]
    },
    "verification.notice": {
      "uri": "verify-email",
      "methods": ["GET", "HEAD"]
    },
    "verification.verify": {
      "uri": "verify-email\/{id}\/{hash}",
      "methods": ["GET", "HEAD"]
    },
    "verification.send": {
      "uri": "email\/verification-notification",
      "methods": ["POST"]
    },
    "password.confirm": {
      "uri": "confirm-password",
      "methods": ["GET", "HEAD"]
    },
    "logout": {
      "uri": "logout",
      "methods": ["POST"]
    }
  }
};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}


/***/ })

}]);