import { Grid } from "@mui/material";
import StyledButton from "../../common/components/StyledButton";
import Name from "./name";
import { HeaderComponent, headerComponentClasses } from "./styles";

export default function Profile() {
  const GitHubGIF = require("../../assets/gif/git_gif.gif");
  const InstaGif = require("../../assets/gif/insta_gif.gif");
  const LinkedInGIF = require("../../assets/gif/linkedin_gif.gif");
  const ProfileImage = require("../../assets/png/Roshan.png");
  return (
    <HeaderComponent>
      <Grid className={headerComponentClasses.nameStyles} container>
        <Name />
        <Grid container className={headerComponentClasses.buttonStyles}>
          <StyledButton>Download C V</StyledButton>
          <StyledButton>Let's Talk</StyledButton>
        </Grid>

        <Grid className={headerComponentClasses.imageStyles}>
          <img
            src={ProfileImage}
            height="200px"
            width="200px"
            style={{ borderRadius: "30px" }}
            alt="myImage"
          />
        </Grid>

        <Grid container className={headerComponentClasses.iconStyles}>
          <img
            src={LinkedInGIF}
            height="30px"
            width="30px"
            alt="linked-in-gif"
          />
          <img src={InstaGif} height="30px" width="30px" alt="insta-gif" />
          <img src={GitHubGIF} height="30px" width="30px" alt="github-gif" />
        </Grid>
      </Grid>
    </HeaderComponent>
  );
}
