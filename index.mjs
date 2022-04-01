// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@esm/index.mjs";var l=t,p=e,j=n,f=i,h=r,c=d,b=m;var v=function(s,t,e){var n;return l(s)||l(t)||l(e)||e<0?NaN:s===c?c:0===e?s===t?b:c:(n=-j((s-t)/e))-2*p(f(n))-h(e)},g=a,u=o.factory,x=t,N=e,y=n,k=i,q=r,w=d;var z=v,A=function(s,t){var e;return x(s)||x(t)||t<0?g(NaN):0===t?u(s):(e=q(t),function(n){var i;if(x(n))return NaN;if(n===w)return w;return(i=-y((n-s)/t))-2*N(k(i))-e})};s(z,"factory",A);var B=z;export{B as default,A as factory};
//# sourceMappingURL=index.mjs.map
