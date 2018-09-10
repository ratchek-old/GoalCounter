var rewards_text = '{ "rewards" : ['+
    '{ "item": "test", "streak":  38, "target":0, "description":"another test. This one is longer"},' +
    '{ "item": "test22", "streak":  3, "target":5, "description":"another test. This one is muuuuuuuuuuuuuuuuuuuuuuuch longer"}' +
    
    '] }';

var rewards = JSON.parse(localStorage.rewards);

for (var i = 0; i < rewards["rewards"].length; i++){
		document.getElementById("reward_list").appendChild(entry_html(i));
}

var add_button = document.getElementById("add");
	add_button.addEventListener( 'click', function() {
		document.getElementById("reward_list").appendChild(create_entry());
});

function save(){
	console.log("saving");
	var rewards_txt = JSON.stringify(rewards);
	localStorage.rewards = rewards_txt;
}

var save_button = document.getElementById("save");
save_button.addEventListener( 'click', save );

function create_entry() 
{
	var item_txt = prompt("What's the reward gon' be?");
	var desc_txt = prompt("Whatcha gotta do?");
	var targ = Number( prompt("How many days you gotta do it?") );
	console.log(rewards)
	var index = rewards["rewards"].push( {"item":item_txt, "streak":0, "target":targ, "description":desc_txt} ) - 1;
	
	return entry_html(index)
	
}

function inc(index, button_clicked){
	rewards["rewards"][index]["streak"]+=1;
	button_clicked.innerHTML = rewards["rewards"][index]["streak"];


}

function res(index, button_clicked){
	if(window.confirm("Are you sure you want to reset this counter?")) {
		rewards["rewards"][index]["streak"]=0;
		button_clicked.parentNode.firstChild.innerHTML = rewards["rewards"][index]["streak"];
	}
}

function entry_html(index){
	var entry = rewards["rewards"][index]
	var spn = document.createElement('span');
	spn.setAttribute("class","a_reward");
	
	var btn_spn = document.createElement('span');
	btn_spn.setAttribute("class","buttons");

	var hd = document.createElement('h3');
	var txt = document.createTextNode(entry["item"]);
	
	var count_btn = document.createElement("BUTTON");
	var btn_txt = document.createTextNode(entry["streak"]);
	count_btn.addEventListener("click", function(){ 
		inc(index, this) ;
	
	} );
	
	
	var btn2 = document.createElement("BUTTON");
	var btn_txt2 = document.createTextNode(entry["target"]);
	btn2.addEventListener("click", function(){
		res(index, this);
	});
	
	var par = document.createElement('p');
	var par_txt = document.createTextNode(entry["description"]);
	
	count_btn.appendChild(btn_txt);
	btn2.appendChild(btn_txt2);
	par.appendChild(par_txt);
	hd.appendChild(txt);
	btn_spn.appendChild(count_btn);
	btn_spn.appendChild(btn2);
	hd.appendChild(btn_spn);


	spn.appendChild(hd)
/*	spn.appendChild(count_btn);
	spn.appendChild(btn2);
*/	spn.appendChild(par)
	return spn	;
}







/*
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
*/

