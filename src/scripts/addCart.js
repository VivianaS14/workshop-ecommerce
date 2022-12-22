import { API_URL } from "./API";
import getData from "./getData";
import showCart from "./showCart";

const addCart = () => {
    const btnsAdd = document.querySelectorAll('.btn-add-cart');
    const inputProducts = document.querySelectorAll('.input-product');

    btnsAdd.forEach(btn => {
        btn.addEventListener('click', async () => {
            let arrInputs = Array.from(inputProducts)
            let cantidad = arrInputs.find(inpt => inpt.getAttribute('id') === btn.getAttribute('id')).value;
            arrInputs.find(inpt => inpt.getAttribute('id') === btn.getAttribute('id')).value = 0;

            const data = await getData(API_URL);
            let product = data.data.find(prod => prod.id === btn.getAttribute('id'));
            let newProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image1,
                genre: product.genre,
                description: product.description,
                quantity: cantidad
            }
            let prodsLocalStorage = JSON.parse(localStorage.getItem('cartSneakers')) || [];

            if (cantidad > 0 && !prodsLocalStorage.find(e => e.id === newProduct.id)) {
                localStorage.setItem('cartSneakers', JSON.stringify([...prodsLocalStorage, newProduct]));
            }

            showCart();
        })
    });
}
export default addCart;