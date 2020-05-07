import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

export const MainFooter = () => (
  <Footer>
    <Row>
      <Col sm={{ span: 22, offset: 1 }}>
        <h3>Home Health Care Management System</h3>
      </Col>
    </Row>
  </Footer>
);
