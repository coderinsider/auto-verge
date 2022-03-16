require('./bootstrap');
require('./components/HelloReact')
require('./components/Dashboard')
require('./components/UserManage')
require('./components/UserListCreate')
require('./components/Services/Services')
require('./components/Services/ServiceCreate')
require('./components/Services/ServiceEdit')
import UserEdit from './components/UserEdit';
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
