import getData from "./getData";
import { API_URL } from "./API";
import countProducts from "./countProducts";
import addCart from "./addCart";

const showData = async (genre = "") => {
    const container = document.querySelector('.card-container');
    const data = await getData(API_URL, genre);
    container.innerHTML = '';
    data.data.forEach(product => {
        const { id, name, price, image1, image2, image3, image4, description } = product;
        container.innerHTML += `
        <div class="card m-auto my-3" style="max-width: 90vw">
            <div class="row g-0">
                <div class="col-md-4">
                    <div
                        id="carousel${id}"
                        class="carousel slide"
                        data-bs-ride="true"
                    >
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carousel${id}"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carousel${id}"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carousel${id}"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carousel${id}"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img
                                src="${image1}"
                                class="d-block w-100"
                                alt="..."
                            />
                            </div>
                            <div class="carousel-item">
                            <img
                                src="${image2}"
                                class="d-block w-100"
                                alt="..."
                            />
                            </div>
                            <div class="carousel-item">
                            <img
                                src="${image3}"
                                class="d-block w-100"
                                alt="..."
                            />
                            </div>
                            <div class="carousel-item">
                            <img
                                src="${image4}"
                                class="d-block w-100"
                                alt="..."
                            />
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carousel${id}"
                            data-bs-slide="prev"
                        >
                            <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carousel${id}"
                            data-bs-slide="next"
                        >
                            <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body p-5">
                    <p class="card-text text-orange">SNEAKER COMPANY</p>
                    <h5 class="card-title fs-2">${name}</h5>
                    <p class="card-text">
                        ${description}
                    </p>
                    <p class="card-text fs-4 total-products ${id}" id="${price}">Total: $${price}</p>
                    <p class="card-text fs-6">Unidad: $${price}</p>
                    <div class="container d-flex align-items-center">
                        <div class="input-group w-25 bg-light py-0">
                            <button
                                class="btn text-orange fs-5 button-minus"
                                type="button"
                                id="${id}"
                            >
                                -
                            </button>
                            <input
                                id="${id}"
                                type="number"
                                class="form-control text-center bg-light input-product"
                                placeholder=""
                                aria-label="Example text with button addon"
                                aria-describedby="button-addon1"
                                value="0"
                            />
                            <button
                                class="btn text-orange fs-5 button-add"
                                type="button"
                                id="${id}"
                            >
                                +
                            </button>
                        </div>
                        <button
                            type="button"
                            class="btn btn-dark ms-2 px-5 py-2 btn-orange btn-add-cart"
                            id="${id}"
                        >
                            <img src="./images/icon-cart-copy.svg" alt="" />
                            Add to cart
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        `
    });

    countProducts();
    addCart();
}
export default showData;