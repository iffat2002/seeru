import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Stack,
  IconButton,
  Container,
} from "@mui/material";

const Hero = () => {
  return (
    <Stack
      justifyContent="center"
      width="100%"
      height="533px"
      sx={{
        backgroundImage: "url(/images/hero1.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
        marginTop: "78px",
      }}
    >
        <Stack direction="row"  sx={{margin:"0px 120px", gap:12}}>
      <Box
        width="527px"
        height="328px"
      
      >
        <Typography
        component="div"
          color="#282828"
          sx={{
            fontWeight: "500",
            fontSize: "50px",
            width:"460px",
            lineHeight: "64px",
            letterSpacing: "-1px",
            marginBottom: "15px",
            position:"relative"
          }}
        >
          Hire The Top{" "}
          <Box
            component="span"
            sx={{
              fontWeight: "800",
              lineHeight: "64px",
              letterSpacing: "-1px",
            }}
          >
            5%
          </Box>{" "}
          Of
          <Box
            component="span"
            sx={{
              fontWeight: "800",
              lineHeight: "64px",
              letterSpacing: "-1px",
            }}
          >
            {" "}
            Worldwide
          </Box>{" "}
          <Box sx={{display:"inline-block", position:"relative"}}>
            
            <Box
              height="13px"
              width="100%"
              sx={{ position:"absolute", top:"67%",background: "#25C928",  clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)",  }}
            ></Box>
            <Box
            component="span"
            sx={{
             
            paddingRight:1,
              position:"relative",
              zIndex:""
            }}
          >Talent!</Box>
          </Box>{" "}
          Instantly.
          <Box height="50px" display="inline-block" sx={{position:"absolute", bottom:"1px", right:"0px"}}>
    
          <img alt="people" src="/images/people.png"></img>
         
          </Box>
        </Typography>
        <Typography
          variant="p1"
          color="#282828"
          sx={{
            fontWeight: "500",
            marginTop: "15px",
            fontSize: "21px",
            lineHeight: "26px",
            width:"527px",display:"inline-block"
          }}
        >
          <strong>Paidlance</strong> is a premier network of worldwide remote
          and physical workers, From solo entrepreneur to leading companies turn
          to <strong>Paidlance</strong> resources for their most projects.
        </Typography>
      </Box>
      <Box width="600px" sx={{borderRadius:"16px", maxWidth:"600px", boxShadow: "0px 24px 48px 0px #0000003D", backgroundColor:"#FFFFFF" 
}}>
<Typography variant="body1">text</Typography>
      </Box>
      </Stack>
    </Stack>
  );
};

export default Hero;
