import * as _ from "lodash";
import { useQuery } from "@apollo/react-hooks";
import { companyGraphQL } from "../graphql/queries/company";
import { useFetchUser } from "./user";

const isValidUser = (user, data) => {
//   const { user, loading: isFetchUser } = useFetchUser();

//   const { loading: isQueryLoading, data, error } = useQuery(
//     companyGraphQL,
//     {
//       variables: { where: { id } },
//     }
//   );

  const owner = _.get(user, "sub") || "";
  const foundCompanyUser = _.find(
    _.get(data, "company.companyUsers"),
    function (o) {
      return o.user === owner;
    }
  );

  if (!user) {
    return false;
  } else if (!foundCompanyUser) {
    return false;
  } else {
    return true;
  }
};

export default isValidUser;
