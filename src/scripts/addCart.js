import { API_URL } from "./API";
import getData from "./getData";

const addCart = () => {
    const btnsAdd = document.querySelectorAll('.btn-add-cart');
    const inputProducts = document.querySelectorAll('.input-product');

    btnsAdd.forEach(btn => {
        btn.addEventListener('click', async () => {
            let arrInputs = Array.from(inputProducts)
            let cantidad = arrInputs.find(inpt => inpt.getAttribute('id') === btn.getAttribute('id')).value;

            const data = await getData(API_URL);
            let product = data.data.find(prod => prod.id === btn.getAttribute('id'));

            if (cantidad > 0) {
                let prodsLocalStorage = JSON.parse(localStorage.getItem('cartSneakers')) || [];
                localStorage.setItem('cartSneakers', JSON.stringify([...prodsLocalStorage, product]));
            }

        })
    });
}
export default addCart;