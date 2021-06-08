now = new Date

if (now.getHours() >= 0 && now.getHours() < 5) {
  img.src = "./src/assets/images/kodomo_girl_illust_soft02.png";
  img.style.width = "300px";
  img.style.height = "300px";
  img.alt = "madrugada";
  document.getElementById('imagens').appendChild(img);
  document.getElementById('saudacao').innerHTML = "shhhhiu, é madrugada!!"

}
else if (now.getHours() >= 5 && now.getHours() < 12) {
  const array = new Array("./src/assets/images/kodomo_girl_illust_03.png", "./src/assets/images/kodomo_girl_illust_soft04.png", "./src/assets/images/kodomo_girl_illust_06.png", "./src/assets/images/kodomo_girl_illust_05.png", "./src/assets/images/kodomo_girl_illust_07.png", "./src/assets/images/kodomo_girl_illust_20.png");
  const arrayMsg = new Array("Acordar", "Ir ao Banheiro", "Lavar o rosto", "Trocar de roupa", "Café da manhã", "Assistir TV")

  document.getElementById('saudacao').innerHTML = "Bom dia!!"

  for (var i = 0; i < array.length; i++) {
    var figure = document.createElement("FIGURE");
    figure.id = "imagens_" + i;
    figure.class = "figure";
    document.getElementById('body').appendChild(figure);
  }

  for (var i = 0; i < array.length; i++) {
    var img = document.createElement("IMG")
    img.src = array[i];
    img.style.width = "300px";
    img.style.height = "300px";
    img.alt = "bom dia";
    document.getElementById('imagens_' + i).innerHTML = "<figcaption class='figcaption'>" + arrayMsg[i] + "</figcatpion>"
    document.getElementById('imagens_' + i).appendChild(img);
  }

}
else if (now.getHours() >= 12 && now.getHours() < 18) {
  const array = new Array("./src/assets/images/kodomo_girl_illust_16.png", "./src/assets/images/kodomo_girl_illust_soft15.png", "./src/assets/images/kodomo_girl_illust_08.png", "./src/assets/images/kodomo_girl_illust_18.png", "./src/assets/images/kodomo_girl_illust_12.png", "./src/assets/images/kodomo_illust-20.png");
  const arrayMsg = new Array("Lavar as mãos", "Almoçar", "Escovar os dentes", "Arrumar os brinquedos", "Brincar la fora", "Passear ou Imaginação")

  document.getElementById('saudacao').innerHTML = "Boa tarde!!"

  for (var i = 0; i < array.length; i++) {
    var figure = document.createElement("FIGURE");
    figure.id = "imagens_" + i;
    figure.class = "figure";
    document.getElementById('body').appendChild(figure);
  }

  for (var i = 0; i < array.length; i++) {
    var img = document.createElement("IMG")
    img.src = array[i];
    img.style.width = "300px";
    img.style.height = "300px";
    img.alt = "boa tarde";
    document.getElementById('imagens_' + i).innerHTML = "<figcaption class='figcaption'>" + arrayMsg[i] + "</figcatpion>"
    document.getElementById('imagens_' + i).appendChild(img);
  }

}
else {
  const array = new Array("./src/assets/images/kodomo_girl_illust_22.png", "./src/assets/images/kodomo_girl_illust_soft15.png", "./src/assets/images/kodomo_girl_illust_18.png", "./src/assets/images/kodomo_girl_illust_20.png", "./src/assets/images/kodomo_girl_illust_02.png");
  const arrayMsg = new Array("Tomar banho", "Jantar", "Arrumar os brinquedos", "Assistir tv", "Hora de dormir")

  document.getElementById('saudacao').innerHTML = "Boa noite!!"

  for (var i = 0; i < array.length; i++) {
    var figure = document.createElement("FIGURE");
    figure.id = "imagens_" + i;
    figure.class = "figure";
    document.getElementById('body').appendChild(figure);
  }

  for (var i = 0; i < array.length; i++) {
    var img = document.createElement("IMG")
    img.src = array[i];
    img.style.width = "300px";
    img.style.height = "300px";
    img.alt = "boa noite";
    document.getElementById('imagens_' + i).innerHTML = "<figcaption class='figcaption'>" + arrayMsg[i] + "</figcatpion>"
    document.getElementById('imagens_' + i).appendChild(img);
  }

}



