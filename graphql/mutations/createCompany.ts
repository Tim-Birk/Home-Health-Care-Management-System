import gql from "graphql-tag";

export const createCompanyGraphQL = gql`
  mutation($data: CompanyCreateInput!) {
    createCompany(data: $data) {
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
