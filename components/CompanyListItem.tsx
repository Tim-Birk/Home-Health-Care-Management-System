import { Company } from "../generated/apollo-components";
import styled from "styled-components";
import GraphImg from "graphcms-image";
import { Col } from "antd";
import Link from "next/link";
import EllipsisText from "react-ellipsis-text";
import { HomeOutlined } from "@ant-design/icons";
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
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            h2 {
                padding: 0px ${theme["padding-small"]};
                line-height: 1.25em;
            }
        }
        .companyInfo {
            margin-bottom: 2em;
            font-size: 1.25em;
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
          {/* <div>{logo ? <GraphImg image={logo} /> : null}</div> */}
          <div className={"nameContainer"}>
            <h2>{legalBusinessName}</h2>
          </div>
        </Link>
        <div className={"companyInfo"}>
          <p>
            <EllipsisText text={`${city}, ${state}`} length={110} />
          </p>
          <p>
            <EllipsisText text={phone} length={110} />
          </p>
        </div>
      </Card>
    </StyledCompany>
  );
};
