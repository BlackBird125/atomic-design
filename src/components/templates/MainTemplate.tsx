import React from "react";
import { Box } from "@mui/material";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

export interface MainTemplateProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
  onLogout?: () => void;
}

const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
  isLoggedIn,
  onLogout,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          py: 4,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainTemplate;
