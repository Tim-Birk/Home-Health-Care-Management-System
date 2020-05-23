import { Row, Col, Alert } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "antd";

const StyledCol = styled(Col)`
  ${({ theme }) => `
  text-align: center;
  margin-top: 200px;
  .messageContainer {
      border: 1px solid black;
      border-radius: 0.5em;
      padding: ${theme["padding-small"]} ${theme["padding-small"]};
      max-width: 400px;
      margin: 0 auto;
    }
  
  `}
`;

export const LoginRequired = () => (
  <Row>
    <StyledCol span={12} offset={6}>
      <div className={"messageContainer"}>
        <h4>Login Required</h4>
        <p>Login to view available companies.</p>
        <Link href="/api/login">
          <Button>Login</Button>
        </Link>
      </div>
    </StyledCol>
  </Row>
);
