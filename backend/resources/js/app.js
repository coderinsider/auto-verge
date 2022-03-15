require('./bootstrap');
require('./components/HelloReact')
require('./components/Dashboard')
require('./components/UserManage')
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
