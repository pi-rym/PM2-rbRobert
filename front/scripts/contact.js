const btn = document.querySelector("#boton");
const genero = document.getElementById('name07');
let eventoClickActivado = false;

btn.addEventListener('click', (evento) => {
    eventoClickActivado = true;
    evento.preventDefault();

    // Selecciona todos los campos de entrada del formulario
    const inputs = document.querySelectorAll("input");

    // Recorre cada campo(todos los inputs) de entrada y establece su valor en una cadena vacía
    inputs.forEach((input) => {
        input.value = "";
      });
    
    alert('evento click del boton limpiar inpust.');
});


const forms = document.querySelectorAll(".needs-validation"); 

forms.forEach((form) => {
    form.addEventListener('submit', (evento) => {
        console.log('genero: ' + genero.value.split(',')); 
        if (!form.checkValidity()) {
            if(eventoClickActivado){
                alert('El evento click se activo hace un instante.');
            } else {
                evento.preventDefault()
                evento.stopPropagation()
                form.classList.add('was-validated')
            }
        } 
        else {
            alert('Mensaje enviado')
        } 
        
    })
})





