function initSlider() {
    currentTrack === "init" ? currentTrack = 0 : ""
    //ici je récupère l'image à afficher dans mon slider
    /* console.dir(playlist[currentTrack].cover); */
    const slider = document.getElementById("slider");
    //la condition if vérifie si une opération est vrai ou faux
    imageA = document.createElement("img");
    imageA.id = "imageA";
    imageA.src = playlist[currentTrack].cover;
    imageA.alt = playlist[currentTrack].author;
    imageA.style.zIndex = "2";
    slider.append(imageA);
    // création d'une balise texte texteA
    texteA = document.createElement("p");
    texteA.id = "texteA";
    texteA.style.zIndex = "3"
    texteA.innerHTML = "<p>" + playlist[currentTrack].title + "<p/><p>" + playlist[currentTrack].author + "<p/><p>" + playlist[currentTrack].year + "<p/><p>" + playlist[currentTrack].genre;
    //pour rajouter une class dans le texteA.innerhtml : class = 'blabla'
    slider.append(texteA);
    imageB = document.createElement("img");
    imageB.id = "imageB";
    imageB.src = "";
    imageB.alt = "";
    imageB.style.zIndex = "0";
    slider.append(imageB);
    texteB = document.createElement("p");
    texteB.id = "texteB";
    texteB.style.zIndex = "1";
    texteB.innerHTML = "";
    slider.append(texteB);
    //je veux connaître la taille de mon image mais je dois d'abord attendre que cette image soit uploadée par mon navigateur :
    //je dois temporiser avec javascript avant d'obtenir les informations demandées
    setTimeout(() => {
        /* console.dir(imageA.clientHeight); */
        slider.style.height = imageA.clientHeight + "px";
    }, 500);
    // toutes les 5 secondes je souhaterais faire disparaître l'imageA et  le texteA pour faire apparaitre l'imageB et le texteB situés en dessous
}

// effet : swipeLeft swipeRight swipeUp swipeDown fadeOut : string
// direction : boolean true marche avant, false marche arrière
const userSliderAction = (effet, direction) => {

    //ajouter ma transition

    if (direction === true) {
        if (currentTrack === playlist.length - 1) {
            trackB = 0
        } else {
            trackB = currentTrack + 1;
        }
    } else {
        if (currentTrack === 0) {
            trackB = playlist.length - 1;
        } else {
            trackB--;
        }
    }
    imageB.src = playlist[currentTrack].cover;
    imageB.alt = playlist[currentTrack].title;
    texteB.innerHTML = "<p>" + playlist[currentTrack].title + "<p/><p>" + playlist[currentTrack].author + "<p/><p>" + playlist[currentTrack].year + "<p/><p>" + playlist[currentTrack].genre;

    console.log(
        `currentTrack correspond à ${currentTrack}.
        trackB correspond à ${trackB}.
        `
    );
    imageA.classList.add("trans");
    texteA.classList.add("trans");
    imageA.classList.add(effet);
    texteA.classList.add(effet);
    //j'attends la fin de ma transition pour la suite

    setTimeout(() => {
        //je commence pas intcrémenter currentTrack
        /* if (direction) {
            if (trackB === playlist.length - 1) {
                trackB = 0
            } else {
                trackB++;
            }
            if (currentTrack === playlist.length - 1) {
                currentTrack = 0
            } else {
                currentTrack++;
            };
        } else {
            if (trackB === 0) {
                trackB = playlist.length - 1;
            } else {
                trackB--;
            }
            if (currentTrack === 0) {
                currentTrack = playlist.length - 1;
            } else {
                currentTrack--;
            }
        }; */

        imageA.src = playlist[currentTrack].cover;
        imageA.alt = playlist[currentTrack].author;
        texteA.innerHTML = "<p>" + playlist[currentTrack].title + "<p/><p>" + playlist[currentTrack].author + "<p/><p>" + playlist[currentTrack].year + "<p/><p>" + playlist[currentTrack].genre;
        //je dois retirer la transition
        imageA.classList.remove("trans");
        texteA.classList.remove("trans");
        imageA.classList.remove(effet);
        texteA.classList.remove(effet);
        imageB.src = playlist[trackB].cover;
        imageB.alt = playlist[trackB].author;
        texteB.innerHTML = "<p>" + playlist[trackB].title + "<p/><p>" + playlist[trackB].author + "<p/><p>" + playlist[trackB].year + "<p/><p>" + playlist[trackB].genre;


    }, 500);

}


export { initSlider, userSliderAction }