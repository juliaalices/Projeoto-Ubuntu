quadro1 = document.getElementById('1');
quadro2 = document.getElementById('2');
quadro3 = document.getElementById('3');

textQuadro1 = ["SOLIDARIEDADE", "AMOR", "DOAÇÃO"];
textQuadro2 = ["EMPATIA", "HUMILDADE", "COMPAIXÃO"];
textQuadro3 = ["HUMILDADE", "ESPERANÇA", "ALEGRIA"];
index = 0;
setInterval( function() {
        quadro1.textContent = textQuadro1[index];
        quadro2.textContent = textQuadro2[index];
        quadro3.textContent = textQuadro3[index];
        (index == 2? index = 0 : index++);
}, 2000)