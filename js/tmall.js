 var i,m;
  var de_timer;
  var Timer;
  var indexb=0;
  var indexf=0;
  var time=3000;  
  var animated = false;
  var count=1;                 //justfor brandimg test                          
$(document).ready(function(){
   // playimg();
           //用于存取淡出和淡入图片的下标
playimg();
slideactcon();
   $(".slider").click(function(){
    if(animated){
      console.log(123);
      return;
    }
      clearInterval(Timer);   
        indexb=$(".slider").index(this);
        // console.log("目前选中的"+indexb);
        // console.log("前面一个是"+indexf);
                            //清掉timer计时器
        changeimg();
        playimg();

        
      });

   $('#sliderright').click(function(){
      $('#cover-width').css("transform","translateX(-488px)");
      $('#sliderright').css("display","none");
      $('#sliderleft').css("display","block");
     });


     $('#sliderleft').click(function(){
      $('#cover-width').css('transform','translateX(0px)');
      $('#sliderleft').css("display",'none');
      $('#sliderright').css("display",'block');
    });

   $('.coverimg').click(function(){
    
    var src=this.src;
    
    // var prev1=$(this).prevAll('p').text();
    // console.log(prev.text());
    // console.log(prev1.text());
    $('#maincoverimg').attr("src",src);
    $('#main-coverp').text($(this).prevAll('p').text());
     
   });

      $(window).scroll(function()
      {     
               if($(window).scrollTop()>900)
                 $('#shelter-show').css("top","0");
               else
                  $('#shelter-show').css('top',"-50px");


              // alert($(window).scrollTop());
      })

   $('#refresh-li').click(function(){

    $('.brandimg-div').css("transform","rotateY(-90deg)");
    setTimeout(function(){

  for(var i=0;i<16;i++)
    {
      var img=$('.brandimg-div img').eq(i);
      img.attr("src","brand/brand"+count+".webp");
      // img.attr("src","brand/brand1.webp");
    }
    $('.brandimg-div').css("transform","rotateY(-180deg)");
}
      ,300)
  
   count++;

   })












 });




// function playimg()
// {   
//  var time=2000;
//  var i=0;
//  alert("下面我将通过js更改z-index属性");
  
//     timer=setInterval(function(){
//    $('.content-img').eq(i%3).css("z-index",'50');
//    $('.content-img').eq((i+1)%3).css("z-index",'0');
//    $('.content-img').eq((i+2)%3).css("z-index",'0');   
//    i++;
//     },time)

// }

// function playimg(i=0)
// {  console.log("我先在是"+i); 
//    console.log("我上一张是"+indexf);
 
//     timer=setInterval(function(){
//         $('.content-img').eq((i+1)%3).css("opacity",'0');        //我目前选中的下一个图片
//          m=0;
//        $('.slider').eq((i+2)%3).removeClass('selected');             //我目前选中的上一个图片
//         $('.slider').eq(i%3).addClass('selected');       //我目前选中的图片
//    de_timer=setInterval(function(){
//     if(m>=1)
//      {
//       m = 1;
//       indexf=i%3;
//       clearInterval(de_timer);
//       }
//     m=m+0.1;
//     animated = true;
//        $('.content-img').eq((i+2)%3).css("opacity",1-m); 
//    $('.content-img').eq(i%3).css("opacity",m);
                               
//  },50,function(){
//      animated = false;
//  });
//    i++;
//     },time);
// }


function playimg()
{
   Timer=setInterval(function(){
    
    indexb=(indexb+1)%5;
changeimg();
   },3000);
}



function changeimg()                       //手动的
{ m=0;
    animated = true;                        //清掉de_timer计时器
     $('.slider').eq(indexf).removeClass('selected');             //我目前选中的上一个图片
     $('.slider').eq(indexb).addClass('selected');       //我目前选中的图片
  de_timer=setInterval(function(){
    m=m+0.1;
   $('.content-img').eq(indexf).css("opacity",1-m);
   $('.content-img').eq(indexb).css("opacity",m);  
   if(m>=1)
     {
        animated = false;
        indexf=indexb;                                //结束后back=front
        // console.log("indexf被手动赋值成"+indexf);
        clearInterval(de_timer);
        
      }
 },50);
}

function slideactcon()
{    
     var temp;
      var actconTimer=setInterval(function(){
      $(".act-con p").eq(0).css("margin-top","-30px");

   setTimeout(function(){
$(".act-con p").eq(0).css("margin-top","0px");
 $(".act-con p").eq(0).insertAfter($('.act-con p').eq(2));
   },1000); 
 },2000);
}


