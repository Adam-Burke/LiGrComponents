import React from "react";
import { css } from "emotion";
import { colors } from "../../theme";
import logo from "../../logo.png";
import Icon from "../Icon";
import userData from "../../mockData/userData";

const navTextStyle = {
  fontFamily: "DoHyeon",
  fontSize: "18px",
  letterSpacing: "3.7px",
  color: colors.brightText
};

const NavText = ({ children }) => (
  <div className={navTextStyle}>{children}</div>
);

const Logo = () => <img height="78px" src={logo} />;
const CategoryDropdownStyles = css({
  display: "flex"
});

const CategoryDropdown = ({ selectedCategory }) => (
  <div className={CategoryDropdownStyles}>
    <NavText>{selectedCategory.toUpperCase()}</NavText>
    <Icon type="downCaret" color={colors.accent} />
  </div>
);

CategoryDropdown.defaultProps = {
  selectedCategory: "Football"
};
const UserDropdownStyles = css({
  display: "flex"
});

const UserDropdown = ({ email }) => (
  <div className={UserDropdownStyles}>
    <Icon type="user" color={colors.text} />
    <div>{email}</div>
    <Icon type="downCaret" color={colors.accent} />
  </div>
);

const NavStyles = css({
  display: "flex",
  alignItems: "center",
  height: "100px",
  padding: "0.69rem 1.4rem",
  border: "solid 1px #dbdcfc"
});

const leftNavStyles = {
  display: "flex",
  alignItems: "center"
};

export default ({ userDat }) => (
  <div className={NavStyles}>
    <div className={leftNavStyles}>
      <Logo />
      <CategoryDropdown selectedCategory={"Football"} />
    </div>
    <UserDropdown email={userData.email} />
  </div>
);
