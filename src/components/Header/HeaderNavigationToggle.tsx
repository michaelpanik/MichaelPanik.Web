import React from "react";
import {} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import tw from "twin.macro";

const HeaderNavigationToggle = ({ ...remainingProps }) => {
  return (
    <button
      css={tw`h-8 w-8 relative z-50 lg:(hidden)`}
      type="button"
      aria-controls="siteNavigation"
      aria-expanded="true"
      aria-label="Toggle navigation"
      {...remainingProps}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default HeaderNavigationToggle;
