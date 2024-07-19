import * as React from "react";
import { SvgXml } from "react-native-svg";
import colors from "../../theme";

const ExploreSVG = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.625 23C18.7001 23 23.625 18.0751 23.625 12C23.625 5.92487 18.7001 1 12.625 1C6.54987 1 1.625 5.92487 1.625 12C1.625 18.0751 6.54987 23 12.625 23ZM11.543 15.0868L11.543 15.0868L13.9191 14.3432C14.2115 14.2517 14.3578 14.2059 14.4786 14.1246C14.5855 14.0526 14.6776 13.9605 14.7496 13.8536C14.8309 13.7328 14.8767 13.5865 14.9682 13.2941L15.7118 10.918C16.0076 9.97301 16.1554 9.5005 16.0393 9.18229C15.9382 8.90517 15.7198 8.68684 15.4427 8.58571C15.1245 8.46958 14.652 8.61746 13.707 8.9132L11.3309 9.65679C11.0385 9.74831 10.8923 9.79407 10.7714 9.87541C10.6645 9.94743 10.5724 10.0395 10.5004 10.1464C10.4191 10.2673 10.3733 10.4135 10.2818 10.7059L9.5382 13.082C9.24246 14.027 9.09458 14.4995 9.21071 14.8177C9.31184 15.0948 9.53017 15.3132 9.80729 15.4143C10.1255 15.5304 10.598 15.3826 11.543 15.0868Z" fill=${
      color || colors.primaryText
    }/>
  </svg>
`;

  return <SvgXml xml={xml} width={width || 22} height={height || 22} />;
};

export default ExploreSVG;