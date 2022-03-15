require('./bootstrap');
require('./components/HelloReact')
require('./components/Dashboard')
require('./components/UserManage')
require('./components/UserListCreate')
import UserEdit from './components/UserEdit';
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
