import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/bahuranisaree.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Bahurani Saree</Typography>
        <Typography color={medium}>bahuranisaree.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Located in central India, BAHURANI Saree is a well known Women clothing Store that offer customers a place to find unique and timeless fashion pieces. We sell quality ethnic products to customers across the map. Whether you are looking for traditional, party wear, casual, or bridal, BAHURANI has something for everyone to buy and love.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;