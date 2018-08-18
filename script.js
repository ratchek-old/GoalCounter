var inc_button = document.getElementById("clickme"),
  count = 0;
inc_button.onclick = function() {
  count += 1;
  inc_button.innerHTML = "Click me: " + count;
};

var res_button = document.getElementById("reset");
res_button.onclick = function() {
  if(window.confirm("Are you sure you want to reset the counter?")) {
	  count = 0;
  	inc_button.innerHTML = "Click me: " + count;
  }
};
