class Edificio
{
    constructor(x,y,h,b,tipo,sonido)
    {
        this.x=x;
        this.y=y;
        this.h=h;
        this.b=b;
        this.tipo=tipo;
        this.sonido=sonido;
    }
    getX()
    {
    return this.x;
    }

    getY()
    {
        return this.y;
    }

    getH()
    {
        return this.h;
    }

    getB()
    {
        return this.b;
    }
    getTipo()
    {
        return this.tipo;
    }
    getSonido()
    {
        return this.sonido;
    }
    setX(x)
    {
    this.x=x;
    }

    setY(y)
    {
    this.y=y;
    }

    setH(h)
    {
    this.h=h;
    }

    setB(b)
    {
    this.b=b;
    }

    setSonido(sonido)
    {
        this.sonido=sonido;
    }
    settipo(tipo)
    {
        this.tipo=tipo;
    }
    playaudio()
    {
        this.sonido.play();
    }
    pauseaudio()
    {
        this.sonido.pause();
    }
}

