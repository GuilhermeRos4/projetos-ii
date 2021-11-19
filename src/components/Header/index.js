/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiUser, FiChevronUp, FiChevronDown } from "react-icons/fi";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils";

import { userService } from "../../services";

import * as S from "./styles";

const Header = ({ values }) => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <S.Header menu={menu}>
      <div className="Left-Header">
        <FaHome size={38} />
        <h1>{capitalizeFirstLetter(location.pathname.substring(1))}</h1>
      </div>
      <S.RightHeader menu={menu}>
        <div
          role="button"
          tabIndex={0}
          onKeyPress="m"
          onClick={() => setMenu(!menu)}
        >
          <div className="Menu">
            <FiUser size={28} strokeWidth={2.5} />
            <span>User Name</span>
            {menu ? <FiChevronUp /> : <FiChevronDown />}
            {menu && <DropdownMenu menu={menu} />}
          </div>
        </div>
      </S.RightHeader>
    </S.Header>
  );
};

const DropdownMenu = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await userService.logout();
      history.push("/");
    } catch {
      // eslint-disable-next-line
      alert("Erro ao sair");
    }
  };
  return (
    <S.DropdownMenu>
      <S.DropdownList>
        <S.MenuHeader>
          <h4>Nome</h4>
          <p>email@provedor.com</p>
        </S.MenuHeader>
        <Router>
          <S.MenuItem>
            <h5>Minha conta</h5>
            <ul>
              <li>
                <Link to="/account">Dados cadastrais</Link>
              </li>
              <li>
                <Link to="/account">Dados bancários</Link>
              </li>
              <li>
                <Link to="/account">Alterar dados</Link>
              </li>
            </ul>
            <h5>Geral</h5>
            <ul>
              <li>
                {/* <FiIcons.FiLogOut /> */}
                <button
                  type="button"
                  onClick={() => handleLogout()}
                  tabIndex={0}
                  aria-hidden="true"
                  className="Logout"
                  style={{
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Sair
                </button>
              </li>
            </ul>
          </S.MenuItem>
        </Router>
      </S.DropdownList>
    </S.DropdownMenu>
  );
};
export default Header;
