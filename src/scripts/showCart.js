import deleteCart from "./deleteCart";

const showCart = () => {
  const container = document.querySelector('.cart-container');
  container.innerHTML = ''

  let data = JSON.parse(localStorage.getItem('cartSneakers'));
  data.forEach(cartProd => {
    const { id, name, image, price, quantity } = cartProd
    container.innerHTML += `
            <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="${image}"
                      class="img-fluid rounded-start"
                      alt="Product-${id}"
                    />
                  </div>
                  <div class="col-md-8 position-relative">
                    <div class="card-body">
                      <h5 class="card-title text-green">${name}</h5>
                      <p class="card-text">${quantity} x $${price}</p>
                      <p class="card-text"><b>Total: $${quantity * price}</b></p>
                    </div>
                    <button
                      id="${id}"
                      type="button"
                      class="btn-close position-absolute top-0 end-0 m-1"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
            </div>
        `
  });

  deleteCart();
}
export default showCart;