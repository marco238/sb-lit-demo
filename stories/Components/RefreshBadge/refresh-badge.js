!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){e.exports=s(1)},function(e,t,s){"use strict";s.r(t);const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},r=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${o}`);class u{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,u=-1,l=0;const{strings:p,values:{length:m}}=e;for(;l<m;){const e=i.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)c(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=p[l],s=h.exec(t)[2],n=s.toLowerCase()+"$lit$",i=e.getAttribute(n);e.removeAttribute(n);const r=i.split(a);this.parts.push({type:"attribute",index:u,name:s,strings:r}),l+=r.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const n=e.parentNode,i=t.split(a),r=i.length-1;for(let t=0;t<r;t++){let s,r=i[t];if(""===r)s=d();else{const e=h.exec(r);null!==e&&c(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(r)}n.insertBefore(s,e),this.parts.push({type:"node",index:++u})}""===i[r]?(n.insertBefore(d(),e),s.push(e)):e.data=i[r],l+=r}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&u!==o||(u++,t.insertBefore(d(),e)),o=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(s.push(e),u--),l++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),l++}}else i.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const c=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},l=e=>-1!==e.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:s},parts:n}=e,i=document.createTreeWalker(s,133,null,!1);let r=g(n),o=n[r],a=-1,u=0;const c=[];let l=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(c.push(e),null===l&&(l=e)),null!==l&&u++;void 0!==o&&o.index===a;)o.index=null!==l?-1:o.index-u,r=g(n,r),o=n[r]}c.forEach(e=>e.parentNode.removeChild(e))}const m=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},g=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(l(t))return s}return-1};const f=new WeakMap,_=e=>"function"==typeof e&&f.has(e),y={},w={};class x{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r,o=0,a=0,u=i.nextNode();for(;o<s.length;)if(r=s[o],l(r)){for(;a<r.index;)a++,"TEMPLATE"===u.nodeName&&(t.push(u),i.currentNode=u.content),null===(u=i.nextNode())&&(i.currentNode=t.pop(),u=i.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(u.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(u,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),v=` ${r} `;class S{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const a=h.exec(e);t+=null===a?e+(s?v:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==b&&(t=b.createHTML(t)),e.innerHTML=t,e}}const N=e=>null===e||!("object"==typeof e||"function"==typeof e),C=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class P{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new A(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=s[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!C(e))return e}let n="";for(let i=0;i<t;i++){n+=e[i];const t=s[i];if(void 0!==t){const e=t.value;if(N(e)||!C(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||N(e)&&e===this.value||(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(N(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):C(e)?this.__commitIterable(e):e===w?(this.value=w,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof x&&this.value.template===t)this.value.update(e.values);else{const s=new x(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)s=t[n],void 0===s&&(s=new T(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class k extends P{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new L(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class L extends A{}let V=!1;(()=>{try{const e={get capture(){return V=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class O{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=U(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const U=e=>e&&(V?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function I(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(r);return s=t.keyString.get(n),void 0===s&&(s=new u(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const R=new Map,M=new WeakMap;const $=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];if("."===i){return new k(e,t.slice(1),s).parts}if("@"===i)return[new O(e,t.slice(1),n.eventContext)];if("?"===i)return[new E(e,t.slice(1),s)];return new P(e,t,s).parts}handleTextExpression(e){return new T(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const j=(e,...t)=>new S(e,t,"html",$),z=(e,t)=>`${e}--${t}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const F=e=>t=>{const s=z(t.type,e);let n=R.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},R.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(r);if(i=n.keyString.get(o),void 0===i){const s=t.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(s,e),i=new u(t,s),n.keyString.set(o,i)}return n.stringsArray.set(t.strings,i),i},q=["html","svg"],H=new Set,D=(e,t,s)=>{H.add(e);const n=s?s.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=i[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{q.forEach(t=>{const s=R.get(z(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),p(e,s)})})})(e);const a=n.content;s?function(e,t,s=null){const{element:{content:n},parts:i}=e;if(null==s)return void n.appendChild(t);const r=document.createTreeWalker(n,133,null,!1);let o=g(i),a=0,u=-1;for(;r.nextNode();){u++;for(r.currentNode===s&&(a=m(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===u;){if(a>0){for(;-1!==o;)i[o].index+=a,o=g(i,o);return}o=g(i,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const u=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==u)t.insertBefore(u.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),p(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),X={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:W};class Z extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=X){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,s,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdateInternal(e,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||X}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=W){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||J,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||J.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=X){const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,s){let n=!0;if(void 0!==e){const i=this.constructor;s=s||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Z.finalized=!0;const G=Element.prototype;G.msMatchesSelector||G.webkitMatchesSelector;const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class Y{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ee={};class te extends Z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),n=[];s.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Y(String(t),Q)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ee&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ee}}te.finalized=!0,te.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,r=M.has(t),o=B&&11===t.nodeType&&!!t.host,a=o&&!H.has(n),u=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=M.get(t);void 0===n&&(i(t,t.firstChild),M.set(t,n=new T(Object.assign({templateFactory:I},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,u,Object.assign({templateFactory:F(n)},s)),a){const e=M.get(u);M.delete(u);const s=e.value instanceof x?e.value.template:void 0;D(n,u,s),i(t,t.firstChild),t.appendChild(u),M.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)};const se=j`<svg class="ue-c-retux-button__icon--updated" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11"><path fill="#666" fill-rule="evenodd" d="M11.777 0l-6.32 6.631-3.375-3.542L0 5.274 5.457 11l8.402-8.816z"/></svg>`,ne=j`<svg class="ue-c-retux-button__icon--close" role="img" aria-label="cerrar" width="12" height="11" viewBox="0 0 12 11" style=""><g fill="none" fill-rule="evenodd" stroke="#0B2E44" stroke-width="1.5"><path d="M1 1l10 9.046M11 1L1 10.046"></path></g></svg>`;var ie=((e,...t)=>{const s=t.reduce((t,s,n)=>t+(e=>{if(e instanceof Y)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[n+1],e[0]);return new Y(s,Q)})`@keyframes fadeIn{from{opacity:0}to{opacity:1}}:host{display:block;width:fit-content;margin:0 auto;font-family:Roboto,sans-serif;font-size:14px;z-index:16000;--main-bg-color:#c3d5e5;--number-bg-color:#c92318;--number-text-color:#ffffff}.ue-c-retux-button{display:flex;justify-content:center;outline:0;max-width:225px;max-height:38px;animation:fadeIn .3s ease;height:38px;margin:auto}.ue-c-retux-button button{border:0;height:100%;background:0 0;cursor:pointer;outline:0}.ue-c-retux-button a,.ue-c-retux-button p{font-family:Roboto;color:#0b2e44;margin:0;display:flex;align-items:center;justify-content:center}.ue-c-retux-button p{font-size:.875rem;font-weight:700}.ue-c-retux-button p:nth-child(2){font-size:.8125rem;line-height:.813rem;font-weight:400}.ue-c-retux-button__box{display:flex;align-items:center;justify-content:center;position:relative;padding:.25rem 1.25rem;background:#c3d5e5;border-radius:1.25rem;box-sizing:border-box;overflow:visible;box-shadow:0 3px 4px 0 rgba(0,0,0,.5);cursor:pointer}.ue-c-retux-button__content{padding:0 7px 0 0;display:flex;flex-direction:column;align-items:center;justify-content:center;width:175px;height:38px}.ue-c-retux-button__close{padding:0}.ue-c-retux-button__close:hover svg{transform:rotateZ(90deg)}.ue-c-retux-button__total{color:#fff;margin:0 .25rem;background:#c92318;border-radius:100%;width:1.1875rem;height:1.1875rem;display:flex;justify-content:center;align-items:center}.ue-c-retux-button__icon--close{width:10px;height:10px;transition:all .2s ease}.ue-c-retux-button__icon--updated{width:14px;height:10px;margin-right:.2rem}.ue-c-retux-button--updated .ue-c-retux-button__box{box-shadow:none}.ue-c-retux-button__icon--dropdown{width:12px;height:6px;margin-left:.75rem;cursor:pointer;pointer-events:all}.ue-c-retux-button--updated .ue-c-retux-button__box{box-shadow:none}.ue-c-retux-button--new .ue-c-retux-button__box{padding:.25rem 20px .25rem 10px}.ue-c-retux-button--new .ue-c-retux-button__content{width:185px;padding:0 7px 0 0}.ue-c-retux-button--new p:first-child:before{content:'';width:8px;height:8px;background:#c92318;border-radius:100%;margin-right:.375rem}.ue-c-retux-button--dropdown{max-width:250px}.ue-c-retux-button--dropdown .ue-c-retux-button__content{flex-direction:row;padding:0 1rem 0 0;width:210px;cursor:move}.ue-c-retux-button--dropdown .ue-c-retux-button__content p{font-weight:400}.ue-c-retux-button--dropdown .ue-c-retux-button__content p:before{content:"";width:8px;height:8px;background:#c92318;border-radius:100%;margin-right:.375rem}.ue-c-retux-button--updated{box-sizing:border-box;margin:0 auto}.ue-c-retux-button--updated .ue-c-retux-button__content{flex-direction:row;padding:0}.ue-c-retux-button--updated .ue-c-retux-button__box{background:#fff;border:1px solid #d0d0d0;padding:0;width:208px;cursor:initial}.ue-c-retux-button--updated .ue-c-retux-button__icon--updated+p{color:#666;font-size:.875rem;font-weight:700;margin:0}.ue-c-retux-button--hidden{display:none}.ue-c-retux-button .ue-c-retux-panel{position:absolute;top:45px;left:50%;z-index:100;transform:translateX(-50%);pointer-events:all;outline:0}.ue-c-retux-button .ue-c-retux-panel~.ue-c-retux-button__icon--dropdown{transform:rotate(180deg)}@media (max-width:500px){:host{margin:10px auto}}`;window.customElements.get("refresh-badge")||window.customElements.define("refresh-badge",class extends te{static get styles(){return ie}static get properties(){return{storageChecked:{type:Object},news:{type:Array},event:{type:String},exceedsLimit:{type:Boolean},comesFromRefresh:{type:Boolean},refreshedInfoTime:{type:Number},previusNewsLength:{type:Number},contentUpdated:{type:Boolean},refreshedInfoDelay:{type:Number},retuxArticlesLimit:{type:Number},maxArticlesToShow:{type:Number}}}constructor(){super(),this.storageChecked={},this.news=[],this.event="em-retux-badge-event",this.exceedsLimit=!1,this.comesFromRefresh=!1,this.refreshedInfoTime=3e3,this.refreshedInfoDelay=2500,this.previusNewsLength=parseInt(sessionStorage.getItem("previusNewsLength"))||0,this.retuxArticlesLimit=9,this.maxArticlesToShow=4,this.contentUpdated=!1,this.url=new URL(window.location.origin+window.location.pathname)}firstUpdated(){sessionStorage.getItem("previusNewsLength")&&setTimeout(()=>{this.comesFromRefresh=!0,sessionStorage.removeItem("previusNewsLength"),setTimeout(()=>{this.comesFromRefresh=!1},this.refreshedInfoTime)},this.refreshedInfoDelay);const e={componentName:"refreshBadge",internalCustomEvent:"em-retux-badge-event",internalDisconnectCustomEvent:"em-retux-refresh-badge-disconnected"},t=new CustomEvent("discoveryRetuxComponent",{detail:e});window.document.dispatchEvent(t),window.retuxDiscoverComponents||(window.retuxDiscoverComponents=[]),window.retuxDiscoverComponents.push(e)}updated(){this.shadowRoot.querySelectorAll("div[tabindex='0']")[0].focus()}connectedCallback(){super.connectedCallback(),window.document.addEventListener(this.event,this.receiveNews.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.document.removeEventListener(this.event,this.receiveNews.bind(this));const e=new CustomEvent("em-retux-refresh-badge-disconnected");window.document.dispatchEvent(e)}render(){return j`
      <div class="${0===this.news.length?"ue-c-retux-button--hidden":"ue-c-retux-button"} ${this.exceedsLimit?"ue-c-retux-button--new":""}" @click=${this.refreshPage} role="alertdialog" aria-label="Actualizaciones" tabindex="0">
        <div class="ue-c-retux-button__box">          
          ${this.contentButton()}
        </div>
      </div>

      <div class="${this.comesFromRefresh?"ue-c-retux-button ue-c-retux-button--updated":"ue-c-retux-button--hidden"}" aria-live="polite" aria-atomic="true" aria-label="Actualizaciones" style="margin-top: ${0===this.news.length?"0":"10px"}">
        <div class="ue-c-retux-button__box">
          <div class="ue-c-retux-button__content">
            ${se} 
            ${this.reloadedPageContent()}
          </div>
        </div>
      </div>
    `}contentButton(){return j`
        <button class="ue-c-retux-button__content">
          ${this.articlesInfoHTMLText()}
          <p>Actualizar</p>
        </button>
        <button class="ue-c-retux-button__close" @click=${this.closeBadge} aria-label="Cerrar">
          ${ne}
        </button>
      `}reloadedPageContent(){return this.previusNewsLength<this.retuxArticlesLimit+1&&this.previusNewsLength>0?1===this.previusNewsLength?j`<p>1 noticia actualizada</p>`:j`<p>${this.previusNewsLength} noticias actualizadas</p>`:this.previusNewsLength===this.retuxArticlesLimit+1?j`<p>Portada actualizada</p>`:void 0}articlesInfoHTMLText(){return this.exceedsLimit?j`
        <p>Nueva portada disponible</p>
      `:j`
        <p>Hay <span class="ue-c-retux-button__total">${this.news.length}</span> ${1===this.news.length?"noticia nueva":"noticias nuevas"}</p>`}closeBadge(e){const t=this.news.length;e.stopPropagation(),this.news=new Array(0),this.exceedsLimit?this.sendAnalyticsString("retux: Cerrar Nueva portada disponible"):this.sendAnalyticsString("retux: Cerrar Hay "+t+" noticias nuevas"),this.exceedsLimit=!1}refreshPage(){this.exceedsLimit?sessionStorage.setItem("previusNewsLength",this.retuxArticlesLimit+1):(this.news.length<=this.maxArticlesToShow&&sessionStorage.setItem("retuxLatestArticles",JSON.stringify(this.news)),this.news.length<=this.retuxArticlesLimit&&sessionStorage.setItem("retuxEveryArticle",JSON.stringify(this.news)),sessionStorage.setItem("previusNewsLength",this.news.length)),sessionStorage.setItem("refreshedFromRetuxBadge",!0),this.url.searchParams.set("rtx",this.news[this.news.length-1].id),window.location.href=this.url,this.news=[]}receiveNews(e){this.news.length&&(this.contentUpdated=!0),e&&e.detail&&(e.detail.forEach(e=>{if(void 0===this.news.find(t=>t.id===e.id)){const t={id:e.id,title:e.titulo||"Ver la Noticia",subject:e.cintillo||"",premium:e.isPremium};this.news.length<this.retuxArticlesLimit?(this.news.push(t),this.news=[...this.news]):(this.exceedsLimit=!0,this.news.push(t),this.news.shift(),this.news=[...this.news])}}),this.exceedsLimit?this.sendAnalyticsString("retux: Nueva portada disponible"):(this.contentUpdated,this.sendAnalyticsString("retux: Hay "+this.news.length+" noticias nuevas")))}sendAnalyticsString(e){"function"==typeof window.envioSC&&window.envioSC(e)}isStorageAvailable(e){try{if(this.storageChecked.hasOwnProperty(e))return this.storageChecked[e];let t="o.O",s=window[e];return s.setItem(t,t),s.removeItem(t),this.storageChecked[e]=!0,!0}catch(t){return this.storageChecked[e]=!1,!1}}parseJson(e){let t=null;try{t=JSON.parse(e)}catch(e){e instanceof SyntaxError?console.log(`${e.name}: ${e.message}`):console.log(e)}return t}})}]);