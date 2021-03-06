import gql from "graphql-tag";

export const companiesGraphQL = gql`
  query($where: CompanyWhereInput) {
    companies(where: $where) {
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
      contactExt
      contactEmail
      owner
      stage
      logo {
          id
          fileName
          height
          width
          size
          handle
        }
    }
  }
`;
