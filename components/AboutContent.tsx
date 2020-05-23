import styled from "styled-components";
import { Col } from "antd";

const StyledAboutCompany = styled(Col)`
  ${({ theme }) => `
        padding: 0px ${theme["padding-small"]};
        p{
            padding: 0px ${theme["padding-small"]};
            font-size: 0.75rem;
        }
    `}
`;

export const AboutContent = () => {
  return (
    <StyledAboutCompany>
      <p>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </p>
      <p>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/monkik" title="monkik">
          monkik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
    </StyledAboutCompany>
  );
};
