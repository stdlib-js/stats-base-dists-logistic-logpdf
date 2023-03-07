// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,f=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?r:function(n,r,f){var c,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===e.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(n,r)||a.call(n,r)?(c=n.__proto__,n.__proto__=t,delete n[r],n[r]=f.value,n.__proto__=c):n[r]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(n,r,f.get),p&&i&&i.call(n,r,f.set),n};function c(n,r,t){f(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(n){return n!=n}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",d=p&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,e,o,i;if(null==n)return v.call(n);t=n[s],i=s,r=null!=(o=n)&&b.call(o,i);try{n[s]=void 0}catch(r){return v.call(n)}return e=v.call(n),r?n[s]=t:delete n[s],e}:function(n){return v.call(n)},w="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var n,r,t;if("function"!=typeof A)return!1;try{r=new A(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(w&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?_:function(){throw new Error("not implemented")};var m,N=y,h="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;m=function(){var n,r,t;if("function"!=typeof U)return!1;try{r=new U([1,3.14,-3.14,NaN]),t=r,n=(h&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?g:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var n,r,t;if("function"!=typeof S)return!1;try{r=new S(r=[1,3.14,-3.14,256,257]),t=r,n=(O&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var n,r,t;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,65536,65537]),t=r,n=(H&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?P:function(){throw new Error("not implemented")};var x,L={uint16:F,uint8:T};(x=new L.uint16(1))[0]=4660;var V=52===new L.uint8(x.buffer)[0],W=!0===V?1:0,M=new I(1),k=new N(M.buffer);function Y(n){return M[0]=n,k[W]}var C=!0===V?1:0,q=new I(1),z=new N(q.buffer);function B(n,r){return q[0]=n,z[C]=r>>>0,q[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,K=1023,Q=.6931471803691238,R=1.9082149292705877e-10;function X(n){var r,t,e,o,i,u,a,f,c,y;if(n<-1||l(n))return NaN;if(-1===n)return J;if(n===D)return n;if(0===n)return n;if(y=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,o=n,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=Y(c=1+n))>>20)-K)>0?1-(c-n):n-(c-1),i/=c):(y=((t=Y(c=n))>>20)-K,i=0),(t&=1048575)<434334?c=B(c,1072693248|t):(y+=1,c=B(c,1071644672|t),t=1048576-t>>2),o=c-1),r=.5*o*o,0===t?0===o?y*Q+(i+=y*R):y*Q-((f=r*(1-.6666666666666666*o))-(y*R+i)-o):(f=(a=(u=o/(2+o))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===y?o-(r-u*(r+f)):y*Q-(r-(u*(r+f)+(y*R+i))-o))}function Z(n){return Math.abs(n)}var $,nn,rn=Math.floor,tn=Math.ceil;function en(n){return n<0?tn(n):rn(n)}function on(n){return n===D||n===J}!0===V?($=1,nn=0):($=0,nn=1);var un,an,fn={HIGH:$,LOW:nn},cn=new I(1),ln=new N(cn.buffer),yn=fn.HIGH,pn=fn.LOW;function vn(n,r,t,e){return cn[0]=n,r[e]=ln[yn],r[e+t]=ln[pn],r}function bn(n){return vn(n,[0,0],1,0)}c(bn,"assign",vn),!0===V?(un=1,an=0):(un=0,an=1);var sn={HIGH:un,LOW:an},dn=new I(1),wn=new N(dn.buffer),An=sn.HIGH,_n=sn.LOW;function mn(n,r){return wn[An]=n,wn[_n]=r,dn[0]}var Nn=[0,0];function hn(n,r,t,e){return l(n)||on(n)?(r[e]=n,r[e+t]=0,r):0!==n&&Z(n)<22250738585072014e-324?(r[e]=4503599627370496*n,r[e+t]=-52,r):(r[e]=n,r[e+t]=0,r)}c((function(n){return hn(n,[0,0],1,0)}),"assign",hn);var Un=[0,0],gn=[0,0];function jn(n,r){var t,e,o,i,u,a;return 0===r||0===n||l(n)||on(n)?n:(hn(n,Un,1,0),r+=Un[1],r+=function(n){var r=Y(n);return(r=(2146435072&r)>>>20)-K|0}(n=Un[0]),r<-1074?(o=0,i=n,bn.assign(o,Nn,1,0),u=Nn[0],u&=2147483647,a=Y(i),mn(u|=a&=2147483648,Nn[1])):r>1023?n<0?J:D:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,bn.assign(n,gn,1,0),t=gn[0],t&=2148532223,e*mn(t|=r+K<<20,gn[1])))}var In=1.4426950408889634,On=1/(1<<28);function Sn(n){var r;return l(n)||n===D?n:n===J?0:n>709.782712893384?D:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<On?1+n:function(n,r,t){var e,o,i,u;return jn(1-(r-(e=n-r)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-n),t)}(n-.6931471803691238*(r=en(n<0?In*n-.5:In*n+.5)),1.9082149292705877e-10*r,r)}var En=.6931471803691238,Fn=1.9082149292705877e-10,Tn=1048575;function Hn(n){var r,t,e,o,i,u,a,f,c,y,p,v;return 0===n?J:l(n)||n<0?NaN:(i=0,(t=Y(n))<1048576&&(i-=54,t=Y(n*=0x40000000000000)),t>=2146435072?n+n:(i+=(t>>20)-K|0,i+=(f=614244+(t&=Tn)&1048576|0)>>20|0,a=(n=B(n,t|1072693248^f))-1,(Tn&2+t)<3?0===a?0===i?0:i*En+i*Fn:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*En-(u-i*Fn-a)):(f=t-398458|0,c=440401-t|0,o=(p=(v=(y=a/(2+a))*y)*v)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=v*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+o,(f|=c)>0?(r=.5*a*a,0===i?a-(r-y*(r+u)):i*En-(r-(y*(r+u)+i*Fn)-a)):0===i?a-y*(a-u):i*En-(y*(a-u)-i*Fn-a))))}function Gn(n,r,t){var e;return l(n)||l(r)||l(t)||t<0?NaN:n===J?J:0===t?n===r?D:J:(e=-Z((n-r)/t))-2*X(Sn(e))-Hn(t)}function Pn(n){return function(){return n}}function xn(n){return l(n)?Pn(NaN):function(r){return l(r)?NaN:r===n?D:J}}return c((function(n,r){return l(n)||l(r)?NaN:n===r?D:J}),"factory",xn),c(Gn,"factory",(function(n,r){var t;return l(n)||l(r)||r<0?Pn(NaN):0===r?xn(n):(t=Hn(r),function(e){var o;return l(e)?NaN:e===J?J:(o=-Z((e-n)/r))-2*X(Sn(o))-t})})),Gn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).logpdf=r();
//# sourceMappingURL=index.js.map
