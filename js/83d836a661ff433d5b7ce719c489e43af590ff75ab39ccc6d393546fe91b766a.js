!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}({0:function(e,t){e.exports=Roblox},14:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(2);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.namespace=n,this.resourceMap=r,this.intl=t}return function(e,t,r){t&&a(e.prototype,t)}(e,[{key:"get",value:function(e,t){if(!e||"string"!=typeof e)throw new TypeError("Parameter 'key' must be provided and it should be a string");var r=this.resourceMap[e]||"";return r||console.warn("The translation key '".concat(e,"' not found. Please check for a missing string or a typo.")),void 0!==t&&(r=t&&"object"===i(t)&&!Array.isArray(t)?r?this.intl.f(r,t):"":(new window.RobloxError("Second parameter must be either a plain object when provided").throw(),"")),r}},{key:"addKeyForDevelopment",value:function(e,t){if(this.resourceMap[e])throw new Error("'key' ".concat(e," is already present"));this.resourceMap[e]=t}}]),e}();function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}var f=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:new o.a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.intl=t}return c(e,null,[{key:"combineTranslationResources",value:function(e){for(var t=arguments.length,r=new Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=r.reduce((function(e,t){return Object.assign(e,t.resourceMap)}),{});return new u(e,o,null)}}]),c(e,[{key:"getTranslationResource",value:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},null===n.LangDynamicDefault||void 0===n.LangDynamicDefault?void 0:n.LangDynamicDefault[e],null===n.Lang||void 0===n.Lang?void 0:n.Lang[e],null===n.LangDynamic||void 0===n.LangDynamic?void 0:n.LangDynamic[e]);return 0===Object.keys(t).length&&console.warn("The namespace ".concat(e," was not found")),new u(this.intl,t,e)}},{key:"mergeTranslationResources",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.combineTranslationResources.apply(e,[this.intl].concat(r))}}]),e}(),p=window.Roblox||{};p.TranslationResourceProvider=f,window.Roblox=p,t.default=f},2:function(e,t,r){"use strict";var n,o,i=a;function a(e,t,r){this.locales=e,this.formats=t,this.pluralFn=r}function u(e){this.id=e}function l(e,t,r,n,o){this.id=e,this.useOrdinal=t,this.offset=r,this.options=n,this.pluralFn=o}function s(e,t,r,n){this.id=e,this.offset=t,this.numberFormat=r,this.string=n}function c(e,t){this.id=e,this.options=t}function f(e,t,r,n){this.message=e,this.expected=t,this.found=r,this.location=n,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,f)}function p(){this.constructor=n}a.prototype.compile=function(e){return this.pluralStack=[],this.currentPlural=null,this.pluralNumberFormat=null,this.compileMessage(e)},a.prototype.compileMessage=function(e){if(!e||"messageFormatPattern"!==e.type)throw new Error('Message AST is not of type: "messageFormatPattern"');var t,r,n,o=e.elements,i=[];for(t=0,r=o.length;t<r;t+=1)switch((n=o[t]).type){case"messageTextElement":i.push(this.compileMessageText(n));break;case"argumentElement":i.push(this.compileArgument(n));break;default:throw new Error("Message element does not have a valid type")}return i},a.prototype.compileMessageText=function(e){return this.currentPlural&&/(^|[^\\])#/g.test(e.value)?(this.pluralNumberFormat||(this.pluralNumberFormat=new Intl.NumberFormat(this.locales)),new s(this.currentPlural.id,this.currentPlural.format.offset,this.pluralNumberFormat,e.value)):e.value.replace(/\\#/g,"#")},a.prototype.compileArgument=function(e){var t=e.format;if(!t)return new u(e.id);var r,n=this.formats,o=this.locales,i=this.pluralFn;switch(t.type){case"numberFormat":return r=n.number[t.style],{id:e.id,format:new Intl.NumberFormat(o,r).format};case"dateFormat":return r=n.date[t.style],{id:e.id,format:new Intl.DateTimeFormat(o,r).format};case"timeFormat":return r=n.time[t.style],{id:e.id,format:new Intl.DateTimeFormat(o,r).format};case"pluralFormat":return r=this.compileOptions(e),new l(e.id,t.ordinal,t.offset,r,i);case"selectFormat":return r=this.compileOptions(e),new c(e.id,r);default:throw new Error("Message element does not have a valid format type")}},a.prototype.compileOptions=function(e){var t,r,n,o=e.format,i=o.options,a={};for(this.pluralStack.push(this.currentPlural),this.currentPlural="pluralFormat"===o.type?e:null,t=0,r=i.length;t<r;t+=1)a[(n=i[t]).selector]=this.compileMessage(n.value);return this.currentPlural=this.pluralStack.pop(),a},u.prototype.format=function(e){return e||"number"==typeof e?"string"==typeof e?e:String(e):""},l.prototype.getOption=function(e){var t=this.options;return t["="+e]||t[this.pluralFn(e-this.offset,this.useOrdinal)]||t.other},s.prototype.format=function(e){var t=this.numberFormat.format(e-this.offset);return this.string.replace(/(^|[^\\])#/g,"$1"+t).replace(/\\#/g,"#")},c.prototype.getOption=function(e){var t=this.options;return t[e]||t.other};var m=(n=f,o=Error,p.prototype=o.prototype,n.prototype=new p,{SyntaxError:f,parse:function(e){var t,r=1<arguments.length?arguments[1]:{},n={},o={start:Ae},i=Ae,a=function(e){return{type:"messageFormatPattern",elements:e,location:ke()}},u=function(e){var t,r,n,o,i,a="";for(t=0,n=e.length;t<n;t+=1)for(r=0,i=(o=e[t]).length;r<i;r+=1)a+=o[r];return a},l=function(e){return{type:"messageTextElement",value:e,location:ke()}},s=/^[^ \t\n\r,.+={}#]/,c={type:"class",value:"[^ \\t\\n\\r,.+={}#]",description:"[^ \\t\\n\\r,.+={}#]"},p="{",m={type:"literal",value:"{",description:'"{"'},h=",",y={type:"literal",value:",",description:'","'},d="}",g={type:"literal",value:"}",description:'"}"'},v=function(e,t){return{type:"argumentElement",id:e,format:t&&t[2],location:ke()}},b="number",w={type:"literal",value:"number",description:'"number"'},F="date",O={type:"literal",value:"date",description:'"date"'},x="time",D={type:"literal",value:"time",description:'"time"'},k=function(e,t){return{type:e+"Format",style:t&&t[2],location:ke()}},T="plural",L={type:"literal",value:"plural",description:'"plural"'},_=function(e){return{type:e.type,ordinal:!1,offset:e.offset||0,options:e.options,location:ke()}},j="selectordinal",A={type:"literal",value:"selectordinal",description:'"selectordinal"'},C=function(e){return{type:e.type,ordinal:!0,offset:e.offset||0,options:e.options,location:ke()}},P="select",S={type:"literal",value:"select",description:'"select"'},E=function(e){return{type:"selectFormat",options:e,location:ke()}},R="=",I={type:"literal",value:"=",description:'"="'},M=function(e,t){return{type:"optionalFormatPattern",selector:e,value:t,location:ke()}},N="offset:",z={type:"literal",value:"offset:",description:'"offset:"'},Z=function(e){return e},B=function(e,t){return{type:"pluralFormat",offset:e,options:t,location:ke()}},U={type:"other",description:"whitespace"},W=/^[ \t\n\r]/,q={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},J={type:"other",description:"optionalWhitespace"},K=/^[0-9]/,$={type:"class",value:"[0-9]",description:"[0-9]"},G=/^[0-9a-f]/i,H={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},Q="0",V={type:"literal",value:"0",description:'"0"'},X=/^[1-9]/,Y={type:"class",value:"[1-9]",description:"[1-9]"},ee=function(e){return parseInt(e,10)},te=/^[^{}\\\0-\x1F \t\n\r]/,re={type:"class",value:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",description:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"},ne="\\\\",oe={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},ie=function(){return"\\"},ae="\\#",ue={type:"literal",value:"\\#",description:'"\\\\#"'},le=function(){return"\\#"},se="\\{",ce={type:"literal",value:"\\{",description:'"\\\\{"'},fe=function(){return"{"},pe="\\}",me={type:"literal",value:"\\}",description:'"\\\\}"'},he=function(){return"}"},ye="\\u",de={type:"literal",value:"\\u",description:'"\\\\u"'},ge=function(e){return String.fromCharCode(parseInt(e,16))},ve=function(e){return e.join("")},be=0,we=0,Fe=[{line:1,column:1,seenCR:!1}],Oe=0,xe=[],De=0;if("startRule"in r){if(!(r.startRule in o))throw new Error("Can't start parsing from rule \""+r.startRule+'".');i=o[r.startRule]}function ke(){return Le(we,be)}function Te(t){var r,n,o=Fe[t];if(o)return o;for(r=t-1;!Fe[r];)r--;for(o={line:(o=Fe[r]).line,column:o.column,seenCR:o.seenCR};r<t;)"\n"===(n=e.charAt(r))?(o.seenCR||o.line++,o.column=1,o.seenCR=!1):"\r"===n||"\u2028"===n||"\u2029"===n?(o.line++,o.column=1,o.seenCR=!0):(o.column++,o.seenCR=!1),r++;return Fe[t]=o}function Le(e,t){var r=Te(e),n=Te(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function _e(e){be<Oe||(Oe<be&&(Oe=be,xe=[]),xe.push(e))}function je(e,t,r,n){return null!==t&&function(e){var t=1;for(e.sort((function(e,t){return e.description<t.description?-1:e.description>t.description?1:0}));t<e.length;)e[t-1]===e[t]?e.splice(t,1):t++}(t),new f(null!==e?e:function(e,t){var r,n=new Array(e.length);for(r=0;r<e.length;r++)n[r]=e[r].description;function o(e){return e.charCodeAt(0).toString(16).toUpperCase()}return"Expected "+(1<e.length?n.slice(0,-1).join(", ")+" or "+n[e.length-1]:n[0])+" but "+(t?'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,(function(e){return"\\x0"+o(e)})).replace(/[\x10-\x1F\x80-\xFF]/g,(function(e){return"\\x"+o(e)})).replace(/[\u0100-\u0FFF]/g,(function(e){return"\\u0"+o(e)})).replace(/[\u1000-\uFFFF]/g,(function(e){return"\\u"+o(e)}))+'"':"end of input")+" found."}(t,r),t,r,n)}function Ae(){return Ce()}function Ce(){var e,t,r;for(e=be,t=[],r=Pe();r!==n;)t.push(r),r=Pe();return t!==n&&(we=e,t=a(t)),t}function Pe(){var t;return(t=function(){var t,r;return t=be,(r=function(){var t,r,o,i,a,l;if(r=[],o=t=be,(o=(i=Ie())!==n&&(a=Be())!==n&&(l=Ie())!==n?i=[i,a,l]:(be=o,n))!==n)for(;o!==n;)r.push(o),o=be,o=(i=Ie())!==n&&(a=Be())!==n&&(l=Ie())!==n?i=[i,a,l]:(be=o,n);else r=n;return r!==n&&(we=t,r=u(r)),(t=r)===n&&(t=be,t=(r=Re())!==n?e.substring(t,be):r),t}())!==n&&(we=t,r=l(r)),r}())===n&&(t=function(){var t,r,o,i,a,u,l;return t=be,123===e.charCodeAt(be)?(r=p,be++):(r=n,0===De&&_e(m)),r!==n&&Ie()!==n&&(o=function(){var t,r,o;if((t=ze())===n){if(t=be,r=[],s.test(e.charAt(be))?(o=e.charAt(be),be++):(o=n,0===De&&_e(c)),o!==n)for(;o!==n;)r.push(o),s.test(e.charAt(be))?(o=e.charAt(be),be++):(o=n,0===De&&_e(c));else r=n;t=r!==n?e.substring(t,be):r}return t}())!==n&&Ie()!==n?(i=be,44===e.charCodeAt(be)?(a=h,be++):(a=n,0===De&&_e(y)),(i=a!==n&&(u=Ie())!==n&&(l=function(){var t;return(t=function(){var t,r,o,i,a,u;return t=be,e.substr(be,6)===b?(r=b,be+=6):(r=n,0===De&&_e(w)),r===n&&(e.substr(be,4)===F?(r=F,be+=4):(r=n,0===De&&_e(O)),r===n&&(e.substr(be,4)===x?(r=x,be+=4):(r=n,0===De&&_e(D)))),r!==n&&Ie()!==n?(o=be,44===e.charCodeAt(be)?(i=h,be++):(i=n,0===De&&_e(y)),(o=i!==n&&(a=Ie())!==n&&(u=Be())!==n?i=[i,a,u]:(be=o,n))===n&&(o=null),o!==n?(we=t,r=k(r,o)):(be=t,n)):(be=t,n)}())===n&&(t=function(){var t,r,o,i;return t=be,e.substr(be,6)===T?(r=T,be+=6):(r=n,0===De&&_e(L)),r!==n&&Ie()!==n?(44===e.charCodeAt(be)?(o=h,be++):(o=n,0===De&&_e(y)),o!==n&&Ie()!==n&&(i=Ee())!==n?(we=t,r=_(i)):(be=t,n)):(be=t,n)}())===n&&(t=function(){var t,r,o,i;return t=be,e.substr(be,13)===j?(r=j,be+=13):(r=n,0===De&&_e(A)),r!==n&&Ie()!==n?(44===e.charCodeAt(be)?(o=h,be++):(o=n,0===De&&_e(y)),o!==n&&Ie()!==n&&(i=Ee())!==n?(we=t,r=C(i)):(be=t,n)):(be=t,n)}())===n&&(t=function(){var t,r,o,i,a;if(t=be,e.substr(be,6)===P?(r=P,be+=6):(r=n,0===De&&_e(S)),r!==n)if(Ie()!==n)if(44===e.charCodeAt(be)?(o=h,be++):(o=n,0===De&&_e(y)),o!==n)if(Ie()!==n){if(i=[],(a=Se())!==n)for(;a!==n;)i.push(a),a=Se();else i=n;t=i!==n?(we=t,r=E(i)):(be=t,n)}else be=t,t=n;else be=t,t=n;else be=t,t=n;else be=t,t=n;return t}()),t}())!==n?a=[a,u,l]:(be=i,n))===n&&(i=null),i!==n&&(a=Ie())!==n?(125===e.charCodeAt(be)?(u=d,be++):(u=n,0===De&&_e(g)),u!==n?(we=t,r=v(o,i)):(be=t,n)):(be=t,n)):(be=t,n)}()),t}function Se(){var t,r,o,i,a;return t=be,Ie()!==n&&(r=function(){var t,r,o,i;return r=t=be,61===e.charCodeAt(be)?(o=R,be++):(o=n,0===De&&_e(I)),(t=(r=o!==n&&(i=ze())!==n?o=[o,i]:(be=r,n))!==n?e.substring(t,be):r)===n&&(t=Be()),t}())!==n&&Ie()!==n?(123===e.charCodeAt(be)?(o=p,be++):(o=n,0===De&&_e(m)),o!==n&&Ie()!==n&&(i=Ce())!==n&&Ie()!==n?(125===e.charCodeAt(be)?(a=d,be++):(a=n,0===De&&_e(g)),a!==n?(we=t,M(r,i)):(be=t,n)):(be=t,n)):(be=t,n)}function Ee(){var t,r,o,i;if(t=be,(r=function(){var t,r,o;return t=be,e.substr(be,7)===N?(r=N,be+=7):(r=n,0===De&&_e(z)),r!==n&&Ie()!==n&&(o=ze())!==n?(we=t,r=Z(o)):(be=t,n)}())===n&&(r=null),r!==n)if(Ie()!==n){if(o=[],(i=Se())!==n)for(;i!==n;)o.push(i),i=Se();else o=n;t=o!==n?(we=t,r=B(r,o)):(be=t,n)}else be=t,t=n;else be=t,t=n;return t}function Re(){var t,r;if(De++,t=[],W.test(e.charAt(be))?(r=e.charAt(be),be++):(r=n,0===De&&_e(q)),r!==n)for(;r!==n;)t.push(r),W.test(e.charAt(be))?(r=e.charAt(be),be++):(r=n,0===De&&_e(q));else t=n;return De--,t===n&&(r=n,0===De&&_e(U)),t}function Ie(){var t,r,o;for(De++,t=be,r=[],o=Re();o!==n;)r.push(o),o=Re();return t=r!==n?e.substring(t,be):r,De--,t===n&&(r=n,0===De&&_e(J)),t}function Me(){var t;return K.test(e.charAt(be))?(t=e.charAt(be),be++):(t=n,0===De&&_e($)),t}function Ne(){var t;return G.test(e.charAt(be))?(t=e.charAt(be),be++):(t=n,0===De&&_e(H)),t}function ze(){var t,r,o,i,a,u;if(t=be,48===e.charCodeAt(be)?(r=Q,be++):(r=n,0===De&&_e(V)),r===n){if(o=r=be,X.test(e.charAt(be))?(i=e.charAt(be),be++):(i=n,0===De&&_e(Y)),i!==n){for(a=[],u=Me();u!==n;)a.push(u),u=Me();o=a!==n?i=[i,a]:(be=o,n)}else be=o,o=n;r=o!==n?e.substring(r,be):o}return r!==n&&(we=t,r=ee(r)),r}function Ze(){var t,r,o,i,a,u,l,s;return te.test(e.charAt(be))?(t=e.charAt(be),be++):(t=n,0===De&&_e(re)),t===n&&(t=be,e.substr(be,2)===ne?(r=ne,be+=2):(r=n,0===De&&_e(oe)),r!==n&&(we=t,r=ie()),(t=r)===n&&(t=be,e.substr(be,2)===ae?(r=ae,be+=2):(r=n,0===De&&_e(ue)),r!==n&&(we=t,r=le()),(t=r)===n&&(t=be,e.substr(be,2)===se?(r=se,be+=2):(r=n,0===De&&_e(ce)),r!==n&&(we=t,r=fe()),(t=r)===n&&(t=be,e.substr(be,2)===pe?(r=pe,be+=2):(r=n,0===De&&_e(me)),r!==n&&(we=t,r=he()),(t=r)===n&&(t=be,e.substr(be,2)===ye?(r=ye,be+=2):(r=n,0===De&&_e(de)),t=r!==n?(i=o=be,(o=(i=(a=Ne())!==n&&(u=Ne())!==n&&(l=Ne())!==n&&(s=Ne())!==n?a=[a,u,l,s]:(be=i,n))!==n?e.substring(o,be):i)!==n?(we=t,r=ge(o)):(be=t,n)):(be=t,n)))))),t}function Be(){var e,t,r;if(e=be,t=[],(r=Ze())!==n)for(;r!==n;)t.push(r),r=Ze();else t=n;return t!==n&&(we=e,t=ve(t)),t}if((t=i())!==n&&be===e.length)return t;throw t!==n&&be<e.length&&_e({type:"end",description:"end of input"}),je(null,xe,Oe<e.length?e.charAt(Oe):null,Oe<e.length?Le(Oe,Oe+1):Le(Oe,Oe))}}),h=y;function y(e,t,r){var n="string"==typeof e?y.__parse(e):e;if(!n||"messageFormatPattern"!==n.type)throw new TypeError("A message must be provided as a String or AST.");r=this._mergeFormats(y.formats,r),Object.defineProperty(this,"_locale",{value:this._resolveLocale(t)});var o=this._findPluralRuleFunction(this._locale),i=this._compilePattern(n,t,r,o),a=this;this.format=function(e){return a._format(i,e)}}Object.defineProperty(y,"formats",{enumerable:!0,value:{number:{currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}}}),Object.defineProperty(y,"__localeData__",{value:Object.create(null)}),Object.defineProperty(y,"__addLocaleData",{value:function(e){if(!e||!e.locale)throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");y.__localeData__[e.locale.toLowerCase()]=e}}),Object.defineProperty(y,"__parse",{value:m.parse}),Object.defineProperty(y,"defaultLocale",{enumerable:!0,writable:!0,value:void 0}),y.prototype.resolvedOptions=function(){return{locale:this._locale}},y.prototype._compilePattern=function(e,t,r,n){return new i(t,r,n).compile(e)},y.prototype._findPluralRuleFunction=function(e){for(var t=y.__localeData__,r=t[e.toLowerCase()];r;){if(r.pluralRuleFunction)return r.pluralRuleFunction;r=r.parentLocale&&t[r.parentLocale.toLowerCase()]}throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :"+e)},y.prototype._format=function(e,t){var r,n,o,i,a,u="";for(r=0,n=e.length;r<n;r+=1)if("string"!=typeof(o=e[r])){if(i=o.id,!t||!Object.prototype.hasOwnProperty.call(t,i))throw new Error("A value must be provided for: "+i);a=t[i],o.options?u+=this._format(o.getOption(a),t):u+=o.format(a)}else u+=o;return u},y.prototype._mergeFormats=function(e,t){var r,n,o={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=n=Object.create(e[r]),t&&Object.prototype.hasOwnProperty.call(t,r)&&Object.assign(n,t[r]));return o},y.prototype._resolveLocale=function(e){"string"==typeof e&&(e=[e]),e=(e||[]).concat(y.defaultLocale);var t,r,n,o,i=y.__localeData__;for(t=0,r=e.length;t<r;t+=1)for(n=e[t].toLowerCase().split("-");n.length;){if(o=i[n.join("-")])return o.locale;n.pop()}var a=e.pop();throw new Error("No locale data has been added to IntlMessageFormat for: "+e.join(", ")+", or the default locale: "+a)};var d={locale:"en",pluralRuleFunction:function(e,t){var r=String(e).split("."),n=!r[1],o=Number(r[0])==e,i=o&&r[0].slice(-1),a=o&&r[0].slice(-2);return t?1==i&&11!=a?"one":2==i&&12!=a?"two":3==i&&13!=a?"few":"other":1==e&&n?"one":"other"}},g=r(0),v="RobloxLocaleCode";function b(e){var t=w.indexOf(e)+1;return!(!e||!t)}var w=["zh-cn","zh-tw","ko-kr","ja-jp"],F=["zh-tw"],O={zh_cjv:"zh_cn"},x=function(e){return e.replace(/_/g,"-")};var D={short:{year:"numeric",month:"2-digit",day:"2-digit"},full:{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"},time:{hour:"2-digit",minute:"2-digit"}},k=new Date("Aug 17 2003"),T=[1,2,3,4,5,6,7],L=[1,2,3,4,5,6,7,8,9,10,11,12],_=[{year:"numeric",month:"short",day:"numeric"},{hour:"numeric",minute:"numeric",hour12:!0}],j={month:0,day:1,year:2},A=["narrow","short","long"],C=["numeric","2-digit","narrow","short","long"];function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.locale=t,this.dateOrdering={}}return function(e,t,r){t&&P(e.prototype,t)}(e,[{key:"getShortDate",value:function(e){return this.getCustomDateTime(e)}},{key:"getFullDate",value:function(e,t){var r=1<arguments.length&&void 0!==t?t:" | ";return this.getCustomDateTime(e,_[0])+r+this.getCustomDateTime(e,_[1])}},{key:"getCustomDateTime",value:function(e,t){var r=0<arguments.length&&void 0!==e?e:new Date,n=1<arguments.length?t:void 0,o=new Intl.DateTimeFormat(this.locale,n);try{return"string"==typeof r||"number"==typeof r?o.format(new Date(r)):o.format(r)}catch(e){return""}}},{key:"getOrderedDateParts",value:function(e){var t=this;if(0===Object.keys(this.dateOrdering).length){var r=new Intl.DateTimeFormat(this.locale,e);if(this.dateOrdering=this.getDefaultDateOrdering(),r.formatToParts){var n=r.formatToParts(new Date).filter((function(e){return"literal"!==e.type}));3===n.length&&n.forEach((function(e,r){t.dateOrdering[e.type]=r}))}}return this.dateOrdering}},{key:"getDefaultDateOrdering",value:function(){var e=j,t=this.getShortDate(k),r=[{type:"year",index:t.indexOf("2003")},{type:"month",index:t.indexOf("8")},{type:"day",index:t.indexOf("17")}];return r.some((function(e){return-1===e.index}))?j:((r=r.sort((function(e,t){return e.index-t.index}))).forEach((function(t,r){e[t.type]=r})),e)}}]),e}();function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var R=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.locale=t,this.currency=r}return function(e,t,r){t&&E(e.prototype,t)}(e,[{key:"getCustomNumber",value:function(e,t){try{return new Intl.NumberFormat(this.locale,t).format(e)}catch(t){return e}}}]),e}();function I(e,t){return e<t?-1:t<e?1:0}function M(e,t,r){return b(e)&&r?0<=F.indexOf(e)?"".concat(t," ").concat(r):t+r:t}function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,"a",(function(){return Z})),h.__addLocaleData(d),h.defaultLocale="en";var Z=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=t||function(){var e,t="undefined"!=typeof localStorage&&(g.LocalStorage?g.LocalStorage.isAvailable():localStorage&&localStorage.getItem&&localStorage.setItem),r=document.querySelector('meta[name="locale-data"]');return r&&(e=r.dataset?r.dataset.languageCode:r.getAttribute("data-language-code")),!e&&t&&(e=localStorage.getItem(v)),e=e||"en_us",t&&localStorage.setItem(v,e),e}();this.locale=function(e){return Object.prototype.hasOwnProperty.call(O,e)?x(O[e]):x(e)}(o),this.defaultLocale=[this.locale],this.timeZone=r||"America/Los_Angeles",this.currency=n||"USD",this.monthsList={},this.weekdaysList={},this.langSensitiveCompare=function(e){return void 0!==Intl.Collator?new Intl.Collator(e).compare:function(){if(void 0!==String.prototype.localeCompare)try{"foo".localeCompare("bar","i")}catch(e){return"RangeError"===e.name}return!1}()?function(t,r){return t.localeCompare(r,e)}:I}(this.locale),this.dateTimeFormatter=null,this.numberFormatter=null}return function(e,t,r){t&&z(e.prototype,t)}(e,[{key:"getLocale",value:function(){return x(this.locale)}},{key:"getRobloxLocale",value:function(){return function(e){return e.replace(/-/g,"_")}(this.locale)}},{key:"getTimeZone",value:function(){return this.timeZone}},{key:"getCurrency",value:function(){return this.currency}},{key:"getDateTimeFormatter",value:function(){return this.dateTimeFormatter||(this.dateTimeFormatter=new S(this.locale)),this.dateTimeFormatter}},{key:"getNumberFormatter",value:function(){return this.numberFormatter||(this.numberFormatter=new R(this.defaultLocale,this.currency)),this.numberFormatter}},{key:"isAsianLanguage",value:function(){return b(this.locale)}},{key:"getFormattedDateString",value:function(e,t){return M(this.locale,e,t)}},{key:"getMonthsI18n",value:function(e,t){var r=-1<C.indexOf(e)?e:"short";return this.monthsList[r]&&0<this.monthsList[r].length||(this.monthsList[r]=function(e,t,r){return L.map((function(e){return new Date(2017,e-1)})).map((function(n,o){return b(e)?{value:o+1,name:M(e,o+1,r)}:{value:o+1,name:Intl.DateTimeFormat(e,{month:t}).format(n)}}))}(this.locale,r,t)),this.monthsList[r]}},{key:"f",value:function(e,t,r){if("string"!=typeof e)throw new TypeError("'message' must be a string");return new h(e,this.locale,r).format(t)}},{key:"d",value:function(e,t){if(console.warn("This method has been deprecated in favor of the new DateTimeFormatter API, please do not use it anymore!"),"object"!==N(e)||!Date.prototype.isPrototypeOf(e))throw new TypeError("'dateObj' must be a JavaScript date object");var r;if("string"==typeof t||void 0===t)r=D[t]||D.short;else{if("object"!==N(t))throw new TypeError("'options' must be either of type string or object based on Intl.DateTimeFormat");r=t}return this.getDateTimeFormatter().getCustomDateTime(e,r)}},{key:"n",value:function(e,t){if(Number.isNaN(e))throw new TypeError("The argument 'number' must be of type number");var r,n=function(e){return{currency:{style:"currency",currency:e},percent:{style:"percent",maximumFractionDigits:2},decimal:{style:"decimal",maximumFractionDigits:2}}}(this.currency);if("string"==typeof t||void 0===t)r=n[t]||n.decimal;else{if("object"!==N(t))throw new TypeError("'options' must be of type string or object based on Intl.NumberFormat");r=t}return this.getNumberFormatter().getCustomNumber(e,r)}},{key:"getWeekdaysList",value:function(e){var t=this,r=-1<A.indexOf(e)?e:"short";if(this.weekdaysList[r]&&0<this.weekdaysList[r].length)return this.weekdaysList[r];var n=T.map((function(e){return new Date(2017,4,e)}));return this.weekdaysList[r]=n.map((function(e,n){return{value:n+1,name:Intl.DateTimeFormat(t.locale,{weekday:r}).format(e)}})),this.weekdaysList[r]}},{key:"getMonthsList",value:function(e){var t=this,r=-1<C.indexOf(e)?e:"short";if(this.monthsList[r]&&0<this.monthsList[r].length)return this.monthsList[r];var n=L.map((function(e){return new Date(2017,e-1)}));return this.monthsList[r]=n.map((function(e,n){return{value:n+1,name:Intl.DateTimeFormat(t.locale,{month:r}).format(e)}})),this.monthsList[r]}}]),e}()}}),window.Roblox&&window.Roblox.BundleDetector&&window.Roblox.BundleDetector.bundleDetected("TranslationResources");