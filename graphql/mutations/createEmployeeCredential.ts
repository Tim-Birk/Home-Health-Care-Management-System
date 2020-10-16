import gql from "graphql-tag";

export const createEmployeeCredentialGraphQL = gql`
  mutation($data: EmployeeCredentialCreateInput!) {
    createEmployeeCredential(data: $data) {
      id
      licenseCertification {
        id
        name
        code
        type
        requirement
        validateDoh
      }
      licenseCertificationNumber
      homeCareRegistryNumber
      issueDate
      expirationDate
      institutionProvidingCredential
      comment
      images {
        id
        fileName
        height
        width
        size
        handle
        url
      }
      verifiedBy {
        id
        firstName
        lastName
        title
      }
    }
  }
`;
