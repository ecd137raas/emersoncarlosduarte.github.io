now = new Date     

  if (now.getHours () >= 0 && now.getHours () < 5)
  {
    img.src = "../images/kodomo_girl_illust_soft02.jpg";
    img.style.width = "150px";
    img.style.height = "150px";
    document.getElementById('imagens').appendChild(img);
    document.getElementById('saudacao').innerHTML = "shhhhiu, é madrugada!!"

  }
          else if (now.getHours () >= 5 && now.getHours () < 12)
  { 
          const array = new Array ("./src/assets/images/kodomo_girl_illust_03.jpg","./src/assets/images/kodomo_girl_illust_soft04.jpg", "./src/assets/images/kodomo_girl_illust_06.jpg", "./src/assets/images/kodomo_girl_illust_05.jpg", "./src/assets/images/kodomo_girl_illust_07.jpg", "./src/assets/images/kodomo_girl_illust_20.jpg");
            for (const result in array) {
              var img = document.createElement("IMG");
              img.src = array[result];
              img.style.width = "300px";
              img.style.height = "300px";
              document.getElementById('imagens').appendChild(img);
              document.getElementById('saudacao').innerHTML = "Bom dia!!"
            }
        
  }
          else if (now.getHours () >= 12 && now.getHours () < 18)
  { 
          const array = new Array ("./src/assets/images/kodomo_girl_illust_16.jpg","./src/assets/images/kodomo_girl_illust_soft15.jpg", "./src/assets/images/kodomo_girl_illust_08.jpg","./src/assets/images/kodomo_girl_illust_18.jpg","./src/assets/images/kodomo_girl_illust_12.jpg", "./src/assets/images/kodomo_illust-20.jpg");
            for (const result in array) {
              var img = document.createElement("IMG");
              img.src = array[result];
              img.style.width = "300px";
              img.style.height = "300px";
              document.getElementById('imagens').appendChild(img);
              document.getElementById('saudacao').innerHTML = "Boa tarde!!"
            }

  }
  else
  { 
    const array = new Array ("./src/assets/images/kodomo_girl_illust_22.jpg","./src/assets/images/kodomo_girl_illust_soft15.jpg","./src/assets/images/kodomo_girl_illust_18.jpg","./src/assets/images/kodomo_girl_illust_20.jpg","./src/assets/images/kodomo_girl_illust_02.jpg");
    for (const result in array) {
      var img = document.createElement("IMG");
      img.src = array[result];
      img.style.width = "300px";
      img.style.height = "300px";
      document.getElementById('imagens').appendChild(img);
      document.getElementById('saudacao').innerHTML = "Boa noite!!"
    }

  }



