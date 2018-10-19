//import Vue from 'vue';

//import Comp1 from './Comp1.vue';
//import Comp2 from './Comp2.vue';
//import Comp3 from './Comp3.vue';
//import App from './App.vue';

/*new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el: '#comp1',
  render: h => h(Comp1)
});

new Vue({
  el: '#comp2',
  render: h => h(Comp2)
});

new Vue({
  el: '#comp3',
  render: h => h(Comp3)
});*/

window.renderVueWidget = function (domId, component, options) {
	switch(component) {
		case 'Comp1':
			import('./Comp1').then(function (comp) {
			  new Vue({
				  el: domId,
				  components: {
	    			'comp-one': comp.default
					}
				});
			});
		  break;
		case 'App':
			import('./App').then(function (comp) {
			  new Vue({
				  el: domId,
				  render: h => h(comp.default)
				});
			});
			break;
	}
}