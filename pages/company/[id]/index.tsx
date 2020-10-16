import { companyGraphQL } from "../../../graphql/queries/company";
import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { Loading } from "../../../components/notify/Loading";
import { Error } from "../../../components/notify/Error";
import { MainLayout } from "../../../components/layout/MainLayout";
import { LandingLayout } from "../../../components/layout/LandingLayout";
import { CompanyDashboard } from "../../../components/CompanyDashboard";
import { useFetchUser } from "../../../utils/user";
import Router from "next/router";

const Company = ({ id }) => {
  const { user, loading: isFetchUser } = useFetchUser();
  const { loading, data, error } = useQuery(companyGraphQL, {
    variables: { where: { id } },
  });

  if (!data || isFetchUser) return <Loading />;
  const owner = _.get(user, "sub") || "";
  const foundCompanyUser = _.find(
    _.get(data, "company.companyUsers"),
    function (o) {
      return o.user === owner;
    }
  );

  if (!user) {
    Router.push("/");
  } else if (!foundCompanyUser) {
    return (
      <LandingLayout title="No Company Access">
        <Error errorText="The current user does not have permission to view this company" />
      </LandingLayout>
    );
  }

  const legalBusinessName = _.get(data, "company.legalBusinessName");

  if (loading)
    return (
      <MainLayout title="Company Loading" companyId={id} defaultSelectedKeys="1">
        <Loading />
      </MainLayout>
    );
  if (error)
    return (
      <MainLayout title="Company Loading Error" companyId={id} defaultSelectedKeys="1">
        <Error errorText={`${error}`} />
      </MainLayout>
    );
  if (!legalBusinessName)
    return (
      <MainLayout title="Not a valid company" companyId={id} defaultSelectedKeys="1">
        <Error errorText="Not a valid company" />
      </MainLayout>
    );

  const title = `${legalBusinessName} - Dashboard`;
  return (
    <MainLayout title={title} companyId={id} defaultSelectedKeys="1">
      <CompanyDashboard title={title} id={id}/>
    </MainLayout>
  );
};

Company.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default Company;
