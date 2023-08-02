import Box from "@mui/material/Box";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import { styled } from "@mui/material/styles";

export const experienceComponentClasses = generateUtilityClasses(
  "experienceClasses",
  ["title", "contentContainer"]
);
export const ExperienceContainer = styled(Box, {
  name: "ExperienceContainer",
})(() => ({
  paddingBottom: 20,
  display: "flex",
  flexDirection: "column",
  marginTop: "5%",
  [`& .${experienceComponentClasses.title}`]: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    fontFamily: "cursive",
    margin: "10px 0px",
    borderBottom: "2px solid white",
    textDecoration: "8px solid white underline",
  },
  [`& .${experienceComponentClasses.contentContainer}`]: {
    marginTop: "5%",
    gap: 25,
    justifyContent: "center",
    // display: "flex",
    // [`&.${gridClasses.root}`]: { width: "auto" },
  },
}));
