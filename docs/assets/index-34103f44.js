import{c as Mr,y as Lr,h as qr,z as Ar,A as Ur,B as $r,e as Pr,C as Dr,D as jr,E as Hr,F as Wr,G as Br,b as Fr,n as zr,j as Qr,g as Vr,I as Jr,s as Gr,f as Yr,a as Kr,d as Zr,l as te,K as Xr,i as Mt,o as st,J as at,H as eo}from"./http-c92910a5.js";import{g as Lt}from"./react-vendor-52657d9a.js";import{b as to}from"./browser-a1ac24ac.js";import{K as no}from"./ui-vendor-079a8d5b.js";import"./eth-vendor-717c6f2d.js";const ke="Session currently connected",D="Session currently disconnected",ro="Session Rejected",oo="Missing JSON RPC response",io='JSON-RPC success response must include "result" field',so='JSON-RPC error response must include "error" field',ao='JSON RPC request must have valid "method" value',co='JSON RPC request must have valid "id" value',lo="Missing one of the required parameters: bridge / uri / session",ct="JSON RPC response format is invalid",uo="URI format is invalid",_o="QRCode Modal not provided",lt="User close QRCode Modal",fo=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],ho=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],qe=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...ho],xe="WALLETCONNECT_DEEPLINK_CHOICE",po={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var qt=Ae;Ae.strict=At;Ae.loose=Ut;var mo=Object.prototype.toString,go={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function Ae(t){return At(t)||Ut(t)}function At(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function Ut(t){return go[mo.call(t)]}var vo=qt.strict,yo=function(e){if(vo(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const Ue="hex",$e="utf8",wo="binary",bo="buffer",ko="array",Eo="typed-array",So="array-buffer",he="0";function z(t){return new Uint8Array(t)}function Pe(t,e=!1){const n=t.toString(Ue);return e?ne(n):n}function De(t){return t.toString($e)}function $t(t){return t.readUIntBE(0,t.length)}function J(t){return yo(t)}function A(t,e=!1){return Pe(J(t),e)}function Pt(t){return De(J(t))}function Dt(t){return $t(J(t))}function je(t){return Buffer.from(Q(t),Ue)}function U(t){return z(je(t))}function Co(t){return De(je(t))}function xo(t){return Dt(U(t))}function He(t){return Buffer.from(t,$e)}function jt(t){return z(He(t))}function Io(t,e=!1){return Pe(He(t),e)}function Ro(t){const e=parseInt(t,10);return Qo(zo(e),"Number can only safely store up to 53 bits"),e}function To(t){return Lo(We(t))}function Oo(t){return Be(We(t))}function No(t,e){return qo(We(t),e)}function Mo(t){return`${t}`}function We(t){const e=(t>>>0).toString(2);return ze(e)}function Lo(t){return J(Be(t))}function Be(t){return new Uint8Array(jo(t).map(e=>parseInt(e,2)))}function qo(t,e){return A(Be(t),e)}function Ao(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function Ht(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function pe(t){return Buffer.isBuffer(t)}function Fe(t){return qt.strict(t)&&!pe(t)}function Wt(t){return!Fe(t)&&!pe(t)&&typeof t.byteLength<"u"}function Uo(t){return pe(t)?bo:Fe(t)?Eo:Wt(t)?So:Array.isArray(t)?ko:typeof t}function $o(t){return Ao(t)?wo:Ht(t)?Ue:$e}function Po(...t){return Buffer.concat(t)}function Bt(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function Do(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function jo(t,e=8){const n=ze(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function ze(t,e=8,n=he){return Ho(t,Do(t.length,e),n)}function Ho(t,e,n=he){return Vo(t,e,!0,n)}function Q(t){return t.replace(/^0x/,"")}function ne(t){return t.startsWith("0x")?t:`0x${t}`}function Wo(t){return t=Q(t),t=ze(t,2),t&&(t=ne(t)),t}function Bo(t){const e=t.startsWith("0x");return t=Q(t),t=t.startsWith(he)?t.substring(1):t,e?ne(t):t}function Fo(t){return typeof t>"u"}function zo(t){return!Fo(t)}function Qo(t,e){if(!t)throw new Error(e)}function Vo(t,e,n,r=he){const o=e-t.length;let i=t;if(o>0){const c=r.repeat(o);i=n?c+t:t+c}return i}function le(t){return J(new Uint8Array(t))}function Jo(t){return Pt(new Uint8Array(t))}function Ft(t,e){return A(new Uint8Array(t),!e)}function Go(t){return Dt(new Uint8Array(t))}function Yo(...t){return U(t.map(e=>A(new Uint8Array(e))).join("")).buffer}function zt(t){return z(t).buffer}function Ko(t){return De(t)}function Zo(t,e){return Pe(t,!e)}function Xo(t){return $t(t)}function ei(...t){return Po(...t)}function ti(t){return jt(t).buffer}function ni(t){return He(t)}function ri(t,e){return Io(t,!e)}function oi(t){return Ro(t)}function ii(t){return je(t)}function Qt(t){return U(t).buffer}function si(t){return Co(t)}function ai(t){return xo(t)}function ci(t){return To(t)}function li(t){return Oo(t).buffer}function ui(t){return Mo(t)}function Vt(t,e){return No(Number(t),!e)}const _i=Ar,di=Ur,fi=$r,hi=Pr,pi=Dr,Jt=qr,mi=jr,Gt=Mr,gi=Hr,vi=Wr,yi=Br,me=Lr;function ge(t){return Fr(t)}function ve(){const t=ge();return t&&t.os?t.os:void 0}function Yt(){const t=ve();return t?t.toLowerCase().includes("android"):!1}function Kt(){const t=ve();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function Zt(){return ve()?Yt()||Kt():!1}function Xt(){const t=ge();return t&&t.name?t.name.toLowerCase()==="node":!1}function en(){return!Xt()&&!!Jt()}const tn=zr,nn=Qr;function Qe(t,e){const n=nn(e),r=me();r&&r.setItem(t,n)}function Ve(t){let e=null,n=null;const r=me();return r&&(n=r.getItem(t)),e=n&&tn(n),e}function Je(t){const e=me();e&&e.removeItem(t)}function Ie(){return Vr()}function wi(t){return Wo(t)}function bi(t){return ne(t)}function ki(t){return Q(t)}function Ei(t){return Bo(ne(t))}const rn=Jr;function se(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Si(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function on(t,e){let n;const r=po[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function sn(t,e){let n;const r=on(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function Ci(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function xi(t){const e=t.href.split("?")[0];Qe(xe,Object.assign(Object.assign({},t),{href:e}))}function an(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Ii(t,e){let n=t;return e&&(n=e.map(r=>an(t,r)).filter(Boolean)),n}function Ri(t,e){return async(...r)=>new Promise((o,i)=>{const c=(_,m)=>{(_===null||typeof _>"u")&&i(_),o(m)};t.apply(e,[...r,c])})}function cn(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const ln="https://registry.walletconnect.com";function Ti(){return ln+"/api/v2/wallets"}function Oi(){return ln+"/api/v2/dapps"}function un(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function Ni(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>un(n,e))}var Ge={};(function(t){const e=Kr,n=Zr,r=Gr,o=Yr,i=a=>a==null;function c(a){switch(a.arrayFormat){case"index":return l=>(f,u)=>{const v=f.length;return u===void 0||a.skipNull&&u===null||a.skipEmptyString&&u===""?f:u===null?[...f,[p(l,a),"[",v,"]"].join("")]:[...f,[p(l,a),"[",p(v,a),"]=",p(u,a)].join("")]};case"bracket":return l=>(f,u)=>u===void 0||a.skipNull&&u===null||a.skipEmptyString&&u===""?f:u===null?[...f,[p(l,a),"[]"].join("")]:[...f,[p(l,a),"[]=",p(u,a)].join("")];case"comma":case"separator":return l=>(f,u)=>u==null||u.length===0?f:f.length===0?[[p(l,a),"=",p(u,a)].join("")]:[[f,p(u,a)].join(a.arrayFormatSeparator)];default:return l=>(f,u)=>u===void 0||a.skipNull&&u===null||a.skipEmptyString&&u===""?f:u===null?[...f,p(l,a)]:[...f,[p(l,a),"=",p(u,a)].join("")]}}function _(a){let l;switch(a.arrayFormat){case"index":return(f,u,v)=>{if(l=/\[(\d*)\]$/.exec(f),f=f.replace(/\[\d*\]$/,""),!l){v[f]=u;return}v[f]===void 0&&(v[f]={}),v[f][l[1]]=u};case"bracket":return(f,u,v)=>{if(l=/(\[\])$/.exec(f),f=f.replace(/\[\]$/,""),!l){v[f]=u;return}if(v[f]===void 0){v[f]=[u];return}v[f]=[].concat(v[f],u)};case"comma":case"separator":return(f,u,v)=>{const E=typeof u=="string"&&u.includes(a.arrayFormatSeparator),w=typeof u=="string"&&!E&&s(u,a).includes(a.arrayFormatSeparator);u=w?s(u,a):u;const C=E||w?u.split(a.arrayFormatSeparator).map(T=>s(T,a)):u===null?u:s(u,a);v[f]=C};default:return(f,u,v)=>{if(v[f]===void 0){v[f]=u;return}v[f]=[].concat(v[f],u)}}}function m(a){if(typeof a!="string"||a.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function p(a,l){return l.encode?l.strict?e(a):encodeURIComponent(a):a}function s(a,l){return l.decode?n(a):a}function b(a){return Array.isArray(a)?a.sort():typeof a=="object"?b(Object.keys(a)).sort((l,f)=>Number(l)-Number(f)).map(l=>a[l]):a}function g(a){const l=a.indexOf("#");return l!==-1&&(a=a.slice(0,l)),a}function h(a){let l="";const f=a.indexOf("#");return f!==-1&&(l=a.slice(f)),l}function k(a){a=g(a);const l=a.indexOf("?");return l===-1?"":a.slice(l+1)}function I(a,l){return l.parseNumbers&&!Number.isNaN(Number(a))&&typeof a=="string"&&a.trim()!==""?a=Number(a):l.parseBooleans&&a!==null&&(a.toLowerCase()==="true"||a.toLowerCase()==="false")&&(a=a.toLowerCase()==="true"),a}function S(a,l){l=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},l),m(l.arrayFormatSeparator);const f=_(l),u=Object.create(null);if(typeof a!="string"||(a=a.trim().replace(/^[?#&]/,""),!a))return u;for(const v of a.split("&")){if(v==="")continue;let[E,w]=r(l.decode?v.replace(/\+/g," "):v,"=");w=w===void 0?null:["comma","separator"].includes(l.arrayFormat)?w:s(w,l),f(s(E,l),w,u)}for(const v of Object.keys(u)){const E=u[v];if(typeof E=="object"&&E!==null)for(const w of Object.keys(E))E[w]=I(E[w],l);else u[v]=I(E,l)}return l.sort===!1?u:(l.sort===!0?Object.keys(u).sort():Object.keys(u).sort(l.sort)).reduce((v,E)=>{const w=u[E];return Boolean(w)&&typeof w=="object"&&!Array.isArray(w)?v[E]=b(w):v[E]=w,v},Object.create(null))}t.extract=k,t.parse=S,t.stringify=(a,l)=>{if(!a)return"";l=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},l),m(l.arrayFormatSeparator);const f=w=>l.skipNull&&i(a[w])||l.skipEmptyString&&a[w]==="",u=c(l),v={};for(const w of Object.keys(a))f(w)||(v[w]=a[w]);const E=Object.keys(v);return l.sort!==!1&&E.sort(l.sort),E.map(w=>{const C=a[w];return C===void 0?"":C===null?p(w,l):Array.isArray(C)?C.reduce(u(w),[]).join("&"):p(w,l)+"="+p(C,l)}).filter(w=>w.length>0).join("&")},t.parseUrl=(a,l)=>{l=Object.assign({decode:!0},l);const[f,u]=r(a,"#");return Object.assign({url:f.split("?")[0]||"",query:S(k(a),l)},l&&l.parseFragmentIdentifier&&u?{fragmentIdentifier:s(u,l)}:{})},t.stringifyUrl=(a,l)=>{l=Object.assign({encode:!0,strict:!0},l);const f=g(a.url).split("?")[0]||"",u=t.extract(a.url),v=t.parse(u,{sort:!1}),E=Object.assign(v,a.query);let w=t.stringify(E,l);w&&(w=`?${w}`);let C=h(a.url);return a.fragmentIdentifier&&(C=`#${p(a.fragmentIdentifier,l)}`),`${f}${w}${C}`},t.pick=(a,l,f)=>{f=Object.assign({parseFragmentIdentifier:!0},f);const{url:u,query:v,fragmentIdentifier:E}=t.parseUrl(a,f);return t.stringifyUrl({url:u,query:o(v,l),fragmentIdentifier:E},f)},t.exclude=(a,l,f)=>{const u=Array.isArray(l)?v=>!l.includes(v):(v,E)=>!l(v,E);return t.pick(a,u,f)}})(Ge);function _n(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function dn(t,e){let n=Ye(t);return n=Object.assign(Object.assign({},n),e),t=fn(n),t}function Ye(t){return Ge.parse(t)}function fn(t){return Ge.stringify(t)}function hn(t){return typeof t.bridge<"u"}function pn(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(b){const g="@",h=b.split(g);return{handshakeTopic:h[0],version:parseInt(h[1],10)}}const c=i(o),_=typeof n<"u"?t.substr(n):"";function m(b){const g=Ye(b);return{key:g.key||"",bridge:g.bridge||""}}const p=m(_);return Object.assign(Object.assign({protocol:r},c),p)}function Mi(t){return t===""||typeof t=="string"&&t.trim()===""}function Li(t){return!(t&&t.length)}function qi(t){return pe(t)}function Ai(t){return Fe(t)}function Ui(t){return Wt(t)}function $i(t){return Uo(t)}function Pi(t){return $o(t)}function Di(t,e){return Ht(t,e)}function ji(t){return typeof t.params=="object"}function mn(t){return typeof t.method<"u"}function B(t){return typeof t.result<"u"}function Z(t){return typeof t.error<"u"}function Re(t){return typeof t.event<"u"}function gn(t){return fo.includes(t)||t.startsWith("wc_")}function vn(t){return t.method.startsWith("wc_")?!0:!qe.includes(t.method)}const Hi=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:bi,appendToQueryString:dn,concatArrayBuffers:Yo,concatBuffers:ei,convertArrayBufferToBuffer:le,convertArrayBufferToHex:Ft,convertArrayBufferToNumber:Go,convertArrayBufferToUtf8:Jo,convertBufferToArrayBuffer:zt,convertBufferToHex:Zo,convertBufferToNumber:Xo,convertBufferToUtf8:Ko,convertHexToArrayBuffer:Qt,convertHexToBuffer:ii,convertHexToNumber:ai,convertHexToUtf8:si,convertNumberToArrayBuffer:li,convertNumberToBuffer:ci,convertNumberToHex:Vt,convertNumberToUtf8:ui,convertUtf8ToArrayBuffer:ti,convertUtf8ToBuffer:ni,convertUtf8ToHex:ri,convertUtf8ToNumber:oi,detectEnv:ge,detectOS:ve,formatIOSMobile:Ci,formatMobileRegistry:Ni,formatMobileRegistryEntry:un,formatQueryString:fn,formatRpcError:cn,getClientMeta:Ie,getCrypto:vi,getCryptoOrThrow:gi,getDappRegistryUrl:Oi,getDocument:hi,getDocumentOrThrow:fi,getEncoding:Pi,getFromWindow:_i,getFromWindowOrThrow:di,getInfuraRpcUrl:on,getLocal:Ve,getLocalStorage:me,getLocalStorageOrThrow:yi,getLocation:Gt,getLocationOrThrow:mi,getMobileLinkRegistry:Ii,getMobileRegistryEntry:an,getNavigator:Jt,getNavigatorOrThrow:pi,getQueryString:_n,getRpcUrl:sn,getType:$i,getWalletRegistryUrl:Ti,isAndroid:Yt,isArrayBuffer:Ui,isBrowser:en,isBuffer:qi,isEmptyArray:Li,isEmptyString:Mi,isHexString:Di,isIOS:Kt,isInternalEvent:Re,isJsonRpcRequest:mn,isJsonRpcResponseError:Z,isJsonRpcResponseSuccess:B,isJsonRpcSubscription:ji,isMobile:Zt,isNode:Xt,isReservedEvent:gn,isSilentPayload:vn,isTypedArray:Ai,isWalletConnectSession:hn,logDeprecationWarning:Si,parseQueryString:Ye,parseWalletConnectUri:pn,payloadId:rn,promisify:Ri,removeHexLeadingZeros:Ei,removeHexPrefix:ki,removeLocal:Je,safeJsonParse:tn,safeJsonStringify:nn,sanitizeHex:wi,saveMobileLinkInfo:xi,setLocal:Qe,uuid:se},Symbol.toStringTag,{value:"Module"}));class Wi{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const Bi=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class Fi{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new Wi,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=zi(this._url,this._protocol,this._version);if(this._nextSocket=new Bi(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function zi(t,e,n){var r,o;const c=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),_=en()?{protocol:e,version:n,env:"browser",host:((r=Gt())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=ge())===null||o===void 0?void 0:o.name)||""},m=dn(_n(c[1]||""),_);return c[0]+"?"+m}class Qi{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;mn(e)?r=e.method:B(e)||Z(e)?r=`response:${e.id}`:Re(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!gn(r)&&!Re(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(Z(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class Vi{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=Ve(this.storageId);return n&&hn(n)&&(e=n),e}setSession(e){return Qe(this.storageId,e),e}removeSession(){Je(this.storageId)}}const Ji="walletconnect.org",Gi="abcdefghijklmnopqrstuvwxyz0123456789",yn=Gi.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function Yi(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function Ki(t){return Yi(t).split(".").slice(-2).join(".")}function Zi(){return Math.floor(Math.random()*yn.length)}function Xi(){return yn[Zi()]}function es(t){return Ki(t)===Ji}function ts(t){return es(t)?Xi():t}class ns{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new Qi,this._clientMeta=Ie()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new Vi(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...qe,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(lo);e.connectorOpts.bridge&&(this.bridge=ts(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new Fi({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=Qt(e);this._key=n}get key(){return this._key?Ft(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=se()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=Ie()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=se(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(lt)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(_o);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(lt))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(ke);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=se(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(ke);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(ke);const n=e&&e.message?e.message:ro,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(D);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(D);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(D);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(D);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(D);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(D);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,c)=>{if(i){o(i);return}if(!c)throw new Error(oo);r(c)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(D);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return Vt(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(B(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(io)}rejectRequest(e){if(Z(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(so)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,c=JSON.stringify(o),_=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:vn(r);this._transport.send(c,i,_)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n),i=!0;this._transport.send(o,r,i)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(ao);return{id:typeof e.id>"u"?rn():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(co);const n={id:e.id,jsonrpc:"2.0"};if(Z(e)){const r=cn(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(B(e))return Object.assign(Object.assign({},n),e);throw new Error(ct)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),Je(xe)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}B(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}B(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(ct))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(Zt()&&this._signingMethods.includes(r.method)){const o=Ve(xe);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=pn(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(uo)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function rs(t){return te.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const wn=256,bn=wn,os=wn,$="AES-CBC",is=`SHA-${bn}`,Te="HMAC",ss="encrypt",as="decrypt",cs="sign",ls="verify";function us(t){return t===$?{length:bn,name:$}:{hash:{name:is},name:Te}}function _s(t){return t===$?[ss,as]:[cs,ls]}async function Ke(t,e=$){return te.getSubtleCrypto().importKey("raw",t,us(e),!0,_s(e))}async function ds(t,e,n){const r=te.getSubtleCrypto(),o=await Ke(e,$),i=await r.encrypt({iv:t,name:$},o,n);return new Uint8Array(i)}async function fs(t,e,n){const r=te.getSubtleCrypto(),o=await Ke(e,$),i=await r.decrypt({iv:t,name:$},o,n);return new Uint8Array(i)}async function hs(t,e){const n=te.getSubtleCrypto(),r=await Ke(t,Te),o=await n.sign({length:os,name:Te},r,e);return new Uint8Array(o)}function ps(t,e,n){return ds(t,e,n)}function ms(t,e,n){return fs(t,e,n)}async function kn(t,e){return await hs(t,e)}async function En(t){const e=(t||256)/8,n=rs(e);return zt(J(n))}async function Sn(t,e){const n=U(t.data),r=U(t.iv),o=U(t.hmac),i=A(o,!1),c=Bt(n,r),_=await kn(e,c),m=A(_,!1);return Q(i)===Q(m)}async function gs(t,e,n){const r=z(le(e)),o=n||await En(128),i=z(le(o)),c=A(i,!1),_=JSON.stringify(t),m=jt(_),p=await ps(i,r,m),s=A(p,!1),b=Bt(p,i),g=await kn(r,b),h=A(g,!1);return{data:s,hmac:h,iv:c}}async function vs(t,e){const n=z(le(e));if(!n)throw new Error("Missing key: required for decryption");if(!await Sn(t,n))return null;const o=U(t.data),i=U(t.iv),c=await ms(i,n,o),_=Pt(c);let m;try{m=JSON.parse(_)}catch{return null}return m}const ys=Object.freeze(Object.defineProperty({__proto__:null,decrypt:vs,encrypt:gs,generateKey:En,verifyHmac:Sn},Symbol.toStringTag,{value:"Module"}));class ws extends ns{constructor(e,n){super({cryptoLib:ys,connectorOpts:e,pushServerOpts:n})}}const bs=Lt(Hi);var re,y,Cn,j,ut,xn,Oe,In,ue={},Rn=[],ks=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function M(t,e){for(var n in e)t[n]=e[n];return t}function Tn(t){var e=t.parentNode;e&&e.removeChild(t)}function N(t,e,n){var r,o,i,c={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?re.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return Y(t,c,r,o,null)}function Y(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Cn};return o==null&&y.vnode!=null&&y.vnode(i),i}function On(){return{current:null}}function q(t){return t.children}function O(t,e){this.props=t,this.context=e}function X(t,e){if(e==null)return t.__?X(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?X(t):null}function Nn(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Nn(t)}}function Ne(t){(!t.__d&&(t.__d=!0)&&j.push(t)&&!_e.__r++||ut!==y.debounceRendering)&&((ut=y.debounceRendering)||xn)(_e)}function _e(){var t,e,n,r,o,i,c,_;for(j.sort(Oe);t=j.shift();)t.__d&&(e=j.length,r=void 0,o=void 0,c=(i=(n=t).__v).__e,(_=n.__P)&&(r=[],(o=M({},i)).__v=i.__v+1,Ze(_,i,o,n.__n,_.ownerSVGElement!==void 0,i.__h!=null?[c]:null,r,c??X(i),i.__h),Un(r,i),i.__e!=c&&Nn(i)),j.length>e&&j.sort(Oe));_e.__r=0}function Mn(t,e,n,r,o,i,c,_,m,p){var s,b,g,h,k,I,S,a=r&&r.__k||Rn,l=a.length;for(n.__k=[],s=0;s<e.length;s++)if((h=n.__k[s]=(h=e[s])==null||typeof h=="boolean"||typeof h=="function"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?Y(null,h,null,null,h):Array.isArray(h)?Y(q,{children:h},null,null,null):h.__b>0?Y(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(g=a[s])===null||g&&h.key==g.key&&h.type===g.type)a[s]=void 0;else for(b=0;b<l;b++){if((g=a[b])&&h.key==g.key&&h.type===g.type){a[b]=void 0;break}g=null}Ze(t,h,g=g||ue,o,i,c,_,m,p),k=h.__e,(b=h.ref)&&g.ref!=b&&(S||(S=[]),g.ref&&S.push(g.ref,null,h),S.push(b,h.__c||k,h)),k!=null?(I==null&&(I=k),typeof h.type=="function"&&h.__k===g.__k?h.__d=m=Ln(h,m,t):m=qn(t,h,g,a,k,m),typeof n.type=="function"&&(n.__d=m)):m&&g.__e==m&&m.parentNode!=t&&(m=X(g))}for(n.__e=I,s=l;s--;)a[s]!=null&&(typeof n.type=="function"&&a[s].__e!=null&&a[s].__e==n.__d&&(n.__d=An(r).nextSibling),Pn(a[s],a[s]));if(S)for(s=0;s<S.length;s++)$n(S[s],S[++s],S[++s])}function Ln(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e=typeof r.type=="function"?Ln(r,e,n):qn(n,r,r,o,r.__e,e));return e}function L(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){L(n,e)}):e.push(t)),e}function qn(t,e,n,r,o,i){var c,_,m;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==t)t.appendChild(o),c=null;else{for(_=i,m=0;(_=_.nextSibling)&&m<r.length;m+=1)if(_==o)break e;t.insertBefore(o,i),c=i}return c!==void 0?c:o.nextSibling}function An(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=An(n)))return r}return null}function Es(t,e,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in e||de(t,i,null,n[i],r);for(i in e)o&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||de(t,i,e[i],n[i],r)}function _t(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||ks.test(e)?n:n+"px"}function de(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||_t(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||_t(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?ft:dt,i):t.removeEventListener(e,i?ft:dt,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e.indexOf("-")==-1?t.removeAttribute(e):t.setAttribute(e,n))}}function dt(t){return this.l[t.type+!1](y.event?y.event(t):t)}function ft(t){return this.l[t.type+!0](y.event?y.event(t):t)}function Ze(t,e,n,r,o,i,c,_,m){var p,s,b,g,h,k,I,S,a,l,f,u,v,E,w,C=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(m=n.__h,_=e.__e=n.__e,e.__h=null,i=[_]),(p=y.__b)&&p(e);try{e:if(typeof C=="function"){if(S=e.props,a=(p=C.contextType)&&r[p.__c],l=p?a?a.props.value:p.__:r,n.__c?I=(s=e.__c=n.__c).__=s.__E:("prototype"in C&&C.prototype.render?e.__c=s=new C(S,l):(e.__c=s=new O(S,l),s.constructor=C,s.render=Cs),a&&a.sub(s),s.props=S,s.state||(s.state={}),s.context=l,s.__n=r,b=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),C.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=M({},s.__s)),M(s.__s,C.getDerivedStateFromProps(S,s.__s))),g=s.props,h=s.state,s.__v=e,b)C.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(C.getDerivedStateFromProps==null&&S!==g&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(S,l),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(S,s.__s,l)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(s.props=S,s.state=s.__s,s.__d=!1),s.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(T){T&&(T.__=e)}),f=0;f<s._sb.length;f++)s.__h.push(s._sb[f]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(S,s.__s,l),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(g,h,k)})}if(s.context=l,s.props=S,s.__P=t,u=y.__r,v=0,"prototype"in C&&C.prototype.render){for(s.state=s.__s,s.__d=!1,u&&u(e),p=s.render(s.props,s.state,s.context),E=0;E<s._sb.length;E++)s.__h.push(s._sb[E]);s._sb=[]}else do s.__d=!1,u&&u(e),p=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++v<25);s.state=s.__s,s.getChildContext!=null&&(r=M(M({},r),s.getChildContext())),b||s.getSnapshotBeforeUpdate==null||(k=s.getSnapshotBeforeUpdate(g,h)),w=p!=null&&p.type===q&&p.key==null?p.props.children:p,Mn(t,Array.isArray(w)?w:[w],e,n,r,o,i,c,_,m),s.base=e.__e,e.__h=null,s.__h.length&&c.push(s),I&&(s.__E=s.__=null),s.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ss(n.__e,e,n,r,o,i,c,m);(p=y.diffed)&&p(e)}catch(T){e.__v=null,(m||i!=null)&&(e.__e=_,e.__h=!!m,i[i.indexOf(_)]=null),y.__e(T,e,n)}}function Un(t,e){y.__c&&y.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){y.__e(r,n.__v)}})}function Ss(t,e,n,r,o,i,c,_){var m,p,s,b=n.props,g=e.props,h=e.type,k=0;if(h==="svg"&&(o=!0),i!=null){for(;k<i.length;k++)if((m=i[k])&&"setAttribute"in m==!!h&&(h?m.localName===h:m.nodeType===3)){t=m,i[k]=null;break}}if(t==null){if(h===null)return document.createTextNode(g);t=o?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,g.is&&g),i=null,_=!1}if(h===null)b===g||_&&t.data===g||(t.data=g);else{if(i=i&&re.call(t.childNodes),p=(b=n.props||ue).dangerouslySetInnerHTML,s=g.dangerouslySetInnerHTML,!_){if(i!=null)for(b={},k=0;k<t.attributes.length;k++)b[t.attributes[k].name]=t.attributes[k].value;(s||p)&&(s&&(p&&s.__html==p.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(Es(t,g,b,o,_),s)e.__k=[];else if(k=e.props.children,Mn(t,Array.isArray(k)?k:[k],e,n,r,o&&h!=="foreignObject",i,c,i?i[0]:n.__k&&X(n,0),_),i!=null)for(k=i.length;k--;)i[k]!=null&&Tn(i[k]);_||("value"in g&&(k=g.value)!==void 0&&(k!==t.value||h==="progress"&&!k||h==="option"&&k!==b.value)&&de(t,"value",k,b.value,!1),"checked"in g&&(k=g.checked)!==void 0&&k!==t.checked&&de(t,"checked",k,b.checked,!1))}return t}function $n(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){y.__e(r,n)}}function Pn(t,e,n){var r,o;if(y.unmount&&y.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||$n(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){y.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Pn(r[o],e,n||typeof t.type!="function");n||t.__e==null||Tn(t.__e),t.__=t.__e=t.__d=void 0}function Cs(t,e,n){return this.constructor(t,n)}function ee(t,e,n){var r,o,i;y.__&&y.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],Ze(e,t=(!r&&n||e).__k=N(q,null,[t]),o||ue,ue,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?re.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r),Un(i,t)}function Dn(t,e){ee(t,e,Dn)}function xs(t,e,n){var r,o,i,c=M({},t.props);for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:c[i]=e[i];return arguments.length>2&&(c.children=arguments.length>3?re.call(arguments,2):n),Y(t.type,c,r||t.key,o||t.ref,null)}function jn(t,e){var n={__c:e="__cC"+In++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(_){_.__e=!0,Ne(_)})},this.sub=function(c){o.push(c);var _=c.componentWillUnmount;c.componentWillUnmount=function(){o.splice(o.indexOf(c),1),_&&_.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}re=Rn.slice,y={__e:function(t,e,n,r){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),c=o.__d),c)return o.__E=o}catch(_){t=_}throw t}},Cn=0,O.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=M({},this.state),typeof t=="function"&&(t=t(M({},n),this.props)),t&&M(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ne(this))},O.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ne(this))},O.prototype.render=q,j=[],xn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Oe=function(t,e){return t.__v.__b-e.__v.__b},_e.__r=0,In=0;var P,x,Ee,ht,V=0,Hn=[],ae=[],pt=y.__b,mt=y.__r,gt=y.diffed,vt=y.__c,yt=y.unmount;function H(t,e){y.__h&&y.__h(x,t,V||e),V=0;var n=x.__H||(x.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:ae}),n.__[t]}function ye(t){return V=1,Xe(Jn,t)}function Xe(t,e,n){var r=H(P++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Jn(void 0,e),function(_){var m=r.__N?r.__N[0]:r.__[0],p=r.t(m,_);m!==p&&(r.__N=[p,r.__[1]],r.__c.setState({}))}],r.__c=x,!x.u)){var o=function(_,m,p){if(!r.__c.__H)return!0;var s=r.__c.__H.__.filter(function(g){return g.__c});if(s.every(function(g){return!g.__N}))return!i||i.call(this,_,m,p);var b=!1;return s.forEach(function(g){if(g.__N){var h=g.__[0];g.__=g.__N,g.__N=void 0,h!==g.__[0]&&(b=!0)}}),!(!b&&r.__c.props===_)&&(!i||i.call(this,_,m,p))};x.u=!0;var i=x.shouldComponentUpdate,c=x.componentWillUpdate;x.componentWillUpdate=function(_,m,p){if(this.__e){var s=i;i=void 0,o(_,m,p),i=s}c&&c.call(this,_,m,p)},x.shouldComponentUpdate=o}return r.__N||r.__}function et(t,e){var n=H(P++,3);!y.__s&&tt(n.__H,e)&&(n.__=t,n.i=e,x.__H.__h.push(n))}function oe(t,e){var n=H(P++,4);!y.__s&&tt(n.__H,e)&&(n.__=t,n.i=e,x.__h.push(n))}function Wn(t){return V=5,we(function(){return{current:t}},[])}function Bn(t,e,n){V=6,oe(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function we(t,e){var n=H(P++,7);return tt(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Fn(t,e){return V=8,we(function(){return t},e)}function zn(t){var e=x.context[t.__c],n=H(P++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(x)),e.props.value):t.__}function Qn(t,e){y.useDebugValue&&y.useDebugValue(e?e(t):t)}function Is(t){var e=H(P++,10),n=ye();return e.__=t,x.componentDidCatch||(x.componentDidCatch=function(r,o){e.__&&e.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Vn(){var t=H(P++,11);if(!t.__){for(var e=x.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Rs(){for(var t;t=Hn.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ce),t.__H.__h.forEach(Me),t.__H.__h=[]}catch(e){t.__H.__h=[],y.__e(e,t.__v)}}y.__b=function(t){x=null,pt&&pt(t)},y.__r=function(t){mt&&mt(t),P=0;var e=(x=t.__c).__H;e&&(Ee===x?(e.__h=[],x.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ae,n.__N=n.i=void 0})):(e.__h.forEach(ce),e.__h.forEach(Me),e.__h=[])),Ee=x},y.diffed=function(t){gt&&gt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Hn.push(e)!==1&&ht===y.requestAnimationFrame||((ht=y.requestAnimationFrame)||Ts)(Rs)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ae&&(n.__=n.__V),n.i=void 0,n.__V=ae})),Ee=x=null},y.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ce),n.__h=n.__h.filter(function(r){return!r.__||Me(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],y.__e(r,n.__v)}}),vt&&vt(t,e)},y.unmount=function(t){yt&&yt(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ce(r)}catch(o){e=o}}),n.__H=void 0,e&&y.__e(e,n.__v))};var wt=typeof requestAnimationFrame=="function";function Ts(t){var e,n=function(){clearTimeout(r),wt&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);wt&&(e=requestAnimationFrame(n))}function ce(t){var e=x,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),x=e}function Me(t){var e=x;t.__c=t.__(),x=e}function tt(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Jn(t,e){return typeof e=="function"?e(t):e}function Gn(t,e){for(var n in e)t[n]=e[n];return t}function Le(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Se(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function fe(t){this.props=t}function Yn(t,e){function n(o){var i=this.props.ref,c=i==o.ref;return!c&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!c:Le(this.props,o)}function r(o){return this.shouldComponentUpdate=n,N(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(fe.prototype=new O).isPureReactComponent=!0,fe.prototype.shouldComponentUpdate=function(t,e){return Le(this.props,t)||Le(this.state,e)};var bt=y.__b;y.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),bt&&bt(t)};var Os=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Kn(t){function e(n){var r=Gn({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Os,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var kt=function(t,e){return t==null?null:L(L(t).map(e))},Zn={map:kt,forEach:kt,count:function(t){return t?L(t).length:0},only:function(t){var e=L(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:L},Ns=y.__e;y.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}Ns(t,e,n,r)};var Et=y.unmount;function Xn(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Gn({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return Xn(r,e,n)})),t}function er(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return er(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function K(){this.__u=0,this.t=null,this.__b=null}function tr(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function nr(t){var e,n,r;function o(i){if(e||(e=t()).then(function(c){n=c.default||c},function(c){r=c}),r)throw r;if(!n)throw e;return N(n,i)}return o.displayName="Lazy",o.__f=!0,o}function F(){this.u=null,this.o=null}y.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Et&&Et(t)},(K.prototype=new O).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=tr(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(_):_())};n.__R=c;var _=function(){if(!--r.__u){if(r.state.__a){var p=r.state.__a;r.__v.__k[0]=er(p,p.__c.__P,p.__c.__O)}var s;for(r.setState({__a:r.__b=null});s=r.t.pop();)s.forceUpdate()}},m=e.__h===!0;r.__u++||m||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(c,c)},K.prototype.componentWillUnmount=function(){this.t=[]},K.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Xn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&N(q,null,t.fallback);return o&&(o.__h=null),[N(q,null,e.__a?null:t.children),o]};var St=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Ms(t){return this.getChildContext=function(){return t.context},t.children}function Ls(t){var e=this,n=t.i;e.componentWillUnmount=function(){ee(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),ee(N(Ms,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function rr(t,e){var n=N(Ls,{__v:t,i:e});return n.containerInfo=e,n}(F.prototype=new O).__a=function(t){var e=this,n=tr(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),St(e,t,r)):o()};n?n(i):i()}},F.prototype.render=function(t){this.u=null,this.o=new Map;var e=L(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){St(t,n,e)})};var or=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,qs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,As=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Us=/[A-Z0-9]/g,$s=typeof document<"u",Ps=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function ir(t,e,n){return e.__k==null&&(e.textContent=""),ee(t,e),typeof n=="function"&&n(),t?t.__c:null}function sr(t,e,n){return Dn(t,e),typeof n=="function"&&n(),t?t.__c:null}O.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(O.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Ct=y.event;function Ds(){}function js(){return this.cancelBubble}function Hs(){return this.defaultPrevented}y.event=function(t){return Ct&&(t=Ct(t)),t.persist=Ds,t.isPropagationStopped=js,t.isDefaultPrevented=Hs,t.nativeEvent=t};var nt,xt={configurable:!0,get:function(){return this.class}},It=y.vnode;y.vnode=function(t){var e=t.type,n=t.props,r=n;if(typeof e=="string"){for(var o in r={},n){var i=n[o];if(!(o==="value"&&"defaultValue"in n&&i==null||$s&&o==="children"&&e==="noscript")){var c=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&i===!0?i="":c==="ondoubleclick"?o="ondblclick":c!=="onchange"||e!=="input"&&e!=="textarea"||Ps(n.type)?c==="onfocus"?o="onfocusin":c==="onblur"?o="onfocusout":As.test(o)?o=c:e.indexOf("-")===-1&&qs.test(o)?o=o.replace(Us,"-$&").toLowerCase():i===null&&(i=void 0):c=o="oninput",c==="oninput"&&r[o=c]&&(o="oninputCapture"),r[o]=i}}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=L(n.children).forEach(function(_){_.props.selected=r.value.indexOf(_.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=L(n.children).forEach(function(_){_.props.selected=r.multiple?r.defaultValue.indexOf(_.props.value)!=-1:r.defaultValue==_.props.value})),t.props=r,n.class!=n.className&&(xt.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",xt))}t.$$typeof=or,It&&It(t)};var Rt=y.__r;y.__r=function(t){Rt&&Rt(t),nt=t.__c};var Tt=y.diffed;y.diffed=function(t){Tt&&Tt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),nt=null};var ar={ReactCurrentDispatcher:{current:{readContext:function(t){return nt.__n[t.__c].props.value}}}},Ws="17.0.2";function cr(t){return N.bind(null,t)}function rt(t){return!!t&&t.$$typeof===or}function lr(t){return rt(t)?xs.apply(null,arguments):t}function ur(t){return!!t.__k&&(ee(null,t),!0)}function _r(t){return t&&(t.base||t.nodeType===1&&t)||null}var dr=function(t,e){return t(e)},fr=function(t,e){return t(e)},hr=q;function ot(t){t()}function pr(t){return t}function mr(){return[!1,ot]}var gr=oe;function vr(t,e){var n=e(),r=ye({h:{__:n,v:e}}),o=r[0].h,i=r[1];return oe(function(){o.__=n,o.v=e,Se(o.__,e())||i({h:o})},[t,n,e]),et(function(){return Se(o.__,o.v())||i({h:o}),t(function(){Se(o.__,o.v())||i({h:o})})},[t]),n}var Bs={useState:ye,useId:Vn,useReducer:Xe,useEffect:et,useLayoutEffect:oe,useInsertionEffect:gr,useTransition:mr,useDeferredValue:pr,useSyncExternalStore:vr,startTransition:ot,useRef:Wn,useImperativeHandle:Bn,useMemo:we,useCallback:Fn,useContext:zn,useDebugValue:Qn,version:"17.0.2",Children:Zn,render:ir,hydrate:sr,unmountComponentAtNode:ur,createPortal:rr,createElement:N,createContext:jn,createFactory:cr,cloneElement:lr,createRef:On,Fragment:q,isValidElement:rt,findDOMNode:_r,Component:O,PureComponent:fe,memo:Yn,forwardRef:Kn,flushSync:fr,unstable_batchedUpdates:dr,StrictMode:hr,Suspense:K,SuspenseList:F,lazy:nr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ar};const Fs=Object.freeze(Object.defineProperty({__proto__:null,Children:Zn,Component:O,Fragment:q,PureComponent:fe,StrictMode:hr,Suspense:K,SuspenseList:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ar,cloneElement:lr,createContext:jn,createElement:N,createFactory:cr,createPortal:rr,createRef:On,default:Bs,findDOMNode:_r,flushSync:fr,forwardRef:Kn,hydrate:sr,isValidElement:rt,lazy:nr,memo:Yn,render:ir,startTransition:ot,unmountComponentAtNode:ur,unstable_batchedUpdates:dr,useCallback:Fn,useContext:zn,useDebugValue:Qn,useDeferredValue:pr,useEffect:et,useErrorBoundary:Is,useId:Vn,useImperativeHandle:Bn,useInsertionEffect:gr,useLayoutEffect:oe,useMemo:we,useReducer:Xe,useRef:Wn,useState:ye,useSyncExternalStore:vr,useTransition:mr,version:Ws},Symbol.toStringTag,{value:"Module"})),zs=Lt(Fs);function yr(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var R=bs,wr=yr(to),Qs=yr(no),d=zs;function Vs(t){wr.toString(t,{type:"terminal"}).then(console.log)}var Js=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function Gs(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var Ys="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",Ks="WalletConnect",Zs=300,Xs="rgb(64, 153, 255)",br="walletconnect-wrapper",Ot="walletconnect-style-sheet",kr="walletconnect-qrcode-modal",ea="walletconnect-qrcode-close",Er="walletconnect-qrcode-text",ta="walletconnect-connect-button";function na(t){return d.createElement("div",{className:"walletconnect-modal__header"},d.createElement("img",{src:Ys,className:"walletconnect-modal__headerLogo"}),d.createElement("p",null,Ks),d.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},d.createElement("div",{id:ea,className:"walletconnect-modal__close__icon"},d.createElement("div",{className:"walletconnect-modal__close__line1"}),d.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function ra(t){return d.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:ta+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var oa="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function ia(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return d.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},d.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),d.createElement("div",{className:"walletconnect-modal__base__row__right"},d.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),d.createElement("img",{src:oa,className:"walletconnect-modal__base__row__right__caret"})))}function sa(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,c=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return d.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},d.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),d.createElement("div",{style:{fontSize:c},className:"walletconnect-connect__button__text"},r))}var aa=5,Ce=12;function ca(t){var e=R.isAndroid(),n=d.useState(""),r=n[0],o=n[1],i=d.useState(""),c=i[0],_=i[1],m=d.useState(1),p=m[0],s=m[1],b=c?t.links.filter(function(u){return u.name.toLowerCase().includes(c.toLowerCase())}):t.links,g=t.errorMessage,h=c||b.length>aa,k=Math.ceil(b.length/Ce),I=[(p-1)*Ce+1,p*Ce],S=b.length?b.filter(function(u,v){return v+1>=I[0]&&v+1<=I[1]}):[],a=!e&&k>1,l=void 0;function f(u){o(u.target.value),clearTimeout(l),u.target.value?l=setTimeout(function(){_(u.target.value),s(1)},1e3):(o(""),_(""),s(1))}return d.createElement("div",null,d.createElement("p",{id:Er,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&d.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:f}),d.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":h&&b.length?"__wrap":"")},e?d.createElement(ra,{name:t.text.connect,color:Xs,href:t.uri,onClick:d.useCallback(function(){R.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):S.length?S.map(function(u){var v=u.color,E=u.name,w=u.shortName,C=u.logo,T=R.formatIOSMobile(t.uri,u),W=d.useCallback(function(){R.saveMobileLinkInfo({name:E,href:T})},[S]);return h?d.createElement(sa,{color:v,href:T,name:w||E,logo:C,onClick:W}):d.createElement(ia,{color:v,href:T,name:E,logo:C,onClick:W})}):d.createElement(d.Fragment,null,d.createElement("p",null,g.length?t.errorMessage:t.links.length&&!b.length?t.text.no_wallets_found:t.text.loading))),a&&d.createElement("div",{className:"walletconnect-modal__footer"},Array(k).fill(0).map(function(u,v){var E=v+1,w=p===E;return d.createElement("a",{style:{margin:"auto 10px",fontWeight:w?"bold":"normal"},onClick:function(){return s(E)}},E)})))}function la(t){var e=!!t.message.trim();return d.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var ua=function(t){try{var e="";return Promise.resolve(wr.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function _a(t){var e=d.useState(""),n=e[0],r=e[1],o=d.useState(""),i=o[0],c=o[1];d.useEffect(function(){try{return Promise.resolve(ua(t.uri)).then(function(m){c(m)})}catch(m){Promise.reject(m)}},[]);var _=function(){var m=Qs(t.uri);m?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return d.createElement("div",null,d.createElement("p",{id:Er,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),d.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),d.createElement("div",{className:"walletconnect-modal__footer"},d.createElement("a",{onClick:_},t.text.copy_to_clipboard)),d.createElement(la,{message:n}))}function da(t){var e=R.isAndroid(),n=R.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=d.useState(!1),i=o[0],c=o[1],_=d.useState(!1),m=_[0],p=_[1],s=d.useState(!n),b=s[0],g=s[1],h={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},k=d.useState(""),I=k[0],S=k[1],a=d.useState(!1),l=a[0],f=a[1],u=d.useState([]),v=u[0],E=u[1],w=d.useState(""),C=w[0],T=w[1],W=function(){m||i||r&&!r.length||v.length>0||d.useEffect(function(){var Ir=function(){try{if(e)return Promise.resolve();c(!0);var be=Gs(function(){var G=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:R.getWalletRegistryUrl();return Promise.resolve(fetch(G)).then(function(Rr){return Promise.resolve(Rr.json()).then(function(Tr){var Or=Tr.listings,Nr=n?"mobile":"desktop",ie=R.getMobileLinkRegistry(R.formatMobileRegistry(Or,Nr),r);c(!1),p(!0),T(ie.length?"":t.text.no_supported_wallets),E(ie);var it=ie.length===1;it&&(S(R.formatIOSMobile(t.uri,ie[0])),g(!0)),f(it)})})},function(G){c(!1),p(!0),T(t.text.something_went_wrong),console.error(G)});return Promise.resolve(be&&be.then?be.then(function(){}):void 0)}catch(G){return Promise.reject(G)}};Ir()})};W();var xr=n?b:!b;return d.createElement("div",{id:kr,className:"walletconnect-qrcode__base animated fadeIn"},d.createElement("div",{className:"walletconnect-modal__base"},d.createElement(na,{onClose:t.onClose}),l&&b?d.createElement("div",{className:"walletconnect-modal__single_wallet"},d.createElement("a",{onClick:function(){return R.saveMobileLinkInfo({name:v[0].name,href:I})},href:I,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(l?v[0].name:"")+" ›")):e||i||!i&&v.length?d.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(xr?" right__selected":"")},d.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?d.createElement(d.Fragment,null,d.createElement("a",{onClick:function(){return g(!1),W()}},t.text.mobile),d.createElement("a",{onClick:function(){return g(!0)}},t.text.qrcode)):d.createElement(d.Fragment,null,d.createElement("a",{onClick:function(){return g(!0)}},t.text.qrcode),d.createElement("a",{onClick:function(){return g(!1),W()}},t.text.desktop))):null,d.createElement("div",null,b||!e&&!i&&!v.length?d.createElement(_a,Object.assign({},h)):d.createElement(ca,Object.assign({},h,{links:v,errorMessage:C})))))}var fa={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},ha={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},pa={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},ma={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},ga={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},va={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},ya={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},wa={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},Nt={de:fa,en:ha,es:pa,fr:ma,ko:ga,pt:va,zh:ya,fa:wa};function ba(){var t=R.getDocumentOrThrow(),e=t.getElementById(Ot);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",Ot),n.innerText=Js,t.head.appendChild(n)}function ka(){var t=R.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",br),t.body.appendChild(e),e}function Sr(){var t=R.getDocumentOrThrow(),e=t.getElementById(kr);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(br);n&&t.body.removeChild(n)},Zs))}function Ea(t){return function(){Sr(),t&&t()}}function Sa(){var t=R.getNavigatorOrThrow().language.split("-")[0]||"en";return Nt[t]||Nt.en}function Ca(t,e,n){ba();var r=ka();d.render(d.createElement(da,{text:Sa(),uri:t,onClose:Ea(e),qrcodeModalOptions:n}),r)}function xa(){Sr()}var Cr=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Ia(t,e,n){console.log(t),Cr()?Vs(t):Ca(t,e,n)}function Ra(){Cr()||xa()}var Ta={open:Ia,close:Ra},Oa=Ta;class Na extends Xr{constructor(e){super(),this.events=new Mt,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",st(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?Oa:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new ws(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?st(e.id,e.error.message,e.error.data):e}}class $a{constructor(e){this.events=new Mt,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new at(new Na(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(qe.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=sn(e,this.rpc);return typeof n>"u"?void 0:new at(new eo(n))}}export{$a as default};
