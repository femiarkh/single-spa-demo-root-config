import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@femiarks/single-spa-demo-nav",
  () => System.import("@femiarks/single-spa-demo-nav"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@femiarks/single-spa-demo-page-1",
  () => System.import("@femiarks/single-spa-demo-page-1"),
  isActive.page1,
  { domElement: document.getElementById("page-1-container") }
);

registerApplication(
  "@femiarks/single-spa-demo-page-2",
  () => System.import("@femiarks/single-spa-demo-page-2"),
  isActive.page2,
  { domElement: document.getElementById("page-2-container") }
);

start();
