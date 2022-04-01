// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&a&&a.call(r,n,t.get),y&&u&&u.call(r,n,t.set),r},v=n()?c:l;var y=function(r,n,t){v(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return b&&"symbol"==typeof Symbol.toStringTag},A=Object.prototype.toString,_=A;var m=function(r){return _.call(r)},N=Object.prototype.hasOwnProperty;var d=function(r,n){return null!=r&&N.call(r,n)},U="function"==typeof Symbol?Symbol.toStringTag:"",h=d,s=U,j=A;var g=m,I=function(r){var n,t,e;if(null==r)return j.call(r);t=r[s],n=h(r,s);try{r[s]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[s]=t:delete r[s],e},O=w()?I:g,S=O,E="function"==typeof Uint32Array;var F="function"==typeof Uint32Array?Uint32Array:null,H=function(r){return E&&r instanceof Uint32Array||"[object Uint32Array]"===S(r)},T=F;var G=function(){var r,n;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,4294967296,4294967297]),r=H(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var P="function"==typeof Uint32Array?Uint32Array:void 0,L=function(){throw new Error("not implemented")},V=G()?P:L,W=O,x="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null,k=function(r){return x&&r instanceof Float64Array||"[object Float64Array]"===W(r)},Y=M;var C=function(){var r,n;if("function"!=typeof Y)return!1;try{n=new Y([1,3.14,-3.14,NaN]),r=k(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var q="function"==typeof Float64Array?Float64Array:void 0,z=function(){throw new Error("not implemented")},B=C()?q:z,D=O,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=O,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,or=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ar=er;var ur=function(){var r,n;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,65536,65537]),r=or(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var ir,fr="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},lr={uint16:ur()?fr:cr,uint8:rr};(ir=new lr.uint16(1))[0]=4660;var vr=52===new lr.uint8(ir.buffer)[0],yr=V,pr=!0===vr?1:0,br=new B(1),wr=new yr(br.buffer);var Ar=function(r){return br[0]=r,wr[pr]},_r=V,mr=!0===vr?1:0,Nr=new B(1),dr=new _r(Nr.buffer);var Ur=function(r,n){return Nr[0]=r,dr[mr]=n>>>0,Nr[0]},hr=Ur,sr=Number.POSITIVE_INFINITY,jr=Number.NEGATIVE_INFINITY;var gr=p,Ir=Ar,Or=hr,Sr=sr,Er=jr,Fr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Hr=.6931471803691238,Tr=1.9082149292705877e-10;var Gr=function(r){var n,t,e,o,a,u,i,f,c,l;if(r<-1||gr(r))return NaN;if(-1===r)return Er;if(r===Sr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,t=1)}return 0!==l&&(e<9007199254740992?(a=(l=((t=Ir(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(l=((t=Ir(c=r))>>20)-1023,a=0),(t&=1048575)<434334?c=Or(c,1072693248|t):(l+=1,c=Or(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?l*Hr+(a+=l*Tr):l*Hr-((f=n*(1-.6666666666666666*o))-(l*Tr+a)-o):(f=(i=(u=o/(2+o))*u)*Fr(i),0===l?o-(n-u*(n+f)):l*Hr-(n-(u*(n+f)+(l*Tr+a))-o))};var Pr=function(r){return Math.abs(r)},Lr=Math.floor,Vr=Math.ceil,Wr=Lr,xr=Vr;var Mr=function(r){return r<0?xr(r):Wr(r)},kr=sr,Yr=jr;var Cr,qr,zr=function(r){return r===kr||r===Yr};!0===vr?(Cr=1,qr=0):(Cr=0,qr=1);var Br=V,Dr={HIGH:Cr,LOW:qr},Jr=new B(1),Kr=new Br(Jr.buffer),Qr=Dr.HIGH,Rr=Dr.LOW;var Xr=function(r,n){return Jr[0]=n,r[0]=Kr[Qr],r[1]=Kr[Rr],r};var Zr,$r,rn=function(r,n){return 1===arguments.length?Xr([0,0],r):Xr(r,n)};!0===vr?(Zr=1,$r=0):(Zr=0,$r=1);var nn=V,tn={HIGH:Zr,LOW:$r},en=new B(1),on=new nn(en.buffer),an=tn.HIGH,un=tn.LOW;var fn=function(r,n){return on[an]=r,on[un]=n,en[0]},cn=rn,ln=Ar,vn=fn,yn=[0,0];var pn=zr,bn=p,wn=Pr;var An=function(r,n){return bn(n)||pn(n)?(r[0]=n,r[1]=0,r):0!==n&&wn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var _n=Ar;var mn=function(r){var n=_n(r);return(n=(2146435072&n)>>>20)-1023|0},Nn=sr,dn=jr,Un=p,hn=zr,sn=function(r,n){var t,e;return cn(yn,r),t=yn[0],t&=2147483647,e=ln(n),vn(t|=e&=2147483648,yn[1])},jn=function(r,n){return 1===arguments.length?An([0,0],r):An(r,n)},gn=mn,In=rn,On=fn,Sn=[0,0],En=[0,0];var Fn=function(r,n){var t,e;return 0===n||0===r||Un(r)||hn(r)?r:(jn(Sn,r),n+=Sn[1],(n+=gn(r=Sn[0]))<-1074?sn(0,r):n>1023?r<0?dn:Nn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,In(En,r),t=En[0],t&=2148532223,e*On(t|=n+1023<<20,En[1])))};var Hn=Fn,Tn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Gn=p,Pn=Mr,Ln=jr,Vn=sr,Wn=function(r,n,t){var e,o,a;return a=(e=r-n)-(o=e*e)*Tn(o),Hn(1-(n-e*a/(2-a)-r),t)};var xn=function(r){var n;return Gn(r)||r===Vn?r:r===Ln?0:r>709.782712893384?Vn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=Pn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Wn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};var Mn=Ar,kn=hr,Yn=p,Cn=jr,qn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},zn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Bn=.6931471803691238,Dn=1.9082149292705877e-10;var Jn=function(r){var n,t,e,o,a,u,i,f,c,l,v;return 0===r?Cn:Yn(r)||r<0?NaN:(o=0,(t=Mn(r))<1048576&&(o-=54,t=Mn(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=kn(r,t|1072693248^i))-1,(1048575&2+t)<3?0===u?0===o?0:o*Bn+o*Dn:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Bn-(a-o*Dn-u)):(i=t-398458|0,f=440401-t|0,e=(l=(v=(c=u/(2+u))*c)*v)*qn(l),a=v*zn(l)+e,(i|=f)>0?(n=.5*u*u,0===o?u-(n-c*(n+a)):o*Bn-(n-(c*(n+a)+o*Dn)-u)):0===o?u-c*(u-a):o*Bn-(c*(u-a)-o*Dn-u))))},Kn=p,Qn=Gr,Rn=Pr,Xn=xn,Zn=Jn,$n=jr,rt=sr;var nt=function(r,n,t){var e;return Kn(r)||Kn(n)||Kn(t)||t<0?NaN:r===$n?$n:0===t?r===n?rt:$n:(e=-Rn((r-n)/t))-2*Qn(Xn(e))-Zn(t)};var tt=function(r){return function(){return r}},et=sr,ot=jr,at=p;var ut=tt,it=sr,ft=jr,ct=p;var lt=function(r,n){return at(r)||at(n)?NaN:r===n?et:ot};y(lt,"factory",(function(r){return ct(r)?ut(NaN):function(n){if(ct(n))return NaN;return n===r?it:ft}}));var vt=tt,yt=lt.factory,pt=p,bt=Gr,wt=Pr,At=xn,_t=Jn,mt=jr;var Nt=nt,dt=function(r,n){var t;return pt(r)||pt(n)||n<0?vt(NaN):0===n?yt(r):(t=_t(n),function(e){var o;if(pt(e))return NaN;if(e===mt)return mt;return(o=-wt((e-r)/n))-2*bt(At(o))-t})};y(Nt,"factory",dt);var Ut=Nt;export{Ut as default,dt as factory};
//# sourceMappingURL=mod.js.map
