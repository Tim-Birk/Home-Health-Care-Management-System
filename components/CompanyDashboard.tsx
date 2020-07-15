import { Statistic, Row, Col, Button, Card } from "antd";
import styled from "styled-components";
import Link from "next/link";

const StyledCompanyTitle = styled.h3`
  ${({ theme }) => `
        text-align: left;
        color: inherit;
    `}
`;

const StyledStatContainer = styled(Row)`
  ${({ theme }) => `
        margin-top: ${theme["margin-small"]};
        display: flex;
        justify-content: space-around;
        max-width: 1250px
    `}
`;

const StyledCardContainer = styled(Col)`
  ${({ theme }) => `
        margin-top: ${theme["margin-small"]};
        max-width: 295px;
    `}
`;

const StyledButtonsContainer = styled(Row)`
  ${({ theme }) => `
        display: flex;
        justify-content: space-between;
        max-width: 160px;
        padding-top: 22px;
        padding-bottom: 9px;
    `}
`;

const StyledCard = styled(Card)`
  ${({ theme }) => `
        width: 300px;
        height: 100%;
    `}
`;

type CompaniesDashboardProps = {
  id: any;
  title: string;
};

function callback(key) {
  console.log(key);
}

export const CompanyDashboard = ({ title, id }: CompaniesDashboardProps) => {
  return (
    <>
      <StyledCompanyTitle>{title}</StyledCompanyTitle>
      <StyledStatContainer gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <StyledCardContainer xs={24} sm={12} lg={6}>
          <StyledCard
            title="Employees"
            extra={
              <Link href={`/company/${id}/employees`}>
                <a>More</a>
              </Link>
            }
          >
            <Col>
              <Statistic title="Active Employees" value={176} />
            </Col>
          </StyledCard>
        </StyledCardContainer>
        <StyledCardContainer xs={24} sm={12} lg={6}>
          <StyledCard
            title="Clients"
            // extra={<a href="#">More</a>}
          >
            <Col>
              <Statistic title="Admitted Clients" value={209} />
            </Col>
          </StyledCard>
        </StyledCardContainer>
        <StyledCardContainer xs={24} sm={12} lg={6}>
          <StyledCard
            title="Users"
            // extra={<a href="#">More</a>}
          >
            <Col>
              <Statistic title="Active Users" value={12} />
            </Col>
          </StyledCard>
        </StyledCardContainer>
        <StyledCardContainer xs={24} sm={12} lg={6}>
          <StyledCard
            title="Company"
            extra={
              <Link href={`/company/${id}/settings/company/profile`}>
                <a>More</a>
              </Link>
            }
          >
            <StyledButtonsContainer>
              <Button type="primary">
                <Link href={`/company/${id}/settings/company/profile`}>
                  <a>Profile</a>
                </Link>
              </Button>
              <Button type="primary">
                <Link href={`/company/${id}/settings/company/branches`}>
                  <a>Branches</a>
                </Link>
              </Button>
            </StyledButtonsContainer>
          </StyledCard>
        </StyledCardContainer>
      </StyledStatContainer>
    </>
  );
};
