
function shift(){
    var x =Math.floor(Math.random() * 3) + 1;
if(x==1){
    document.getElementById("container").innerHTML=`<p>“Be yourself; everyone else is already taken.”</p> <p>― Oscar Wilde</p>`;
}else if(x==2){
    document.getElementById("container").innerHTML=`<p>“You only live once, but if you do it right, once is enough.”</p> <p>― Mae West</p>`;
}else{
    document.getElementById("container").innerHTML=`<p>“Be the change that you wish to see in the world.”</p> <p>― Mahatma Gandhi</p>`;
}
}