import React from "react";
import { func, bool, string, object, node } from "prop-types";
import classnames from "classnames";

import Type from "Primitive/Type";
import Icon from "Primitive/Icon";
import SmartLink from "Primitive/SmartLink";
import styles from "./Navigation.module.scss";
import Media from "Common/Media";

const Navigation = ({ onHideNav, onShowNav, showNav, siteTitle, logo, id }) => {
  console.log("Navigation -> logo", logo)
  return (
    <nav className={classnames(styles.Root, showNav && styles.showNav)} id={id}>
      <h1 hidden>{siteTitle}</h1>
      <div className={styles.Branding}>
        <SmartLink to="/">
          <Media media={logo} className={styles.Logo} />
        </SmartLink>
      </div>
      <LinkWrapper className={styles.NavLink} to="/contact/">
        Contact
      </LinkWrapper>
      <LinkWrapper className={styles.NavLink} to="/blog/">
        Blog
      </LinkWrapper>
      <div className={styles.Dropdown}>
        <SmartLink className={styles.DropdownBtn}>
          <Type as="span" size="menu">
            SubNav
          </Type>
        </SmartLink>
        <div className={styles.DropdownContent}>
          <LinkWrapper
            className={classnames(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            Sub Nav 1
          </LinkWrapper>
          <LinkWrapper
            className={classnames(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            SubNav 2
          </LinkWrapper>
          <LinkWrapper
            className={classnames(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            SubNav 3
          </LinkWrapper>
        </div>
      </div>
      <LinkWrapper className={styles.NavLink} to="/about/">
        About
      </LinkWrapper>
      <button
        className={styles.ToggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        {showNav ? (
          <Icon a11yText="Close" type="close" width={24} height={24} />
        ) : (
          <Icon a11yText="Open Menu" type="burger" width={24} height={24} />
        )}
      </button>
    </nav>
  );
};

Navigation.propTypes = {
  onHideNav: func,
  onShowNav: func,
  showNav: bool,
  siteTitle: string,
  logo: object,
  id: string,
};

export default Navigation;


const LinkWrapper = ({ children, to, className, highlight }) => (
  <SmartLink
    className={classnames(className, highlight && styles.highlight)}
    to={to}
  >
    <Type as="span" size="menu">
      {children}
    </Type>
  </SmartLink>
);

LinkWrapper.propTypes = {
  children: node,
  to: string,
  className: string,
  highlight: string
}