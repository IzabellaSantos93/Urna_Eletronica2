function urnaEletronica() {

    let opcao, contadorTotalDeVotos = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let brancos = 0;
    let nulos = 0;
    let decisao = "N";
    let nome1 = 'Candidato 1';
    let nome2 = 'Candidato 2';
    let nome3 = 'Candidato 3';
     
    

    do {

        contadorTotalDeVotos ++;
       
        console.log("Repetição", contadorTotalDeVotos);
        opcao = parseInt(prompt("Digite uma opçao"));

        if (opcao == 1) {
            console.log("Você votou",nome1)
            candidato1 ++;
        } else if (opcao == 2) {
            console.log("Você votou",nome2)
            candidato2 ++;

        } else if (opcao == 3) {
            console.log("Você votou",nome3)
            candidato3 ++;

        } else if (opcao == 5) {
            console.log("Você votou branco")
            brancos ++;

        } else if (opcao == 8) {
            console.log("Você votou nulo")
            nulos ++;

        } else if (opcao == 0) {
            decisao = prompt("Se realmente deseja encerrar a votação digite 'N' para Não ou 'S' para Sim")
        }

    } while (decisao !== "S")


}


