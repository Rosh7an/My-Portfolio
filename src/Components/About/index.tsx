import PeopleIcon from "@mui/icons-material/People";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Roshan from "../../assets/png/Roshan.png";
import ExperienceIcon from "../../assets/png/award.png";
import ProjectIcon from "../../assets/png/project.png";
import StyledButton from "../../common/components/StyledButton";
import { AboutComponent, CardContainer, aboutComponentClasses } from "./styles";

export function About() {
  return (
    <AboutComponent>
      <Grid container className={aboutComponentClasses.title}>
        About Me
      </Grid>
      <Grid container className={aboutComponentClasses.aboutComponents}>
        <Grid container className={aboutComponentClasses.imageContainer}>
          <Paper className={aboutComponentClasses.imageStyles}>
            <img src={Roshan} height={"250px"} width={"250px"} alt="Roshan" />
          </Paper>
        </Grid>
        <Grid container className={aboutComponentClasses.cardsContainer}>
          <AboutCards />

          <Grid
            container
            className={aboutComponentClasses.descriptionContainer}
          >
            I am a highly enthusiastic software engineer with extensive industry
            experience, possessing a strong skill set.
            <br /> I excel at developing software solutions tailored to client
            requirements and delivering them promptly.
            <br /> I have full confidence in the quality of my work and have a
            knack for identifying innovative solutions by staying up-to-date
            with the latest technological advancements.
          </Grid>
          <StyledButton>Projects</StyledButton>
        </Grid>
      </Grid>
    </AboutComponent>
  );
}

function AboutCards() {
  return (
    <>
      <CardContainer height={150} width={150}>
        <Grid container className={aboutComponentClasses.iconContainer}>
          <img
            src={ExperienceIcon}
            alt="medal-icon"
            height={"50px"}
            width={"50px"}
          />
        </Grid>
        <Grid container className={aboutComponentClasses.iconDescription}>
          <div>Experience</div>
          <div>1 year and 6 months</div>
        </Grid>
      </CardContainer>
      <CardContainer height={150} width={150}>
        <Grid container className={aboutComponentClasses.iconContainer}>
          <img
            src={ProjectIcon}
            alt="medal-icon"
            height={"50px"}
            width={"50px"}
          />
        </Grid>
        <Grid container className={aboutComponentClasses.iconDescription}>
          <div>Projects</div>
          <div>3 Completed</div>
        </Grid>
      </CardContainer>
      <CardContainer height={150} width={150}>
        <Grid container className={aboutComponentClasses.iconContainer}>
          <PeopleIcon style={{ height: "50px", width: "50px" }} />
        </Grid>
        <Grid container className={aboutComponentClasses.iconDescription}>
          <div>Clients</div>
          <div>2+ Worldwide</div>
        </Grid>
      </CardContainer>
    </>
  );
}
