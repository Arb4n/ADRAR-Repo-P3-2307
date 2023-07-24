// Série A


/*
// A1
// Initialisation
setPos(300,300);
faceDown();
changeColor(color.red);
setLineWidth(5);

// Réalisation
forward(200);
faceRight();
forward(100);


// A2
// Initialisation
setPos (300,300);
faceLeft();
changeColor(color.yellow);
setLineWidth(5);

// Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);
*/

/*
// A3
// Init
setPos(300, 300);
faceLeft();
changeColor(color.red);
setLineWidth(4);

// Réal
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);


// A4 : S
// Init
setPos(200, 500);
faceRight();
changeColor(color.green);
setLineWidth(6);

// Réal
forward(200);
arcLeft(100, 180);
forward(100);
arcRight(100, 180);
forward(200);


// A5 : Yin & Yang
// Init
setPos(300, 100);
faceRight();
changeColor(color.fuchsia);
setLineWidth(8);

// Réal
arcRight(200, 180);
arcRight(200, 180);
arcRight(100, 180);
arcLeft(100, 180);


// A6 : Séparation
// Init
setPos(300, 300);
faceUp();
changeColor(color.aqua);
setLineWidth(10);

// Réal
forward(50);
up();
forward(50);
down();
forward(100);


// A7 : Boucle
// Init
setPos(200,280);
faceDown();
changeColor(color.green);
setLineWidth(12);

// Réal
forward(200);
arcLeft(100,180)
forward(100);
up();
forward(50);
down();
forward(200);
arcLeft(100,180);
forward(100);


// A8 : Rectangle à trous

*/

// _______________________________
// _______________________________



/*

// Série B


// B1 : Escaliers
// Init
setPos(100, 100);
faceRight();
changeColor(color.green);
setLineWidth(4);

// Réal
for (let i = 0; i < 4; i++) {
    faceRight();
    forward(100);
    faceDown();
    forward(100);
}



// B2 : Créneaux
// Init
setPos(100, 200);
faceUp();
changeColor(color.red);
setLineWidth(6);

// Réal

for (let i = 0; i < 4; i++) {
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight()
    forward(50);
}


// B3 : Carré 
// Init 
setPos(300, 300);
faceRight();
changeColor(color.blue);
setLineWidth(8);

// Réal
for (let i = 0; i < 4; i++) {
    forward(100);
    right(90);
}


// B4 : Triangle 

setPos(300, 300);
faceRight();
changeColor(color.aqua);
setLineWidth(10);

// Réal

for (let i = 0; i < 3; i++) {
    forward(100);
    left(120);
}


// B5 : Drapeau 
setPos(300, 300);
faceUp();
changeColor(color.orange);
setLineWidth(12);

// Réal 
forward(100);
changeColor(color.red);
for (let i = 0; i < 3; i++) {
    forward(50);
    right(120);
}


// B6 : Escalier bicolore 
setPos(300, 300);
faceRight();
changeColor(color.red);
setLineWidth(14);

// // Réal
for (let i = 0; i < 2; i++) {
    faceRight();
    forward(50);
    faceUp();
    forward(50);
}

changeColor(color.green);

for (let i=0 ; i<3 ; i++) {
    faceRight();
    forward(50);
    faceDown();
    forward(50);

}
*/
// Still B7 to B24 !!!


// ______________________
// ______________________


/*
// Série C

// C1 : Dents
setPos(100, 300);
faceRight();
changeColor(color.aqua);
setLineWidth(4);

// Réal
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {

        forward(100);
        right(120);

    }
    left(120);
}

// C2 : Fenêtres
setPos(300, 500);
faceUp();
changeColor(color.fuchsia);
setLineWidth(6);

// Réal


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();

}


// C3 : Couleurs Décalées
setPos(50, 300);
faceRight();
shiftColor(1/3);

// Réal
for (let i=0 ; i<3 ; i++){
    for (let j=0 ; j<8 ; j++) {
        forward(100);
        left(-135);
    }
    up();
    forward(200);
    down();
    shiftColor(0.1);

}



// C4 : Pâtés de maison
setPos(50, 300);
faceRight();
changeColor(color.red);

// Réal


for (let i=0; i<5; i++) {
    for (j=0; j<3; j++){
        forward(50);
        left(120);
    }
    changeColor(color.orange);
    for (let k=0; k<4; k++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
    changeColor(color.red);
}


// C5 : Quadriétoile
setPos(300, 300);
faceRight();
shiftColor(0.54);

// Réal 
for (let i=0; i<4; i++) {
    for (let j=0; j<8; j++) {
        forward(200);
        left(135);
    }
    shiftColor(0.25);
    right(90);
}


// C6 : Triangle Doré 
setPos(300, 300);
faceRight();
changeColor(color.yellow);
setLineWidth(14);

// Real 
for (let i=0; i<4; i++) {
    for (let j=0; j<5; j++){
        forward(100);
        left(120);
    }
    right(120);
}


// C7 : Soleil
setPos(300, 300);
faceRight();
changeColor(color.orange);
setLineWidth(50);

// Real
for (let i=0; i<8; i++) {
    for (let j=0; j<4; j++) {
        forward(50);
        right(120);
    }
    left(165);
} 

*/

// C8: Fleur
// setPos(300, 300);
// faceRight();
// shiftColor(0.54);


// Et plein d'autre C aaaa


// _____________________
// _____________________



// Série D

// On peut commencer au D9 pour tester des déclarations 
// de variable.

/*
// D9 : Spirale
// Init
setPos(300, 200);
faceRight();
setLineWidth(20);
changeColor(color.blue);


// Réal
let longueur = 50;
for (let i = 0; i < 6; i++) {
    forward(longueur);
    right(120);
    longueur += 100;
}


// D10 : Grande Spirale
setPos(300, 250);
faceRight();
changeColor(color.yellow);

// Réal
let longueur = 50;
for (let i = 0; i < 10; i++) {
    forward(longueur);
    right(90);
    longueur += 50;
}
*/

// D11 : Décrémentation 
setPos(100,250);
faceRight();
changeColor(color.white);
setLineWidth(6);
// Real 
let longueur = 100;
for (let i=0; i<5; i++) {
    for (let j=0; j<3; j++) {
        forward(longueur);
        left(120);
    }
    forward(longueur);
    longueur -= 20;
}


// D12 : Escargot Triangulaire
