import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import dropDownToggle from "./scripts/toggleDropDown";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

dropDownToggle();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
