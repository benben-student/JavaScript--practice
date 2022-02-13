function animate(element,target){ 
     var timeId=setInterval(function(){
         var current=element.offsetLeft;
         var temp=10;
         current+=temp;
         if(current<=target){
            element.style.left=current+'px'
         }else{
          clearInterval(timeId);
         }
     },20)
}