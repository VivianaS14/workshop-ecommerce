import * as bootstrap from 'bootstrap';
import './styles/style.scss';
import showData from './scripts/showData';
import filterData from './scripts/filterData';

document.addEventListener('DOMContentLoaded', () => {
    showData()
    filterData()
});