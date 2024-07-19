import * as React from "react";
import { SvgXml } from "react-native-svg";
import colors from "../../theme";

const AwardSVG = ({
  width,
  height,
  color,
}: {
  width?: number;
  height?: number;
  color?: string;
}) => {
  const xml = `
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12.375" cy="9" r="7" stroke=${
    color || colors.primaryText
  } stroke-width="2"/>
  <path d="M7.72611 15L7.08924 17.323C6.4609 19.6148 6.14673 20.7607 6.56597 21.3881C6.7129 21.6079 6.91 21.7844 7.13872 21.9008C7.79135 22.2331 8.79901 21.7081 10.8143 20.658C11.4849 20.3086 11.8202 20.1339 12.1764 20.0959C12.3085 20.0818 12.4415 20.0818 12.5736 20.0959C12.9298 20.1339 13.2651 20.3086 13.9357 20.658C15.951 21.7081 16.9587 22.2331 17.6113 21.9008C17.84 21.7844 18.0371 21.6079 18.184 21.3881C18.6033 20.7607 18.2891 19.6148 17.6608 17.323L17.0239 15" stroke=${
    color || colors.primaryText
  } stroke-width="2" stroke-linecap="round"/>
  </svg>
`;

  return <SvgXml xml={xml} width={width || 22} height={height || 22} />;
};

export default AwardSVG;
