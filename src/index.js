import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// fontawesome icons import
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// aox animation
import AOS from "aos";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

library.add(fab, fas);
AOS.init();
