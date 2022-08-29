fetch(
  `https://www.multi.com.br/jsonRetorno.php?id=v3&tipo=venda&pagina=113&cod=2718`
)
  .then((response) => {
    return response.json();
  })
  .then((obj) => {
    let imovel = obj[0];
    console.log(imovel);

    document.getElementById("codigo").innerHTML = `Código: ${imovel.codigo}`;
    document.getElementById("valor").innerHTML = imovel.valor;
    document.getElementById("tipo").innerHTML = imovel.tipo;
    document.getElementById("bairro").innerHTML = `Bairro: ${imovel.bairro}`;
    document.getElementById(
      "descricao"
    ).innerHTML = `${imovel.caracteristicas}`;
    // document.getElementById("capa").innerHTML = imovel.capa;

    let comodos = imovel.destaques;
    for (let i = 0; i < comodos.length; i++) {
      let titulo = comodos[i]["titulo"];
      let valor = comodos[i]["valor"];

      if (valor != null) {
        document.getElementById(`comodo${i}`).innerHTML = `${titulo}: ${valor}`;
      }
    }

    let mobilia = imovel.mobiliado;
    if (mobilia != "nao") {
      document.getElementById("mobilia").innerHTML = "Imóvel mobiliado.";
    }

    let lancamento = imovel.lancamento;
    if (lancamento != "nao") {
      document.getElementById("lancamento").innerHTML = "Imóvel lancamento.";
    }

    let venOuLoc = imovel.sistema;
    if (venOuLoc == "venda") {
      document.getElementById("venOuLoc").innerHTML =
        "Imóvel disponível para venda.";
    } else
      document.getElementById("venOuLoc").innerHTML =
        "Imóvel disponível para locação.";
  });
