import gql from "graphql-tag";

export const updateCompanyGraphQL = gql`
  mutation(
    $data: CompanyUpdateInput!
    $where: CompanyWhereUniqueInput!
  ) {
    updateCompany(data: $data, where: $where) {
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
      stage
      owner
    }
  }
`;
