//import js套件
import 'jquery';
import "bootstrap";
import 'datatables.net';
import 'datatables.net-responsive-dt';
import 'datatables.net-keytable-dt';
import 'datatables.net-select-dt';

//import scss
import './scss/index.scss';

//import 共用 js
import './js/sidebar'
import { sidebar } from './js/menu';
import { dataTable } from './js/paste-from-excel';

sidebar()
dataTable()
if (module.hot) {
    module.hot.accept();
 }