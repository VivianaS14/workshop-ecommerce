import * as bootstrap from 'bootstrap';
import './styles/style.scss';
import showData from './scripts/showData';
import filterData from './scripts/filterData';
import showCart from './scripts/showCart';

document.addEventListener('DOMContentLoaded', () => {
    showData()
    filterData()
    showCart()
});