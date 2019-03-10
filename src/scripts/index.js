"use strict";

import css_ from "../css/styles.css";
import { configJson, log } from "./jsonUtily";
import { sampleJson } from "./sampleData";

const myApp = Object.create(null);
// ======================================================================
// App
// ======================================================================

myApp.main = function main() {
  const layerToConfig = "Wastewater_7520";
  const result = configJson(layerToConfig, sampleJson);
  log(result);
};

// Handler when the DOM is fully loaded
document.onreadystatechange = function onreadystatechange() {
  if (document.readyState === "complete") {
    myApp.main();
  } else {
    // Do something during loading [optional]
  }
};

// ======================================================================
