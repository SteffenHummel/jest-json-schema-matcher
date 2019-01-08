import * as Validator from 'jsonschema'

declare global {
  namespace jest {
    interface Expect {
      toMatchSchema<T>(jsonSchema: any): Matchers<T>
    }
    interface Matchers<R> {
      toMatchSchema(jsonSchema: any): R
    }
  }
}

export const jsonSchemaMatcher: jest.ExpectExtendMap = {
  toMatchSchema(received: any, jsonSchema: any): jest.CustomMatcherResult | Promise<jest.CustomMatcherResult> {

    const validationResult: Validator.ValidatorResult = Validator.validate(received, jsonSchema)
    const message: string = validationResult.valid ? '' : validationResult.toString()
    return {
      pass: validationResult.valid,
      message: () => message,
    }
  },
}
