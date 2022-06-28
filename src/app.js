var now = new Date

if (now.getHours() >= 00 && now.getHours() < 12) {
  const imgManha = new Array("./src/assets/images/kodomo_girl_illust_03.png", "./src/assets/images/kodomo_girl_illust_soft04.png", "./src/assets/images/kodomo_girl_illust_06.png", "./src/assets/images/kodomo_girl_illust_05.png", "./src/assets/images/kodomo_girl_illust_07.png", "./src/assets/images/kodomo_girl_illust_20.png");
  const MsgManha = new Array("Acordar", "Ir ao Banheiro", "Lavar o rosto", "Trocar de roupa", "Café da manhã", "Assistir TV")
  const Saud = "Bom dia"
  itens(imgManha, MsgManha, Saud)
} else if (now.getHours() >= 12 && now.getHours() < 18) {
  const imgTarde = new Array("./src/assets/images/kodomo_girl_illust_22.png", "./src/assets/images/kodomo_girl_illust_soft15.png", "./src/assets/images/kodomo_girl_illust_08.png", "./src/assets/images/kodomo_boy2_illust_soft_23.png", "./src/assets/images/kodomo_girl_illust_soft19.png", "./src/assets/images/antiseptic_asolution.png");
  const MsgTarde = new Array("Tomar banho", "Almoçar", "Escovar os dentes", "Ir para a escola", "Voltar para casa", "Higienizar as mãos")
  const Saud = "Boa tarde"
  itens(imgTarde, MsgTarde, Saud)
} else {
  const imgNoite = new Array("./src/assets/images/kodomo_girl_illust_16.png", "./src/assets/images/kodomo_girl_illust_soft15.png", "./src/assets/images/kodomo_girl_illust_18.png", "./src/assets/images/kodomo_girl_illust_20.png", "./src/assets/images/kodomo_girl_illust_02.png");
  const MsgNoite = new Array("Lavar as mãos", "Jantar", "Arrumar os brinquedos", "Assistir tv", "Hora de dormir")
  const Saud = "Boa noite"
  itens(imgNoite, MsgNoite, Saud)
}

function itens(imagens, mensagens, saudacao) {

  document.getElementById('saudacao').innerHTML = saudacao

  for (var i = 0; i < imagens.length; i++) {
    var figure = document.createElement("FIGURE");
    figure.id = "imagens_" + i;
    figure.class = "figure";
    document.getElementById('body').appendChild(figure);
  }

  for (var i = 0; i < imagens.length; i++) {
    var img = document.createElement("IMG")
    img.src = imagens[i];
    img.style.width = "300px";
    img.style.height = "300px";
    img.alt = "bom dia";
    document.getElementById('imagens_' + i).innerHTML = "<figcaption class='figcaption'>" + mensagens[i] + "</figcatpion>"
    document.getElementById('imagens_' + i).appendChild(img);
  }

}