const bton1 = document.querySelector('button#bton1')
const bton2 = document.querySelector('button#bton2')
const bton3 = document.querySelector('button#bton3')
const bton4 = document.querySelector('button#bton4')
const bton5 = document.querySelector('button#bton5')

const modulo1 = document.querySelector('div#modulo1')
const modulo2 = document.querySelector('div#modulo2')
const modulo3 = document.querySelector('div#modulo3')
const modulo4 = document.querySelector('div#modulo4')
const modulo5 = document.querySelector('div#modulo5')

const proceso1 = document.querySelector('div#proceso1')
const proceso2 = document.querySelector('div#proceso2')
const proceso3 = document.querySelector('div#proceso3')
const proceso4 = document.querySelector('div#proceso4')
const proceso5 = document.querySelector('div#proceso5')
const proceso6 = document.querySelector('div#proceso6')
const proceso7 = document.querySelector('div#proceso7')

const ProcesosText1 = document.querySelector('div#ProcesosText1')
const ProcesosText2 = document.querySelector('div#ProcesosText2')
const ProcesosText3 = document.querySelector('div#ProcesosText3')
const ProcesosText4 = document.querySelector('div#ProcesosText4')
const ProcesosText5 = document.querySelector('div#ProcesosText5')
const ProcesosText6 = document.querySelector('div#ProcesosText6')
const ProcesosText7 = document.querySelector('div#ProcesosText7')


bton1.addEventListener ("click", () => {
    mostrarModulo(modulo1, modulo2, modulo3, modulo4, modulo5)
})

bton2.addEventListener ("click", () => {
    mostrarModulo(modulo2, modulo1, modulo3, modulo4, modulo5)
})

bton3.addEventListener ("click", () => {
    mostrarModulo(modulo3, modulo1, modulo2, modulo4, modulo5)
})

bton4.addEventListener ("click", () => {
    mostrarModulo(modulo4, modulo1, modulo3, modulo2, modulo5)
})

bton5.addEventListener ("click", () => {
    mostrarModulo(modulo5, modulo1, modulo3, modulo4, modulo2)
})

function mostrarModulo(mod1, mod2, mod3, mod4, mod5) {
    mod1.style.display = "flex"
    mod2.style.display = "none"
    mod3.style.display = "none"
    mod4.style.display = "none"
    mod5.style.display = "none"
}

//Logica de procesos
proceso1.addEventListener ("click", () => {
    mostrarModulo(ProcesosText1, ProcesosText2, ProcesosText3, ProcesosText4, ProcesosText5, ProcesosText6, ProcesosText7)
})

proceso2.addEventListener ("click", () => {
    mostrarProceso(ProcesosText2, ProcesosText1, ProcesosText3, ProcesosText4, ProcesosText5, ProcesosText6, ProcesosText7)})

proceso3.addEventListener ("click", () => {
    mostrarProceso(ProcesosText3, ProcesosText2, ProcesosText1, ProcesosText4, ProcesosText5, ProcesosText6, ProcesosText7)})

proceso4.addEventListener ("click", () => {
    mostrarProceso(ProcesosText4, ProcesosText2, ProcesosText3, ProcesosText1, ProcesosText5, ProcesosText6, ProcesosText7)})

proceso5.addEventListener ("click", () => {
    mostrarProceso(ProcesosText5, ProcesosText2, ProcesosText3, ProcesosText4, ProcesosText1, ProcesosText6, ProcesosText7)})

proceso6.addEventListener ("click", () => {
    mostrarProceso(ProcesosText6, ProcesosText2, ProcesosText3, ProcesosText4, ProcesosText5, ProcesosText7, ProcesosText1)})

proceso7.addEventListener ("click", () => {
    mostrarProceso(ProcesosText7, ProcesosText2, ProcesosText3, ProcesosText4, ProcesosText5, ProcesosText6, ProcesosText1)})

function mostrarProceso(pros1, pros2, pros3, pros4, pros5, pros6, pros7) {
    pros1.style.display = "flex"
    pros2.style.display = "none"
    pros3.style.display = "none"
    pros4.style.display = "none"
    pros5.style.display = "none"
    pros6.style.display = "none"
    pros7.style.display = "none"
}