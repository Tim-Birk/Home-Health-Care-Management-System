import gql from "graphql-tag";

export const userCompaniesGraphQL = gql`
  query($where: UserCompanyWhereInput) {
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
  }
`;
