# jest-json-schema-matcher

[![](https://img.shields.io/npm/v/jest-json-schema-matcher.svg)](https://www.npmjs.com/package/jest-json-schema-matcher) 
[![](https://img.shields.io/circleci/project/github/SteffenHummel/jest-json-schema-matcher.svg)](https://circleci.com/gh/SteffenHummel/jest-json-schema-matcher)
![](https://img.shields.io/codecov/c/github/steffenhummel/jest-json-schema-matcher.svg)
 [![](https://img.shields.io/github/license/steffenhummel/jest-json-schema-matcher.svg)](https://github.com/SteffenHummel/jest-json-schema-matcher/blob/master/LICENSE) 


A very simple JSON Schema matcher for <a href="https://github.com/facebook/jest">jest</a>


#### Prerequisites

<a href="https://github.com/facebook/jest">jest</a> must be installed


## Getting Started


installing via yarn 

```
$ yarn add --dev jest-json-schema-matcher
```
or npm
```
$ npm install --save-dev jest-json-schema-matcher
```

## Usage

```javascript
import { jsonSchemaMatcher } from 'jest-json-schema-matcher'

expect.extend(jsonSchemaMatcher)
```

after this you can use it like
```javascript

test('jsonSchemaMatcher matches schema', () => {
  const schema = {
    properties: {
      testProp: {
        type: 'integer',
      },
    },
    required: ['testProp'],
  }
  expect({ testProp: 1 }).toMatchSchema(schema)
})

```
 

## Built With

* [jsonschema](https://github.com/tdegrunt/jsonschema#readme) 


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [version on this repository](https://github.com/SteffenHummel/jest-json-schema-matcher/releases). 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

