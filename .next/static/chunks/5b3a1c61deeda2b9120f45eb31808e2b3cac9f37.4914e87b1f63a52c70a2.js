(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"24tF":function(e,t,n){"use strict";n("CKlD");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("ZZRV")),o=(r=n("fqHC"))&&r.__esModule?r:{default:r},u=n("O8eM"),i=n("KdDG"),c=n("VGZw");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var f=d[i];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var s=a.props[f],l=r[f]||new Set;l.has(s)?o=!1:(l.add(s),r[f]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"7/rw":function(e,t,n){e.exports=n("Ggmi")},CKlD:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},D9k5:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"DJh+":function(e,t,n){"use strict";n.r(t);var r=n("ZZRV"),a=n.n(r),o=n("24tF"),u=n.n(o),i=n("7/rw"),c=n.n(i),f=n("8e6W"),s=n.n(f),l=a.a.createElement;s.a.events.on("routeChangeStart",(function(e){"/list"===e&&(location.href="./nopermission")})),t.default=function(e){var t=e.children;return l("div",null,l(u.a,null,l("title",null,"\u5171\u540c\u5934\u90e8\u6d4b\u8bd5-next\u6559\u7a0b"),l("div",null,l(c.a,{href:"/",prefetch:!0},"\u4e3b\u9875"),"|",l(c.a,{href:"/list",prefetch:!0},"\u5217\u8868"),"|",l(c.a,{href:"/nestStyle",prefetch:!0},"\u5185\u8054\u6837\u5f0f-sample")),t,l("footer",null,"\u7248\u6743\u6240\u6709\uff0c\u672a\u7ecf\u5141\u8bb8\uff0c\u4e5f\u53ef\u4ee5\u5206\u4eab\u77e5\u8bc6\u7684\u559c\u60a6")))}},Ggmi:function(e,t,n){"use strict";var r=n("LlUK"),a=n("QbHp");t.__esModule=!0,t.default=void 0;var o,u=a(n("ZZRV")),i=n("CK47"),c=n("8e6W"),f=new Map,s=window.IntersectionObserver,l={};var d=function(e,t){var n=o||(s?o=new s((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=u.default.useState(),a=r(n,2),o=a[0],f=a[1],h=(0,c.useRouter)(),v=h&&h.pathname||"/",y=u.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href);return{href:t,as:e.as?(0,i.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),m=y.href,g=y.as;u.default.useEffect((function(){if(t&&s&&o&&o.tagName&&(0,i.isLocalURL)(m)&&!l[m+"%"+g])return d(o,(function(){p(h,m,g)}))}),[t,o,m,g,h]);var M=e.children,b=e.replace,w=e.shallow,_=e.scroll;"string"===typeof M&&(M=u.default.createElement("a",null,M));var C=u.Children.only(M),x={ref:function(e){e&&f(e),C&&"object"===typeof C&&C.ref&&("function"===typeof C.ref?C.ref(e):"object"===typeof C.ref&&(C.ref.current=e))},onClick:function(e){C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,m,g,b,w,_)}};return t&&(x.onMouseEnter=function(e){(0,i.isLocalURL)(m)&&(C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),p(h,m,g,{priority:!0}))}),(e.passHref||"a"===C.type&&!("href"in C.props))&&(x.href=(0,i.addBasePath)(g)),u.default.cloneElement(C,x)};t.default=h},KdDG:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("ZZRV"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},O8eM:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("ZZRV"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},VGZw:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("ZZRV"))&&r.__esModule?r:{default:r},o=n("O8eM");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}},WyZY:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},bOtj:function(e,t,n){var r=n("pNBA"),a=n("D9k5"),o=n("59oh"),u=n("WyZY");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},fqHC:function(e,t,n){"use strict";var r=n("bOtj"),a=n("XDlA"),o=n("T5E4"),u=(n("8ULG"),n("XneU")),i=n("LPFV"),c=n("P+3v");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("ZZRV"),l=function(e){u(n,e);var t=f(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},pNBA:function(e,t,n){var r=n("L8/2");e.exports=function(e){if(Array.isArray(e))return r(e)}}}]);