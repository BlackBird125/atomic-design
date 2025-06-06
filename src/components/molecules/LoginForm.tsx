import React, { useState } from "react";
import { Box } from "@mui/material";
import TextInput from "../atoms/TextInput";
import PrimaryButton from "../atoms/PrimaryButton";

export interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <TextInput
        label="ユーザー名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextInput
        label="パスワード"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Box sx={{ mt: 2 }}>
        <PrimaryButton type="submit">ログイン</PrimaryButton>
      </Box>
    </Box>
  );
};

export default LoginForm;
