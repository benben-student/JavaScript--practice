function animate(element,target){
    var timeId=setInterval(function(){
        var current=element.offsetLeft;
        var temp=10;
        temp=current<target?temp:-temp
        current +=temp;
        if(Math.abs(target-current)>Math.abs(temp)){
           element.style.left=current+'px'
        }else{
             clearInterval(timeId)
             element.style.left=target+'px'
        }
    },20)
}