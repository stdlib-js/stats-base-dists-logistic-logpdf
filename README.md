<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Logistic][logistic-distribution] distribution logarithm of [probability density function (PDF)][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [logistic][logistic-distribution] random variable is

<!-- <equation class="equation" label="eq:logistic_pdf" align="center" raw="f(x; \mu,s) = \frac{e^{-\frac{x-\mu}{s}}} {s\left(1+e^{-\frac{x-\mu}{s}}\right)^2}" alt="Probability density function (PDF) for a logistic distribution."> -->

```math
f(x; \mu,s) = \frac{e^{-\frac{x-\mu}{s}}} {s\left(1+e^{-\frac{x-\mu}{s}}\right)^2}
```

<!-- <div class="equation" align="center" data-raw-text="f(x; \mu,s) = \frac{e^{-\frac{x-\mu}{s}}} {s\left(1+e^{-\frac{x-\mu}{s}}\right)^2}" data-equation="eq:logistic_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/logistic/logpdf/docs/img/equation_logistic_pdf.svg" alt="Probability density function (PDF) for a logistic distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the location parameter and `s` is the scale parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-logistic-logpdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats-base-dists-logistic-logpdf' );
```

#### logpdf( x, mu, s )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = logpdf( 2.0, 0.0, 1.0 );
// returns ~-2.254

y = logpdf( -1.0, 4.0, 4.0 );
// returns ~-3.14
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, -1.0 );
// returns NaN
```

If provided `s = 0`, the function evaluates the logarithm of the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = logpdf( 2.0, 8.0, 0.0 );
// returns -Infinity

y = logpdf( 8.0, 8.0, 0.0 );
// returns Infinity
```

#### logpdf.factory( mu, s )

Returns a function for evaluating the logarithm of the [probability density function][pdf] (PDF) of a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 10.0, 2.0 );

var y = mylogpdf( 10.0 );
// returns ~-2.079

y = mylogpdf( 5.0 );
// returns ~-3.351
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var logpdf = require( '@stdlib/stats-base-dists-logistic-logpdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.0, 10.0, opts );
var mu = uniform( 10, 0.0, 10.0, opts );
var s = uniform( 10, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, µ: %0.4f, s: %0.4f, ln(f(x;µ,s)): %0.4f', x, mu, s, logpdf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/logistic/logpdf.h"
```

#### stdlib_base_dists_logistic_logpdf( x, mu, s )

Evaluates the logarithm of the probability density function (PDF) for a logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.

```c
double out = stdlib_base_dists_logistic_logpdf( 2.0, 0.0, 1.0 );
// returns ~-2.254
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **s**: `[in] double` scale parameter.

```c
double stdlib_base_dists_logistic_logpdf( const double x, const double mu, const double s );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/logistic/logpdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double s;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( -5.0, 5.0 );
        mu = random_uniform( -5.0, 5.0 );
        s = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_logistic_logpdf( x, mu, s );
        printf( "x: %lf, µ: %lf, s: %lf, ln(f(x;µ,s)): %lf\n", x, mu, s, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-logistic-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-logistic-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-logistic-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-logistic-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-logistic-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-logistic-logpdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-logistic-logpdf/main/LICENSE

[logistic-distribution]: https://en.wikipedia.org/wiki/Logistic_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
