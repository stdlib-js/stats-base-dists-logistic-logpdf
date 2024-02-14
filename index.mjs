// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import{factory as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@v0.1.0-esm/index.mjs";function l(s,a,o){var l;return t(s)||t(a)||t(o)||o<0?NaN:s===d?d:0===o?s===a?m:d:(l=-n((s-a)/o))-2*e(i(l))-r(o)}function p(s,m){var l;return t(s)||t(m)||m<0?a(NaN):0===m?o(s):(l=r(m),function(r){var a;if(t(r))return NaN;if(r===d)return d;return(a=-n((r-s)/m))-2*e(i(a))-l})}s(l,"factory",p);export{l as default,p as factory};
//# sourceMappingURL=index.mjs.map
