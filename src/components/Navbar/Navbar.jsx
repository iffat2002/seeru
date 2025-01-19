"use client";
import React, { useState, forwardRef } from "react";
import {
  AppBar,
  Toolbar,
  MenuIcon,
  Box,
  FormControl,
  Drawer,
  Divider,
  Hidden,
  OutlinedInput,
  FormHelperText,
  Paper,
  Typography,
  Grow,
  Button,
  Menu,
  Link,
  MenuItem,
  Stack,
  IconButton,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
//import {  styled} from "@mui/material/styles";
// Custom Grow Transition
  // Custom Grow Transition Component
  const GrowTransition = forwardRef(function GrowTransition(props, ref) {
    return (
      <Grow
        ref={ref}
        {...props}
        timeout={{
          appear: 500, // Transition duration for "open"
          enter: 500,
          exit: 300, // Transition duration for "close"
        }}
      />
    );
  });
export default function Navbar() {
  const [open, setOpen] = useState(false);
  //const buttonRef = useRef(null); // Reference to the button
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [drawerOpen, setDrawerOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
  
  const handleClose = () => {
    setOpen(false);
  };

  // const toggleDrawer = (open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }
  //   setDrawerOpen(open);
  // };

  // Arrow styling
  // const Arrow = styled("div")(({ theme, left }) => ({
  //   position: "absolute",
  //   width: 0,
  //   height: 0,
  //   borderLeft: "10px solid transparent",
  //   borderRight: "10px solid transparent",
  //  // borderBottom: `10px solid ${theme.palette.background.paper}`,
  //   top: "-5px",
  //   left: left || "44%",
  //   transform: "translateX(-50%)",
  // }));

  return (
   
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow:
          "0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
          maxWidth: "80rem",
          height: "70px",
        }}
      >
        <Stack
          direction="row"
          sx={{ gap: "2.5rem", height: "100%", alignItems: "center" }}
        >
          <Link href="/" sx={{ display: "contents" }}>
            <Image src="/images/logo.svg" alt="logo" width={140} height={50} />
          </Link>
          <Hidden mdDown>
          <Stack
            direction="row"
            sx={{ scrollBehavior: "smooth", height: "100%", gap: "0.75rem" }}
          >
            <Link
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontWeight: "500",
                px: "0.67rem",
                textDecoration: "none",
                color: "inherit",
                fontSize: "14px",
                backgroundColor: "#2dd67917",
                height: "100%",
                "&:hover": {
                  color: "rgb(30 38 64/0.9)",
                },
              }}
            >
              <Box
                sx={{
                  width: 21, // 6 * 4px (MUI default spacing unit)
                  height: 21, // 6 * 4px (MUI default spacing unit)
                  backgroundColor: "currentColor", // Same as bg-current in Tailwind
                  "&:hover": {
                    backgroundColor: "rgb(30 38 64/0.9)", // This simulates group-hover:bg-primary
                  },
                  maskImage: "url(/images/fly.svg)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
              Fly
            </Link>
            <Link
              href="/#visa"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontWeight: "500",
                px: "0.67rem",
                textDecoration: "none",
                color: "inherit",
                fontSize: "14px",
                height: "100%",
                "&:hover": {
                  color: "rgb(30 38 64/0.9)",
                },
              }}
            >
              <Box
                sx={{
                  width: 21, // 6 * 4px (MUI default spacing unit)
                  height: 21, // 6 * 4px (MUI default spacing unit)
                  backgroundColor: "currentColor", // Same as bg-current in Tailwind
                  "&:hover": {
                    backgroundColor: "rgb(30 38 64/0.9)", // This simulates group-hover:bg-primary
                  },
                  maskImage: "url(/images/visa.svg)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
              Visa
            </Link>
            <Link
              onClick={handleClickOpen}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontWeight: "500",
                px: "0.67rem",
                textDecoration: "none",
                color: "inherit",
                fontSize: "14px",
                height: "100%",
                cursor: "pointer",
                "&:hover": {
                  color: "rgb(30 38 64/0.9)",
                },
              }}
            >
              <Box   
                sx={{
                  width: 21,
                  height: 21,
                  backgroundColor: "currentColor",
                  "&:hover": {
                    backgroundColor: "rgb(30 38 64/0.9)",
                  },
                  maskImage: "url(/images/manage.svg)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
              Manage Booking
            </Link>

            {/* Dialog for Popup */}
            <Dialog
              open={open}
              onClose={handleClose}
              TransitionComponent={GrowTransition}
              keepMounted
              fullWidth
              maxWidth="sm"
              // PaperComponent={(props) => (
              //   <Grow in={open} timeout={500}>
              //     <Paper {...props} />
              //   </Grow>
              // )}
              PaperProps={{
                style: {
                  borderRadius: "16px",
                  padding: "16px 22px",
                  width: "520px",
                 transformOrigin: "center",
                },
              }}
              BackdropProps={{
                style: { backgroundColor: "rgba(0, 0, 0, 0.5)" }, // Darkened background
              }}
            >
              {/* Header */}
              <DialogTitle
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1.25rem",
                  paddingBottom: "0.5rem",
                  px: "1.15rem",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "15.75px",
                    lineHeight: "1.75rem",
                    fontWeight: "500",
                  }}
                >
                  Manage Booking
                </Typography>
                <IconButton disableRipple
                  onClick={handleClose}
                  sx={{ color: "black", padding: "0px" }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              {/* Content */}
              <DialogContent
                sx={{
                  padding: "1.25rem",
                  display: "flex",
                  marginTop: "1rem",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Typography
                  variant="p1"
                  sx={{
                    marginBottom: "0.8rem",
                    fontSize: "14px",
                    color: "rgb(115 125 139/1)",
                  }}
                >
                  To view, print, amend, and cancel your reservation, please
                  make sure to fill the following fields with your reservation
                  details:
                </Typography>

                <FormControl variant="outlined">
                  <FormHelperText
                    id="outlined-booking-helper-text"
                    sx={{
                      m: "0px",
                      fontSize: "14px",
                      mb: 1,
                      color: "rgb(30 38 64 / 1)",
                    }}
                  >
                    Booking Number
                  </FormHelperText>
                  <OutlinedInput
                    placeholder="Booking reference/Airline PNR"
                    id="outlined-adornment-booking"
                    aria-describedby="outlined-booking-helper-text"
                    inputProps={{
                      "aria-label": "Booking Number",
                    }}
                    sx={{
                      height: "42px",
                      fontSize: "14px",
                      borderRadius: "8px",
                      color: "rgba(0, 0, 0, 0.58)",
                      outline: 0,
                      borderWidth:"1px",
                      
                     
                      backgroundColor: " #eef4fb!important",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1677ff", // Change border color to red when focused
                        boxShadow: "0 0 0 2px rgba(5, 145, 255, 0.1)",
                        outline: 0,
                        borderWidth:"1px",
                      },
                      "& .MuiInputBase-input": {
                        color:"rgba(0, 0, 0, 0.88)", // Set text color to yellow
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor:"#d9d9d9", 
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1677ff",
                        outline: 0,
                      },
                    }}
                  />
                </FormControl>
                <FormControl variant="outlined">
                  <FormHelperText
                    id="outlined-email-helper-text"
                    sx={{
                      m: "0px",
                      fontSize: "14px",
                      mb: 1,
                      color: "rgb(30 38 64 / 1)",
                    }}
                  >
                    Email
                  </FormHelperText>
                  <OutlinedInput
                    placeholder="Email Address"
                    id="outlined-adornment-email"
                    aria-describedby="outlined-email-helper-text"
                    inputProps={{
                      "aria-label": "Email",
                    }}
                    sx={{
                      height: "42px",
                      fontSize: "14px",
                      borderRadius: "8px",
                      color: "rgba(0, 0, 0, 0.58)",
                      outline: 0,
                      borderWidth:"1px",
                      backgroundColor: " #eef4fb!important",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1677ff", // Change border color to red when focused
                        boxShadow: "0 0 0 2px rgba(5, 145, 255, 0.1)",
                        outline: 0,
                        borderWidth:"1px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor:"#d9d9d9", 
                      },
                      "& .MuiInputBase-input": {
                        color:"rgba(0, 0, 0, 0.88)", // Set text color to yellow
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1677ff",
                        outline: 0,
                      },
                    }}
                  />
                </FormControl>
              </DialogContent>

              {/* Actions */}
              <DialogActions sx={{  px: "1.15rem",py:"1rem"}}>
                <Button disableRipple
                  fullWidth
                  variant="contained"
                  onClick={handleClose}
                  sx={{
                   
                    display:"flex",
                    mb:"0.2rem",
                    gap:"0.75rem",
                    borderRadius: "0.75rem",
                    textTransform: "none",
                    backgroundColor:"#2DE07E",
                    fontWeight: "500",
                    py:"0.81rem",
                    px:"3rem",
                    color:"black", 
                    boxShadow:"none",
                    transition: "transform 0.3s ease",
                    "&:hover":{
                      backgroundColor:"rgba(45,224,126,.8)",
                      boxShadow:"none"
                    },
                    "& span, & svg": {
      transition: "transform 0.3s",
      transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    },
    "&:hover span": {
      transform: "translateX(-3px)", // Move text and SVG slightly to the right on hover
    },
    "&:hover svg":{
      transform: "translateX(3px)"
    }
                  }}
                >
                  <span>Continue</span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="pt-0.5 rtl:rotate-180" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg>
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
          </Hidden>
          {/* <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
       // onClick={toggleDrawer(true)}
        sx={{
          display: { xs: "block", md: "none" },
        //  color: theme.palette.background.paper,
          top: "10px",
          left: "0px",
        }}
      >
        <MenuIcon />
      </IconButton> */}
        </Stack>
        </Toolbar>
    </AppBar>

        /* <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{ width: "75%", "& .MuiPaper-root": { width: "75%" } }}
        >
          <Box
            // sx={{ width: "100%", background: theme.palette.background.paper }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "9px",
                backgroundColor: "#fafafa",
              }}
            >
              <Link
                href="/"
                sx={{
                  backgroundImage: "url('/wego-logo.webp')",
                  backgroundSize: "contain",
                  height: "40px",
                  width: "100px",
                }}
              ></Link>
            </Box>
            <Divider aria-hidden="true" sx={{ border: "1px solid #d8d6dc" }} />
            <Box sx={{ margin: "7px 0px" }}>
                <Stack
                  direction="row"
             
                  sx={{
                    height: "48px",
                    alignItems: "center",
                    paddingLeft: "18px",
                    marginTop: "5px",
                  }}
                >
                  <img
                    src="/fly.svg"
                    width="28px"
                    height="28px"
                    
                    style={{ marginRight: "20px" }}
                  />
                  
                  
                 
                </Stack>
            </Box>
            <Divider aria-hidden="true" />
          </Box>
        </Drawer> */
    
     
  );
}

 
 