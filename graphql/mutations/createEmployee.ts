import gql from "graphql-tag";

export const createEmployeeGraphQL = gql`
  mutation($data: EmployeeCreateInput!) {
    createEmployee(data: $data) {
      id
      firstName
      lastName
      middleInitial
      maidenName
      alsoKnownAs
      gender
      birthdate
      social
      branch
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
      }
    }
  }
`;
