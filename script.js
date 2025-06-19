function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function move(){
    var left;
    var top;
    var wh;
    start = new Date().getTime();
    left=Math.random()*300;
    top=Math.random()*300;
    wh=(Math.random()*400+100);
    document.getElementById("click").style.left=left+"px";
    document.getElementById("click").style.top=top+"px";
    document.getElementById("click").style.width=wh+"px";
    document.getElementById("click").style.height=wh+"px";
    document.getElementById("click").style.display="block";
    document.getElementById("click").style.backgroundColor=getRandomColor();
}
move();
document.getElementById("click").onclick=function(){
    document.getElementById("click").style.display="none";
    end = new Date().getTime();
    Timetaken = (end-start)/1000;
    alert("Time taken "+Timetaken+" seconds");
    move();
}