import * as bootstrap from 'bootstrap';
import './styles/style.scss';
import showData from './scripts/showData';
import filterData from './scripts/filterData';
import countProducts from './scripts/countProducts';

document.addEventListener('DOMContentLoaded', () => {
    showData()
    filterData()
});