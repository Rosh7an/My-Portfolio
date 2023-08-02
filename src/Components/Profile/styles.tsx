import { Box, generateUtilityClasses, styled } from "@mui/material";
import { styledButtonClasses } from "../../common/components/StyledButton";

export const headerComponentClasses = generateUtilityClasses(
  "headerComponentClasses",
  ["nameStyles", "imageStyles", "buttonStyles", "iconStyles"]
);

const headerComponentName = "HeaderComponent";
export const HeaderComponent = styled(Box, { name: headerComponentName })(
  () => ({
  
    height: 550,
    color: "black",
    fontFamily: "cursive",
    alignItems: "center",

    [`& .${headerComponentClasses.nameStyles}`]: {
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
      alignItems: "center",
      fontVariant: "all-small-caps",
    },

    [`& .${headerComponentClasses.imageStyles}`]: {
      perspective: "1000px",
      display: "flex",
      borderRadius: 30,
      marginTop: "3%",
      boxShadow: "0 0px 20px rgb(0,0,0)",
      transform: " translateZ(30px)",
    },

    [`& .${headerComponentClasses.iconStyles}`]: {
      marginTop:"2%",
      height: 50,
      width: 200,
      alignItems: "center", 
      justifyContent: "space-around",
    },

    [`& .${headerComponentClasses.buttonStyles}`]: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignContent: "center",
      marginTop: "3%",
      width: "30%",
      [`&>.${styledButtonClasses.root}`]: {
        fontFamily: "cursive",
        color: "white ",
        backgroundColor: "black",
        [`&:hover`]: { backgroundColor: "white", color: "black",border:"1px solid black" }
      },
    },
  })
);
