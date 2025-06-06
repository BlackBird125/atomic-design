import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LoginForm from "../components/molecules/LoginForm";

const LoginPage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log("ログイン情報:", { username, password });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 4 }}>
          ログイン
        </Typography>
        <LoginForm onSubmit={handleLogin} />
      </Box>
    </Container>
  );
};

export default LoginPage;
