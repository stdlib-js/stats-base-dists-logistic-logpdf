// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,i=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?t:function(n,t,f){var c,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===e.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(n,t)||a.call(n,t)?(c=n.__proto__,n.__proto__=r,delete n[t],n[t]=f.value,n.__proto__=c):n[t]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(n,t,f.get),p&&u&&u.call(n,t,f.set),n};function c(n,t,r){f(n,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(n){return n!=n}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",w=p&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,e,o,u;if(null==n)return v.call(n);r=n[d],u=d,t=null!=(o=n)&&b.call(o,u);try{n[d]=void 0}catch(t){return v.call(n)}return e=v.call(n),t?n[d]=r:delete n[d],e}:function(n){return v.call(n)},A="function"==typeof Uint32Array,_="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var n,t,r;if("function"!=typeof _)return!1;try{t=new _(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(A&&r instanceof Uint32Array||"[object Uint32Array]"===w(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var m,N=y,h="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;m=function(){var n,t,r;if("function"!=typeof U)return!1;try{t=new U([1,3.14,-3.14,NaN]),r=t,n=(h&&r instanceof Float64Array||"[object Float64Array]"===w(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?g:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var n,t,r;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,256,257]),r=t,n=(O&&r instanceof Uint8Array||"[object Uint8Array]"===w(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var n,t,r;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,65536,65537]),r=t,n=(H&&r instanceof Uint16Array||"[object Uint16Array]"===w(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?P:function(){throw new Error("not implemented")};var x,L={uint16:F,uint8:T};(x=new L.uint16(1))[0]=4660;var V=52===new L.uint8(x.buffer)[0],W=!0===V?1:0,M=new I(1),k=new N(M.buffer);function Y(n){return M[0]=n,k[W]}var C=!0===V?1:0,q=new I(1),z=new N(q.buffer);function B(n,t){return q[0]=n,z[C]=t>>>0,q[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,K=1023,Q=.6931471803691238,R=1.9082149292705877e-10;function X(n){var t,r,e,o,u,i,a,f,c,y;if(n<-1||l(n))return NaN;if(-1===n)return J;if(n===D)return n;if(0===n)return n;if(y=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,o=n,r=1)}return 0!==y&&(e<9007199254740992?(u=(y=((r=Y(c=1+n))>>20)-K)>0?1-(c-n):n-(c-1),u/=c):(y=((r=Y(c=n))>>20)-K,u=0),(r&=1048575)<434334?c=B(c,1072693248|r):(y+=1,c=B(c,1071644672|r),r=1048576-r>>2),o=c-1),t=.5*o*o,0===r?0===o?y*Q+(u+=y*R):y*Q-((f=t*(1-.6666666666666666*o))-(y*R+u)-o):(f=(a=(i=o/(2+o))*i)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===y?o-(t-i*(t+f)):y*Q-(t-(i*(t+f)+(y*R+u))-o))}function Z(n){return Math.abs(n)}var $,nn,tn=Math.floor,rn=Math.ceil;function en(n){return n<0?rn(n):tn(n)}function on(n){return n===D||n===J}!0===V?($=1,nn=0):($=0,nn=1);var un,an,fn={HIGH:$,LOW:nn},cn=new I(1),ln=new N(cn.buffer),yn=fn.HIGH,pn=fn.LOW;function vn(n,t){return cn[0]=t,n[0]=ln[yn],n[1]=ln[pn],n}function bn(n,t){return 1===arguments.length?vn([0,0],n):vn(n,t)}!0===V?(un=1,an=0):(un=0,an=1);var dn={HIGH:un,LOW:an},wn=new I(1),An=new N(wn.buffer),_n=dn.HIGH,sn=dn.LOW;function mn(n,t){return An[_n]=n,An[sn]=t,wn[0]}var Nn=[0,0];function hn(n,t,r,e){return l(n)||on(n)?(t[e]=n,t[e+r]=0,t):0!==n&&Z(n)<22250738585072014e-324?(t[e]=4503599627370496*n,t[e+r]=-52,t):(t[e]=n,t[e+r]=0,t)}c((function(n){return hn(n,[0,0],1,0)}),"assign",hn);var Un=[0,0],gn=[0,0];function jn(n,t){var r,e,o,u,i;return 0===t||0===n||l(n)||on(n)?n:(hn(n,Un,1,0),t+=Un[1],t+=function(n){var t=Y(n);return(t=(2146435072&t)>>>20)-K|0}(n=Un[0]),t<-1074?(o=n,bn(Nn,0),u=Nn[0],u&=2147483647,i=Y(o),mn(u|=i&=2147483648,Nn[1])):t>1023?n<0?J:D:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,bn(gn,n),r=gn[0],r&=2148532223,e*mn(r|=t+K<<20,gn[1])))}var In=1.4426950408889634,On=1/(1<<28);function Sn(n){var t;return l(n)||n===D?n:n===J?0:n>709.782712893384?D:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<On?1+n:function(n,t,r){var e,o,u,i;return jn(1-(t-(e=n-t)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-n),r)}(n-.6931471803691238*(t=en(n<0?In*n-.5:In*n+.5)),1.9082149292705877e-10*t,t)}var En=.6931471803691238,Fn=1.9082149292705877e-10,Tn=1048575;function Hn(n){var t,r,e,o,u,i,a,f,c,y,p,v;return 0===n?J:l(n)||n<0?NaN:(u=0,(r=Y(n))<1048576&&(u-=54,r=Y(n*=0x40000000000000)),r>=2146435072?n+n:(u+=(r>>20)-K|0,u+=(f=614244+(r&=Tn)&1048576|0)>>20|0,a=(n=B(n,r|1072693248^f))-1,(Tn&2+r)<3?0===a?0===u?0:u*En+u*Fn:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*En-(i-u*Fn-a)):(f=r-398458|0,c=440401-r|0,o=(p=(v=(y=a/(2+a))*y)*v)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=v*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),i=e+o,(f|=c)>0?(t=.5*a*a,0===u?a-(t-y*(t+i)):u*En-(t-(y*(t+i)+u*Fn)-a)):0===u?a-y*(a-i):u*En-(y*(a-i)-u*Fn-a))))}function Gn(n,t,r){var e;return l(n)||l(t)||l(r)||r<0?NaN:n===J?J:0===r?n===t?D:J:(e=-Z((n-t)/r))-2*X(Sn(e))-Hn(r)}function Pn(n){return function(){return n}}function xn(n){return l(n)?Pn(NaN):function(t){return l(t)?NaN:t===n?D:J}}return c((function(n,t){return l(n)||l(t)?NaN:n===t?D:J}),"factory",xn),c(Gn,"factory",(function(n,t){var r;return l(n)||l(t)||t<0?Pn(NaN):0===t?xn(n):(r=Hn(t),function(e){var o;return l(e)?NaN:e===J?J:(o=-Z((e-n)/t))-2*X(Sn(o))-r})})),Gn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).logpdf=t();
//# sourceMappingURL=browser.js.map
