

function initSlider(playlist, track, direction, effet) {
    /* console.log("initialisation du Slider");
    console.dir(playlist); */
    //ici je récupère l'image à afficher dans mon slider
    /* console.dir(playlist[track].cover); */
    const slider = document.getElementById("slider");
    let trackB = null; // "let trackB; marche aussi
    //la condition if vérifie si une opération est vrai ou faux
    if (direction === true) {
        trackB = track + 1;
    } else {
        trackB = playlist.length - 1;
    }
    const imageA = document.createElement("img");
    imageA.id = "imageA";
    imageA.src = playlist[track].cover;
    imageA.alt = playlist[track].author;
    imageA.style.zIndex = "2";
    slider.append(imageA);
    // création d'une balise texte texteA
    const texteA = document.createElement("p");
    texteA.id = "texteA";
    texteA.style.zIndex = "3"
    texteA.innerHTML = "<p>" + playlist[track].title + "<p/><p>" + playlist[track].author + "<p/><p>" + playlist[track].year + "<p/><p>" + playlist[track].genre;
    //pour rajouter une class dans le texteA.innerhtml : class = 'blabla'
    slider.append(texteA);
    const imageB = document.createElement("img");
    imageB.id = "imageB";
    imageB.src = playlist[trackB].cover;
    imageB.alt = playlist[trackB].author;
    imageB.style.zIndex = "0";
    slider.append(imageB);
    const texteB = document.createElement("p");
    texteB.id = "texteB";
    texteB.style.zIndex = "1";
    texteB.innerHTML = "<p>" + playlist[trackB].title + "<p/><p>" + playlist[trackB].author + "<p/><p>" + playlist[trackB].year + "<p/><p>" + playlist[trackB].genre;
    slider.append(texteB);
    //je veux connaître la taille de mon image mais je dois d'abord attendre que cette image soit uploadée par mon navigateur :
    //je dois temporiser avec javascript avant d'obtenir les informations demandées
    setTimeout(() => {
        /* console.dir(imageA.clientHeight); */
        slider.style.height = imageA.clientHeight + "px";
    }, 500);
    // toutes les 5 secondes je souhaterais faire disparaître l'imageA et  le texteA pour faire apparaitre l'imageB et le texteB situés en dessous

    setInterval(() => {
        //ajouter ma transition ici
        imageA.classList.add("trans");
        texteA.classList.add("trans");
        imageA.classList.add(effet);
        texteA.classList.add(effet);
        //j'attends la fin de ma transition pour la suite
        setTimeout(() => {
            //je commence pas intcrémenter track
            if (direction) {
                if (trackB === playlist.length - 1) {
                    trackB = 0
                } else {
                    trackB++;
                }
                if (track === playlist.length - 1) {
                    track = 0
                } else {
                    track++;
                };
            } else {
                if (trackB === 0) {
                    trackB = playlist.length - 1;
                } else {
                    trackB--;
                }
                if (track === 0) {
                    track = playlist.length - 1;
                } else {
                    track--;
                }
            };

            imageA.src = playlist[track].cover;
            imageA.alt = playlist[track].author;
            texteA.innerHTML = "<p>" + playlist[track].title + "<p/><p>" + playlist[track].author + "<p/><p>" + playlist[track].year + "<p/><p>" + playlist[track].genre;
            //je dois retirer la transition
            imageA.classList.remove("trans");
            texteA.classList.remove("trans");
            imageA.classList.remove(effet);
            texteA.classList.remove(effet);
            imageB.src = playlist[trackB].cover;
            imageB.alt = playlist[trackB].author;
            texteB.innerHTML = "<p>" + playlist[trackB].title + "<p/><p>" + playlist[trackB].author + "<p/><p>" + playlist[trackB].year + "<p/><p>" + playlist[trackB].genre;


        }, 500);

    }, 5000);



}


export { initSlider }