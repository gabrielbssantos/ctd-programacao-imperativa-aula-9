/*
Grupo 3

Integrantes:
    - Gabriel Bernardo
    - Wagner Moreira
    - Jonatas Zamperi
    - José Neto
    - Vinícius Serra


Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

*/

function microondas(foodPosition, time) {
    const pipoca = 10, macarrao = 8, carne = 15, feijao = 12, brigadeiro = 8

    const menu = `
    1 - Pipoca – 10 segundos (padrão);\n
    2 - Macarrão – 8 segundos (padrão);\n
    3 - Carne – 15 segundos (padrão);\n
    4 - Feijão – 12 segundos (padrão);\n
    5 - Brigadeiro – 8 segundos (padrão);
    `;

    const queimou = "A comida queimou.";
    const insuficiente = "tempo insuficiente.";
    const mensagemErro = "Prato inexistente";
    const maiorQueTres = "kabumm";
    const mensagemSucesso = "Prato pronto, bom apetite!!!";

    if(foodPosition === 1) {
        // "Prato pronto, bom apetite!!!"
        if(time === pipoca && time < pipoca * 2) {
            console.log(mensagemSucesso);
        // "A comida queimou."
        } else if(time > pipoca * 2 && time <= pipoca *3) {
            console.log(queimou);
        // "kabumm"
        } else if(time > pipoca * 3) {
            console.log(maiorQueTres);
        } else if(time < pipoca) {
            console.log(insuficiente);
        }
    } else if(foodPosition === 2) {
        // "Prato pronto, bom apetite!!!"
        if(time === macarrao && time < macarrao * 2) {
            console.log(mensagemSucesso);
        // "A comida queimou."
        } else if(time > macarrao * 2 && time <= macarrao * 3) {
            console.log(queimou);
        // "kabumm"
        } else if(time > macarrao * 3) {
            console.log(maiorQueTres);
        } else if(time < macarrao) {
            console.log(insuficiente);
        }
    } else if(foodPosition === 3) {
        // "Prato pronto, bom apetite!!!"
        if(time === carne && time < carne * 2) {
            console.log(mensagemSucesso);
        // "A comida queimou."
        } else if(time > carne * 2 && time <= carne *3) {
            console.log(queimou);
        // "kabumm"
        } else if(time > carne * 3) {
            console.log(maiorQueTres);
        } else if(time < carne) {
            console.log(insuficiente);
        }
    } else if(foodPosition === 4) {
        // "Prato pronto, bom apetite!!!"
        if(time === feijao && time < feijao * 2) {
            console.log(mensagemSucesso);
        // "A comida queimou."
        } else if(time > feijao * 2 && time <= feijao *3) {
            console.log(queimou);
        // "kabumm"
        } else if(time > feijao * 3) {
            console.log(maiorQueTres);
        } else if(time < feijao) {
            console.log(insuficiente);
        }
    } else if(foodPosition === 5) {
        // "Prato pronto, bom apetite!!!"
        if(time === brigadeiro && time < brigadeiro * 2) {
            console.log(mensagemSucesso);
        // "A comida queimou."
        } else if(time > brigadeiro * 2 && time <= brigadeiro *3) {
            console.log(queimou);
        // "kabumm"
        } else if(time > brigadeiro * 3) {
            console.log(maiorQueTres);
        } else if(time < brigadeiro) {
            console.log(insuficiente);
        }
    } else if(foodPosition < 1 || foodPosition > 5) {
        console.log(mensagemErro);
    }
}



// microondas(2, 7);
microondas(3, 17);
// microondas(5, 10);
// microondas(1, 20);