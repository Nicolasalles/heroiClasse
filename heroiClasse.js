const prompt = require('prompt-sync')();
class Heroi {
    constructor (nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;  
    }

    atacar(tipo) {
        let ataque;
        switch (this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default: break;
        }

        return (console.log('o ' + this.tipo + " atacou usando " + ataque));
    }
}

let nomeInput = prompt("Digite o nome do Heroi: ");
let ageInput = prompt("Digite a idade do Heroi: ");
let tipoInput = prompt("Digite o tipo do Heroi (guerreiro, mago, monge, ninja): ");

const primeiroHeroi = new Heroi (nomeInput,ageInput,tipoInput);
primeiroHeroi.atacar(this.tipo);

