// lorsqu'on importe un element ( ou plusieurs ), je le fais en début du script
import { playlist_une } from "./lib/playlist_une.js";
import { initSlider } from "./lib/initSlider.js";
// initialisation de mes variables
let currentTrack = 0;

console.dir(playlist_une);
console.log("Hello");
initSlider(playlist_une, currentTrack, false, "fadeOut");