import { Avatar, Divider, Badge } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { employeeGraphQL } from "../graphql/queries/employee";
import { Loading } from "./notify/Loading";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledHeaderContainer = styled.div`
  ${({ theme }) => `
        background-color: #fff;
        margin-bottom: ${theme["margin-xsmall"]};
        @media ${theme.device.tablet} { 
            display: grid;
            grid-template-columns: 200px auto;
            grid-template-rows: auto auto;
        }
    `}
`;

const StyledNameTitle = styled.h2`
  ${({ theme }) => `
  text-align: center;
  color: inherit;
  padding-left: ${theme["padding-xsmall"]};
  padding-right: ${theme["padding-xsmall"]};
  margin-top: ${theme["margin-small"]};
    @media ${theme.device.tablet} { 
      margin-top: ${theme["margin-xsmall"]};
      margin-bottom: ${theme["margin-small"]};
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 2;
      grid-row-end: 2;
    }
 `}
`;

const StyledAvatarContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    margin-top: ${theme["margin-small"]};
    @media ${theme.device.tablet} { 
      margin-top: ${theme["margin-small"]};
    }
 `}
`;

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
    margin-top: ${theme["margin-small"]};
    @media ${theme.device.tablet} { 
      margin-top: ${theme["margin-zero"]};
    }
 `}
`;

const StyledDescriptionsContainer = styled.div`
  ${({ theme }) => `
        max-width: 400px;
        margin-top: ${theme["margin-small"]};
        padding-bottom: ${theme["padding-xsmall"]};
        display: grid;
        margin: auto;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        
        .hideSmallDevice {
          display: none;
        }

        .branchName {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 1;
        }

        @media ${theme.device.tablet} { 
          max-width: 850px;
          width: 100%;
          margin-top: ${theme["margin-medium"]};
          margin-left: ${theme["margin-small"]};
          padding-bottom: ${theme["padding-zero"]};
          display: grid;
          grid-template-columns: auto auto auto;
          grid-template-rows: auto auto;
            .branchName {
              grid-column-start: 1;
              grid-column-end: 2;
            }

            .hideSmallDevice {
              display: flex;
            }
          
        }
    `}
`;

const StyledDescriptionsItem = styled.div`
  ${({ theme }) => `
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: ${theme["margin-xsmall"]};
        @media ${theme.device.tablet} { 
          min-width: 85px;
          align-items: flex-start;
          margin-right: ${theme["margin-xlarge"]};
        }
    `}
`;

const StyledLabel = styled.span`
  ${({ theme }) => `
        font-weight: bold;
        @media ${theme.device.tablet} { 
          // padding: ${theme["padding-xsmall"]};
        }
    `}
`;

const StyledDescription = styled.span`
  ${({ theme }) => `
      @media ${theme.device.tablet} { 
        // min-width: 110px;
        // padding: ${theme["padding-xsmall"]};
      }
  `}
`;

type EmployeeProfileHeaderFormProps = {
  employeeId: string;
};

export const EmployeeProfileHeader = ({
  employeeId,
}: EmployeeProfileHeaderFormProps) => {
  const { loading: isQueryLoading, data, error } = useQuery(employeeGraphQL, {
    variables: { where: { id: employeeId } },
  });

  if (!data || isQueryLoading) return <Loading />;

  const { employee } = data;

  const statusBadge = () => {
    if (employee.currentStatus === "Active") {
      return <Badge status="success" text={employee.currentStatus} />;
    } else if (employee.currentStatus === "Pending") {
      return <Badge status="warning" text={employee.currentStatus} />;
    } else {
      return <Badge status="error" text={employee.currentStatus} />;
    }
  };

  return (
    <StyledHeaderContainer>
      <StyledAvatarContainer>
        <StyledAvatar
          size={125}
          icon={<UserOutlined />}
          src={employee.images ? employee.images.url : null}
        />
      </StyledAvatarContainer>
      <StyledNameTitle>{`${employee.firstName} ${employee.lastName}`}</StyledNameTitle>
      <StyledDescriptionsContainer>
        <StyledDescriptionsItem className="branchName">
          <StyledLabel>Branch:</StyledLabel>
          <StyledDescription>{employee.branch.branchName}</StyledDescription>
        </StyledDescriptionsItem>
        <StyledDescriptionsItem>
          <StyledLabel>Phone:</StyledLabel>
          <StyledDescription>{employee.phone1}</StyledDescription>
        </StyledDescriptionsItem>
        <StyledDescriptionsItem>
          <StyledLabel>Status:</StyledLabel>
          <StyledDescription>{statusBadge()}</StyledDescription>
        </StyledDescriptionsItem>
        <StyledDescriptionsItem className="hideSmallDevice">
          <StyledLabel>Hired:</StyledLabel>
          <StyledDescription>{employee.originalHireDate}</StyledDescription>
        </StyledDescriptionsItem>
        <StyledDescriptionsItem className="hideSmallDevice">
          <StyledLabel>Email:</StyledLabel>
          <StyledDescription>{employee.email}</StyledDescription>
        </StyledDescriptionsItem>
      </StyledDescriptionsContainer>
    </StyledHeaderContainer>
  );
};
