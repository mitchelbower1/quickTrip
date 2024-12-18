import styled from "@emotion/styled/macro";
import breakpoints from "../../vars/breakpoints";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 180px;
  bottom: 0;
  width: 50vw;
  height: 50px;

  .logo {
    font-size: 19px;
    margin-top: 5px;
    margin-left: 5px;
  }

  @media ${breakpoints.mobile} {
    display: none;
  }
`;

export default FooterStyles;
