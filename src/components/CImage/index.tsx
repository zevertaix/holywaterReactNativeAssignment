import FastImage, { FastImageProps } from "react-native-fast-image";

interface CImageProps {
  url: string;
}

export default ({ url, ...rest }: CImageProps & FastImageProps) => (
  <FastImage
    source={{
      uri: url,
      priority: FastImage.priority.normal,
    }}
    {...rest}
  />
);
