import * as React from "react";
import { SvgXml } from "react-native-svg";

const ArrowRightSVG = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  const xml = `
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 4.5L13.5 10.5L7.5 16.5" stroke="#848694" stroke-width="2" stroke-linecap="round"/>
  </svg>
`;

  return <SvgXml xml={xml} width={width || 24} height={height || 24} />;
};

export default ArrowRightSVG;
