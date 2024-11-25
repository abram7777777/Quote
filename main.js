var listt = [
    {
        quote : "“Be yourself; everyone else is already taken.”"
        writer : "― Oscar Wilde"
    },
    {
        quote : "“You only live once, but if you do it right, once is enough.”"
        writer : "― Mae West"
    },
    {
        quote : "“Be the change that you wish to see in the world.”"
        writer : "― Mahatma Gandhi"
    }
]
function shift(){
    var x =Math.floor(Math.random() * 3) + 1;
if(x==1){
    document.getElementById("p1").innerHTML= listt[0].quote;
    document.getElementById("p2").innerHTML= listt[0].writer;
}else if(x==2){
    document.getElementById("p1").innerHTML= listt[1].quote;
    document.getElementById("p2").innerHTML= listt[1].writer;
}else{
    document.getElementById("p1").innerHTML= listt[2].quote;
    document.getElementById("p2").innerHTML= listt[2].writer;
}
}