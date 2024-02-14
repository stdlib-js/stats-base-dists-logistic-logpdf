// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,t,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,c=parseInt(t,10),!isFinite(c)){if(!n(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(t=(-c).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=c.toString(e),c||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var N=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R,Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),M=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",q=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return M.call(r);n=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return M.call(r)}return t=M.call(r),e?r[z]=n:delete r[z],t}:function(r){return M.call(r)},B="function"==typeof Uint32Array,D="function"==typeof Uint32Array?Uint32Array:null,J="function"==typeof Uint32Array?Uint32Array:void 0;R=function(){var r,e,n;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(B&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q=R,rr="function"==typeof Float64Array,er="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;K=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),n=e,r=(rr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var tr,ir=K,ar="function"==typeof Uint8Array,or="function"==typeof Uint8Array?Uint8Array:null,cr="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),n=e,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var ur,fr=tr,sr="function"==typeof Uint16Array,lr="function"==typeof Uint16Array?Uint16Array:null,pr="function"==typeof Uint16Array?Uint16Array:void 0;ur=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,gr={uint16:ur,uint8:fr};(yr=new gr.uint16(1))[0]=4660;var dr=52===new gr.uint8(yr.buffer)[0],hr=!0===dr?1:0,vr=new ir(1),wr=new Q(vr.buffer);function br(r){return vr[0]=r,wr[hr]}var mr=!0===dr?1:0,Ar=new ir(1),_r=new Q(Ar.buffer);function Nr(r,e){return Ar[0]=r,_r[mr]=e>>>0,Ar[0]}var Er=Number.POSITIVE_INFINITY,Ur=Number.NEGATIVE_INFINITY,Ir=1023,Sr=.6931471803691238,xr=1.9082149292705877e-10;function kr(r){var e,n,t,i,a,o,c,u,f,s;if(r<-1||P(r))return NaN;if(-1===r)return Ur;if(r===Er)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(t<9007199254740992?(a=(s=((n=br(f=1+r))>>20)-Ir)>0?1-(f-r):r-(f-1),a/=f):(s=((n=br(f=r))>>20)-Ir,a=0),(n&=1048575)<434334?f=Nr(f,1072693248|n):(s+=1,f=Nr(f,1071644672|n),n=1048576-n>>2),i=f-1),e=.5*i*i,0===n?0===i?s*Sr+(a+=s*xr):s*Sr-((u=e*(1-.6666666666666666*i))-(s*xr+a)-i):(u=(c=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===s?i-(e-o*(e+u)):s*Sr-(e-(o*(e+u)+(s*xr+a))-i))}function Fr(r){return Math.abs(r)}var jr,Tr,Or=Math.floor,Vr=Math.ceil;function $r(r){return r<0?Vr(r):Or(r)}function Gr(r){return r===Er||r===Ur}!0===dr?(jr=1,Tr=0):(jr=0,Tr=1);var Hr,Wr,Cr={HIGH:jr,LOW:Tr},Lr=new ir(1),Pr=new Q(Lr.buffer),Rr=Cr.HIGH,Zr=Cr.LOW;function Mr(r,e,n,t){return Lr[0]=r,e[t]=Pr[Rr],e[t+n]=Pr[Zr],e}function Xr(r){return Mr(r,[0,0],1,0)}L(Xr,"assign",Mr),!0===dr?(Hr=1,Wr=0):(Hr=0,Wr=1);var Yr={HIGH:Hr,LOW:Wr},zr=new ir(1),qr=new Q(zr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e){return qr[Br]=r,qr[Dr]=e,zr[0]}var Kr=[0,0];function Qr(r,e,n,t){return P(r)||Gr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Fr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var re=[0,0],ee=[0,0];function ne(r,e){var n,t,i,a,o,c;return 0===e||0===r||P(r)||Gr(r)?r:(Qr(r,re,1,0),e+=re[1],e+=function(r){var e=br(r);return(e=(2146435072&e)>>>20)-Ir|0}(r=re[0]),e<-1074?(i=0,a=r,Xr.assign(i,Kr,1,0),o=Kr[0],o&=2147483647,c=br(a),Jr(o|=c&=2147483648,Kr[1])):e>1023?r<0?Ur:Er:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Xr.assign(r,ee,1,0),n=ee[0],n&=2148532223,t*Jr(n|=e+Ir<<20,ee[1])))}var te=1.4426950408889634,ie=1/(1<<28);function ae(r){var e;return P(r)||r===Er?r:r===Ur?0:r>709.782712893384?Er:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ie?1+r:function(r,e,n){var t,i,a,o;return ne(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=$r(r<0?te*r-.5:te*r+.5)),1.9082149292705877e-10*e,e)}var oe=.6931471803691238,ce=1.9082149292705877e-10,ue=1048575;function fe(r){var e,n,t,i,a,o,c,u,f,s,l,p;return 0===r?Ur:P(r)||r<0?NaN:(a=0,(n=br(r))<1048576&&(a-=54,n=br(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-Ir|0,a+=(u=614244+(n&=ue)&1048576|0)>>20|0,c=(r=Nr(r,n|1072693248^u))-1,(ue&2+n)<3?0===c?0===a?0:a*oe+a*ce:(o=c*c*(.5-.3333333333333333*c),0===a?c-o:a*oe-(o-a*ce-c)):(u=n-398458|0,f=440401-n|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*oe-(e-(s*(e+o)+a*ce)-c)):0===a?c-s*(c-o):a*oe-(s*(c-o)-a*ce-c))))}function se(r,e,n){var t;return P(r)||P(e)||P(n)||n<0?NaN:r===Ur?Ur:0===n?r===e?Er:Ur:(t=-Fr((r-e)/n))-2*kr(ae(t))-fe(n)}function le(r){return function(){return r}}function pe(r){return P(r)?le(NaN):function(e){return P(e)?NaN:e===r?Er:Ur}}return L((function(r,e){return P(r)||P(e)?NaN:r===e?Er:Ur}),"factory",pe),L(se,"factory",(function(r,e){var n;return P(r)||P(e)||e<0?le(NaN):0===e?pe(r):(n=fe(e),function(t){var i;return P(t)?NaN:t===Ur?Ur:(i=-Fr((t-r)/e))-2*kr(ae(i))-n})})),se},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=e();
//# sourceMappingURL=index.js.map
