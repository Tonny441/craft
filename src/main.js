const { createApp } = require('vue');
import { createRouter, createWebHashHistory } from 'vue-router';
var VueRouter = require('vue-router').default;
import App from './App.vue';
import Crafts from './pages/Crafts.vue';
import Accueil from './pages/Accueil.vue';
import Craft from './pages/Craft.vue';

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil,
    props: true,
  },
  { path: '/crafts', component: Crafts },
  { path: '/craft/:id', component: Craft },
];
const routeur = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(routeur).mount('#app');
