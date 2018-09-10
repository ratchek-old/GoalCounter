var rewards = JSON.parse(localStorage.rewards);

for (var i = 0; i < rewards.length; i++){
	var entry = document.getElementById("reward_list").appendChild(entry_html(i));
	if (rewards[i]["streak"] >= rewards[i]["target"]){
		mark_accomplished(entry);
	}
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
	var index = rewards.push( {"item":item_txt, "streak":0, "target":targ, "description":desc_txt} ) - 1;
	
	return entry_html(index)
	
}
function mark_accomplished(entry){
/*	button_clicked.style.backgroundColor = "#003300";	
	button_clicked.parentNode.children[1].style.backgroundColor = "#003300";	
	button_clicked.parentNode.parentNode.style.textShadow = "1px 1px #001100";	
	button_clicked.parentNode.parentNode.style.color = "#003300";	
	button_clicked.parentNode.parentNode.parentNode.children[1].style.color = "#003300";	
*/
	entry.children[0].children[1].children[0].style.backgroundColor = "#003300";	
	entry.children[0].children[1].children[1].style.backgroundColor = "#003300";	
	entry.children[0].style.textShadow = "1px 1px #001100";	
	entry.children[0].style.color = "#003300";	
	entry.children[1].style.color = "#003300";	
}

function inc(index, button_clicked){
	rewards[index]["streak"]+=1;
	button_clicked.innerHTML = rewards[index]["streak"];
	if (rewards[index]["streak"] == rewards[index]["target"]){
		mark_accomplished(button_clicked.parentNode.parentNode.parentNode)
	}

}

function res(index, button_clicked){
	if(window.confirm("Are you sure you want to reset this counter?")) {
		rewards[index]["streak"]=0;
		button_clicked.parentNode.firstChild.innerHTML = rewards[index]["streak"];
	}
}

function rem(index, button_clicked){
	if(window.confirm("Are you sure you want to remove this entry?")) {
		button_clicked.parentNode.parentNode.remove();
		rewards.splice(index,1);
	}
	
}

function entry_html(index){
	var entry = rewards[index]
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
	
	var x_btn = document.createElement("BUTTON");
	x_btn.setAttribute("class", "delete");
	var x_btn_txt = document.createTextNode("X");
	x_btn.addEventListener("click", function(){
		rem(index, this);
	});
	
	var par = document.createElement('p');
	var par_txt = document.createTextNode(entry["description"]);
	
	count_btn.appendChild(btn_txt);
	btn2.appendChild(btn_txt2);
	x_btn.appendChild(x_btn_txt)
	par.appendChild(par_txt);
	hd.appendChild(x_btn);
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

