/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactBook = /* GraphQL */ `
  query GetContactBook($id: ID!) {
    getContactBook(id: $id) {
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
export const listContactBooks = /* GraphQL */ `
  query ListContactBooks(
    $filter: ModelContactBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        help
        email
        company
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
