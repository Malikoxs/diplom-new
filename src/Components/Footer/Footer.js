import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Foot flex">
          <Logo />
          <div className="Foot_menu">
            <p className="Foot_tit">Menu</p>
            <div className="Foot_menu-in flex">
              <Menu />
              <p>
              Standard terms and conditions of cooperation applied by the Limited Liability Company "Confectionery House
"Kulikovskiy" in the field of supply of the Purchase of Goods within the EAEU.
              </p>
            </div>
          </div>
          <div className="Foot_links-wrap">
            <p className="Foot_tit">Follow us</p>
            <div className="Foot_links flex">
              <Link className="Foot_link Foot_link__inst" />
              <Link className="Foot_link Foot_link__fb" />
              <Link className="Foot_link Foot_link__tw" />
            </div>
          </div>

        
          
        </div>
        <div className="Foot_bot">
          <p>2022 | Confectionery house "Kulikovsky". All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
