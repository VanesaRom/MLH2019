class Mapa {
    constructor() {
        this.buildings = [];
        this.terreno = new Array(b);
        for (let i = 0; i < b; i++){
            this.terreno[i] = new Array(b);
        }
        for (let i = 0; i < b; i++){
            for (let j = 0; j < b; j++){
                this.terreno[i][j] = "X";
            }
        }
        this.generateBuildings();
        this.playing = false;
        this.player = null;
    }

    generateBuildings() {
        this.buildings.push(new Edificio("green", "H", "Hospital"));
        this.buildings.push(new Edificio("red", "E", "Escuela"));
        this.buildings.push(new Edificio("gray", "I", "Iglesia"));
        this.buildings.push(new Edificio("blue", "P", "Personaje"));
        this.buildings.push(new Edificio("black", "X", "Vacio"));
    }

    dibujar () {
        //console.log(b+" "+b+" "+cuadro_b+" "+cuadro_b);
        
        // lineas
        stroke(255);
        for (let i = 0; i < b; i++){
            
            line(i * cuadro_b, 0, i * cuadro_b, dim);
            //console.log(i*cuadro_b+" "+0+" "+i* cuadro_b+" "+dim);
        }
        for (let i = 0; i < b; i++){
            //console.log(i*cuadro_b+" ")
            line(0, i * cuadro_b, dim, i * cuadro_b);
            //console.log(0+" "+i*cuadro_b+" "+dim+" "+i* cuadro_b);
        }
        // espacio en blanco
        fill("white");
        b = int(b);
        for (let i = b; i < b + space; i++){
            //console.log("p");
            for (let j = 0; j < b; j++){
                
                //noStroke();
                rect(i * cuadro_b, j * cuadro_b, cuadro_b, cuadro_b); 
            }
        }

        for (let i = 0; i < this.buildings.length; i++){
            //console.log("r");
            fill(this.buildings[i].color);
            rect((b + space - 2) * cuadro_b, i * cuadro_b, cuadro_b, cuadro_b);
            fill("white");
            //console.log(this.buildings[i].nombre);
            textSize((1.5 * cuadro_b) / 2);
            textAlign(CENTER, BOTTOM);
            text(this.buildings[i].nombre, (b + space - 2) * cuadro_b + (cuadro_b/2), (i * cuadro_b)+ cuadro_b);             
        }
    }
}

class Edificio {
    constructor (color, nombre, desc) {
        this.color = color;
        this.nombre = nombre;
        this.desc = desc;
    }
}

class Jugador {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}