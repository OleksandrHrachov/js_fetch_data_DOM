parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=t(n))){var e=0,r=function(){};return{s:r,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c,a=!0,i=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return a=n.done,n},e:function(n){i=!0,c=n},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw c}}}}function t(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var r=document.querySelector("body"),o=document.createElement("div"),c="https://mate-academy.github.io/phone-catalogue-static/api";function a(n){return fetch("".concat(c).concat(n,".json")).then(function(n){return n.ok?n.json():Promise.reject(new Error("".concat(n.status)))})}function i(t,e){return new Promise(function(r,o){var a,i=[],u=n(t);try{for(u.s();!(a=u.n()).done;){var f=a.value;fetch("".concat(c).concat(e,"/").concat(f,".json")).then(function(n){return n.json()}).then(function(n){i.push(n),i.length===t.length&&r(i)}).catch(function(n){o(new Error("что-то пошло не так ".concat(n)))})}}catch(l){u.e(l)}finally{u.f()}})}a("/phones").then(function(t){var e,c=[],a=n(t);try{for(a.s();!(e=a.n()).done;){var u=e.value;u.hasOwnProperty("id")&&c.push(u.id)}}catch(f){a.e(f)}finally{a.f()}i(c,"/phones").then(function(t){var e=document.createElement("ol");e.innerHTML="";var o,c=n(t);try{for(c.s();!(o=c.n()).done;){var a=o.value;e.innerHTML+="\n            <li>".concat(a.name,"</li>\n          ")}}catch(f){c.e(f)}finally{c.f()}r.insertAdjacentElement("afterbegin",e)}).catch(function(n){o.innerHTML="\n        <h1>ERROR</h1>\n        <h2>".concat(n,"</h2>\n        "),r.append(o)})}).catch(function(n){setTimeout(function(){o.innerHTML="\n      <h1>ERROR</h1>\n      <h2>".concat(n,"</h2>\n      "),r.append(o)},5e3)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.bd01086a.js.map