
/* Ciklai
1. naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
2. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje
eilutėje);
3. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius
vienoje eilutėje);
4. naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius
vienoje eilutėje);
5. naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
6. naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
7. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
8. naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
9. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius
vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek
ciklų prasisuko;
10. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n
centimetrus coliais ir atvirkščiai.
11. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite
kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas,
indėlį.
12. . Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei
tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už
duotąjį, raskite tą skaičių.
13. Raskite keturženklius skaičius, kurių pirmasis skaitmuo yra lyginis, o skaičius nesidalina
iš 998 ?
14. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra
keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros keliamuosius metus.
15. Norėdami paskatinti žmones naudotis visuomeniniu miesto transportu, savivaldybės tarnautojai sugalvojo, kad bilietai, kurie baigiasi lyginiu skaitmeniu, kainuos perpus pigiau. Bilietai, kurie baigiasi nuliu, parduodami be nuolaidos. Parenkite programą, spausdinančią visų bilietų, kurie kainuos pigiau, numerius. Bilietai pradedami numeruoti nuo m-tojo, baigiami n-tuoju. Kai m = 997, o n = 1003, tuomet turi būti rodomi tokie bilietų numeriai: 998 1002
16. Duotas natūralus skaičius n. Raskite pirmą skaitmenį
17. Duotas natūralusis skaičius n. Raskite skaitmenų sumą.
18. Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =321
19. Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią skaitmenį.




error_reporting( E_ALL );
ini_set( 'display_errors', 1 );


// function br(){
//     echo "<br>";
// }


// 1
for(let i = 0; i < 5; ++i){
    console.log("Labas");
}

// 2
for(let i = 0; i < 5; ++i){
    console.log(i);
}

// 3
for(let i = 0; i < 50; i = i + 10){
    console.log(i);
}

// 4
for(let i = 49; i < 54; ++i){
    console.log(i);
}

// 5
for(let i = 4; i > -1; --i){
    console.log(i);
}

// 6
for(let i = 0; i < 5; ++i){
    console.log(Math.floor(Math.random()*11));
}

// 7
let random;
while(random != 5){
    random = Math.floor(Math.random()*11);
    console.log(random);
}

// 8
let suma = 0;
while(suma <= 100){
    random = Math.floor(Math.random()*11);
    console.log(random);
    suma += random;
}

// 9
let random;
let cikluKiekis = 0;
while(random != 5 && random != 7){
    random = Math.floor(Math.random()*11);
    console.log(random);
    cikluKiekis++;
}
console.log("Prasisuko ciklų: "+ cikluKiekis);

// 10

function converter(n){
    for (let i = 1; i <= n; i++){
        console.log(i + " cm yra " + (i/2.54) + " colių");
    }
    for (let j = 1; j <= n; j++){
        console.log(j + " colių yra " + (j*2.54) + " cm");
    }
}

converter(10);

//11

function planas (indelis, palukanuNorma, metuKiekis){
    for (let i = 1; i <= metuKiekis; ++i){
        let palukanos = indelis * palukanuNorma / 100;
        indelis += palukanos;
        console.log("Metai: " + i +", Palukanos: " + palukanos.toFixed(2) + ", Indėlis: " + indelis.toFixed(2));
    }
}

planas(100, 2, 5);

//12

function dvizenklisSkaicius() {
    for (let i = 10; i <= 99; ++i){
        let vienetai = i % 10;
        let desimtys = Math.floor(i/10);
        if (vienetai * 3 == desimtys && (vienetai * 10 + desimtys)+36 == i){
            console.log(i);
        }
    }
}

dvizenklisSkaicius();

//13

function keturzenklis(){
    for (let i = 2000; i <= 8999; ++i) {
        if (Math.floor(i / 1000) % 2 == 0 && (i % 998 != 0)){
            console.log(i);
        }
    }
}

keturzenklis();

//14

function keliamiejiMetai(metuSkaicius){
    for (let i = 0; i < metuSkaicius; ++i){
        if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0){
            console.log("Metai "+ i +" yra keliemieji.");
        }
    }
}

keliamiejiMetai(2021);

//15

function bilietai(pradinisBilietas, paskutinisBilietas){
    for (let i = pradinisBilietas; i <= paskutinisBilietas; ++i){
        if(i % 2 == 0 && i % 10 !=0){
            console.log("Bilietas " + i + " bus parduotas su nuolaida.");
        }
    }
}

bilietai(997, 1003);

//16 

function pirmasSkaitmuo(skaicius){
    while (skaicius > 9){
        skaicius = Math.floor(skaicius/10);
    }
    console.log("Pirmas skaitmuo yra: " + skaicius);
}

pirmasSkaitmuo(95261);

function antrasSkaitmuo(skaicius){
    while (skaicius > 99){
        skaicius = Math.floor(skaicius/10);
    }
    let antrasSkaicius = skaicius % 10;
    console.log("Pirmas skaitmuo yra: " + skaicius);
}

antrasSkaitmuo(8548445);

//17

function skaitmenuSuma (skaicius){
    let suma = 0;
    while (skaicius > 0){
        let paskutinisSkaitmuo = skaicius % 10;
        suma = suma + paskutinisSkaitmuo;
        skaicius = Math.floor(skaicius / 10);
    }
    console.log("Skaitmenu suma yra: " + suma);
}

skaitmenuSuma(1256155);

//18

function reverse(skaicius) {
    let atgalinisSkaicius = 0;
    console.log("Pradinis skaičius pries cikla " + skaicius);
    while (skaicius > 0) {
        let paskutinisSkaitmuo = skaicius % 10;
        atgalinisSkaicius = atgalinisSkaicius * 10 + paskutinisSkaitmuo;
        skaicius = Math.floor(skaicius / 10);
    }
    console.log("Pradinis skaičius po ciklo " + skaicius);
    console.log("Atgalinis skaicius duotajma yra: " + atgalinisSkaicius);
}

reverse(179);

// 19

function littleBig(skaicius){
    let maziausias = 10;
    let didziausias = -1;

    while (skaicius > 0){
        let paskutinisSkaitmuo = skaicius % 10;
        if (paskutinisSkaitmuo > didziausias) {
            didziausias = paskutinisSkaitmuo;
        }
        if (paskutinisSkaitmuo < maziausias) {
            maziausias = paskutinisSkaitmuo;
        }
        skaicius = Math.floor(skaicius / 10);
    }
    console.log("Didziausias skaitmuo yra: " + didziausias + ", maziausias skaitmuo yra: " + maziausias);
}

littleBig(154164516);