 
Swal.fire('Bienvenidos')

const btn = document.querySelector("#btn-buy")

btn.addEventListener('click', () => {
   Swal.fire ({
        text: 'Agregaste este artículo',
        icon: 'success',
        confirmButtonText: 'Confirmar'
   })
});
