// DOM FOR DYNAMIC SHOW OF DETAILS START
const $user_name = document.getElementById("user_name");
const $email = document.getElementById("email");
const $phone_number = document.getElementById("phone_number");
const $order_comments = document.getElementById("order_comments");
const $user_address = document.getElementById("user_address")

const $name_display = document.getElementById("name_display");
const $email_display = document.getElementById("email_display");
const $phone_no_display = document.getElementById("phone_no_display");
const $comment_display = document.getElementById("comment_display");
const $address_display = document.getElementById("address_display");
//DOM FOR DYNAMIC SHOW OF DETAILS END



//DYNAMIC SHOW OF DETAILS START
const name_typeHandler = function(e){
	$name_display.innerHTML = e.target.value;
}
$user_name.addEventListener('input', name_typeHandler);
$user_name.addEventListener('propertychange', name_typeHandler);
$user_name.addEventListener('change', name_typeHandler);

const email_typeHandler = function(e){
	$email_display.innerHTML = e.target.value;
}
$email.addEventListener('input', email_typeHandler);
$email.addEventListener('propertychange', email_typeHandler);
$email.addEventListener('change', email_typeHandler);

const phone_no_typeHandler = function(e){
	$phone_no_display.innerHTML = e.target.value;
}
$phone_number.addEventListener('input', phone_no_typeHandler);
$phone_number.addEventListener('propertychange', phone_no_typeHandler);
$phone_number.addEventListener('change', phone_no_typeHandler);

const comment_typeHandler = function(e){
	$comment_display.innerHTML = e.target.value;
}
$order_comments.addEventListener('input', comment_typeHandler);
$order_comments.addEventListener('propertychange', comment_typeHandler);
$order_comments.addEventListener('change', comment_typeHandler);

const address_typeHandler = function(e){
	$address_display.innerHTML = e.target.value;
}
$user_address.addEventListener('input', address_typeHandler);
$user_address.addEventListener('propertychange', address_typeHandler);
$user_address.addEventListener('change', address_typeHandler);
//DYNAMIC SHOW OF DETAILS END

var total_price = 0;

//DOM FOR LOCATION/ADDRESS FUNCTIONS START
var regional_location; //the location, whether lagos or abeokuta... if needed
var regional_price;
let gcs_location = document.getElementsByClassName("gcs-location");
let gcs_location_radio = document.getElementsByClassName("gcs-location-radio");
let location_price = document.getElementsByClassName("location_price");
let address_container = document.getElementById("address_container");
let locations_btn = document.getElementById("locations-btn");
//DOM FOR LOCATION/ADDRESS FUNCTIONS END

//LOCATION/ADDRESS FUNCTION START
function recordLocation(n){
	for (var i = 0; i < gcs_location_radio.length; i++) {
		regional_location = gcs_location[n-1].textContent;
		regional_price = location_price[n-1].textContent;

		address_container.removeAttribute("class", "d-none");
		document.getElementById("total-label").classList.remove("d-none");
		document.getElementById("total-price").classList.remove("d-none");

		locations_btn.textContent = regional_location;
		document.getElementById("locations-display").textContent = "Delivery to " + regional_location;
		document.getElementById("location-price-display").textContent = regional_price;

		setTotalSuyaPrice();
	}
	document.getElementById("location-cont").style.display = "none";
}
//LOCATION/ADDRESS FUNCTION END

//FUNCTION TO DISPLAY SUYA CHOICE START
function sel(id){
	var quantity = document.getElementById("suya_" + id + "_quantity").options.selectedIndex;
	var name = document.getElementById("suya_" + id).textContent;
	var price = document.getElementById("suya_" + id + "_price").textContent;
	var cost = Number(price) * Number(quantity);
	if (quantity > 0) {
		document.getElementById("suya_" + id + "_purchase").classList.remove("d-none");
		document.getElementById("total-label").classList.remove("d-none");
		document.getElementById("total-price").classList.remove("d-none");
	} else {
		document.getElementById("suya_" + id + "_purchase").classList.add("d-none");
	}
	document.querySelector("#suya_" + id + "_purchase .suya_desc").innerHTML = name;
	document.querySelector("#suya_" + id + "_purchase .suya_qty").innerHTML = quantity;
	document.querySelector("#suya_" + id + "_purchase .suya_cost").innerHTML = cost
	setTotalSuyaPrice();
}

var locations_price = Number(document.getElementById("location-price-display").innerHTML);;
var suya_costs = document.getElementsByClassName("suya_cost");
function setTotalSuyaPrice(){
	total_price = 0;
	for (var i = 0; i < suya_costs.length; i++) {
		total_price += Number(suya_costs[i].textContent);
	}
	document.getElementById("total-price").textContent = locations_price + total_price;
}
//FUNCTION TO DISPLAY SUYA CHOICE END
// function setTotalPrice(){
// 	document.getElementById("total-price").textContent = locations_price + total_price;
// }

function toppingYes(n){
	document.getElementById(n+"-btn").textContent = document.getElementById(n+"-yes").textContent;
	document.getElementById(n+"-display").classList.remove("d-none");
}
function toppingNo(n){
	document.getElementById(n+"-btn").textContent = document.getElementById(n+"-no").textContent;
	document.getElementById(n+"-display").classList.add("d-none");
}