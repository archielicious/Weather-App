import * as React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function Footer() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        // backgroundColor: "lightblue",
        backgroundColor: "#B2FFFF",
      }}
      component="footer"
    >
      <Box sx={{ paddingBottom: 0.25, paddingTop: 0.5 }}>
        {/* <Typography variant="body1" display="block">Powered by <Link
            href="https://www.weatherapi.com/"
            underline="none"
            color="royalblue"
          >
            WetherAPI.com
          </Link></Typography> */}

        <Link
          href="https://www.weatherapi.com/"
          underline="none"
          color="royalblue"
        >
          <img
            src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
            alt="Weather data by WeatherAPI.com"
            border="0"
          />
        </Link>
        <Typography variant="body1" display="block">
          Developed by{" "}
          <Link
            href="https://github.com/archielicious"
            underline="none"
            color="royalblue"
          >
            Archishman Dash
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
