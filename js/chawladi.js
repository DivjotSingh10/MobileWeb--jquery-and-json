/*Assignment2
Name: Divjot S. Chawla
Student Number: 991505770
*/
var categoryArray = new Array();
var flowerListArray = new Array();
var newName;
var newStudentNumber;
var newLogin;
var HomeCountry;
var newCurrentCity;
var rowID;

class Cate{
  constructor(categoryName, picture){
    this.categoryName = categoryName;
    this.picture = picture;
  }
}//end of category class

class Flower{
  constructor(flowerCategory, flowerPrice, flowerInstructions, flowerPhoto, flowerName, flowerProductId){
     this.flowerCategory = flowerCategory;
     this.flowerPrice = flowerPrice;
     this.flowerInstructions = flowerInstructions;
     this.flowerPhoto = flowerPhoto;
     this.flowerName = flowerName;
     this.flowerProductId = flowerProductId;
  }
}//end of the Flower Class

$(document).ready(function() {
    $.ajax({
      type: "GET", 
      url:"data/JSONFile.json",
      dataType: "json",
      success: loadJSON,
      error: function (e) {alert ( `${e.status} - ${e.statusText}` );}
}); //end of ajax call

}); //end of doc ready

  //loadJSON function
  function loadJSON(data){
    newName = data.personal.myFullName;
    newStudentNumber = data.personal.myStudentNumber;
    newLogin = data.personal.myLoginName;
    HomeCountry = data.personal.myHomeCountry;
    newCurrentCity = data.personal.myCurrentCityAddress;

    for(let cate of data.categories){
      categoryArray.push(
        new Cate(cate.category, cate.pic)
        );
    }//for category loop


for(let flow of data.flowerlist){
  flowerListArray.push(
     new Flower(flow.category,
                flow.price,
                flow.instructions,
                flow.photo, 
                flow.name,
                flow.productId)
  );
}//end of the flowers loop


localStorage.setItem("StudentName", newName);
    localStorage.setItem("StudentNumber", newStudentNumber);
    localStorage.setItem("Login", newLogin);
    localStorage.setItem("Country", HomeCountry);
    localStorage.setItem("City", newCurrentCity);    
    localStorage.setItem("CategoryList", JSON.stringify(categoryArray));
    localStorage.setItem("FlowerList", JSON.stringify(flowerListArray));

    mainScreen(data);
  }//end of loadJSON function

  //mainScreen functioin
  function mainScreen(data){
      //display data on the screen
  $("#header").html(`Assignment 2/${newName}/${newStudentNumber}/${newLogin}`);
  $("#footer").html(`My Home Country is ${HomeCountry} and I currently live in ${newCurrentCity} city`);
  
  $("#cList").html("");
  for (let x=0; x < categoryArray.length; x++) {
    
    $("#cList").append(
      
      `
      <li class = "button" id='${x}'>

      <a href='pages/flowers.html'>
           ${categoryArray[x].categoryName}
      </a>

      </li>
      `
    );
  }//end of category for loop

  $("#pList").html("");
  for (let x=0; x < categoryArray.length; x++) {
    $("#pList").append(
      
      `
      <li class = "photo" id='${x}'>
      <img src='images/${categoryArray[x].picture}' width='100' height='140'>
      </li>
      `
    );
  }//end of FlowerImages for loop

    }//end of mainScreen function

    //Save data to Local Storage
    $(document).on("click", "#cList >li", function(){
      localStorage.setItem(
        "rowID",
        $(this).closest("li").attr("id")
      );
     
      
    });//end of local storage
