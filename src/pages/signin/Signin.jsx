// import React, { useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// // import SelfTechLogo from "../../logo/selftech-logo/SelfTechLogo";
// import "./signin.scss";
// import LanguageIcon from "@mui/icons-material/Language";
// import LoadingButton from "@mui/lab/LoadingButton";
// import { toast, ToastContainer } from "react-toastify";
// import { signIn } from "../../api/apiCalls";
// import { useNavigate } from "react-router-dom";
// import { Button, Menu, MenuItem } from "@mui/material";
// import { useAuth } from "../../hooks/auth";
// import "./signin.scss";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="#ffffff" align="center" {...props}>
//       {"Copyright © "}
//       <Link color="inherit" href="https://www.selftech-tr.com/">
//         ST yazılım
//       </Link>{" "}
//       {2021}-{new Date().getFullYear()}
//     </Typography>
//   );
// }

// export default function Login() {
//   var auth = useAuth();
//   const [selectLang, setSelectLang] = useState("");
//   const navigate = useNavigate();
//   // const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
//   const [loading, setLoading] = useState(false);

//   const notifySuccess = () =>
//     toast.success(auth.t("Sign In Success"), {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

//   const notifyError = (data) =>
//     toast.error(data, {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

//   const handleSubmit = async (event) => {
//     console.log("====================================");
//     console.log("Submit Clicked Button");
//     console.log("====================================");
//     event.preventDefault();
//     setLoading(true);
//     const data = new FormData(event.currentTarget);
//     const body = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     if (navigator.onLine) {
//       console.log("====================================");
//       console.log(`Internet connected`);
//       console.log("====================================");
//       try {
//         console.log("====================================");
//         console.log(`User verifying`);
//         console.log("====================================");
//         const response = await signIn(body);

//         if (response.status === 200) {
//           console.log("====================================");
//           console.log("User verify");
//           console.log("====================================");
//           let resToken = response.data.token;
//           console.log(resToken);
//           localStorage.setItem("token", resToken);
//           localStorage.setItem("sidebar", true);
//           setLoading(false);
//           // console.log(pendingAPICall)
//           notifySuccess();

//           const myTimeout = setTimeout(tokenControll, 2500);
//           function tokenControll() {
//             navigate("/dashboard");

//             clearTimeout(myTimeout);
//           }
//         } else {
//           console.log("====================================");
//           console.log("User not Verify");
//           console.log("====================================");
//         }
//       } catch (error) {
//         console.log("====================================");
//         console.log(
//           `Error ${error.response.status} ${error.response.statusText}`
//         );
//         console.log("====================================");
//         localStorage.setItem("token", null);
//         localStorage.setItem("sidebar", false);
//         setLoading(false);

//         notifyError(
//           `Error ${error.response.status} ${error.response.statusText}`
//         );
//       }
//     } else {
//       console.log("====================================");
//       console.log(`Connection down! Check your Internet!`);
//       console.log("====================================");
//       notifyError("Connection down! Check your Internet!");
//     }
//   };
//   useEffect(() => {
//     console.log("====================================");
//     console.log(`Opening sign in`);
//     console.log("====================================");
//     setSelectLang(localStorage.getItem("country"));
//   }, []);

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     event.preventDefault();
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = (ev) => {
//     var getInfo = ev.nativeEvent.target.outerText;
//     setAnchorEl(null);
//     if (getInfo === "English") {
//       localStorage.setItem("lang", "en-EN");
//       localStorage.setItem("country", "English");
//     } else if (getInfo === "Turkish") {
//       localStorage.setItem("lang", "tr-TR");
//       localStorage.setItem("country", "Turkish");
//     }
//     setSelectLang(getInfo);
//     console.log("====================================");
//     console.log("Selected: " + getInfo);
//     console.log("====================================");
//     window.location.reload();
//   };

//   return (
//     <div className="containerSignIn col-12">
//       <div className="signInHeader">
//         <Button
//           id="basic-button"
//           className="btn"
//           size="large"
//           color="inherit"
//           aria-controls={open ? "basic-menu" : undefined}
//           aria-haspopup="true"
//           aria-expanded={open ? "true" : undefined}
//           onClick={handleClick}
//         >
//           {selectLang}
//           <LanguageIcon className="icon" />
//         </Button>
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           MenuListProps={{
//             "aria-labelledby": "basic-button",
//           }}
//         >
//           <MenuItem onClick={handleClose}>English</MenuItem>
//           <MenuItem onClick={handleClose}>Turkish</MenuItem>
//         </Menu>
//       </div>

//       <div className="signInBody">
//         <div className="signInForm col-4 col-m-9 col-s-6">
//           <SelfTechLogo />
//           <Typography component="h1" variant="h5" fontWeight="bold">
//             {auth.t("Welcome")}
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label={auth.t("Email Address")}
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label={auth.t("Password")}
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label={auth.t("Remember me")}
//             />
//             <LoadingButton
//               type="submit"
//               fullWidth
//               loading={loading}
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               {auth.t("Sign In")}
//             </LoadingButton>
//             <Grid container>
//               <Grid item xs>
//                 <Link rel="shortcut icon" href="resetPassword" variant="body1">
//                   {auth.t("Forgot Password")}
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="signup" variant="body1">
//                   {auth.t("Don't have an account? Sign Up")}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </div>
//       </div>
//       <div className="signInFooter">
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }
