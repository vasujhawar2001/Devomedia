import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useHref } from "react-router-dom";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const href= useHref();

  return (
    <WidgetWrapper onClick={()=>href('https://bahuranisaree.com/')}>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
      </FlexBetween>
      <a href="https://bahuranisaree.com/">
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/bahuranisaree.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      </a>
      <FlexBetween>
        <Typography color={main}>Bahurani Saree</Typography>
        <Typography color={medium}><a href="https://www.bahuranisaree.com">bahuranisaree.com</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Located in central India, BAHURANI Saree is a well known Women Clothing Store that provides quality ethnic products to customers across the map. Whether you are looking for traditional, party wear, casual, or bridal wear, BAHURANI has something for everyone to buy and love.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;