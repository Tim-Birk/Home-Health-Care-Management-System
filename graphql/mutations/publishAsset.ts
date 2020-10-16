import gql from "graphql-tag";

export const publishAssetGraphQL = gql`
  mutation(
    $where: AssetWhereUniqueInput!
  ) {
    publishAsset(where: $where) {
      id
    }
  }
`;