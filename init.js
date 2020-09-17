let mapa; // Board object
let b = window.filas; // base
let dim = 600;
let cuadro_b = dim / b; // cuadros
let space = 3;
let painting = false;
let b_name = ""; // building name
let pass_color = "";

function setup() {
    mapa = new Mapa();
    window.canvas = createCanvas(dim + space * cuadro_b, dim);
    canvas.parent("canvas");
}

function draw () {
    background(0);
    mapa.dibujar();
    noLoop();   
}

function mousePressed() {
    let x = floor(mouseX / cuadro_b)
    let y = floor(mouseY / cuadro_b)
    console.log(x+" "+y);
    if (! mapa.playing) {
        if (x <= b - 1){
            if (painting == true){
                console.log("black painting");
                if (pass_color === "blue"){
                    mapa.player = new Jugador(x, y);
                    mapa.playing = true;
                }
                mapa.terreno[x][y] = b_name;
                rect(x * cuadro_b, y * cuadro_b, cuadro_b, cuadro_b);
            }
        } else if (x == b + space - 2){
            painting = true;
            console.log("color picked " + mapa.buildings[y].color);
            pass_color = mapa.buildings[y].color;
            fill(pass_color);
            b_name = mapa.buildings[y].nombre;
        }
    }
}

function verify() {
    p_x = mapa.player.x;
    p_y = mapa.player.y;
}

function keyPressed() {
    if (mapa.playing){
        if (keyCode == LEFT_ARROW){
            console.log("left");
            p_x = mapa.player.x;
            p_y = mapa.player.y;
            if ((p_x - 1 >= 0) && (mapa.terreno[p_x - 1][p_y] == "X")){
                mapa.player.x = p_x - 1;
                mapa.terreno[p_x][p_y] = "X"
                mapa.terreno[p_x - 1][p_y] = "P"
                fill("black");
                rect(p_x * cuadro_b, p_y * cuadro_b, cuadro_b, cuadro_b);   
                fill("blue");
                rect((p_x - 1) * cuadro_b, p_y * cuadro_b, cuadro_b, cuadro_b);
            }
        } else if (keyCode == RIGHT_ARROW){
            console.log("right");
            p_x = mapa.player.x;
            p_y = mapa.player.y;
            if ((p_x + 1 <= 600) && (mapa.terreno[p_x + 1][p_y] == "X")){
                mapa.player.x = p_x + 1;
                mapa.terreno[p_x][p_y] = "X"
                mapa.terreno[p_x + 1][p_y] = "P"
                fill("black");
                rect(p_x * cuadro_b, p_y * cuadro_b, cuadro_b, cuadro_b);   
                fill("blue");
                rect((p_x + 1) * cuadro_b, p_y * cuadro_b, cuadro_b, cuadro_b);
            }
        } else if (keyCode == UP_ARROW){
            console.log("up");
            p_x = mapa.player.x;
            p_y = mapa.player.y;
            if ((p_y - 1 >= 0) && (mapa.terreno[p_x][p_y - 1] == "X")){
                mapa.player.y = p_y - 1;
                mapa.terreno[p_x][p_y] = "X"
                mapa.terreno[p_x][p_y - 1] = "P"
                fill("black");
                rect(p_x * cuadro_b, p_y * cuadro_b, cuadro_b, cuadro_b);   
                fill("blue");
                rect(p_x * cuadro_b, (p_y - 1) * cuadro_b, cuadro_b, cuadro_b);
            }
        } else if (keyCode == DOWN_ARROW){
            console.log("down");
            p_x = mapa.player.x;
            p_y = mapa.player.y;
            if ((p_y + 1 <= dim) && (mapa.terreno[p_x][p_y + 1] == "X")){
                mapa.player.y = p_y + 1;
                mapa.terreno[p_x][p_y] = "X"
                mapa.terreno[p_x][p_y + 1] = "P"
                fill("black");
                rect(p_x * cuadro_b, p_y * cuadro_b, cuadro_b, cuadro_b);   
                fill("blue");
                rect(p_x * cuadro_b, (p_y + 1) * cuadro_b, cuadro_b, cuadro_b);
            }
        }
    }
}