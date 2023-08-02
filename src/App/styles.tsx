import { Box, styled } from "@mui/material";
const AppComponentName = "AppStyledComponent";
export const AppStyles = styled(Box, { name: AppComponentName })(() => ({
  background: " linear-gradient(45deg, black, transparent)", 
}));
