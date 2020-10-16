import styled from "styled-components";
import { LandingLayout } from "../components/layout/LandingLayout";
import * as _ from "lodash";
import { AboutContent } from "../components/AboutContent";
import { useFetchUser } from "../utils/user";

const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme["padding-small"]} ${theme["padding-small"]};
  `}
`;

const Index = () => {
  let { user, loading: isFetchUser } = useFetchUser();
  user = _.get(user, "sub");
  const options = user ? { variables: { where: { user } } } : {};

  return (
    <LandingLayout title="Home Health Care Managment System">
      <StyledHeader>About Page</StyledHeader>
      <p>Thank you for checking out this demo!</p>
      <AboutContent />
    </LandingLayout>
  );
};

export default Index;
