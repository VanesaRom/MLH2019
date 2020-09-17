var contador=0;
var a = document.createElement("audio");
var b = document.createElement("audio");
a.volume=0;
b.volume=1;



function TestAudio(op)
{
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
       if(op==0)
       {
        a.volume+=0.1;
        b.volume-=0.1;
        console.log("A "+a.volume+ "B "+b.volume);
       }
       else
       {
        b.volume+=0.1;
        a.volume-=0.1;
        console.log(""+b.volume+ " B "+b.volume);
       }
       a.play();
       b.play();
}

function playSong(filename)
{
    var audio = new Audio(filename);
    console.log(filename);
    audio.play();
}
