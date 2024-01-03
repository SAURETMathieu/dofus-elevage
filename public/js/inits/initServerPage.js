import { searchByName } from '../searchs/searchByName.js';
import initHelpButton from '../buttons/helpServer.js';

const elements = document.querySelectorAll('.server-container');
const clearButton = document.querySelector('#clear-search');
const searchInput = document.querySelector('#searchInput');

searchByName(elements, searchInput, clearButton);
initHelpButton();
