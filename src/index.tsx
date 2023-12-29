import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("app-root")!;
const root = createRoot(container);

root.render(<App />);
