//arreglo de objetos frase
const frases = [
    { frase: 'el que madriuga dios le ayuda', autor: 'Pepito Perez' },
    { frase: 'A CABALLO REAGALDO', autor: 'Juan Carlos' },
    { frase: 'No hay mal que por bien', autor: 'Joel Espinosa' },
    { frase: 'El que con lobos se junta', autor: 'Roberto Ramos' },
]
const app = Vue.createApp({
    methods: {
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
            this.listafrases.unshift(nuevaFrase);
        },
        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
            this.listafrases.push(nuevaFrase);
        },
        eventoKeyPress() {

            console.log('evento keypress');
            //console.log(event);
            //console.log(charCode);
            //console.log(target.value);
            this.agregarFraseFinal();


        }
    },
    //a ese arreglo le asiganaremos una propiedad reactiva
    data() {
        return {
            listafrases: frases,
            frase: null,
            //autor:'sin autor'
            autor: null,
        }
    },
});
app.mount('#myApp')