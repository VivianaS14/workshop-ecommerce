const countProducts = () => {
    const minus = document.querySelectorAll('.button-minus');
    const plus = document.querySelectorAll('.button-add');
    const inputs = document.querySelectorAll('.input-product');
    const totals = document.querySelectorAll('.total-products');

    minus.forEach(btn => {
        btn.addEventListener('click', () => {
            inputs.forEach(input => {
                if (input.getAttribute('id') === btn.getAttribute('id')) {
                    if (input.value > 0) {
                        input.value--
                        totals.forEach(total => {
                            if (total.classList.contains(btn.getAttribute('id')) === btn.getAttribute('id')) {
                                //PENDIENTE REVISAR
                                total.textContent = `Total: $ ${parseInt(total.getAttribute('id')) * parseInt(input.value)}`
                            }
                        })
                    }
                }

            });
        })
    });

    plus.forEach(btn => {
        btn.addEventListener('click', () => {
            inputs.forEach(input => input.getAttribute('id') === btn.getAttribute('id') ? input.value++ : false);
        })
    });
}
export default countProducts;