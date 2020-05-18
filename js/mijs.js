function cambio(x) {
    var box1 = document.getElementById('box1');
    var cir1 = document.getElementById('cir1');
    var indicador1 = document.getElementById('indicador1');

    var box2 = document.getElementById('box2');
    var cir2 = document.getElementById('cir2');
    var indicador2 = document.getElementById('indicador2');

    var box3 = document.getElementById('box3');
    var cir3 = document.getElementById('cir3');
    var indicador3 = document.getElementById('indicador3');

    var box4 = document.getElementById('box4');
    var cir4 = document.getElementById('cir4');
    var indicador4 = document.getElementById('indicador4');

    var box5 = document.getElementById('box5');
    var cir5 = document.getElementById('cir5');
    var indicador5 = document.getElementById('indicador5');

    var box6 = document.getElementById('box6');
    var cir6 = document.getElementById('cir6');
    var indicador6 = document.getElementById('indicador6');


    switch (x) {
        case 1:
            box1.style.display = "flex";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "none";

            cir1.style.backgroundColor = "#2EFFD8";
            cir2.style.backgroundColor = "white";
            cir3.style.backgroundColor = "white";
            cir4.style.backgroundColor = "white";
            cir5.style.backgroundColor = "white";
            cir6.style.backgroundColor = "white";

            indicador1.style.borderBottom = "30px solid white";
            indicador2.style.borderBottom = "30px solid transparent";
            indicador3.style.borderBottom = "30px solid transparent";
            indicador4.style.borderBottom = "30px solid transparent";
            indicador5.style.borderBottom = "30px solid transparent";
            indicador6.style.borderBottom = "30px solid transparent";
            break;
        case 2:
            box1.style.display = "none";
            box2.style.display = "flex";
            box3.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "none";

            cir1.style.backgroundColor = "white";
            cir2.style.backgroundColor = "#2EFFD8";
            cir3.style.backgroundColor = "white";
            cir4.style.backgroundColor = "white";
            cir5.style.backgroundColor = "white";
            cir6.style.backgroundColor = "white";

            indicador1.style.borderBottom = "30px solid transparent";
            indicador2.style.borderBottom = "30px solid white";
            indicador3.style.borderBottom = "30px solid transparent";
            indicador4.style.borderBottom = "30px solid transparent";
            indicador5.style.borderBottom = "30px solid transparent";
            indicador6.style.borderBottom = "30px solid transparent";
            break;
        case 3:
            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "flex";
            box4.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "none";

            cir1.style.backgroundColor = "white";
            cir2.style.backgroundColor = "white";
            cir3.style.backgroundColor = "#2EFFD8";
            cir4.style.backgroundColor = "white";
            cir5.style.backgroundColor = "white";
            cir6.style.backgroundColor = "white";

            indicador1.style.borderBottom = "30px solid transparent";
            indicador2.style.borderBottom = "30px solid transparent";
            indicador3.style.borderBottom = "30px solid white";
            indicador4.style.borderBottom = "30px solid transparent";
            indicador5.style.borderBottom = "30px solid transparent";
            indicador6.style.borderBottom = "30px solid transparent";
            break;
        case 4:
            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "flex";
            box5.style.display = "none";
            box6.style.display = "none";

            cir1.style.backgroundColor = "white";
            cir2.style.backgroundColor = "white";
            cir3.style.backgroundColor = "white";
            cir4.style.backgroundColor = "#2EFFD8";
            cir5.style.backgroundColor = "white";
            cir6.style.backgroundColor = "white";

            indicador1.style.borderBottom = "30px solid transparent";
            indicador2.style.borderBottom = "30px solid transparent";
            indicador3.style.borderBottom = "30px solid transparent";
            indicador4.style.borderBottom = "30px solid white";
            indicador5.style.borderBottom = "30px solid transparent";
            indicador6.style.borderBottom = "30px solid transparent";
            break;
        case 5:
            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "flex";
            box6.style.display = "none";

            cir1.style.backgroundColor = "white";
            cir2.style.backgroundColor = "white";
            cir3.style.backgroundColor = "white";
            cir4.style.backgroundColor = "white";
            cir5.style.backgroundColor = "#2EFFD8";
            cir6.style.backgroundColor = "white";

            indicador1.style.borderBottom = "30px solid transparent";
            indicador2.style.borderBottom = "30px solid transparent";
            indicador3.style.borderBottom = "30px solid transparent";
            indicador4.style.borderBottom = "30px solid transparent";
            indicador5.style.borderBottom = "30px solid white";
            indicador6.style.borderBottom = "30px solid transparent";
            break;
        case 6:
            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "flex";

            cir1.style.backgroundColor = "white";
            cir2.style.backgroundColor = "white";
            cir3.style.backgroundColor = "white";
            cir4.style.backgroundColor = "white";
            cir5.style.backgroundColor = "white";
            cir6.style.backgroundColor = "#2EFFD8";

            indicador1.style.borderBottom = "30px solid transparent";
            indicador2.style.borderBottom = "30px solid transparent";
            indicador3.style.borderBottom = "30px solid transparent";
            indicador4.style.borderBottom = "30px solid transparent";
            indicador5.style.borderBottom = "30px solid transparent";
            indicador6.style.borderBottom = "30px solid white";
            break;
        default:
            console.log("Tienes un error");
    }
}