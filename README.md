# itm-prettier-codeformat

Provides the it@M code formatter rules for [Prettier](https://prettier.io/) as an artifact so that they can be used as a
standard configuration for projects using Prettier as formatting tool. Alternatively, this configuration can be used
as a base configuration and be extended with your own rules.

### Built With

* [NPM](https://www.npmjs.com/)

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

2. Extend the configuration with your own rules using `.prettierrc.js`

```javascript
import muenchenPrettierCodeFormat from "@muenchen/prettier-codeformat";

export default {
  ...muenchenPrettierCodeFormat,
  semi: false,
};
```

Further information can be found on the official [Prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations)

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