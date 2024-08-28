const imoveis = [];
let opcao = "";

do {
  console.log(imoveis.length + "Imóveis cadastrados.\n");

  opcao = prompt(
    "Escolha uma das opções:\n 1. Salvar um imóvel. | " +
    "2. Mostrar todos os imóveis. | " +
    "3 .Sair"
  );

  switch (opcao) {
    //salvar imovel
    case "1":
      //criacao do objeto com as props e entradas do usuario
      const imovel = {
        nomeProprietario: prompt("Nome do proprietário: "),
        qtdQuartos: prompt("Quantidade de quartos: "),
        qtdBanheiros: prompt("Quantidade de banheiros: "),
        possuiGaragem:
          prompt("Possui garagem? SIM/NÃO").toUpperCase() === "SIM",
      };
      //adicao do objeto (imovel) ao array
      imoveis.push(imovel);
      console.log("Imóvel cadastrado com sucesso.");
      break;
    //mostrar imoveis salvos
    case "2":
      if (imoveis.length === 0) {
        alert("Sem imoveis cadastrados");
        break;
      } else {
        for (let i = 0; i < imoveis.length; i++)
          alert(
            "Imóvel " +
              (i + 1) +
              "\nProprietário: " +
              imoveis[i].nomeProprietario +
              "\nQuantidade de quartos: " +
              imoveis[i].qtdQuartos +
              "\nQuantidade de banheiros: " +
              imoveis[i].qtdBanheiros +
              "\nPossui garagem? " +
              imoveis[i].possuiGaragem
          );
        break;
      }
    case "3":
      alert("Programa finalizado.");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "3");
