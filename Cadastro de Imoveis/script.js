const imoveis = [];
let opcao = "";

do {
    opcao = prompt(
        "Bem Vindo (a) ao Cadastro de Imoveis!" +
            "\nTotal de Imóveis: " +
            imoveis.length +
            "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Listar imóveis\n3. Sair"
    );

    switch (opcao) {
        case "1":
            const imovel = {};

            imovel.propietario = prompt(
                "Qual é o nome do Propietario do imovel:"
            );
            imovel.quartos = prompt("Quantos quartos possui o imovel?");
            imovel.banheiro = prompt("Quantos banheiros possui o imovel?");
            imovel.garagem = prompt("O imovel possui garagem? (Sim/Não)");

            const confirmacao = confirm(
                "Salvar este Imovel?\n" +
                    "\nPropietario: " +
                    imovel.propietario +
                    "\nQuartos: " +
                    imovel.quartos +
                    "\nBanheiros: " +
                    imovel.banheiro +
                    "\nPossui garagem? " +
                    imovel.garagem
            );
            if (confirmacao) {
                imoveis.push(imovel);
                alert("Imovel salvo com sucesso!");
            } else {
                alert("Voltando ao menu...");
            }
            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " +
                        (i + 1) +
                        "\nPropietario: " +
                        imoveis[i].propietario +
                        "\nQuartos: " +
                        imoveis[i].quartos +
                        "\nBanheiros: " +
                        imoveis[i].banheiro +
                        "\nPossui Garagem? " +
                        imoveis[i].garagem
                );
            }
            break;
        case "3":
            alert("Encerrando...");
            break;
        default:
            alert("Opção invalida!");
    }
} while (opcao !== "3");
