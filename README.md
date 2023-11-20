# itm-prettier-codeformat

Provides the it@M code formatter rules for [Prettier](https://prettier.io/) as an artifact so that they can be used as a
standard configuration for projects using Prettier as formatting tool. Alternatively, this configuration can be used
as a base configuration and be extended with your own rules.

This configuration is intended to be used with TypeScript-based projects, but might also work with vanilla JavaScript projects.

### Built With

* [NPM](https://www.npmjs.com/)

### Using

* [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)

## Roadmap

See the [open issues](https://github.com/it-at-m/itm-prettier-codeformat/issues) for a full list of proposed features (and known issues).

## Set up possibilities

1. Configure Prettier by defining the standard configuration inside `package.json`

```json
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "@muenchen/prettier-codeformat"
}
```

2. Extend the configuration with your own rules (or override given ones) using `.prettierrc.js`

```javascript
import muenchenPrettierCodeFormat from "@muenchen/prettier-codeformat";

export default {
  ...muenchenPrettierCodeFormat,
  semi: false,
};
```

Further information can be found on the official [Prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations)

### Important: Overriding Typescript Version

Some Prettier plugins (like [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)) need information about the TypeScript version used in your project. By default, this configuration assumes you are using
**Typescript 5.2.2** in your project.
If that is not the case, override your TypeScript Version by using

```javascript
import muenchenPrettierCodeFormat from "@muenchen/prettier-codeformat";

export default {
  ...muenchenPrettierCodeFormat,
  importOrderTypeScriptVersion: "5.0.0"
};
```

Setting the correct TypeScript version for every minor or patch version of TypeScript might not necessarily be needed for this configuration to work,
but may unlock additional formatting rules related to new TypeScript features the plugins offer.

This configuration will be updated regulary to always set the **latest minor version** of TypeScript.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please open an issue with the tag "enhancement", fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Open an issue with the tag "enhancement"
2. Fork the Project
3. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
4. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

More about this in the [CODE_OF_CONDUCT](/CODE_OF_CONDUCT.md) file.


## License

Distributed under the MIT License. See [LICENSE](LICENSE) file for more information.


## Contact

it@M - opensource@muenchen.de