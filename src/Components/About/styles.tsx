import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import { styled } from "@mui/material/styles";
import { styledButtonClasses } from "../../common/components/StyledButton";

export const aboutComponentClasses = generateUtilityClasses(
  "aboutComponentClasses",
  [
    "aboutComponents",
    "iconContainer",
    "iconDescription",
    "title",
    "imageContainer",
    "imageStyles",
    "cardsContainer",
    "descriptionContainer",
  ]
);
const AboutComponentName = "AboutComponent";
export const AboutComponent = styled(Box, { name: AboutComponentName })(() => ({
  marginTop: "5%",
  height: 500,

  [`& .${aboutComponentClasses.aboutComponents}`]: {
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
  },

  [`& .${aboutComponentClasses.title}`]: {
    fontSize: 25,
    fontFamily: "cursive",
    margin: "10px 0px",
    justifyContent: "center",
    borderBottom: "2px solid white",
    textDecoration: "8px solid white underline",
  },

  [`& .${aboutComponentClasses.imageContainer}`]: {
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  [`& .${aboutComponentClasses.imageStyles}`]: {
    transform: "rotateX(9deg) rotateY(-17deg) rotateZ(4deg)",
    boxShadow: "rgb(0, 0, 0) -24px 0px 20px",
  },

  [`& .${aboutComponentClasses.cardsContainer}`]: {
    width: "50%",
    display: "flex",
    justifyContent: "space-evenly",
  },

  [`& .${aboutComponentClasses.descriptionContainer}`]: {
    padding: "30px 0px",
    fontFamily: "cursive",
  },

  [`& .${aboutComponentClasses.iconContainer}`]: {
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },

  [`& .${aboutComponentClasses.iconDescription}`]: {
    height: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  [`& .${styledButtonClasses.root}`]: {
    fontFamily: "cursive",
    color: "white ",
    backgroundColor: "black",
    [`&:hover`]: {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
    },
  },
}));
const CardContainerName = "CardComponent";
export const cardContainerClasses = generateUtilityClasses(
  "cardContainerClasses",
  ["contactDetailContainer"]
);
type cardContainerProps = { height: number; width: number };

export const CardContainer = styled(Paper, { name: CardContainerName })(
  ({ height, width }: cardContainerProps) => ({
    height: height,
    width: width,
    boxShadow: "0 0px 12px 2px rgb(0,0,0)",
    borderRadius: 20,
    [`& .${cardContainerClasses.contactDetailContainer}`]: {
      alignItems: "center",
      flexDirection: "column",
      marginTop: 10,
    },
  })
);
