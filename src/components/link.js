/** @jsx jsx */
import { jsx, Link as A } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { Link as MenuLink } from "react-scroll";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import React, { useState } from 'react';
import { navigate } from "gatsby";

export function NavLink({
  path,
  label,
  hasSubItems,
  onClick,
  children,
  ...rest
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (hasSubItems) {
      onClick();
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {hasSubItems ? (
        <div
          className="nav-item"
          onClick={handleClick}
          sx={styles.menuLink}
          {...rest}
        >
          {label} {hasSubItems && <HiOutlineChevronDown />}
        </div>
      ) : (
        <MenuLink
          to={path}
          spy={true}
          offset={-70}
          smooth={true}
          duration={500}
          className="nav-item"
          activeClass="active"
          onClick={handleClick}
          sx={styles.menuLink}
          {...rest}
        >
          {label}
        </MenuLink>
      )}
    </>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A as={GatsbyLink} to={path} {...rest}>
      {children ? children : label}
    </A>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <A sx={styles.learnMore} href={path} {...rest}>
      {label ?? "Learn More"} <HiOutlineChevronRight />
    </A>
  );
}

const styles = {
  menuLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
  },
  learnMore: {
    color: "link",
    cursor: "pointer",
    fontSize: [1, 1, 1, 2],
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    svg: {
      transition: "margin-left 0.3s ease-in-out 0s",
      ml: "3px",
    },
    ":hover": {
      svg: {
        ml: "5px",
      },
    },
  },
};
