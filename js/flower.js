/*Assignment2
Name: Divjot S. Chawla
Student Number: 991505770
*/
var name;
var login;
var number;
var country;
var city; 
var rowID;
var cArray = new Array();
var flowerArray= new Array();

$(document).ready(function () {

  name = localStorage.getItem("StudentName");
  number = localStorage.getItem("StudentNumber");
  login = localStorage.getItem("Login");
  country = localStorage.getItem("Country");
  city = localStorage.getItem("City");
  cArray = JSON.parse(localStorage.getItem("CategoryList"));
  flowerArray = JSON.parse(localStorage.getItem("FlowerList"));
  rowID = localStorage.getItem("rowID");


  $("#header").html(`Assignment 2/${name}/${number}/${login}`);
  $("#footer").html(`My Home Country is ${country} and I currently live in ${city} city`);
  $("#category").html("Category Name: ");    
  $("#category").append(cArray[rowID].categoryName);


for(let y=0; y<flowerArray.length; y++){
  if(rowID == 0){
     if(flowerArray[y].flowerCategory === 'Shrubs'){
          $("#image").append(
            `
            <li class = "photo"><img src='../images/${flowerArray[y].flowerPhoto}' width='70' height='60'</li>
            `
 );
      }
     }
      if(rowID == 1){
        if(flowerArray[y].flowerCategory === 'Container Plants'){
          $("#image").append(
            `
            <li class = "photo"><img src='../images/${flowerArray[y].flowerPhoto}' width='40' height='60'</li>
            `
            );
         }
    }     
         if(rowID == 2){
          if(flowerArray[y].flowerCategory === 'Perennials'){
            $("#image").append(
              `
              <li class = "photo"><img src='../images/${flowerArray[y].flowerPhoto}' width='60' height='60'</li>
              `
              );
           }
     }     
           if(rowID == 3){
            if(flowerArray[y].flowerCategory === 'Cacti'){
              $("#image").append(
                `
                <li class = "photo"><img src='../images/${flowerArray[y].flowerPhoto}' width='50' height='60'</li>
                `
                );
             }
      }
}

 

    for(let y=0; y<flowerArray.length; y++){
      if(rowID == 0){
         if(flowerArray[y].flowerCategory === 'Shrubs'){
             $("#flowerName").append(
                
               `
               <li class="name">
               ${flowerArray[y].flowerName}
               </li>
               `
               ); 
          }
         }
          if(rowID == 1){
            if(flowerArray[y].flowerCategory === 'Container Plants'){
                $("#flowerName").append(`<li class="name">${flowerArray[y].flowerName}</li>`); 
             }
        }    
             if(rowID == 2){
              if(flowerArray[y].flowerCategory === 'Perennials'){
                  $("#flowerName").append(`<li class="name">${flowerArray[y].flowerName}</li>`); 
               }  
         }      
               if(rowID == 3){
                if(flowerArray[y].flowerCategory === 'Cacti'){
                    $("#flowerName").append(`<li class="name">${flowerArray[y].flowerName}</li>`); 
                 }
    }

}

for(let y=0; y<flowerArray.length; y++){
  if(rowID == 0){
     if(flowerArray[y].flowerCategory === 'Shrubs'){
         $("#price").append(`<li class="price1">${flowerArray[y].flowerPrice}</li>`); 
      }
     }
      if(rowID == 1){
        if(flowerArray[y].flowerCategory === 'Container Plants'){
            $("#price").append(`<li class="price1">${flowerArray[y].flowerPrice}</li>`); 
         }
    }  
         if(rowID == 2){
          if(flowerArray[y].flowerCategory === 'Perennials'){
              $("#price").append(`<li class="price1">${flowerArray[y].flowerPrice}</li>`); 
           }
     }     
           if(rowID == 3){
            if(flowerArray[y].flowerCategory === 'Cacti'){
                $("#price").append(`<li class="price1">${flowerArray[y].flowerPrice}</li>`); 
             }
}

}


for(let y=0; y<flowerArray.length; y++){
  if(rowID == 0){
     if(flowerArray[y].flowerCategory === 'Shrubs'){
         $("#instruction").append(`<li class="inst">${flowerArray[y].flowerInstructions}</li>`); 
      }
     }
      if(rowID == 1){
        if(flowerArray[y].flowerCategory === 'Container Plants'){
            $("#instruction").append(`<li class="inst">${flowerArray[y].flowerInstructions}</li>`); 
         }
    }    
         if(rowID == 2){
          if(flowerArray[y].flowerCategory === 'Perennials'){
              $("#instruction").append(`<li class="inst">${flowerArray[y].flowerInstructions}</li>`); 
           } 
     }     
           if(rowID == 3){
            if(flowerArray[y].flowerCategory === 'Cacti'){
                $("#instruction").append(`<li class="inst">${flowerArray[y].flowerInstructions}</li>`); 
             }
}

}
  });


 
