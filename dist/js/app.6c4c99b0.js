(function(e){function t(t){for(var n,a,i=t[0],l=t[1],p=t[2],f=0,s=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(s.length)s.shift()();return u.push.apply(u,p||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var c=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},cd49:function(e,t,r){"use strict";r.r(t);r("c5f6"),r("a481"),r("28a5"),r("3b2b");var n=r("1157"),o=r.n(n),u={gasoline:.008887,kilowatthours:70704e-8,MCF:.054868},a=2,i=[4.628696,8.666,.008887,.431926,75.5395,5.906467,.060477,.765724,147.826131,.024462013,181.852164,2.94,3893003,907554e-9,403e-6,20.58,4632,.026323,.01018,.023502,7841155617e-15,6.86814],l=[.9071847,.00045359237,1,.001];function p(e){var t=Math.abs(e);return isNaN(e)||0==e?e:(e=t>100?Math.round(e):t<100&&t>1?Math.round(10*e)/10:t<1&&t>.001?Math.round(1e3*e)/1e3:Math.round(1e4*e)/1e4,e)}function c(e){var t=new String(e);if(isNaN(e)||""==t)return e;var r=new RegExp("([0-9])([0-9][0-9][0-9][,.])"),n=t.split(".");n[0]+=".";do{n[0]=n[0].replace(r,"$1,$2")}while(r.test(n[0]));return n.length>1?n.join(""):n[0].split(".")[0]}function f(e){var t=e;o()("#output").show(),o()("#y0").val(c(p(t/l[a])));for(var r=1;r<=i.length;r++){var n="#y"+r;null!=o()(n)&&o()(n).val(c(p(t/i[r-1])))}}o()("#starting_points").on("submit",function(){var e=Number(o()("#starting-input").val()),t=String(o()("#equiv-type").val()),r=e*u[t];return f(r),!1})}});
//# sourceMappingURL=app.6c4c99b0.js.map