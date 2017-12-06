// JavaScript Document
var price = 10;
var quantity = 3;
var totalpice_discounted = 0;

var shop ={
	customerName : "Chaky",
	totalprice : 0,
	products : [
	"Pizza",
	"Nan",
	"Sourdough",
	"Foccacia",
	"iPhone X"
	],
	price : [40,10,20,80,1000],
	
	displayCustomerName: function(){
	var customerElement = document.getElementById("customer-name");
	customerElement.innerHTML = this.customerName;
   },
   
   displayProductList: function() {
   var productText = "";
   var productsElement = document.getElementById("product-list");
   
   for (i = 0; i < this.products.length; i++) { 
   var productsText = "";
   var productsElement = document.getElementById("pro"+i);
   productText = "<li class='list-group-item'>" + this.products[i] + "<span class='badge'>$"+ this.price[i] + "</li>";
   productsElement.innerHTML = productText;
   this.totalprice = this.totalprice+this.price[i]; 
}
},

}

 var calender = {
	  header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
	  displayCalender: function() {
		  var ele = document.getElementById("calender");
		  var calenderText = "<table class='table table-condensed'>";
		  calenderText += this.header;
			
		for (var i = 1; i <= 31; i++) {
          if(i % 7 == 0){
          calenderText+="<td>"+i+"</td></tr>";
          }
          else{
          calenderText+="<td>"+i+"</td>";
          } 
        };
       
calenderText+="</table>"
ele.innerHTML = calenderText;
	  }
	  }


   
shop.displayCustomerName();
shop.displayProductList();
calender.displayCalender();


var myDate = new Date();
if ( myDate.getHours() < 12 )
 { document.getElementById("greeting").innerHTML = "Good Morning ";
} else if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
{ document.getElementById("greeting").innerHTML = "Good Afternoon "; } 
else if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
{ document.getElementById("greeting").innerHTML = "Good Evening "; } 
else { document.write("I'm not sure what time it is! "); }

totalprice_discounted = shop.totalprice-((25/100)*shop.totalprice);
document.getElementById("price").innerHTML = "$" + totalprice_discounted;

