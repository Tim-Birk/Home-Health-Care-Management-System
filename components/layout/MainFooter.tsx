import { Layout, Row, Col } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  ${({ theme }) => `
     text-align: center;
  `}
`;
export const MainFooter = () => (
  <StyledFooter>
    <Row>
      <Col sm={{ span: 22, offset: 1 }}>
        <p>©2020 Created by Tim Birkmire</p>
      </Col>
    </Row>
  </StyledFooter>
);
