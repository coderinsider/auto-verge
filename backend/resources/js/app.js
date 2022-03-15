require('./bootstrap');
require('./components/HelloReact')
require('./components/Dashboard')
require('./components/UserManage')
require('./components/UserListCreate')
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
