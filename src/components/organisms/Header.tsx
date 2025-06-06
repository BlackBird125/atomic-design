import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import PrimaryButton from "../atoms/PrimaryButton";

export interface HeaderProps {
  isLoggedIn: boolean;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          サンプルアプリケーション
        </Typography>
        <Box>
          {isLoggedIn && onLogout && (
            <PrimaryButton
              onClick={onLogout}
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              ログアウト
            </PrimaryButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
