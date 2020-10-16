import gql from "graphql-tag";

export const createLicenseCertificationGraphQL = gql`
  mutation($data: LicenseCertificationCreateInput!) {
    createLicenseCertification(data: $data) {
      id
      name
      code
      type
      requirement
      validateDoh
      disciplines {
        id
        name
        abbreviation
      }
      company {
        id
        legalBusinessName
      }
    }
  }
`;
