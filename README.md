# ember-no-rsvp-codemod


A collection of codemods for ember-no-rsvp-codemod.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx ember-no-rsvp-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember-no-rsvp-codemod
ember-no-rsvp-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [native-promise](transforms/native-promise/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`