import showCart from './showCart';

const deleteCart = () => {
    const btnClose = document.querySelectorAll('.btn-close');

    let data = JSON.parse(localStorage.getItem('cartSneakers'));

    btnClose.forEach(btn => {
        btn.addEventListener('click', () => {
            let newArr = data.filter(e => e.id !== btn.getAttribute('id'));
            localStorage.setItem('cartSneakers', JSON.stringify(newArr));
            location.reload();
        })

    });
}
export default deleteCart;