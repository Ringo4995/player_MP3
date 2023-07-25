// lorsqu'on importe un element ( ou plusieurs ), je le fais en début du script
import { playlist_une } from "./lib/playlist_une.js";
import { initSlider, userSliderAction } from "./lib/initSlider.js";
import { initAudio } from "./lib/initAudio.js";
// initialisation de mes variables
// let currentTrack = 0;
//pour rendre globale une variable  ( partagée entre tout mes scripts)
//j'utilise la déclaration globalThis
globalThis.currentTrack = 0;
globalThis.randomArray = [];
globalThis.playlist = playlist_une;
globalThis.trackB = null;
globalThis.imageA = globalThis.imageB = globalThis.texteA = globalThis.texteB = null;
globalThis.userSliderAction= userSliderAction;


initSlider();
initAudio(playlist_une);