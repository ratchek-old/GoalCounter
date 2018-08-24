var rewards_text = '{ "rewards" : ['+
    '{ "item": "test", "streak":  38, "target":0, "description":"another test. This one is longer"}' +
    
    '] }';

var rewards = JSON.parse(rewards_text);

function inc() {
  count += 1;
  inc_button.innerHTML = "Click me: " + count;
}

var inc_button = document.getElementById("clickme");
	count = 0;
inc_button.addEventListener("click", inc);

var res_button = document.getElementById("reset");
res_button.addEventListener("click", function() {
  if(window.confirm("Are you sure you want to reset the counter?")) {
	  count = rewards.rewards[0].streak;
  	inc_button.innerHTML = "Click me: " + count;
  }
});

var add_button = document.getElementById("add");
add_button.addEventListener( 'click', function() {
/*	var btn = document.createElement("BUTTON");
	var btn_txt = document.createTextNode("mmmhhhmmm");
	btn.appendChild(btn_txt);
	var linebreak = document.createElement("br");
*/
	var linebreak = document.createElement("br");
	document.getElementById("reward_list").appendChild(linebreak);
	document.getElementById("reward_list").appendChild(create_entry());
	
	
});

function create_entry() 
{
	var item_txt = prompt("What's the reward gon' be?");
	var desc_txt = prompt("Whatcha gotta do?");
	var targ = Number( prompt("How many days you gotta do it?") );
	console.log(rewards)
	var index = rewards["rewards"].push( {"item":item_txt, "streak":0, "target":targ, "description":desc_txt} ) - 1;
	
	return entry_html(index)
	
}

function entry_html(index){
	var entry = rewards["rewards"][index]
	var spn = document.createElement('span');
	var btn = document.createElement("BUTTON");
	var btn_txt = document.createTextNode(entry["item"]);
	
	var btn2 = document.createElement("BUTTON");
	var btn_txt2 = document.createTextNode(entry["target"]);
	btn.appendChild(btn_txt);
	btn2.appendChild(btn_txt2);
	spn.appendChild(btn);
	spn.appendChild(btn2);
	return spn	;
}