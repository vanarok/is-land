var W,C=globalThis.trustedTypes,X=C?C.createPolicy("lit-html",{createHTML:r=>r}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,q="?"+v,bt=`<${q}>`,w=document,T=(r="")=>w.createComment(r),U=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,lt=r=>{var t;return ot(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,it=/'/g,st=/"/g,at=/^(?:script|style|textarea|title)$/i,ht=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),St=ht(1),Nt=ht(2),_=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),rt=new WeakMap,D=(r,t,e)=>{var i,s;let o=(i=e?.renderBefore)!==null&&i!==void 0?i:t,n=o._$litPart$;if(n===void 0){let l=(s=e?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new A(t.insertBefore(T(),l),l,void 0,e??{})}return n._$AI(r),n},S=w.createTreeWalker(w,129,null,!1),dt=(r,t)=>{let e=r.length-1,i=[],s,o=t===2?"<svg>":"",n=P;for(let a=0;a<e;a++){let h=r[a],p,d,c=-1,$=0;for(;$<h.length&&(n.lastIndex=$,d=n.exec(h),d!==null);)$=n.lastIndex,n===P?d[1]==="!--"?n=tt:d[1]!==void 0?n=et:d[2]!==void 0?(at.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=m):d[3]!==void 0&&(n=m):n===m?d[0]===">"?(n=s??P,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?m:d[3]==='"'?st:it):n===st||n===it?n=m:n===tt||n===et?n=P:(n=m,s=void 0);let O=n===m&&r[a+1].startsWith("/>")?" ":"";o+=n===P?h+bt:c>=0?(i.push(p),h.slice(0,c)+"$lit$"+h.slice(c)+v+O):h+v+(c===-2?(i.push(void 0),a):O)}let l=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[X!==void 0?X.createHTML(l):l,i]},g=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[h,p]=dt(t,e);if(this.el=g.createElement(h,i),S.currentNode=this.el.content,e===2){let d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=S.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){let d=[];for(let c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(v)){let $=p[n++];if(d.push(c),$!==void 0){let O=s.getAttribute($.toLowerCase()+"$lit$").split(v),N=/([.?@])?(.*)/.exec($);a.push({type:1,index:o,name:N[2],strings:O,ctor:N[1]==="."?I:N[1]==="?"?L:N[1]==="@"?B:E})}else a.push({type:6,index:o})}for(let c of d)s.removeAttribute(c)}if(at.test(s.tagName)){let d=s.textContent.split(v),c=d.length-1;if(c>0){s.textContent=C?C.emptyScript:"";for(let $=0;$<c;$++)s.append(d[$],T()),S.nextNode(),a.push({type:2,index:++o});s.append(d[c],T())}}}else if(s.nodeType===8)if(s.data===q)a.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(v,d+1))!==-1;)a.push({type:7,index:o}),d+=v.length-1}o++}}static createElement(t,e){let i=w.createElement("template");return i.innerHTML=t,i}};function y(r,t,e=r,i){var s,o,n,l;if(t===_)return t;let a=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu,h=U(t)?void 0:t._$litDirective$;return a?.constructor!==h&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),h===void 0?a=void 0:(a=new h(r),a._$AT(r,e,i)),i!==void 0?((n=(l=e)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[i]=a:e._$Cu=a),a!==void 0&&(t=y(r,a._$AS(r,t.values),a,i)),t}var M=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:w).importNode(i,!0);S.currentNode=o;let n=S.nextNode(),l=0,a=0,h=s[0];for(;h!==void 0;){if(l===h.index){let p;h.type===2?p=new A(n,n.nextSibling,this,t):h.type===1?p=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(p=new k(n,this,t)),this.v.push(p),h=s[++a]}l!==h?.index&&(n=S.nextNode(),l++)}return o}m(t){let e=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},A=class{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=y(this,t,e),U(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==_&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):lt(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&U(this._$AH)?this._$AA.nextSibling.data=t:this.k(w.createTextNode(t)),this._$AH=t}T(t){var e;let{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=g.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{let n=new M(o,this),l=n.p(this.options);n.m(i),this.k(l),this._$AH=n}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new g(t)),e}S(t){ot(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new A(this.M(T()),this.M(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},E=class{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let o=this.strings,n=!1;if(o===void 0)t=y(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==_,n&&(this._$AH=t);else{let l=t,a,h;for(t=o[0],a=0;a<o.length-1;a++)h=y(this,l[i+a],e,a),h===_&&(h=this._$AH[a]),n||(n=!U(h)||h!==this._$AH[a]),h===u?t=u:t!==u&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!s&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},I=class extends E{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}},Ct=C?C.emptyScript:"",L=class extends E{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,Ct):this.element.removeAttribute(this.name)}},B=class extends E{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=y(this,t,e,0))!==null&&i!==void 0?i:u)===_)return;let s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},k=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}},j={L:"$lit$",P:v,V:q,I:1,N:dt,R:M,j:lt,D:y,H:A,F:E,O:L,W:B,B:I,Z:k},nt=window.litHtmlPolyfillSupport;nt?.(g,A),((W=globalThis.litHtmlVersions)!==null&&W!==void 0?W:globalThis.litHtmlVersions=[]).push("2.2.5");var x={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};var{H:Bt}=j,ct=r=>r===null||typeof r!="object"&&typeof r!="function";var pt=(r,t)=>{var e,i;return t===void 0?((e=r)===null||e===void 0?void 0:e._$litType$)!==void 0:((i=r)===null||i===void 0?void 0:i._$litType$)===t};var ut=r=>r.strings===void 0;var{R:wt,j:xt,D:$t,H:R,Z:Pt}=j,vt=(r,t,e={})=>{if(t._$litPart$!==void 0)throw Error("container already contains a live render");let i,s,o=[],n=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT,null,!1),l;for(;(l=n.nextNode())!==null;){let a=l.data;if(a.startsWith("lit-part")){if(o.length===0&&i!==void 0)throw Error("there must be only one root part per container");s=Tt(r,l,o,e),i!=null||(i=s)}else if(a.startsWith("lit-node"))Rt(l,o,e);else if(a.startsWith("/lit-part")){if(o.length===1&&s!==i)throw Error("internal error");s=Ut(l,s,o)}}console.assert(i!==void 0,"there should be exactly one root part in a render container"),t._$litPart$=i},Tt=(r,t,e,i)=>{let s,o;if(e.length===0)o=new R(t,null,void 0,i),s=r;else{let n=e[e.length-1];if(n.type==="template-instance")o=new R(t,null,n.instance,i),n.instance.v.push(o),s=n.result.values[n.instancePartIndex++],n.templatePartIndex++;else if(n.type==="iterable"){o=new R(t,null,n.part,i);let l=n.iterator.next();if(l.done)throw s=void 0,n.done=!0,Error("Unhandled shorter than expected iterable");s=l.value,n.part._$AH.push(o)}else o=new R(t,null,n.part,i)}if(s=$t(o,s),s===_)e.push({part:o,type:"leaf"});else if(ct(s))e.push({part:o,type:"leaf"}),o._$AH=s;else if(pt(s)){let n="lit-part "+Ht(s);if(t.data!==n)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{let l=R.prototype._$AC(s),a=new wt(l,o);e.push({type:"template-instance",instance:a,part:o,templatePartIndex:0,instancePartIndex:0,result:s}),o._$AH=a}}else xt(s)?(e.push({part:o,type:"iterable",value:s,iterator:s[Symbol.iterator](),done:!1}),o._$AH=[]):(e.push({part:o,type:"leaf"}),o._$AH=s??"");return o},Ut=(r,t,e)=>{if(t===void 0)throw Error("unbalanced part marker");t._$AB=r;let i=e.pop();if(i.type==="iterable"&&!i.iterator.next().done)throw Error("unexpected longer than expected iterable");if(e.length>0)return e[e.length-1].part},Rt=(r,t,e)=>{var i;let s=/lit-node (\d+)/.exec(r.data),o=parseInt(s[1]),n=(i=r.previousElementSibling)!==null&&i!==void 0?i:r.parentElement;if(n===null)throw Error("could not find node for attribute parts");n.removeAttribute("defer-hydration");let l=t[t.length-1];if(l.type!=="template-instance")throw Error("internal error");{let a=l.instance;for(;;){let h=a._$AD.parts[l.templatePartIndex];if(h===void 0||h.type!==x.ATTRIBUTE&&h.type!==x.ELEMENT||h.index!==o)break;if(h.type===x.ATTRIBUTE){let p=new h.ctor(n,h.name,h.strings,l.instance,e),d=ut(p)?l.result.values[l.instancePartIndex]:l.result.values,c=!(p.type===x.EVENT||p.type===x.PROPERTY);p._$AI(d,p,l.instancePartIndex,c),l.instancePartIndex+=h.strings.length-1,a.v.push(p)}else{let p=new Pt(n,l.instance,e);$t(p,l.result.values[l.instancePartIndex++]),a.v.push(p)}l.templatePartIndex++}}},Ht=r=>{let t=new Uint32Array(2).fill(5381);for(let e of r.strings)for(let i=0;i<e.length;i++)t[i%2]=33*t[i%2]^e.charCodeAt(i);return btoa(String.fromCharCode(...new Uint8Array(t.buffer)))};globalThis.litElementHydrateSupport=({LitElement:r})=>{let t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r),"observedAttributes").get;Object.defineProperty(r,"observedAttributes",{get(){return[...t.call(this),"defer-hydration"]}});let e=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(n,l,a){n==="defer-hydration"&&a===null&&i.call(this),e.call(this,n,l,a)};let i=r.prototype.connectedCallback;r.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||i.call(this)};let s=r.prototype.createRenderRoot;r.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):s.call(this)};let o=Object.getPrototypeOf(r.prototype).update;r.prototype.update=function(n){let l=this.render();o.call(this,n),this._$AG?(this._$AG=!1,vt(l,this.renderRoot,this.renderOptions)):D(l,this.renderRoot,this.renderOptions)}};var z=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),_t=new Map,H=class{constructor(t,e){if(this._$cssResult$=!0,e!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=_t.get(this.cssText);return z&&t===void 0&&(_t.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},ft=r=>new H(typeof r=="string"?r:r+"",G),At=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new H(e,G)},K=(r,t)=>{z?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},V=z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ft(e)})(r):r;var Z,mt=window.trustedTypes,Ot=mt?mt.emptyScript:"",gt=window.reactiveElementPolyfillSupport,J={toAttribute(r,t){switch(t){case Boolean:r=r?Ot:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},yt=(r,t)=>t!==r&&(t==t||r==r),F={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:yt},f=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Eh(i,e);s!==void 0&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||F}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(V(s))}else t!==void 0&&e.push(V(t));return e}static _$Eh(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return K(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=F){var s,o;let n=this.constructor._$Eh(t,i);if(n!==void 0&&i.reflect===!0){let l=((o=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:J.toAttribute)(e,i.type);this._$Ei=t,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Ei=null}}_$AK(t,e){var i,s,o;let n=this.constructor,l=n._$Eu.get(t);if(l!==void 0&&this._$Ei!==l){let a=n.getPropertyOptions(l),h=a.converter,p=(o=(s=(i=h)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof h=="function"?h:null)!==null&&o!==void 0?o:J.fromAttribute;this._$Ei=l,this[l]=p(e,a.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||yt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,o)=>this[o]=s),this._$Et=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$ES(i,this[i],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},gt?.({ReactiveElement:f}),((Z=globalThis.reactiveElementVersions)!==null&&Z!==void 0?Z:globalThis.reactiveElementVersions=[]).push("1.3.2");var Y,Q;var b=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=D(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return _}};b.finalized=!0,b._$litElement$=!0,(Y=globalThis.litElementHydrateSupport)===null||Y===void 0||Y.call(globalThis,{LitElement:b});var Et=globalThis.litElementPolyfillSupport;Et?.({LitElement:b});((Q=globalThis.litElementVersions)!==null&&Q!==void 0?Q:globalThis.litElementVersions=[]).push("3.2.0");export{b as LitElement,At as css,St as html};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */