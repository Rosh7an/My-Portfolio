import Box from "@mui/material/Box";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import { styled } from "@mui/material/styles";

export const contactComponentClasses = generateUtilityClasses(
  "contactComponentClasses",
  ["title", "contactContainer"]
);
export const ContactComponent = styled(Box, { name: "ContactComponent" })(
  () => ({
    paddingBottom: "3%",
    marginTop: "3%",
    display: "flex",
    flexDirection: "column",
    [`& .${contactComponentClasses.title}`]: {
      alignItems: "center",
      justifyContent: "center",
      fontSize: 25,
      fontFamily: "cursive",
      margin: "10px 0px",
      borderBottom: "2px solid white",
      textDecoration: "8px solid white underline",
    },
    [`& .${contactComponentClasses.contactContainer}`]: {
      marginTop: "3%",
      justifyContent: "center",
      gap: 20,
    },
  })
);
