import Grid from "@mui/material/Grid";

import { CardContainer } from "../../About/styles";

export default function ToolCardContainer() {
  const AndroidStudioIcon = require("../../../assets/png/android_studio.png");
  const BitBucketIcon = require("../../../assets/png/bitbucket.png");
  const BootStrap = require("../../../assets/png/bootstrap.png");
  const CSSIcon = require("../../../assets/png/css-3.png");
  const FireBaseIcon = require("../../../assets/png/firebase.png");
  const FlutterIcon = require("../../../assets/png/flutter.png");
  const GitIcon = require("../../../assets/png/git.png");
  const HTMLIcon = require("../../../assets/png/html-5.png");
  const JavaScriptIcon = require("../../../assets/png/java-script.png");
  const JavaIcon = require("../../../assets/png/java.png");
  const JestIcon = require("../../../assets/png/jest.png");
  const JiraIcon = require("../../../assets/png/jira.png");
  const SqlIcon = require("../../../assets/png/my-sql.png");
  const PostgreSQL = require("../../../assets/png/postgresql.png");
  const ReactIcon = require("../../../assets/png/react.png");
  const SpringBootIcon = require("../../../assets/png/SpringBootIcon.png");
  const ThunderClientIcon = require("../../../assets/png/thunder-client.png");
  const TypeScriptIcon = require("../../../assets/png/TypeScriptIcon.png");
  const VisualStudioIcon = require("../../../assets/png/visual-studio-code.png");
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
            <img src={IconList[index]} alt="html-icon" width={95} />
          </Grid>
        </CardContainer>
      ))}
    </>
  );
}
