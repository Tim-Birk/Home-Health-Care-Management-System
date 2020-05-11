import gql from "graphql-tag";

export const userCompaniesGraphQL = gql`
  query userCompaniesGraphQL($where: UserCompanyWhereInput) {
    userCompanies(where: $where) {
      id
      user
      company {
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
  }
`;
