import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { experienceComponentClasses, ExperienceContainer } from "./styles";
import ToolCardContainer from "./ToolCardContainer";

export function Experience() {
  return (
    <ExperienceContainer>
      <Grid container className={experienceComponentClasses.title}>
        Skills & Tools
      </Grid>
      <Grid className={experienceComponentClasses.contentContainer} container>
        <Box
          style={{
            display: "contents",
          }}
        >
          <ToolCardContainer />
          {/* <Card devArea="Front-end"/> */}
        </Box>

        <Box
          style={{
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          {/* <Card devArea="Back-end"/> */}
        </Box>
      </Grid>
    </ExperienceContainer>
  );
}
