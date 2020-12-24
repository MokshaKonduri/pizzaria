function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist>";
    menu_list_array.sort();
      for(var i=0; i<menu_list_array.length; i++)  {
          htmldata=htmldata+'<li>' + menu_list_array.length[i] + '</li>';
      }
      htmldata-htmldata+"</ol>";
      document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>";
for(var i=0; i<menu_list_array.length; i++) {
htmldata=htmldata+"<div class='cards'>" + "<img src="images/pizza.png">" + menu_list_array[i] + '</div>';
}
}

menu_list_array =["Margherita",
                "Double Cheese Margherita",
                "Farm House",
                "Peppy Paneer",
                "Mexican Green Waves",
                "Deluxe Veggie",
                "Veg Extravaganza",
                "Cheese N Corn",
                "Paneer Makhani",
                "Veggie Paradise",
                "Fresh Veggie",
                "Indi Tandori Paneer"];