function construirEdificio()
{
    var e =new Edificio(x,y,h,b);
    
}

function crearMapa()
{
    var canvas = document.getElementById('map');
   // var a = document.getElementById('ahfuck');
   // a.style.display = "none";
    var width=canvas.clientWidth;
    var height=canvas.clientHeight;
    var m;
    var n=document.getElementById("N").value;
    console.log(""+n);
    console.log("width "+width+" height"+height);
    
    if (canvas.getContext)
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle="rgba(0,0,0,1)";
        //ctx.fillRect(x,y,10,30);
        console.log("ok si paso");
        var tam=(width/n);
        tam=Math.sqrt(tam);
        console.log("tam "+width/n)

        for (let i = 0; i < n-1; i ++)
        {
            for (let j = 0; j < n-1; j++)
            {
                ctx.strokeRect(i*tam,j*tam,tam,tam);
                console.log("x "+((width/n)*i) +" y "+((width/n)*j));
                //rect(i * tileSize, j * tileSize, tileSize, tileSize);
            }
            if(i==n-2)
            {
                addAudio();
            }
        } 
    }
}

function addAudio()
{
    var a = document.createElement("audio");
    var b = document.createElement("audio");
    var avanzar=0;
    if (a.canPlayType("audio/mpeg"))
     {
      a.setAttribute("src","audio/A.mp3");
     } 
     else {
        a.setAttribute("src","audio/A.mp3");
      }
      if (b.canPlayType("audio/mpeg"))
      {
       b.setAttribute("src","audio/B.mp3");
      } 
      else {
         b.setAttribute("src","audio/B.mp3");
       }
    a.play();
    b.volume=0.97;
    b.play();
}



function testsound()
{
    var e = new Edificio(10,10,20,30,"escuela");
    var a = "audio/Test.mp3"
    e.setSonido(a);
    e.playaudio();
}

function playsong(namefile)
{
    if (a.canPlayType("audio/mpeg"))
     {
      a.setAttribute("src",namefile);
     } 
     else {
        a.setAttribute("src",namefile);
      }
    
}