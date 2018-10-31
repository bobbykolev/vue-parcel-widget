import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//router config
var router = new VueRouter({
	routes: [
		{ path: '/', component: () => import('./pages/ListPage') },
		{ path: '/second-page', component: () => import('./pages/SecondPage') },
		{ path: '*', component: () => import('./pages/NotFound') }
	],
	mode: 'history',
});

//init vue in app container
new Vue({
	el: '#app',
	router,
	render: h => h('router-view')
});

