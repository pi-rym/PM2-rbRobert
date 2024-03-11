// funcion autoinvocada
(function (){
    const forms = document.querySelectorAll(".needs-validation"); 
       console.log(forms);
    forms.forEach((form) => {
        form.addEventListener('submit', (evento) => {
            if (!form.checkValidity()) {
                evento.preventDefault()
                evento.stopPropagation()
                form.classList.add('was-validated')
            }
            else alert('Mensaje enviado')
        })
    })
})()


// (function (){
//     const form = document.querySelector('#form');
//     console.log(form);
//     form.addEventListener('submit', (evento) => {
//         if(!form.checkValidity()){
//             evento.preventDefault()
//             evento.stopPropagation()
//             form.classList.add('was-validated')
//         }
//         else alert('Mensaje enviado')
//     })
// })()