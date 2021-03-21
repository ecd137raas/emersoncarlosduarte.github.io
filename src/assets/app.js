now = new Date     

  if (now.getHours () >= 0 && now.getHours () < 5)
  {
    img.src = "./src/assets/images/kodomo_girl_illust_soft02.jpg";
    img.style.width = "300px";
    img.style.height = "300px";
    document.getElementById('imagens').appendChild(img);
    document.getElementById('saudacao').innerHTML = "shhhhiu, é madrugada!!"

  }
          else if (now.getHours () >= 5 && now.getHours () < 12)
  { 
          const array = new Array ("./src/assets/images/kodomo_girl_illust_03.jpg","./src/assets/images/kodomo_girl_illust_soft04.jpg", "./src/assets/images/kodomo_girl_illust_06.jpg", "./src/assets/images/kodomo_girl_illust_05.jpg", "./src/assets/images/kodomo_girl_illust_07.jpg", "./src/assets/images/kodomo_girl_illust_20.jpg");
          const arrayMsg = new Array("Acordar", "Ir ao Banheiro","Lavar o rosto", "Trocar de roupa", "Café da manhã", "Assistir TV")  
          
          document.getElementById('saudacao').innerHTML = "Bom dia!!"
          
          for (var i=0; i < array.length; i++) {
              var figure = document.createElement("FIGURE");
              figure.id = "imagens"+ i;
              figure.class = "figure";
              document.getElementById('body').appendChild(figure);
          }

          for(var i=0; i < array.length; i++){
            var img = document.createElement("IMG")
            img.src = array[i];
            img.style.width = "300px";
            img.style.height = "300px";
            document.getElementById('imagens'+i).innerHTML = "<figcaption class='figcaption'>"+ arrayMsg[i] +"</figcatpion>"
            document.getElementById('imagens'+i).appendChild(img);
          }
        
  }
          else if (now.getHours () >= 12 && now.getHours () < 18)
  { 
          const array = new Array ("./src/assets/images/kodomo_girl_illust_16.jpg","./src/assets/images/kodomo_girl_illust_soft15.jpg", "./src/assets/images/kodomo_girl_illust_08.jpg","./src/assets/images/kodomo_girl_illust_18.jpg","./src/assets/images/kodomo_girl_illust_12.jpg", "./src/assets/images/kodomo_illust-20.jpg");
          const arrayMsg = new Array("Lavar as mãos", "Almoçar","Escovar os dentes", "Arrumar os brinquedos", "Brincar la fora", "Passear ou Imaginação")  
          
          document.getElementById('saudacao').innerHTML = "Boa tarde!!"
          
          for (var i=0; i < array.length; i++) {
            var figure = document.createElement("FIGURE");
            figure.id = "imagens"+ i;
            figure.class = "figure";
            document.getElementById('body').appendChild(figure);
          }

          for(var i=0; i < array.length; i++){
            var img = document.createElement("IMG")
            img.src = array[i];
            img.style.width = "300px";
            img.style.height = "300px";
            document.getElementById('imagens'+i).innerHTML = "<figcaption class='figcaption'>"+ arrayMsg[i] +"</figcatpion>"
            document.getElementById('imagens'+i).appendChild(img);
          }

  }
  else
  { 
    const array = new Array ("./src/assets/images/kodomo_girl_illust_22.jpg","./src/assets/images/kodomo_girl_illust_soft15.jpg","./src/assets/images/kodomo_girl_illust_18.jpg","./src/assets/images/kodomo_girl_illust_20.jpg","./src/assets/images/kodomo_girl_illust_02.jpg");
    const arrayMsg = new Array("Tomar banho", "Jantar","Arrumar os brinquedos", "Assistir tv", "Hora de dormir")  
    
    document.getElementById('saudacao').innerHTML = "Boa noite!!"    
    
    for (var i=0; i < array.length; i++) {
      var figure = document.createElement("FIGURE");
      figure.id = "imagens"+ i;
      figure.class = "figure";
      document.getElementById('body').appendChild(figure);
    }

    for(var i=0; i < array.length; i++){
      var img = document.createElement("IMG")
      img.src = array[i];
      img.style.width = "300px";
      img.style.height = "300px";
      document.getElementById('imagens'+i).innerHTML = "<figcaption class='figcaption'>"+ arrayMsg[i] +"</figcatpion>"
      document.getElementById('imagens'+i).appendChild(img);
    }

  }



