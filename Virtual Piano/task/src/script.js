document.addEventListener("keydown", ev => {
    switch (ev.key) {
        case "A":
        case "a":
            const audioA = new Audio("white_keys/A.mp3")
            audioA.load();
            audioA.play();
            break;
        case "S":
        case "s":
            const audioS = new Audio("white_keys/S.mp3")
            audioS.load();
            audioS.play();
            break;
        case "D":
        case "d":
            const audioD = new Audio("white_keys/D.mp3")
            audioD.load();
            audioD.play();
            break;
        case "F":
        case "f":
            const audioF = new Audio("white_keys/F.mp3")
            audioF.load();
            audioF.play();
            break;
        case "G":
        case "g":
            const audioG = new Audio("white_keys/G.mp3")
            audioG.load();
            audioG.play();
            break;
        case "H":
        case "h":
            const audioH = new Audio("white_keys/H.mp3")
            audioH.load();
            audioH.play();
            break;
        case "J":
        case "j":
            const audioJ = new Audio("white_keys/J.mp3")
            audioJ.load();
            audioJ.play();
            break;

        case "E":
        case "e":
            const audioE = new Audio("black_keys/E.mp3")
            audioE.load();
            audioE.play();
            break;
        case "T":
        case "t":
            const audioT = new Audio("black_keys/T.mp3")
            audioT.load();
            audioT.play();
            break;
        case "U":
        case "u":
            const audioU = new Audio("black_keys/U.mp3")
            audioU.load();
            audioU.play();
            break;
        case "W":
        case "w":
            const audioW = new Audio("black_keys/W.mp3")
            audioW.load();
            audioW.play();
            break;
        case "Y":
        case "y":
            const audioY = new Audio("black_keys/Y.mp3")
            audioY.load();
            audioY.play();
            break;
        default:
            console.warn("Wrong key");
    }
})