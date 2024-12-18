import { DiReact } from "react-icons/di";
import FooterStyles from "./FooterStyles";

const Footer = () => {
  return (
    <FooterStyles>
      <p>Mitchel Bower 2024</p>
      <p className="logo">
        <DiReact />
      </p>
    </FooterStyles>
  );
};

export default Footer;
