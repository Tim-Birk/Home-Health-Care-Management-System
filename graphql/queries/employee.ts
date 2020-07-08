import gql from "graphql-tag";

export const employeeGraphQL = gql`
  query($where: EmployeeWhereUniqueInput!) {
    employee(where: $where) {
      id
      firstName
      lastName
      middleInitial
      maidenName
      alsoKnownAs
      gender
      birthdate
      social
      sharedEmployee
      earningsType
      originalHireDate
      orientationDate
      address1
      address2
      city
      state
      zip
      country
      phone1
      phone1Type
      phone1Ext
      phone2
      phone2Type
      phone2Ext
      phone3
      phone3Type
      phone3Ext
      otherPhone
      otherPhoneType
      otherPhoneExt
      fax
      email
      currentStatus
      isArchived
      company {
        id
        legalBusinessName
      }
      branch {
        id
        branchName
      }
      images {
        id
        fileName
        height
        width
        size
        handle
        url
      }
      employeeDiscipline {
        id
        disciplineGroup {
          id
          name
          isAdmin
          allowOverlap
        }
        discipline {
          id
          name
          abbreviation
        }
        startDate
        endDate
      }
    }
  }
`;
