import { buildHeader } from "./dom/header";
import "./styles.css";
import { buildSideBar } from "./dom/sidebar";
import { buildMainSection } from "./dom/mainSection";

const container = document.createElement("div");
document.body.appendChild(container);

const header = document.createElement("div");
header.setAttribute("id", "header");

const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "mainContainer");

const sidebar = document.createElement("div");
sidebar.setAttribute("id", "sidebar");

const mainSection = document.createElement("div");
mainSection.setAttribute("id", "mainSection");

mainContainer.append(sidebar, mainSection);

container.append(header, mainContainer);

buildHeader();
buildSideBar();
buildMainSection();
