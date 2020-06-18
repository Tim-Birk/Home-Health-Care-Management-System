import { Company } from "../generated/apollo-components";
import styled from "styled-components";
import { Col } from "antd";
import Link from "next/link";
import EllipsisText from "react-ellipsis-text";
import { Card } from "antd";

const StyledCompany = styled(Col)`
  ${({ theme }) => `
        padding: 0px ${theme["padding-small"]};
        .ant-card {
            margin-bottom: .75rem;
        }
        p{
            padding: 0px ${theme["padding-small"]};
            text-align: center;
        }
        .nameContainer {
            background-color: white;
            height: 95px;
            display: flex;
            align-items: center;
            justify-content: center;
            h2 {
                color: inherit;
                padding: 0px ${theme["padding-small"]};
                line-height: 1.25em;
            }
        }
        .companyTitle {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .companyInfo {
            font-size: 1.25em;
            text-align: center;
            // font-weight: bold;
        }
    `}
`;


export const CompanyListItem = ({
  company,
  parentRoute,
}: {
  company: Company;
  parentRoute: string;
}) => {
  const { legalBusinessName, city, state, phone, id } = company;
  return (
    <StyledCompany
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 6 }}
    >
      <Card hoverable>
        <Link href={`/${parentRoute}/${id}`}>
          <div className={"companyTitle"}>
            <div className={"nameContainer"}>
              <h2>{legalBusinessName}</h2>
            </div>
          </div>
        </Link>
        <div className={"companyInfo"}>
          <span>
            <EllipsisText text={`${city}, ${state}`} length={110} />
          </span>
          <br />
          <span>
            <EllipsisText text={phone} length={110} />
          </span>
        </div>
      </Card>
    </StyledCompany>
  );
};
