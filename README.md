# itm-prettier-codeformat

[![Made with love by it@M][made-with-love-shield]][itm-opensource]
[![GitHub license][license-shield]][license]
[![GitHub release version][github-release-shield]][releases]
[![NPM release version][npm-release-shield]][npm]

[made-with-love-shield]: https://img.shields.io/badge/made%20with%20%E2%9D%A4%20by-it%40M-yellow?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/it-at-m/itm-prettier-codeformat?style=for-the-badge
[github-release-shield]: https://img.shields.io/github/v/release/it-at-m/itm-prettier-codeformat?style=for-the-badge
[npm-release-shield]: https://img.shields.io/npm/v/%40muenchen%2Fprettier-codeformat?style=for-the-badge

[itm-opensource]: https://opensource.muenchen.de/
[license]: https://github.com/it-at-m/itm-prettier-codeformat/blob/main/LICENSE
[releases]: https://github.com/it-at-m/itm-prettier-codeformat/releases
[npm]: https://www.npmjs.com/package/@muenchen/prettier-codeformat

### About this project

Provides the it@M code formatter rules for [Prettier](https://prettier.io/) as an artifact so that they can be used as a
standard configuration for projects using Prettier as formatting tool. Alternatively, this configuration can be used
as a base configuration and be extended with your own rules.

This configuration is intended to be used with TypeScript-based projects, but might also work with vanilla JavaScript projects.

### Built With

* [NPM](https://www.npmjs.com/)

### Using

* [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)

### Requirements

* [Prettier](https://prettier.io/) 3.x.x or higher
* [TypeScript](https://www.typescriptlang.org/) 5.2.2 or higher
* [Node](https://nodejs.org/en) 14.x.x or higher

**Information**: The configuration might also work with older versions but was not tested. 

Some Prettier plugins (like [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)) need information about the TypeScript version used in your project. this configuration assumes you are using
**Typescript 5.2.2** in your project. This configuration will be updated regulary to always set the **latest minor version** of TypeScript.

### Roadmap

See the [open issues](https://github.com/it-at-m/itm-prettier-codeformat/issues) for a full list of proposed features (and known issues).

### Installation

Install the package as dev dependency via your desired package manager, e.g.

```bash
npm install -D @muenchen/prettier-codeformat
```

### Set up possibilities

1. Configure Prettier by defining the standard configuration inside `package.json`

```json
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "@muenchen/prettier-codeformat"
}
```

2. Configure Prettier by defining the standard configuration inside `.prettierrc.json`

```json
"@muenchen/prettier-codeformat"
```

Further information can be found on the official [Prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations)

**Information**: Overriding the settings of this configuration is currently not possible (opposed to as stated in the Prettier documentation).

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please open an issue using the provided issue templates, fork the repo and create a pull request.
Don't forget to give the project a star! Thanks again!

1. Open an issue using the appropriate template (bug report, feature request)
2. Fork the Project
3. Create your branch
4. Commit your changes with commit messages following the convention of [Angular](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a pull request

More about this in the [CODE_OF_CONDUCT](/CODE_OF_CONDUCT.md) file.


### License

Distributed under the MIT License. See [LICENSE](LICENSE) file for more information.


### Contact

it@M - opensource@muenchen.de
