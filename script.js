new WOW().init();


function showTime(){
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

    h = (h<10) ? "0" + h : h;
    m = (m<10) ?  "0" + m: m ;
    s = (s<10) ? "0" + s : s ;
    var time = h + ":" + m + ":" + s;
    document.querySelector("#time1").innerHTML=time;
    document.querySelector("#time-bar").innerHTML=time;
   
 }
 showTime()
 setInterval(showTime,1000)



 let content = document.getElementsByTagName("body")[0];
 let darkMode = document.querySelector("#night-mode");
 let topHeader =document.querySelector(".top-header");
 let tagA = document.querySelectorAll(".night-a");
 let tagB = document.querySelectorAll(".night-b");
 let contactUs =document.querySelector(".slider-contact");
 let contactUsMain=document.querySelector(".contact-us-main");
 let contactUs2 =document.querySelector(".slider-contact2");
let modal=document.querySelector(".way-modal");
let caseNightMode = document.querySelectorAll(".case-slider");
let caseSliderNight=document.querySelector(".case-slider-items");
let careerItems=document.querySelectorAll(".career-items") ;
let footer = document.querySelector(".footer-section");
let sellBar =document.querySelector(".sell-section");
 function dark(){
    darkMode.classList.toggle("active1");
    content.classList.toggle("night");
    contentBar.classList.toggle("active1");
    topHeader.classList.toggle("night-head");
    contactUs.classList.toggle("active-all");
    contactUsMain.classList.toggle("active-all");
    contactUs2.classList.toggle("active-all");
    modal.classList.toggle("night-modal");
    caseSliderNight.classList.toggle("active2");
    footer.classList.toggle("active3");
    sellBar.classList.toggle("active4");

    for(let i=0;i<tagA.length;i++){
        tagA[i].classList.toggle("active-color")
    };
    for( i=0 ;i<tagB.length;i++){
        tagB[i].classList.toggle("active2")
    };
   for(i=0;i<caseNightMode.length;i++){
    caseNightMode[i].classList.toggle("active2");
   }
   for(i=0;i<careerItems.length;i++){
    careerItems[i].classList.toggle("active2")
   }
    
 }



 let darkBar = document.querySelector("#night-bar");
 let contentBar = document.querySelector(".bar-content");
 let moon = document.querySelector(".fa-star-o");
 let sun = document.querySelector(".fa-sun-o")
let x = 0;

 function dark1(){
   content.classList.toggle("night");
   contentBar.classList.toggle("active1");
   topHeader.classList.toggle("night-head");
   contactUs.classList.toggle("active-all");
    contactUsMain.classList.toggle("active-all");
    contactUs2.classList.toggle("active-all");
    modal.classList.toggle("night-modal");
    caseSliderNight.classList.toggle("active2");
    footer.classList.toggle("active3");
    sellBar.classList.toggle("active4");

   for(let i=0;i<tagA.length;i++){
    tagA[i].classList.toggle("active-color")
};
for( i=0 ;i<tagB.length;i++){
    tagB[i].classList.toggle("active2")
};
for(i=0;i<caseNightMode.length;i++){
    caseNightMode[i].classList.toggle("active2");
   };
   for(i=0;i<careerItems.length;i++){
    careerItems[i].classList.toggle("active2")
   };
   if(x==0){
    x=1;
    sun.style.display="none";
    moon.style.display="block";
   }
   else{
    x=0;
    sun.style.display="block";
    moon.style.display="none";
   }
 }

 
 function openBar(){
   // contentBar.style.display="block"
   contentBar.style.right="0";
 }
function closeBar(){
   contentBar.style.right="-1000px";
}


let slide= document.querySelectorAll(".slide")
slide[0].style.display="block";
let n = 0;
function nextPic(){
    for(i=0;i<slide.length;i++){
        slide[i].style.display="none"
    }
 n++;

 if(n==slide.length){
    n=0;
 }

 slide[n].style.display="block";
}

 setInterval(nextPic,5000);

function previous(){
    for(i=0;i<slide.length;i++){
        slide[i].style.display="none"
    }

    n--;
    if(n<0){
        n=slide.length-1;
    }
    slide[n].style.display="block";
}

// caseslider 1

let caseSlider = document.querySelectorAll("#case-slide1")
caseSlider[0].style.display="block";
let z = 0;

function caseNextPic(){
    for(l=0;l<caseSlider.length;l++){
        caseSlider[l].style.display="none";
    }
    z++;
    if(z==caseSlider.length){
        z=0;
    }
    caseSlider[z].style.display="block";
}
setInterval(caseNextPic,2000);

function casePrevious(){
    for(i=0;i<caseSlider.length;i++){
        caseSlider[i].style.display="none";
    }
    z--;
    if(z<0){
        z=caseSlider.length-1;
    }
    caseSlider[z].style.display="block"
};

//caseslider 2
let caseSlider2 = document.querySelectorAll("#case-slide2")
caseSlider2[0].style.display="block";
let y = 0;

function caseNextPic2(){
    for(l=0;l<caseSlider2.length;l++){
        caseSlider2[l].style.display="none";
    }
    y++;
    if(y==caseSlider2.length){
        y=0;
    }
    caseSlider2[y].style.display="block";
}
setInterval(caseNextPic2,2000);

function casePrevious2(){
    for(i=0;i<caseSlider2.length;i++){
        caseSlider2[i].style.display="none";
    }
    y--;
    if(y<0){
        y=caseSlider2.length-1;
    }
    caseSlider2[y].style.display="block"
};

//caseslider3

let caseSlider3 = document.querySelectorAll("#case-slide3")
caseSlider3[0].style.display="block";
let u = 0;

function caseNextPic3(){
    for(l=0;l<caseSlider3.length;l++){
        caseSlider3[l].style.display="none";
    }
    u++;
    if(u==caseSlider3.length){
        u=0;
    }
    caseSlider3[u].style.display="block";
}
setInterval(caseNextPic3,2000);

function casePrevious3(){
    for(i=0;i<caseSlider3.length;i++){
        caseSlider3[i].style.display="none";
    }
    u--;
    if(u<0){
        u=caseSlider3.length-1;
    }
    caseSlider3[u].style.display="block"
};

//career 

//  let careerPic= document.querySelectorAll(".career-img");
 let linkUrl="img/food/view-delicious-sweet-cupcake-dessert-with-frosting.jpg";
 
let imgElement=document.querySelector(".first-pic1");
let orginalSrc= imgElement.src;

function changePic(){
    imgElement.src= "img/food/chocolate-cupcakes-SQUARE.webp"
    document.querySelector(".border-s0").style.border= "1px solid #000";
    // document.querySelector(".first-pic1").style.display="none";
    // let imgPic=document.createElement("img");
    // careerPic.appendChild(imgPic);
    // imgPic.id="img-change";
    // imgPic.src=linkUrl;
    // imgPic.classList.add("img-fluid")
    // imgPic.classList.add("p-3");
    // imgPic.style.borderRadius="40px";
    // imgPic.style.width="100%";
    // imgPic.style.height="100%";
};

function refresh(){
    imgElement.src=orginalSrc;
    document.querySelector(".border-s0").style.border= "0px"
    // document.querySelector(".first-pic1").style.display="block";
}


let imgElement1=document.querySelector(".first-pic2");
let orginalSrc1= imgElement1.src;

function changePic1(){
    imgElement1.src= "img/food/chocolate-cupcakes-SQUARE.webp"
    document.querySelector(".border-s1").style.border= "1px solid #000";
};

function refresh1(){
    imgElement1.src=orginalSrc1;
    document.querySelector(".border-s1").style.border= "0px"
}

let imgElement2=document.querySelector(".first-pic3");
let orginalSrc2= imgElement2.src;

function changePic2(){
    imgElement2.src= "img/food/chocolate-cupcakes-SQUARE.webp"
    document.querySelector(".border-s2").style.border= "1px solid #000";
};

function refresh2(){
    imgElement2.src=orginalSrc2;
    document.querySelector(".border-s2").style.border= "0px"
}

let imgElement3=document.querySelector(".first-pic4");
let orginalSrc3= imgElement3.src;

function changePic3(){
    imgElement3.src= "img/food/chocolate-cupcakes-SQUARE.webp"
    document.querySelector(".border-s3").style.border= "1px solid #000";
};

function refresh3(){
    imgElement3.src=orginalSrc3;
    document.querySelector(".border-s3").style.border= "0px"
};

let imgElement4=document.querySelector(".first-pic5");
let orginalSrc4= imgElement4.src;

function changePic4(){
    imgElement4.src= "img/food/chocolate-cupcakes-SQUARE.webp"
    document.querySelector(".border-s4").style.border= "1px solid #000";
};

function refresh4(){
    imgElement4.src=orginalSrc4;
    document.querySelector(".border-s4").style.border= "0px"
};


let imgElement5=document.querySelector(".first-pic6");
let orginalSrc5= imgElement5.src;

function changePic5(){
    imgElement5.src= "img/food/chocolate-cupcakes-SQUARE.webp"
    document.querySelector(".border-s5").style.border= "1px solid #000";
};

function refresh5(){
    imgElement5.src=orginalSrc5;
    document.querySelector(".border-s5").style.border= "0px"
};

//

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        responsive:{
            0:{items:1},
            500:{items:1},
            1000:{items:1},
            4000:{items:1},
        }
    });
     $(".background").hide();
        $(".btn-close2").hide();
        $(".container-contact-us").hide();

    $(".contact-btn").click(function(){
        $(".background").show();
        $(".btn-close2").show();
        $(".container-contact-us").show(200);
    });
    $(".btn-close2").click(function(){
        $(".background").hide();
        $(".btn-close2").hide();
        $(".container-contact-us").hide(400);
    });
    $(".container-contact-us2").hide();
    $(".contact-btn-small").click(function(){
        $(".background").show();
        $(".container-contact-us2").show(400);
    });
    $(".btn-close3").click(function(){
        $(".background").hide();
        $(".container-contact-us2").hide(400);
    });
    $(".background").click(function(){
        $(".background").hide();
        $(".container-contact-us2").hide(400);
        $(".container-contact-us").hide(400);
    });
    $("#case-slider1").show();
    $("#case-slider2").hide();
    $("#case-slider3").hide();
    
    $(".cookie").click(function(){
        $("#case-slider1").show(200);
    $("#case-slider2").hide(200);
    $("#case-slider3").hide(200);
    });
    $(".cup-cake").click(function(){
        $("#case-slider1").hide(200);
        $("#case-slider2").show(200);
        $("#case-slider3").hide(200);
    });
    $(".donut").click(function(){
        $("#case-slider1").hide(200);
        $("#case-slider2").hide(200);
        $("#case-slider3").show(200);
    });
    $(".close-sell").hide();
    $(".sell-section").hide(); 
    $(".open-sell").click(function(){
        $(".open-sell").hide();
        $(".close-sell").show();
        $(".sell-section").show();
    }); 
    $(".close-sell").click(function(){
        $(".close-sell").hide();
         $(".sell-section").hide();
        $(".open-sell").show();
       
    }); 
    
    $(".li-content1").click(function(){
        $(".sell-section").show();
        $(".background").show();
    });
    $(".btn-sell-close").click(function(){
        $(".sell-section").hide();
        $(".background").hide();
    })
    $(".background").click(function(){
        $(".sell-section").hide();
        $(".background").hide();
    });
  });
 
  
 


