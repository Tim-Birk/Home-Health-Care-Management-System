import gql from "graphql-tag";

export const updateLicenseCertificationGraphQL = gql`
  mutation(
    $data: LicenseCertificationUpdateInput!
    $where: LicenseCertificationWhereUniqueInput!
  ) {
    updateLicenseCertification(data: $data, where: $where) {
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
