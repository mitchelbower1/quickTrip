import styled from "@emotion/styled/macro";
import breakpoints from "../../vars/breakpoints";

const TitleBarStyles = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 20px;

  h1 {
    font-family: "kiona";
    font-size: 65px;
    color: whitesmoke;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    top: 0;
  }

  h1 {
    font-family: "kiona";
    font-size: 65px;
    margin-bottom: 10px;
    color: whitesmoke;
    margin-top: 0px;
  }
`;
export default TitleBarStyles;
