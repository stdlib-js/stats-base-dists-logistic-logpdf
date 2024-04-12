// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,v,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=isNaN,N=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,t,n,a,o,u,f,s,l,p,y,g,d;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),u+=n.arg||"",f+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(S(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C,L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),P=Object.prototype.toString,R=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof Z?Z.toStringTag:"",X=L&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return P.call(r);t=r[M],a=M,e=null!=(i=r)&&R.call(i,a);try{r[M]=void 0}catch(e){return P.call(r)}return n=P.call(r),e?r[M]=t:delete r[M],n}:function(r){return P.call(r)},Y="function"==typeof Uint32Array,z="function"==typeof Uint32Array?Uint32Array:null,q="function"==typeof Uint32Array?Uint32Array:void 0;C=function(){var r,e,t;if("function"!=typeof z)return!1;try{e=new z(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Y&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?q:function(){throw new Error("not implemented")};var B,D=C,J="function"==typeof Float64Array,K="function"==typeof Float64Array?Float64Array:null,Q="function"==typeof Float64Array?Float64Array:void 0;B=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K([1,3.14,-3.14,NaN]),t=e,r=(J&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,er=B,tr="function"==typeof Uint8Array,nr="function"==typeof Uint8Array?Uint8Array:null,ir="function"==typeof Uint8Array?Uint8Array:void 0;rr=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,256,257]),t=e,r=(tr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=rr,cr="function"==typeof Uint16Array,ur="function"==typeof Uint16Array?Uint16Array:null,fr="function"==typeof Uint16Array?Uint16Array:void 0;ar=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,65536,65537]),t=e,r=(cr&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr,lr={uint16:ar,uint8:or};(sr=new lr.uint16(1))[0]=4660;var pr=52===new lr.uint8(sr.buffer)[0],yr=!0===pr?1:0,gr=new er(1),dr=new D(gr.buffer);function hr(r){return gr[0]=r,dr[yr]}var vr=!0===pr?1:0,wr=new er(1),br=new D(wr.buffer);function mr(r,e){return wr[0]=r,br[vr]=e>>>0,wr[0]}var Ar=Number.POSITIVE_INFINITY,_r=Number.NEGATIVE_INFINITY,Nr=1023,Er=.6931471803691238,Ur=1.9082149292705877e-10,Ir=.41421356237309503,Sr=-.2928932188134525,xr=1.862645149230957e-9,kr=5551115123125783e-32,Fr=9007199254740992,jr=.6666666666666666;function Tr(r){var e,t,n,i,a,o,c,u,f,s;if(r<-1||W(r))return NaN;if(-1===r)return _r;if(r===Ar)return r;if(0===r)return r;if(s=1,(n=r<0?-r:r)<Ir){if(n<xr)return n<kr?r:r-r*r*.5;r>Sr&&(s=0,i=r,t=1)}return 0!==s&&(n<Fr?(a=(s=((t=hr(f=1+r))>>20)-Nr)>0?1-(f-r):r-(f-1),a/=f):(s=((t=hr(f=r))>>20)-Nr,a=0),(t&=1048575)<434334?f=mr(f,1072693248|t):(s+=1,f=mr(f,1071644672|t),t=1048576-t>>2),i=f-1),e=.5*i*i,0===t?0===i?s*Er+(a+=s*Ur):s*Er-((u=e*(1-jr*i))-(s*Ur+a)-i):(u=(c=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===s?i-(e-o*(e+u)):s*Er-(e-(o*(e+u)+(s*Ur+a))-i))}function Or(r){return Math.abs(r)}var Vr=Math.floor,$r=Math.ceil;function Gr(r){return r<0?$r(r):Vr(r)}var Hr=1023,Wr=-1023,Cr=-1074;function Lr(r){return r===Ar||r===_r}var Pr,Rr,Zr=2147483648,Mr=2147483647;!0===pr?(Pr=1,Rr=0):(Pr=0,Rr=1);var Xr,Yr,zr={HIGH:Pr,LOW:Rr},qr=new er(1),Br=new D(qr.buffer),Dr=zr.HIGH,Jr=zr.LOW;function Kr(r,e,t,n){return qr[0]=r,e[n]=Br[Dr],e[n+t]=Br[Jr],e}function Qr(r){return Kr(r,[0,0],1,0)}H(Qr,"assign",Kr),!0===pr?(Xr=1,Yr=0):(Xr=0,Yr=1);var re={HIGH:Xr,LOW:Yr},ee=new er(1),te=new D(ee.buffer),ne=re.HIGH,ie=re.LOW;function ae(r,e){return te[ne]=r,te[ie]=e,ee[0]}var oe=[0,0],ce=22250738585072014e-324,ue=4503599627370496;function fe(r,e,t,n){return W(r)||Lr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Or(r)<ce?(e[n]=r*ue,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return fe(r,[0,0],1,0)}),"assign",fe);var se=2146435072,le=2220446049250313e-31,pe=2148532223,ye=[0,0],ge=[0,0];function de(r,e){var t,n,i,a,o,c;return 0===e||0===r||W(r)||Lr(r)?r:(fe(r,ye,1,0),r=ye[0],e+=ye[1],e+=function(r){var e=hr(r);return(e=(e&se)>>>20)-Nr|0}(r),e<Cr?(i=0,a=r,Qr.assign(i,oe,1,0),o=oe[0],o&=Mr,c=hr(a),ae(o|=c&=Zr,oe[1])):e>Hr?r<0?_r:Ar:(e<=Wr?(e+=52,n=le):n=1,Qr.assign(r,ge,1,0),t=ge[0],t&=pe,n*ae(t|=e+Nr<<20,ge[1])))}var he=.6931471803691238,ve=1.9082149292705877e-10,we=1.4426950408889634,be=709.782712893384,me=-745.1332191019411,Ae=1/(1<<28),_e=-Ae;function Ne(r){var e;return W(r)||r===Ar?r:r===_r?0:r>be?Ar:r<me?0:r>_e&&r<Ae?1+r:function(r,e,t){var n,i,a,o;return de(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(e=Gr(r<0?we*r-.5:we*r+.5))*he,e*ve,e)}var Ee=.6931471803691238,Ue=1.9082149292705877e-10,Ie=0x40000000000000,Se=.3333333333333333,xe=1048575,ke=2146435072,Fe=1048576,je=1072693248;function Te(r){var e,t,n,i,a,o,c,u,f,s,l,p;return 0===r?_r:W(r)||r<0?NaN:(a=0,(t=hr(r))<Fe&&(a-=54,t=hr(r*=Ie)),t>=ke?r+r:(a+=(t>>20)-Nr|0,a+=(u=614244+(t&=xe)&1048576|0)>>20|0,c=(r=mr(r,t|u^je))-1,(xe&2+t)<3?0===c?0===a?0:a*Ee+a*Ue:(o=c*c*(.5-Se*c),0===a?c-o:a*Ee-(o-a*Ue-c)):(u=t-398458|0,f=440401-t|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=n+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*Ee-(e-(s*(e+o)+a*Ue)-c)):0===a?c-s*(c-o):a*Ee-(s*(c-o)-a*Ue-c))))}function Oe(r,e,t){var n;return W(r)||W(e)||W(t)||t<0?NaN:r===_r?_r:0===t?r===e?Ar:_r:(n=-Or((r-e)/t))-2*Tr(Ne(n))-Te(t)}function Ve(r){return function(){return r}}function $e(r){return W(r)?Ve(NaN):function(e){return W(e)?NaN:e===r?Ar:_r}}return H((function(r,e){return W(r)||W(e)?NaN:r===e?Ar:_r}),"factory",$e),H(Oe,"factory",(function(r,e){var t;return W(r)||W(e)||e<0?Ve(NaN):0===e?$e(r):(t=Te(e),function(n){var i;return W(n)?NaN:n===_r?_r:(i=-Or((n-r)/e))-2*Tr(Ne(i))-t})})),Oe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=e();
//# sourceMappingURL=browser.js.map
