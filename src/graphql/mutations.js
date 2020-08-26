/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactBookInput!
    $condition: ModelContactBookConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      name
      phone
      help
      email
      company
      createdAt
      updatedAt
    }
  }
`;
