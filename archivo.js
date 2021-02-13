// ---------MENU DESPLEGABLE
const menu=document.getElementById("menu");
const sub_menu=document.getElementById("sub_menu");
    menu.addEventListener("click",(e)=>{
	sub_menu.classList.toggle("active")
});//--------FIN DEL MENU DESPLEGABLE

    // -----------AGREGAR CONTENIDO A LA GALERIA
    const contenedor_grid=document.getElementById("grid");

                // CREAR DIV CON IMAGEN
let fragmento=document.createDocumentFragment()
    for (var i = 0; i <fotografia.galeria.length; i++) {
     	      let div= document.createElement("div");
        	  let gal=`<a href="#lightbox"><img src="${fotografia.galeria[i].src}"  alt=""></a>`;
              div.innerHTML=gal;
              fragmento.appendChild(div);
                }//FIN CREACION DIV CON IMAGEN
    contenedor_grid.appendChild(fragmento);
//FIN AGREGAR CONTENIDO A LA GALERIA

                 // DESPLEGAR ALBUM
     const hijos_grid=contenedor_grid.children;
     const atras=document.getElementById("atras");
     const adelante=document.getElementById("adelante");
     const album=document.getElementById("album");
     for(let i=0;i<hijos_grid.length;i++){
     	var num=0;
      var foto=fotografia.galeria;
     	hijos_grid[i].addEventListener("click", (e)=>{
             album.src=foto[i].carpeta[0];             
             num=i;
     	})
     }

		let cont=0;

      adelante.addEventListener("click", ()=>{
      			if(cont>=foto[num].carpeta.length-1){
      				cont=0;
      			}else{
      				cont++;
     			 	 }
          album.style.transform="rotateY(90deg)";
          album.style.transition="1s";
          setTimeout(()=>{
                album.src=foto[num].carpeta[cont];
                album.style.transform="rotateY(0deg)";
              
          },1000)
      })
       atras.addEventListener("click", ()=>{
        if(cont<=0){
              cont=foto[num].carpeta.length-1;
            }else{
              cont--;
             }
         album.style.transform="rotateY(-90deg)";
          album.style.transition="1s";
          setTimeout(()=>{
                album.src=foto[num].carpeta[cont];
                album.style.transform="rotateY(0deg)";
              
          },1000)
      		
      })
                 // FIN DESPLEGAR ALBUM

                 // DESPLAZAR SLIDER
let slider = document.getElementById("carrusel");
let hijos=slider.children;
let tamaño=0;
setInterval(function(){
	
           slides();
	      
      }, 3000)
       
       function slides(){
       	// debugger;
       	 tamaño+=25;
        	slider.style.transform = `translateX(${"-"+tamaño+"%"})`
	      	slider.style.transition = '1s linear';      
            


       
	      if(tamaño==75){
           setTimeout(()=>{
            	tamaño=0;
	      		slider.style.transform = `translateX(0%)`;
	      		slider.style.transition = '0s';
                
          }, 1500)}
       }
                 // FIN DESPLAZAR SLIDER
