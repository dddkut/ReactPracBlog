import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/home">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/createPost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      ) : (
        <Link to="/logout">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログアウト
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
