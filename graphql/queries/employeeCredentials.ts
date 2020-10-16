import gql from "graphql-tag";

export const EmployeeCredentialsGraphQL = gql`
  query($where: EmployeeCredentialWhereInput) {
    employeeCredentials(where: $where) {
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
