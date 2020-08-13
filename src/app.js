import 'regenerator-runtime';

/* overriding styles */
import './styles/style.scss';

import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './script/component/nav-bar';
import './script/component/search-header';
import './script/component/aboutapp-article';
import './script/component/app-footer';

import main from './script/view/main';
 
document.addEventListener("DOMContentLoaded", main);