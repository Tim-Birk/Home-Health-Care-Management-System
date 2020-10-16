import React from "react";
import { Component, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../utils/theme";
import { GlobalStyle } from "../../utils/globalStyle";
import { Layout } from "antd";
import { MainFooter } from "./MainFooter";
import styled from "styled-components";
import { LandingNavbar } from "./LandingNavbar";
import { MainHead } from "./MainHead";

const { Content } = Layout;

type Props = {
  children: ReactNode;
  title?: string;
};

const StyledBody = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export class LandingLayout extends Component<Props> {
  render() {
    const { children, title } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MainHead title={title} />
        <GlobalStyle />
        <StyledBody>
          <Layout>
            <LandingNavbar />
            <Content>{children}</Content>
          </Layout>
          <MainFooter />
        </StyledBody>
      </ThemeProvider>
    );
  }
}
