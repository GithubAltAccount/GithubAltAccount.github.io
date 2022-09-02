!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=CoreUtilities,n=React,a=e.n(n),r=ReactDOM,i=ReactUtilities,o=Roblox.EnvironmentUrls.apiGatewayUrl,l=function(){var e={url:o+"/experience-guidelines-api/experience-guidelines/metadata",retryable:!0,withCredentials:!0};return t.httpService.post(e)},c=function(e){var n={url:o+"/experience-guidelines-api/experience-guidelines/get-age-recommendation",retryable:!0,withCredentials:!0};e={universeId:e};return t.httpService.post(n,e)},s="game-detail-meta-data",u=function(){var e,t=(null===(e=document.getElementById(s))||void 0===e?void 0:e.dataset)||{};return Object.keys(t).reduce((function(e,n){var a=t[n].toLowerCase();return e[n]="true"===a||"false"!==a&&t[n],e}),{})},d=function(e,t,n,a){return new(n=n||Promise)((function(r,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):((t=e.value)instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},m=function(e,t){var n,a,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},o={next:l(0),throw:l(1),return:l(2)};return"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=0<(r=i.trys).length&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},f=(0,i.withTranslations)((function(e){var t,r=e.isDisplayAgeRecommendationDetails,i=(f=(e.translate,(0,n.useState)(!1)))[0],o=f[1],s=((t=(0,n.useState)(!1))[0],t[1]),f=(e=(0,n.useState)(null))[0],g=e[1],p=(e=(t=(0,n.useState)(!1))[0],t[1]),y=void 0===(t=(u()||{}).universeId)?"":t,v=(0,n.useCallback)((function(){return d(void 0,void 0,void 0,(function(){var e,t;return m(this,(function(n){switch(n.label){case 0:o(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,c(y)];case 2:return t=n.sent(),e=t.data,null==(null===(t=e.ageRecommendationDetails)||void 0===t?void 0:t.summary.ageRecommendation)?(g(null),[2]):(t=(t=null===(t=e.ageRecommendationDetails.descriptorUsages)||void 0===t?void 0:t.map((function(e){return e.descriptor.displayName})).join(", "))||(0===e.ageRecommendationDetails.summary.ageRecommendation.minimumAge?"Suitable for everyone":""),e={descriptorDisplayNames:t,ageRecommendationBracket:e.ageRecommendationDetails.summary.ageRecommendation.displayName},g(e),[3,5]);case 3:return n.sent(),s(!0),g(null),[3,5];case 4:return o(!1),[7];case 5:return[2]}}))}))}),[y]),b=(0,n.useCallback)((function(){return d(void 0,void 0,void 0,(function(){var e;return m(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,5,6]),o(!0),[4,l()];case 1:return(e=(e=t.sent()).data).isSurfacingGuidelinesForUserEnabled?(p(e.isSurfacingGuidelinesForUserEnabled),[4,v()]):[3,3];case 2:t.sent(),t.label=3;case 3:return[3,6];case 4:return t.sent(),s(!0),p(!1),g(null),[3,6];case 5:return o(!1),[7];case 6:return[2]}}))}))}),[v]);if((0,n.useEffect)((function(){b()}),[b]),!e)return a().createElement(a().Fragment,null);if(r){if(f)return a().createElement("div",{className:"age-rating-details col-xs-12 section-content"},a().createElement("span",{className:"age-rating-age-bracket text-lead"},f.ageRecommendationBracket),a().createElement("span",{className:"age-rating-display-name text"},f.descriptorDisplayNames));if(!i)return a().createElement("div",{className:"age-rating-details col-xs-12 section-content"},a().createElement("span",{className:"age-rating-age-bracket text-lead"},"Age Guidelines"),a().createElement("span",{className:"age-rating-display-name text"},"N/A"))}return f?a().createElement("a",{className:"age-recommendation-title text",href:"#game-age-recommendation-details"},f.ageRecommendationBracket):a().createElement(a().Fragment,null)}),{common:[],feature:"Feature.GameDetails"}),g="game-age-recommendation-container",p="game-age-recommendation-details";(0,t.ready)((function(){document.getElementById(p)&&(0,r.render)(a().createElement(f,{isDisplayAgeRecommendationDetails:!0}),document.getElementById(p)),document.getElementById(g)&&(0,r.render)(a().createElement(f,{isDisplayAgeRecommendationDetails:!1}),document.getElementById(g))}))}(),window.Roblox&&window.Roblox.BundleDetector&&window.Roblox.BundleDetector.bundleDetected("GameGuidelines");