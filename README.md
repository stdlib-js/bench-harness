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

# Benchmark

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Benchmark harness.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->





<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->



<!-- Package usage examples. -->



<!-- Section for describing a command-line interface. -->



<section class="cli">



<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/bench-harness-cli
```

</section>
<!-- CLI usage documentation. -->


<section class="usage">

## Usage

```text
Usage: bench [options] <glob> ...

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -r,    --require module      Load module before running benchmarks.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Running benchmark files does **not** require using the command-line interface. For example, to run a single file containing benchmarks,

    ```bash
    $ node /path/to/benchmark.js
    ```

-   To load one or more modules **before** running benchmarks, set the `-r` flag one or more times. For example,

    ```bash
    $ bench -r foo -r bar 'benchmark/*.js'
    ```

    the modules `foo` and `bar` will both be loaded **before** any benchmarks matching the glob `benchmark/*.js`. The `-r` flag behaves exactly like `require`, and modules are resolved relative to the current working directory. To load local modules, use relative paths.

    ```bash
    $ bench -r ./foo/bar.js -r ./beep/boop/bap 'benchmark/*.js'
    ```

    Note that `-r` modules are loaded **before** running benchmarks regardless of order. Hence,

    ```bash
    $ bench -r foo -r bar 'benchmark/*.js'
    ```

    and

    ```bash
    $ bench -r foo 'benchmark/*.js' -r bar
    ```

    behave the same.

    Depending on the preloaded module, a module may support parameterization via environment variables, command-line options, and/or configuration files.

-   To perform shell expansion on systems supporting globbing, do not quote provided globs. 

    ```bash
    $ bench benchmark/*.js
    ```

    Beware, however, that globbing via shell expansion may result in shell argument lists which exceed length limits. To prevent shell expansion, wrap globs in quotes.

    ```bash
    $ bench 'benchmark/*.js'
    $ bench "benchmark/*.js"
    ```

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

## Examples

```bash
$ bench ./examples/index.js
```

will generate [TAP][tap] output similar to the following

```text
TAP version 13
# Math.sin
  ---
  iterations: 1000000
  elapsed: 0.107631765
  rate: 9290937.484858675
  ...
ok 1 benchmark finished
# Math.sin
  ---
  iterations: 1000000
  elapsed: 0.100319363
  rate: 9968165.368035682
  ...
ok 2 benchmark finished
# Math.sin
  ---
  iterations: 1000000
  elapsed: 0.095116262
  rate: 10513449.31952856
  ...
ok 3 benchmark finished
# sin
  ---
  iterations: 1000000
  elapsed: 0.173696195
  rate: 5757178.503536016
  ...
ok 4 benchmark finished
# sin
  ---
  iterations: 1000000
  elapsed: 0.158544701
  rate: 6307369.42762912
  ...
ok 5 benchmark finished
# sin
  ---
  iterations: 1000000
  elapsed: 0.157709895
  rate: 6340756.234730865
  ...
ok 6 benchmark finished
#
1..6
# total 6
# pass  6
#
# ok
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="references">

## References

-   Chen, Jiahao, and Jarrett Revels. 2016. "Robust benchmarking in noisy environments." _CoRR_ abs/1608.04295 (August). <http://arxiv.org/abs/1608.04295>.

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/bench-harness`][@stdlib/bench-harness]</span><span class="delimiter">: </span><span class="description">benchmark harness.</span>


</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/bench-harness-cli.svg
[npm-url]: https://npmjs.org/package/@stdlib/bench-harness-cli

[test-image]: https://github.com/stdlib-js/bench-harness/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/bench-harness/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/bench-harness/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/bench-harness?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/bench-harness.svg
[dependencies-url]: https://david-dm.org/stdlib-js/bench-harness/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/bench-harness#cli
[cli-url]: https://github.com/stdlib-js/bench-harness/tree/cli
[@stdlib/bench-harness]: https://github.com/stdlib-js/bench-harness/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/bench-harness/tree/deno
[deno-readme]: https://github.com/stdlib-js/bench-harness/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/bench-harness/tree/umd
[umd-readme]: https://github.com/stdlib-js/bench-harness/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/bench-harness/tree/esm
[esm-readme]: https://github.com/stdlib-js/bench-harness/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/bench-harness/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/bench-harness/main/LICENSE

[tap]: https://testanything.org/tap-version-13-specification.html

[yaml]: https://yaml.org/

[nodejs-stream]: https://nodejs.org/api/stream.html

[nodejs-writable-stream]: https://nodejs.org/api/stream.html#stream_writable_streams

[@stdlib/streams/node/transform]: https://github.com/stdlib-js/streams-node-transform

</section>

<!-- /.links -->
