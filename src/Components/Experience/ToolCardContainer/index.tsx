import Grid from "@mui/material/Grid";
import AndroidStudioIcon from "../../../assets/png/android_studio.png";
import BitBucketIcon from "../../../assets/png/bitbucket.png";
import BootStrap from "../../../assets/png/bootstrap.png";
import CSSIcon from "../../../assets/png/css-3.png";
import FireBaseIcon from "../../../assets/png/firebase.png";
import FlutterIcon from "../../../assets/png/flutter.png";
import GitIcon from "../../../assets/png/git.png";
import HTMLIcon from "../../../assets/png/html-5.png";
import JavaScriptIcon from "../../../assets/png/java-script.png";
import JavaIcon from "../../../assets/png/java.png";
import JestIcon from "../../../assets/png/jest.png";
import JiraIcon from "../../../assets/png/jira.png";
import SqlIcon from "../../../assets/png/my-sql.png";
import PostgreSQL from "../../../assets/png/postgresql.png";
import ReactIcon from "../../../assets/png/react.png";
import SpringBootIcon from "../../../assets/png/SpringBootIcon.png";
import ThunderClientIcon from "../../../assets/png/thunder-client.png";
import TypeScriptIcon from "../../../assets/png/TypeScriptIcon.png";
import VisualStudioIcon from "../../../assets/png/visual-studio-code.png";

import { CardContainer } from "../../About/styles";

export default function ToolCardContainer() {
  const IconList = [
    HTMLIcon,
    CSSIcon,
    BootStrap,
    JavaScriptIcon,
    TypeScriptIcon,
    ReactIcon,
    FlutterIcon,
    JestIcon,
    GitIcon,
    BitBucketIcon,
    JiraIcon,
    JavaIcon,
    SpringBootIcon,
    FireBaseIcon,
    SqlIcon,
    PostgreSQL,
    VisualStudioIcon,
    AndroidStudioIcon,
    ThunderClientIcon,
  ];
  return (
    <>
      {Array.from({ length: IconList.length }, (_, index) => (
        <CardContainer height={100} width={120}>
          <Grid
            container
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "inherit",
            }}
          >
            <img
              src={IconList[index]}
              alt="html-icon"
              width={95}
              
            />
          </Grid>
        </CardContainer>
      ))}
    </>
  );
}
