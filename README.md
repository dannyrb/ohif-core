<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<div align="center">
  <h1>ohif-core</h1>
  <p><strong>ohif-core</strong> is a collection of useful functions and classes for building web-based medical imaging applications. This library helps power OHIF's <a href="https://github.com/OHIF/Viewers">zero-footprint DICOM viewer</a>.</p>
</div>

<hr />

[![CircleCI][circleci-image]][circleci-url]
[![codecov][codecov-image]][codecov-url]
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![code style: prettier][prettier-image]][prettier-url]
[![semantic-release][semantic-image]][semantic-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

## Why?

This library offers pre-packaged solutions for features common to Web-based
medical imaging viewers. For example:

- Hotkeys
- DICOM Web
- Hanging Protocols
- Managing a study's measurements
- Managing a study's DICOM metadata
- A flexible pattern for extensions
- And many others

It does this while remaining decoupled from any particular view library or
rendering logic. While we use it to power our [React Viewer][react-viewer], it
can be used with Vue, React, Vanilla JS, or any number of other frameworks.

## Getting Started

The documentation for this library is sparse. The best way to get started is to
look at its
[top level exports](https://github.com/OHIF/ohif-core/blob/master/src/index.js),
and explore the source code of features that interest you. If you want to see
how we use this library, you can check out [our viewer
implementation][react-viewer].

### Install

> This library is pre- v1.0. All realeases until a v1.0 have the possibility of
> introducing breaking changes. Please depend on an "exact" version in your
> projects to prevent issues caused by loose versioning.

```
// with npm
npm i ohif-core --save-exact

// with yarn
yarn add ohif-core --exact
```

### Usage

Usage is dependent on the feature(s) you want to leverage. The bulk of
`ohif-core`'s features are "pure" and can be imported and used in place.

_Example: retrieving study metadata from a server_

```js
import { studies } from 'ohif-core'

const studiesMetadata = await studies.retrieveStudiesMetadata(
  server, // Object
  studyInstanceUids, // Array
  seriesInstanceUids // Array (optional)
)
```

### Contributing

It is notoriously difficult to setup multiple dependent repositories for
end-to-end testing and development. That's why we recommend writing and running
unit tests when adding and modifying features for this library. This allows us
to program in isolation without a complex setup, and has the added benefit of
producing well-tested business logic.

1. Clone this repository
2. Navigate to the project directory, and `yarn install`
3. To begin making changes, `yarn run dev`
4. To commit changes, run `yarn run cm`

When creating tests, place the test file "next to" the file you're testing.
[For example](https://github.com/OHIF/ohif-core/blob/master/src/index.test.js):

```js
// File
index.js

// Test for file
index.test.js
```

As you add and modify code, `jest` will watch for uncommitted changes and run
your tests, reporting the results to your terminal. Make a pull request with
your changes to `master`, and a core team member will review your work. If you
have any questions, please don't hesitate to reach out via a GitHub issue.

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests-feature]

### ❓ Questions

For questions related to using the library, please visit our support community,
or file an issue on GitHub.

[Google Group][google-group]

## Contributors

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/swederik"><img src="https://avatars3.githubusercontent.com/u/607793?v=4" width="100px;" alt="Erik Ziegler"/><br /><sub><b>Erik Ziegler</b></sub></a><br /><a href="https://github.com/OHIF/ohif-core/commits?author=swederik" title="Code">💻</a></td><td align="center"><a href="https://github.com/evren217"><img src="https://avatars1.githubusercontent.com/u/4920551?v=4" width="100px;" alt="Evren Ozkan"/><br /><sub><b>Evren Ozkan</b></sub></a><br /><a href="https://github.com/OHIF/ohif-core/commits?author=evren217" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## License

MIT © [OHIF](https://github.com/OHIF)

<!--
Links:
-->

<!-- prettier-ignore-start -->
<!-- ROW -->
[all-contributors-image]: https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square
[contributing-url]: https://github.com/OHIF/ohif-core/blob/master/CONTRIBUTING.md
[circleci-image]: https://circleci.com/gh/OHIF/ohif-core.svg?style=svg
[circleci-url]: https://circleci.com/gh/OHIF/ohif-core
[codecov-image]: https://codecov.io/gh/OHIF/ohif-core/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/OHIF/ohif-core
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
<!-- ROW -->
[npm-url]: https://npmjs.org/package/ohif-core
[npm-downloads-image]: https://img.shields.io/npm/dm/ohif-core.svg?style=flat-square
[npm-version-image]: https://img.shields.io/npm/v/ohif-core.svg?style=flat-square
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE
<!-- Misc. -->
[react-viewer]: https://github.com/OHIF/Viewers/tree/react
<!-- Issue Boilerplate -->
[bugs]: https://github.com/OHIF/ohif-core/labels/bug
[requests-feature]: https://github.com/OHIF/ohif-core/labels/enhancement
[good-first-issue]: https://github.com/OHIF/ohif-core/labels/good%20first%20issue
[google-group]: https://groups.google.com/forum/#!forum/cornerstone-platform
<!-- prettier-ignore-end -->
