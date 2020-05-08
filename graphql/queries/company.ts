import gql from "graphql-tag";

export const companyGraphQL = gql`
  query companyGraphQL($where: CompanyWhereUniqueInput!) {
    company(where: $where) {
      id
      legalBusinessName
      companyId
      doingBusinessAs
      abbreviation
      companyCode
      taxId
      nationalProviderIdentifier
      businessType
      address1
      address2
      zip
      zipExt
      city
      state
      phone
      fax
      contactName
      contactTitle
      contactPhone
      contactEmail
      owner
    }
  }
`;
