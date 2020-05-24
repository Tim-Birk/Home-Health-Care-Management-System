import gql from 'graphql-tag';

export const deleteEmployeeGraphQL = gql`
  mutation($where: EmployeeWhereUniqueInput!) {
    deleteEmployee(where: $where) {
      id
    }
  }
`;