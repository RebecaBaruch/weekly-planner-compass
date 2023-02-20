import React from "react";
import styled from "styled-components";

import CompassLogo from "../../assets/compass-logo.svg";

const Link = styled.a`
  height: ${({ size }) => (size)};
`;

function CompassLink({ size, href }) {
  return (
    <Link size={size} href={href}>
      <img
        src={CompassLogo}
        alt="compass logo with link to the compass website"
      />
    </Link>
  );
}

export default CompassLink;