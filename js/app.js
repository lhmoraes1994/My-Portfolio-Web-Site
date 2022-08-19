function aaa(t){
    var target_offset = $("#home").offset();
    var target_top = target_offset.top;
    $('html, body').animate({ scrollTop: target_top }, 0);
    alert(t);
}
function teste(){
    for(let i=0;i<5;i++){

    
    var index = Math.floor(Math.random() * 2999);
   var i1 = Math.floor(Math.random() * 2999);
    var rx= Math.floor(Math.random() * window.screen.width);
    var ry= Math.floor(Math.random() * window.screen.height);
    let circTr = arr[index];
    let circAttr = arr[i1];
    let size = Math.floor(Math.random() * 7)/10;
    

   
    circAttr.transition().duration(2000).ease(d3.easeCircleIn).attr('r', size);
    circTr.transition().duration(2000).ease(d3.easeCircleIn).attr('r', 0.5).attr('cy',ry).attr('cx',rx);
    
    }


}

window.onload = function(){ 

    $("#home-bt").addClass("active").attr("style","color:black");

    window.setInterval(teste, 2000);
}