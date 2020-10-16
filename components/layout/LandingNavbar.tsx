import { Layout, Menu } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useFetchUser } from "../../utils/user";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  ${({ theme }) => `
      background-color: ${theme["header-color"]};
      border-bottom-color: ${theme["header-border-color"]};
      border-bottom-width: 1px;
      border-bottom-style: solid;
      text-align: right;
      display: flex;
      li {
          font-size: ${theme["font-size-md"]};
      }
  `}
`;

const StyledMenu = styled(Menu)`
  border-bottom-width: 0px;
  width: 40%;
  @media (max-width: 890px) {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  ${({ theme }) => `
      background-color: ${theme["header-color"]};
      width: 60%;
      display: flex;
      align-items: center;
      @media (max-width: 890px){
          visibility: hidden;
          width: 0;
      }
  `}
`;

const Title = styled.div`
  ${({ theme }) => `
    text-align: left;
    display: flex;
    line-height: 50px;
    div{
        width: 100%;
        padding-left: ${theme["padding-small"]};
    }
    h2 {
        display: inline;
        color: inherit;
    }
    img{
        width: 64px;
    }
    p {
        line-height: 0;
    }
  `}
`;

export const LandingNavbar = () => {
  const { user, loading } = useFetchUser();

  return (
    <StyledHeader>
      <TitleContainer>
        <Title>
          <img src="/logo.svg" alt="Home Health Care Management System Logo" />
          <div>
            <h2>Home Health Care Management System</h2>
            <p>A complete solution for Home Health Care Providers</p>
          </div>
        </Title>
      </TitleContainer>
      <StyledMenu
        theme="light"
        mode="horizontal"
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="/">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        {user && !loading
          ? [
              <Menu.Item key="/api/logout">
                <Link href="/api/logout">
                  <a>Logout</a>
                </Link>
              </Menu.Item>,
            ]
          : [
              <Menu.Item key="/api/login">
                <Link href="/api/login">
                  <a>Login</a>
                </Link>
              </Menu.Item>,
            ]}
        <Menu.Item key="/about">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Menu.Item>
      </StyledMenu>
    </StyledHeader>
  );
};
