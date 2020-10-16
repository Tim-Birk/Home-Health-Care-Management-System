import gql from "graphql-tag";

export const licenseCertificationsGraphQL = gql`
  query($where: LicenseCertificationWhereInput) {
    licenseCertifications(where: $where) {
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
