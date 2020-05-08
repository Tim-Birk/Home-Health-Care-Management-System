import gql from 'graphql-tag';

export const deleteEmployeeGraphQL = gql`
  mutation deleteUserLikeGraphQL($where: EmployeeWhereUniqueInput!) {
    deleteEmployee(where: $where) {
      id
    }
  }
`;