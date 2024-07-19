import * as React from "react";
import { SvgXml } from "react-native-svg";

const BurgerSVG = ({ width, height }: { width?: number; height?: number }) => {
  const xml = `
  <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.875" y="0.5" width="18" height="2" rx="1" fill="#0E0E16"/>
  <rect x="0.875" y="6" width="18" height="2" rx="1" fill="#0E0E16"/>
  <rect x="0.875" y="11.5" width="18" height="2" rx="1" fill="#0E0E16"/>
  </svg>
`;

  return <SvgXml xml={xml} width={width || 22} height={height || 22} />;
};

export default BurgerSVG;
