import { Component, ReactNode } from "react";
import { Layout, Menu } from "antd";
import { ThemeProvider } from "styled-components";
import { theme } from "../../utils/theme";
import styled from "styled-components";
import {
  DashboardOutlined,
  TeamOutlined,
  ContactsOutlined,
  CalendarOutlined,
  BankOutlined,
  DollarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { MainHead } from "./MainHead";
import { GlobalStyle } from "../../utils/globalStyle";
import { MainNavbar } from "./MainNavbar";
import Link from "next/link";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

type Props = {
  children: ReactNode;
  title?: string;
  companyId: string;
  defaultSelectedKeys: string;
};

const StyledBody = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin-top: -4px;
  padding-bottom: 4px;
`;

const StyledLogo = styled.img`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

const StyledLogoTitle = styled.h3`
  margin: ${theme["margin-zero"]};
  color: inherit;
`;

const StyledLink = styled.a`
  color: rgba(255, 255, 255, 0.65);
`;

export class MainLayout extends Component<Props> {
  render() {
    const { children, title, companyId, defaultSelectedKeys } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MainHead title={title} />
        <GlobalStyle />
        <StyledBody>
          <Layout>
            <Sider
              theme="dark"
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                // console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                // console.log(collapsed, type);
              }}
            >
              <StyledLogoContainer>
                <StyledLogo
                  src="/logo.svg"
                  alt="Home Health Care Management System Logo"
                />
                <StyledLogoTitle>HHCMS</StyledLogoTitle>
              </StyledLogoContainer>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[defaultSelectedKeys]}
              >
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                  <Link href={`/company/${companyId}`}>
                    <StyledLink>Dashboard</StyledLink>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<TeamOutlined />}>
                  <Link href={`/company/${companyId}/employees`}>
                    <StyledLink>Employees</StyledLink>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ContactsOutlined />}>
                  Clients
                </Menu.Item>
                <Menu.Item key="4" icon={<CalendarOutlined />}>
                  Scheduling
                </Menu.Item>
                <Menu.Item key="5" icon={<BankOutlined />}>
                  Payroll
                </Menu.Item>
                <Menu.Item key="6" icon={<DollarOutlined />}>
                  Billing
                </Menu.Item>
                <SubMenu key="sub1" icon={<SettingOutlined />} title="Settings">
                  <Menu.Item key="7">Account</Menu.Item>
                  <SubMenu key="sub2" title="Company">
                    <Menu.Item key="15">
                      <Link href={`/company/${companyId}/settings/company/profile`}>
                        <StyledLink>Profile</StyledLink>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="16">
                      <Link href={`/company/${companyId}/settings/company/branches`}>
                        <StyledLink>Branches</StyledLink>
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title="Employees">
                    <Menu.Item key="17">
                      <Link href={`/company/${companyId}/settings/employees/disciplines`}>
                        <StyledLink>Disciplines</StyledLink>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="18">
                      <Link href={`/company/${companyId}/settings/employees/credentials`}>
                        <StyledLink>Credentials</StyledLink>
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item key="10">Clients</Menu.Item>
                  <Menu.Item key="11">Payroll</Menu.Item>
                  <Menu.Item key="12">Billing</Menu.Item>
                  <Menu.Item key="13">Service Codes</Menu.Item>
                  <Menu.Item key="14">Payers</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <MainNavbar />
              <Content style={{ margin: "24px 16px 0" }}>
                <div
                  className="site-layout-background"
                  style={{ padding: "0px 24px 24px 24px", minHeight: 360 }}
                >
                  {children}
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                ©2020 Created by Tim Birkmire
              </Footer>
            </Layout>
          </Layout>
        </StyledBody>
      </ThemeProvider>
    );
  }
}
