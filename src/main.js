/* lazy loaded if commented */
//import App from './App.vue';

//lazy loading
import('./App').then(function (comp) {
	new Vue({
		el: '#app',
		render: h => h(comp.default)
	});
});
