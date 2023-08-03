import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { About } from "../Components/About";
import { Contact } from "../Components/Contact";
import { Experience } from "../Components/Experience";
import Profile from "../Components/Profile";
import { AppStyles } from "./styles";

export function AppView() {
  return (
    <AppStyles>
      <Profile />
      <Grid container flexDirection="row">
        <Card />
      </Grid>
      <About />
      <Experience />
      <Contact />
    </AppStyles>
  );
}
