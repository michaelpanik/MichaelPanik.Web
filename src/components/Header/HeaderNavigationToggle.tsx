import React from "react";

const HeaderNavigationToggle = () => {
  return (
    <button
      className="menu-toggle"
      type="button"
      aria-controls="siteNavigation"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <i className="fa fa-bars"></i>
    </button>
  );
};

export default HeaderNavigationToggle;
