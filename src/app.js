import 'regenerator-runtime';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './script/component/nav-bar.js';
import './script/component/search-header.js';
import './script/component/aboutapp-article.js';
import './script/component/app-footer.js';
import './styles/style.css';
import main from './script/view/main.js';
 
document.addEventListener("DOMContentLoaded", main);