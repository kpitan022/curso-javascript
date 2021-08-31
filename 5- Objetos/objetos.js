class Persona{
    constructor(nombre, ciudad, trabajo){
        this.nombre=nombre;
        this.ciudad=ciudad;
        this.trabajo=trabajo;
    }
    saluda(){
        return`Hola mi nombre es ${this.nombre}\nTrabajo de ${this.trabajo}\ny vivo en ${this.ciudad}`
    }
}

const franco= new Persona("franco",'olavarria','programador')

console.log(franco.saluda())   