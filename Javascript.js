const palavras = [
  "pesadelos",
  "código espaguete",
  "o código que só funciona se você fechar os olhos",
  "a atualização que quebrou tudo que funcionava",
  "problemas que nem o stack overflow resolve",
  "sem documentação",
  "enquanto está sem dormir",
  "deploys de sexta-feira",
  "uma funcionalidade que já funcionava",
  "o algoritmo que faz sentido... até a próxima atualização",
  "condições de corrida",
  "vazamentos de memória",
  "erros de 'funciona na minha máquina'",
  "bugs causados por digitação",
  "exceções em tempo de execução",
  "o próprio debugger",
  "depois do café",
  "o commit de 'não mexe aqui'",
];

const elementoTexto = document.getElementById('dynamic-text');

async function digitarPalavra(palavra) {
    for (let i = 0; i < palavra.length; i++) {
        elementoTexto.textContent += palavra[i];
        await new Promise(resolve => setTimeout(resolve, 150));
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    await apagarPalavra();
}

async function apagarPalavra() {
    while (elementoTexto.textContent.length > 0) {
        elementoTexto.textContent = elementoTexto.textContent.slice(0, -1);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

async function cicloTexto() {
    while (true) {
        for (let palavra of palavras) {
            await digitarPalavra(palavra);
        }
    }
}

cicloTexto();

