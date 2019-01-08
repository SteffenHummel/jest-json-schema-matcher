import { jsonSchemaMatcher } from '../index'
expect.extend(jsonSchemaMatcher)
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
