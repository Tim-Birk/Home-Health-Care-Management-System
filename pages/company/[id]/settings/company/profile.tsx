import { MainLayout } from "../../../../../components/layout/MainLayout";
import { UpdateCompanyProfileForm } from "../../../../../components/UpdateCompanyProfileForm";

const CompanyProfile = ({ id }) => {
  return (
    <MainLayout
      // title={`${company.legalBusinessName} - Company Profile`}
      title={"Company Profile"}
      companyId={id}
      defaultSelectedKeys="8"
    >
      <UpdateCompanyProfileForm id={id} />
    </MainLayout>
  );
};

CompanyProfile.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default CompanyProfile;
