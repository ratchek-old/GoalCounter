var rewards_text = '{ "rewards" : ['+
    '{ "item": "test", "streak":  38, "target":0, "description":"another test. This one is longer"}' +
    
    '] }';

var rewards = JSON.parse(rewards_text);

var inc_button = document.getElementById("clickme"),
  count = 0;
inc_button.onclick = function() {
  count += 1;
  inc_button.innerHTML = "Click me: " + count;
};

var res_button = document.getElementById("reset");
res_button.onclick = function() {
  if(window.confirm("Are you sure you want to reset the counter?")) {
	  count = rewards.rewards[0].streak;
  	inc_button.innerHTML = "Click me: " + count;
  }
};
