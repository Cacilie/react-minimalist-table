/*! For license information please see main.58997d2b.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-minimalist-table-example"]=this["webpackJsonpreact-minimalist-table-example"]||[]).push([[0],[,,function(e,t,r){e.exports=r(11)},function(e,t,r){},,,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(3);var n=r(0),o=r.n(n),a=r(1),c=r.n(a);function i(e,t){return e(t={exports:{}},t.exports),t.exports}var s="function"===typeof Symbol&&Symbol.for,f=s?Symbol.for("react.element"):60103,l=s?Symbol.for("react.portal"):60106,u=s?Symbol.for("react.fragment"):60107,p=s?Symbol.for("react.strict_mode"):60108,y=s?Symbol.for("react.profiler"):60114,m=s?Symbol.for("react.provider"):60109,b=s?Symbol.for("react.context"):60110,d=s?Symbol.for("react.async_mode"):60111,h=s?Symbol.for("react.concurrent_mode"):60111,S=s?Symbol.for("react.forward_ref"):60112,O=s?Symbol.for("react.suspense"):60113,g=s?Symbol.for("react.suspense_list"):60120,j=s?Symbol.for("react.memo"):60115,E=s?Symbol.for("react.lazy"):60116,$=s?Symbol.for("react.block"):60121,C=s?Symbol.for("react.fundamental"):60117,v=s?Symbol.for("react.responder"):60118,w=s?Symbol.for("react.scope"):60119;function P(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case f:switch(e=e.type){case d:case h:case u:case y:case p:case O:return e;default:switch(e=e&&e.$$typeof){case b:case S:case E:case j:case m:return e;default:return t}}case l:return t}}}function k(e){return P(e)===h}var x={AsyncMode:d,ConcurrentMode:h,ContextConsumer:b,ContextProvider:m,Element:f,ForwardRef:S,Fragment:u,Lazy:E,Memo:j,Portal:l,Profiler:y,StrictMode:p,Suspense:O,isAsyncMode:function(e){return k(e)||P(e)===d},isConcurrentMode:k,isContextConsumer:function(e){return P(e)===b},isContextProvider:function(e){return P(e)===m},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===f},isForwardRef:function(e){return P(e)===S},isFragment:function(e){return P(e)===u},isLazy:function(e){return P(e)===E},isMemo:function(e){return P(e)===j},isPortal:function(e){return P(e)===l},isProfiler:function(e){return P(e)===y},isStrictMode:function(e){return P(e)===p},isSuspense:function(e){return P(e)===O},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===u||e===h||e===y||e===p||e===O||e===g||"object"===typeof e&&null!==e&&(e.$$typeof===E||e.$$typeof===j||e.$$typeof===m||e.$$typeof===b||e.$$typeof===S||e.$$typeof===C||e.$$typeof===v||e.$$typeof===w||e.$$typeof===$)},typeOf:P},T=(i((function(e,t){0})),i((function(e){e.exports=x})),Object.getOwnPropertySymbols),_=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;function R(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function I(e,t,r,n,o){}I.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function q(){}function L(){}L.resetWarningCache=q;var N=i((function(e){e.exports=function(){function e(e,t,r,n,o,a){if(a!==F){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:L,resetWarningCache:q};return r.PropTypes=r,r}()}));function W(e){const t=Object.keys(e.data[0]);return o.a.createElement("thead",{style:{backgroundColor:e.headerColor}},o.a.createElement("tr",{style:{color:e.headerTextColor}},t.map((e,t)=>o.a.createElement("th",{key:t,scope:"col"},e))))}function z({data:e}){const t=Object.keys(e[0]);return e.map((r,n)=>o.a.createElement("tr",{key:n},t.map((t,r)=>o.a.createElement("td",{key:r,"data-label":t},e[n][t]))))}function A(e){return o.a.createElement("table",{className:"cTable"},o.a.createElement("caption",null,e.caption),o.a.createElement(W,e),o.a.createElement("tbody",null,o.a.createElement(z,e)))}A.propTypes={caption:N.string,data:N.arrayOf(N.object).isRequired,headerColor:N.string,headerTextColor:N.string};var B=A;r(10);var D=()=>o.a.createElement(B,{data:[{a:1}]});c.a.render(o.a.createElement(D,null),document.getElementById("root"))}],[[2,1,2]]]);
//# sourceMappingURL=main.58997d2b.chunk.js.map