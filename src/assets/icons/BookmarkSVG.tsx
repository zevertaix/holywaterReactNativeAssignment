import * as React from "react";
import { SvgXml } from "react-native-svg";
import colors from "../../theme";

const BookmarkSVG = ({
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
<path d="M19.875 6V20L13.535 15.245L12.935 16.045L13.535 15.245C13.1439 14.9517 12.6061 14.9517 12.215 15.245L5.875 20V6C5.875 4.34315 7.21815 3 8.875 3H16.875C18.5319 3 19.875 4.34315 19.875 6Z" stroke=${
    color || colors.primaryText
  } stroke-width="2"/>
</svg>
`;

  return <SvgXml xml={xml} width={width || 24} height={height || 24} />;
};

export default BookmarkSVG;
