// lorsqu'on importe un element ( ou plusieurs ), je le fais en début du script
import { playlist_une } from "./lib/playlist_une.js";
import { initSlider } from "./lib/initSlider.js";
import { initAudio } from "./lib/initAudio.js";
// initialisation de mes variables
// let currentTrack = 0;
//pour rendre globale une variable  ( partagée entre tout mes scripts)
//j'utilise la déclaration globalThis
globalThis.currentTrack = 0;
globalThis.randomArray = [];


/* console.dir(playlist_une);
console.log("Hello"); */
initSlider(playlist_une, currentTrack, false, "fadeOut");
initAudio(playlist_une);