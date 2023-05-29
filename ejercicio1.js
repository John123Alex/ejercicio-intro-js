//1 ejercicio

let miNombre = "john ";
console.log(miNombre);

//2 ejercicio
let miApellido = "mora ";
console.log(miApellido)

//3 ejercicio
let miEdad = 22;
console.log(miEdad + " años")

//4 ejercicio
let miMascota ="Lobby";
console.log(miMascota)

//5 ejercicio
let edadMascota = 2;
console.log(edadMascota + " años")

//7 ejercicio
let nombreCompleto = miNombre + miApellido;
console.log(nombreCompleto)

//8 ejercicio
let textoPresentacion = "mi nombre es " + nombreCompleto + "tengo " +  miEdad  + " años y tengo un perro que se llama " + miMascota;
console.log(textoPresentacion)

//ejercicio 9
let sumaEdades= miEdad+ edadMascota;
console.log(sumaEdades)
let restaEdades = miEdad - edadMascota;
console.log(restaEdades)
let productoEdades =  miEdad * edadMascota;
console.log(productoEdades)
let  divisionEdades =  miEdad / edadMascota;
console.log(divisionEdades)

//ejercicio 10
let textPresentacion = "mi nombre es " + nombreCompleto + "tengo " +  miEdad  + " años y tengo un perro que se llama " + miMascota + " la suma de la edad de lobby con la mía es " + sumaEdades + " la resta es " + restaEdades + " la multiplicacion es " + productoEdades + " y la division es "+ divisionEdades;
console.log(textPresentacion)

//ejercicio 11
let alumno = {
    nombre : "john",
    edad : 22,
    cc: 1002112552,
    cel: 320001255,
    curso: "cohort48"
}
console.table(alumno);
console.log(alumno ["nombre"]);
console.log(alumno ["edad"]);
console.log(alumno["cc"]);
console.log(alumno ["cel"]);
console.log(alumno ["curso"]);

//ejercicio 12
let mascota = {
    nombre : "lobby",
    edad : 2,
    raza : "husky",
    cel: 320001255,
    color : "manto rojo"
}
console.table(mascota);
console.log(mascota ["nombre"]);
console.log(mascota ["edad"]);
console.log(mascota["raza"]);
console.log(mascota ["cel"]);
console.log(mascota ["color"]);
