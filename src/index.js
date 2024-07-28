let nome = "Jessica";
let xp = 9610;

if (xp <= 1000) {
    xp = "Ferro";
} else if (xp <= 2000 ) {
    xp = "Bronze";
} else if (xp <= 5000) {
    xp = "Prata";
} else if (xp <= 7000) {
    xp =  "Ouro";
} else if (xp <= 8000) {
    xp = "Platina";
} else if (xp <= 9000) {
    xp = "Ascendente";
} else if (xp <= 10000) {
    xp = "Imortal";
} else {
    xp = "Radiante";
}


console.log(`O herói ** ${nome} ** está no nível de ** ${xp} **.`);