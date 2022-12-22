import showData from "./showData";

const filterData = () => {
    const allProducts = document.querySelectorAll('.products');
    allProducts.forEach(product => {
        product.addEventListener('click', () => showData())
    });

    const menProducts = document.getElementById('men-products');
    menProducts.addEventListener('click', () => showData('Masculine'));

    const femaleProducts = document.getElementById('women-prodcuts');
    femaleProducts.addEventListener('click', () => showData('Feminine'));
}
export default filterData;