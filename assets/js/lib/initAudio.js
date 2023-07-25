const initAudio = (playlist) => {
    //déclaration de fonction avec le mot clef function
    function nextCurrentTrack() {
        if (currentTrack < playlist.length - 1) {
            currentTrack++;
        } else {
            currentTrack = 0;
        }
    }
    function previousCurrentTrack() {
        if (currentTrack === 0) {
            currentTrack = playlist.length - 1;
        } else {
            currentTrack--;
        }
    }
    // fonction qui va attribuer à currentTrack l'index aléatoire que je viens de tirer
    function nextRandomTrack(randomIndex) {
        //j'ai besoin de savoir si currentTrack est déjà présent dans mon tables randomArray
        if (randomArray.length >= playlist.length - 1) {
            randomArray.splice(0, playlist.length / 1.75);
        }
        if (randomArray.length > 1) {
            let positiveResult = false;
            for (let i = 0; i < randomArray.length; i++) {
                const currentSong = randomArray[i];
                //mon currentTrack
                // console.log(randomIndex, currentSong, currentTrack);
                if (currentSong === randomIndex) {
                    positiveResult = true;
                }
            }
            if (positiveResult) {
                let randomIndexTmp = Math.floor(Math.random() * playlist.length);
                nextRandomTrack(randomIndexTmp);
            } else {
                randomArray.push(randomIndex);
                currentTrack = randomIndex;
            }
        } else {
            randomArray.push(randomIndex);
            currentTrack = randomIndex;
        }
        /* console.dir(randomArray);
        console.log(currentTrack); */
    }
    // la fonction qui va gérer le retour dans mon tableau randomArray
    const previousRandomTrack = () => {
        if(randomArray.length > 0){
            if(currentTrack === randomArray[randomArray.length-1]){
                currentTrack = randomArray[randomArray.length-2];
                // supprimer cette entrée
                randomArray.splice(randomArray.length-1,1);
            } else {
                currentTrack = randomArray[randomArray.length-1];
            }
        } else {
            console.log("vide");
            let randomIndexTmp = Math.floor(Math.random() * playlist.length);
            randomArray.push(randomIndexTmp);
            nextRandomTrack(randomIndexTmp);
        }
        console.dir(randomArray);
        console.log(currentTrack);
    }


    //autre type de déclaration de fonction
    const togglePlayButton = () => {
        if (audio.isPlaying) {
            document.querySelector("#playPause i").classList.remove("fa-play")
            document.querySelector("#playPause i").classList.add("fa-pause")
        } else {
            document.querySelector("#playPause i").classList.add("fa-play")
            document.querySelector("#playPause i").classList.remove("fa-pause")
        }
    }
    // fonction de formatage de temps audio
    const horloge = (temps) => {
        let totalHeures = Math.floor(temps / 3600);
        let totalMinutes = Math.floor(temps / 60);
        //pour récupérer le nombre de secondes restantes à mon temps exprimé
        //en minutes j'utilise l'opérateur mathématique modulo %
        let totalSeconde = Math.floor(temps % 60);
        /* console.log(toString(totalHeures));
        console.dir(totalMinutes);
        console.log(totalSeconde); */
        //si j'utilise à la suite d'une condition qu'une seule intruction
        //je peux la déclarer sans les {} à la suite de la condition
        if (totalHeures <= 9) totalHeures = "0" + totalHeures;
        if (totalMinutes <= 9) totalMinutes = "0" + totalMinutes;
        if (totalSeconde <= 9) totalSeconde = "0" + totalSeconde;
        //les fonctions peuvent retourner le résultat d'une opération
        //avec le mot clé return
        return (totalHeures + ":" + totalMinutes + ":" + totalSeconde);
    }

    /* console.log("hello audio"); */
    const playPause = document.querySelector("#playPause");
    const next = document.querySelector("#next");
    const previous = document.querySelector("#previous");
    const random = document.querySelector("#random");
    const volumeDown = document.querySelector("#volumeDown");
    const volumeUp = document.querySelector("#volumeUp");
    const time = document.querySelector("#time");


    const audio = new Audio(playlist[currentTrack].audio);
    audio.isPlaying = false;
    audio.random = false;
    /* console.dir(audio); */

    playPause.addEventListener("click", () => {
        //condition ternaire
        // dans une ternaire le ? séparant ma condition ( a droite ) de mon instruction 
        //pour le true ( a gauche )
        //et le signe : renverra l'instruction unique pour false à gauche
        audio.isPlaying === true ? audio.pause() : audio.play()
        audio.isPlaying === true ? audio.isPlaying = false : audio.isPlaying = true
        togglePlayButton()
    })
    next.addEventListener("click", () => {
        if (audio.random) {
            //trouver un index de playlist aléatoirement
            let randomIndexTmp = Math.floor(Math.random() * playlist.length);
            randomArray.push(randomIndexTmp);
            if (audio.isPlaying) {
                audio.pause();
                nextRandomTrack(randomIndexTmp)
                audio.src = playlist[currentTrack].audio;
                audio.play();
                audio.isPlaying = true;
                togglePlayButton()
            } else {
                nextRandomTrack(randomIndexTmp)
                audio.src = playlist[currentTrack].audio;
                audio.play();
                audio.isPlaying = true;
                togglePlayButton()
            }
        } else {
            //lecture ou pas ?
            //si lecture (isPlaying)
            if (audio.isPlaying) {
                //-> audio.pause()
                audio.isPlaying = false
                audio.pause();
                //-> currentTrack++; sous condition de taille du tableau d'objet ( fonction en haut )
                nextCurrentTrack();
                //-> audio.src à redéfinir avec le nouveau currenTrack ( incrémenté )
                audio.src = playlist[currentTrack].audio;
                // -> audio.play()
                audio.play();
                audio.isPlaying = true;
                //-> gestion affichage bouton playPause
                togglePlayButton()
            } else {
                //sinon 
                //-> curretTrack++; sous condition de taille du tableau d'objet ( fonction en haut )
                nextCurrentTrack();
                //-> audio.src à redéfinir avec le nouveau currenTrack ( incrémenté )
                audio.src = playlist[currentTrack].audio;
                // -> audio.play()
                audio.play();
                //-> passer isPlaying à true 
                audio.isPlaying = true;
                //-> gestion affichage bouton playPause
                togglePlayButton()
            }
        }

    })
    previous.addEventListener("click", () => {
        if (audio.random) {
            if (audio.isPlaying) {
                audio.isPlaying = false;
                audio.pause();
                previousRandomTrack();
                audio.src = playlist[currentTrack].audio;
                audio.play();
                audio.isPlaying = true;
                togglePlayButton();
            } else {
                previousRandomTrack();
                audio.src = playlist[currentTrack].audio;
                audio.play();
                audio.isPlaying = true;
                togglePlayButton()
            }
        } else {
            if (audio.isPlaying) {
                audio.isPlaying = false;
                audio.pause();
                previousCurrentTrack();
                audio.src = playlist[currentTrack].audio;
                audio.play();
                audio.isPlaying = true;
                togglePlayButton();
            } else {
                previousCurrentTrack();
                audio.src = playlist[currentTrack].audio;
                audio.play();
                audio.isPlaying = true;
                togglePlayButton()
            }
        }


    })
    volumeDown.addEventListener("click", () => {
        /* console.dir(audio.volume); */
        //je veux retirer dix% au volume actuel (entre 0 et 1/ fixé à 1 par défaut)
        // audio.volume = audio.volume - 0.1;
        //raccourcis
        audio.volume = Math.round(audio.volume * 100) / 100;
        if (audio.volume > 0) {
            audio.volume -= 0.1;
        }
    })
    volumeUp.addEventListener("click", () => {
        /* console.dir(audio.volume); */
        audio.volume = Math.round(audio.volume * 100) / 100;
        if (audio.volume < 1) {
            audio.volume += 0.1;
        }
    })
    //utilisation d'une fonction event raccourcie à la place du traditionel addEventListener ex : onclick, onkeyup, onscroll, etc.
    random.onclick = () => {
        // console.log("click sur random");
        //inverser une boolean
        //plan A condition standard
        // if(audio.random /*  === true */ ){
        //     audio.random = false;
        // } else {
        //     audio.random = true;
        // }
        //plan B condition ternaire
        // audio.random ? audio.random = false : audio.random = true
        // audio.random = audio.random ? false : true
        //planc C affectation du contraire
        audio.random = !audio.random
        // console.log(audio.random);
        document.querySelector("#random i").classList.toggle("shuffleCouleur");
    }

    setTimeout(() => {
        //grace au return de ma fonction horloge je peux utiliser horloge comme une valeur
        let tmpHorloge = horloge(audio.duration);
        /* console.log(tmpHorloge); */

        setInterval(() => {
            /* console.log(horloge(Math.round(audio.currentTime))); */
            time.textContent = horloge(Math.round(audio.currentTime)) + " / " + horloge(audio.duration)
        }, 10)
    }, 500);
    //
}

export { initAudio }