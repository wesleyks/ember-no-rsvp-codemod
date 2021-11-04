# native-promise


## Usage

```
npx ember-no-rsvp-codemod native-promise path/of/files/ or/some**/*glob.js

# or

yarn global add ember-no-rsvp-codemod
ember-no-rsvp-codemod native-promise path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js native-promise path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/native-promise/__testfixtures__/basic.input.js)</small>):
```js
import { Promise, reject, resolve } from 'rsvp';
import Foo from 'foo'; // untouched

async function awaitPromises() {
    await Promise.resolve();

    await reject(new Error('Error'));

    await resolve(123);
}

```

**Output** (<small>[basic.output.js](transforms/native-promise/__testfixtures__/basic.output.js)</small>):
```js
import Foo from 'foo'; // untouched

async function awaitPromises() {
    await Promise.resolve();

    await Promise.reject(new Error('Error'));

    await Promise.resolve(123);
}

```
<!--FIXTURES_CONTENT_END-->