import gql from "graphql-tag";

export const publishLicenseCertificationGraphQL = gql`
  mutation($where: LicenseCertificationWhereUniqueInput!) {
    publishLicenseCertification(where: $where) {
      id
    }
  }
`;
