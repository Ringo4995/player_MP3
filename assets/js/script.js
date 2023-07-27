// lorsqu'on importe un element ( ou plusieurs ), je le fais en début du script
import { playlist_une } from "./lib/playlist_une.js";
import { initSlider, userSliderAction } from "./lib/initSlider.js";
import { initAudio } from "./lib/initAudio.js";
// initialisation de mes variables
// let currentTrack = 0;
//pour rendre globale une variable  ( partagée entre tout mes scripts)
//j'utilise la déclaration globalThis
globalThis.currentTrack = "init";
globalThis.randomArray = [];
globalThis.playlist = playlist_une;
globalThis.trackB = null;
globalThis.imageA = globalThis.imageB = globalThis.texteA = globalThis.texteB = null;
//dans le cas d'une fonction déclarée global
//il ne faut surtout pas ajouter les () à l'instar de addEventListener
globalThis.userSliderAction = userSliderAction;


initSlider();
initAudio();