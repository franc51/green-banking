



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
 function Account_dropdown_menu() {
    document.getElementById("yourDropdown").classList.toggle("showit");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('account_dropdown_button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-account");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showit')) {
          openDropdown.classList.remove('showit');
        }
      }
    }
  } 

  // Transfers data out of the account

function get_transfer_data(){

  amount = document.getElementById('amount').value;
  localStorage.setItem("amount", amount);

  RON_amount_final = localStorage.getItem('RON_ultima') - localStorage.getItem('amount');
  document.getElementById('RON_amount').innerHTML = RON_amount_final + " RON";

  localStorage.setItem("RON_ultima", RON_amount_final);
  
 
}

// Sets the base amounts of the bank accounts

function set_Base_amounts(){


  var RON_amount = document.getElementById('RON_amount').innerHTML = 500 + ' RON';
  localStorage.setItem('RON_amount', 500);


}

function openHomePage(){

  window.location.replace('index.html');
}

document.getElementById('RON_amount').innerHTML = localStorage.getItem('RON_amount') + " RON";
document.getElementById("RON_amount").innerHTML = localStorage.getItem('RON_ultima') + " RON";