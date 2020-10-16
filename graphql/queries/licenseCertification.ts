import gql from "graphql-tag";

export const licenseCertificationGraphQL = gql`
  query($where: LicenseCertificationWhereUniqueInput!) {
    licenseCertification(where: $where) {
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
