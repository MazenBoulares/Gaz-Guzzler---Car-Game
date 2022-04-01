
document.getElementById("c").addEventListener("change", changecolor); 
document.getElementById("cpt").addEventListener("mouseover", changespeed); 
window.addEventListener("keydown", changeCar); 
window.addEventListener("keydown", gameEngine); 
window.addEventListener("keyup", p); 


function changeCar(event) {
			    var image1 = document.getElementById('img1'); 
				var image2 = document.getElementById('img2'); 
				
				switch (event.keyCode){
					case  84: case 116: // 84 est "T" et 116 est "t"
					
			    if (image1.src.match("clio")) { // means that if "clio" word is in current image1 src attribute
				                                //  match tests if image1.src contains the string "clio"
			        image1.src = "mer1.jpg";  // image1 will be changed to be "mer1.jpg"
					image2.src = "mer2.jpg";  // image1 will be changed to be "mer2.jpg"
					//break;
			    }
				else {
				if (image1.src.match("mer")) {
			        image1.src = "fer1.jpg";
					image2.src = "fer2.jpg";
					//break;
					}
					else {
			        image1.src = "clio1.jpg";
					image2.src = "clio2.jpg";
					}
			    }
			//	 default: alert("ce n'est pas la bonne touche");
			}
			}

			
function changecolor()
{
document.getElementById("piste").bgColor = document.getElementById("c").value;
}

function changespeed()
{
var image = document.getElementById('cpt');
			    if (image.src.match("compteur1")) {
			        image.src = "compteur2.jpg";
			    } else {
			        image.src = "compteur1.jpg";
			    }
}



function avanceCar()
{
    var p=document.getElementById("piste");
    var p1=p.getElementsByTagName("TD");
    var l=p1.length; var j= 0;
    var i=0; 
	var psd=document.getElementById("ps").value;
    do{
        if(p1[i].title=="Car Here")
            {
			if(i==0 || i==1 || i==2 || i==3 || i==4 || i==6 || i==7 || i==8 || i==9 || p1[i-10].id=="obs") {
                document.getElementById('audiotag2').play();
                lost()}
            else {
            
         if(p1[i-10].title=="reward"){
              scored();}
           
			p1[i-10].innerHTML=p1[i].innerHTML;
            p1[i].innerHTML="";
            p1[i-10].title="Car Here";
            p1[i].title="";	
	               j=1;

         }
			 }
		 
        i++;
		  
    }while((i<l)&&(j==0));  
	
}
function droiteCar()
{
    var p=document.getElementById("piste");
    var p1=p.getElementsByTagName("TD");
    var l=p1.length; var j=0;
    var i=0;
	var psd=document.getElementById("ps").value;
    do{
        if(p1[i].title=="Car Here")
            { 
			if(i==9 || i==19 || i==29 || i==39 || i==49 || i==59 || i==69 || i==79 || i==89 || i==99 ||p1[i+1].id=="obs") { document.getElementById('audiotag2').play();
            lost()}
            else {
                if(p1[i+1].title=="reward"){
                    scored();}				
            p1[i+1].innerHTML='<img class="imgu" id="img2" src="image/45-459119_retro-neon-car-png-transparent-png-removebg-preview.png" height="80" width="110">';
            p1[i].innerHTML="";
            p1[i+1].title="Car Here";
            p1[i].title="";
			  j=1;
            }
            }
			
        i++;
    }while((i<l)&&(j==0));
}
function arriereCar()
{
     var p=document.getElementById("piste");
    var p1=p.getElementsByTagName("TD");
    var l=p1.length;
    var i=0; var j=0;
		var psd=document.getElementById("ps").value;

    do{
        if(p1[i].title=="Car Here")
            {
			if(i==90 || i==91 || i==92 || i==93 || i==94 || i==95 || i==96 || i==97 || i==98 || i==99 ||p1[i+10].id=="obs") { document.getElementById('audiotag2').play();
            lost()}	
            else {
                if(p1[i+10].title=="reward"){
                    scored();}
            p1[i+10].innerHTML=p1[i].innerHTML;
            p1[i].innerHTML="";
            p1[i+10].title="Car Here";
            p1[i].title="";
			j=1;
            }
            }
        i++;
    }while((i<l)&&(j==0));
}

function gaucheCar()
{
     var p=document.getElementById("piste");
    var p1=p.getElementsByTagName("TD");
    var l=p1.length;
    var i=0; var j=0;
		var psd=document.getElementById("ps").value;

    do{
        if(p1[i].title=="Car Here")
            {
			if(i==0 || i==10 || i==20 || i==30 || i==40 || i==50 || i==60 || i==70 || i==80 || i==90 ||p1[i-1].id=="obs") { document.getElementById('audiotag2').play();
            lost()}	
            else{
                if(p1[i-1].title=="reward"){
                    scored();}
            p1[i-1].innerHTML='<img class="imgu" id="img2" src="image/retro eon reverted.png" height="80" width="110">';
            p1[i].innerHTML="";
            p1[i-1].title="Car Here";
            p1[i].title=""; 
			j=l;
            }
            }
        i++;
    }while((i<l)&&(j==0));
}

function gameEngine(event)
{

    var x = event.keyCode;
	
    switch(x)
        {
            
            case 38: avanceCar();break;
            case 40:arriereCar();break;
            case 39:droiteCar();break;
            case 37:gaucheCar();break;
        }
}


function p(event)
{

    var x = event.keyCode;
	
    switch(x)
        {
            
           case 38:  // si on avance
           var x = document.createElement("AUDIO");
            x.setAttribute("src","Kalimba.mp3"); x.play();		
			break;
            case 40: // si on recule
			var x = document.createElement("AUDIO");
            x.setAttribute("src","ttt.mp3"); x.play();		
			
			break;
            
        }


   
       
}
function lost(){
    Swal.fire({  /* c'est le plugin de sweet alert 2*/  
        backgroundColor:'red',
        icon: 'error',
        iconColor: '#FA4EAB',
        title: 'You Failed !',  
        text: 'Goodluck Next Time!',
        showDenyButton: true,  
        denyButtonText: `Leave Game`,  
        confirmButtonText: `Retry`, 
        confirmButtonColor: '#FA4EAB',
        denyButtonColor: 'grey',
       
        
      }).then((result) => {  
          
          if (result.isConfirmed) {    
            document. location. reload()  
          } else if (result.isDenied) {    
            window.close()   
           }
      }); } 

function scored(){
    var ch=document.getElementById("score").innerText;
    var nb=parseInt(ch);
    nb=nb+10;
    document.getElementById("score").innerText=nb.toString();

    document.getElementById('audiotag1').play();
    
}



