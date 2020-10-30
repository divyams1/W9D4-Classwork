/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`,
      dataType: 'JSON',
    });
  },

  unfollowUser: id => {
      return $.ajax({
            method: "DELETE",
            url: `/users/${id}/follow`,
            dataType: 'JSON',
        });
  }
};

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 36:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

function FollowToggle(el) {
    this.$el = $(el);
    this.userId = this.$el.data("userId");
    this.followState = this.$el.data("initialFollowState");
    debugger
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
}

FollowToggle.prototype.render = function() {
    if (this.followState) {
        this.$el.text("Unfollow!");
    } else {
        this.$el.text("Follow!");
    }
}

FollowToggle.prototype.handleClick = function(event) {
    const successCb = () => {
        this.$el.prop("disabled", false);
        this.followState = !this.followState;
        this.render();
    }
    this.$el.prop("disabled", true);
        
    event.preventDefault();
    if (this.followState) {
        APIUtil.unfollowUser(this.userId).then(successCb);
    } else {
        APIUtil.followUser(this.userId).then(successCb);
    }
}

module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

 $(() => {
     let $btns = $("button.follow-toggle");
     $btns.each( function(index){
        new FollowToggle($btns[index])
     })
 });
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map