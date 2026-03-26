const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 11);
let chances = 5;

console.log("=========================================");
console.log("Bora ver se tu é bom memo em acertar");
console.log("=========================================");
console.log("To pensando de 0 a 10, qual sera?");
console.log(`Você tem ${chances} tentativas para descobrir qual é.\n`);

function perguntar() {
    if (chances === 0) {
        console.log(`\nAcabou, tu tinha que ter falado que era o ${numeroSecreto}.`);
        console.log("\"Tu errou tudo kkkkkkkkk!\"");
        rl.close(); // Encerra o programa
        return;
    }

    rl.question(`[Tentativas: ${chances}] Qual o seu palpite? `, (resposta) => {
        const palpite = parseInt(resposta);

        if (isNaN(palpite) || palpite < 0 || palpite > 10) {
            console.log("Faz favor né, o baguhlo é entre 0 e 10.\n");
            perguntar();
            return;
        }

        if (palpite === numeroSecreto) {
            console.log(`\nQuase perdeu aindakkkk, era esse ai memo, o ${numeroSecreto}.`);
            console.log(" \"Pede bença zé, pede pro teu pai!\"");
            rl.close();
        } else {
            chances--;
            if (chances > 0) {
                const dica = palpite > numeroSecreto ? "menor" : "maior";
                console.log(`Tudo errado! Talvez seja ${dica} que ${palpite}.\n`);
                perguntar();
            } else {
                perguntar();
            }
        }
    });
}

perguntar();