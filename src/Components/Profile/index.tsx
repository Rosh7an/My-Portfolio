import { Grid } from "@mui/material";
import GitHubGIF from "../../assets/gif/git_gif.gif";
import InstaGif from "../../assets/gif/insta_gif.gif";
import LinkedInGIF from "../../assets/gif/linkedin_gif.gif";
import ProfileImage from "../../assets/png/Roshan.png";
import StyledButton from "../../common/components/StyledButton";
import Name from "./name";
import { HeaderComponent, headerComponentClasses } from "./styles";

export default function Profile() {
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
