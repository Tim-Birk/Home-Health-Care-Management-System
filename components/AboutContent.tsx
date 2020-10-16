import styled from "styled-components";
import { Col } from "antd";

const StyledAboutCompany = styled(Col)`
  ${({ theme }) => `
    padding: 0px ${theme["padding-small"]};
    p {
      padding: 0px ${theme["padding-small"]};
      font-size: 0.75rem;
    }
  `}
`;

export const AboutContent = () => {
  return (
    <StyledAboutCompany>
      
    </StyledAboutCompany>
  );
};
