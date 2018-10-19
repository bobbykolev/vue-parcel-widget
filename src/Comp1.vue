<template>
  <div>
    <h5>{{ msg + ' ' + this.val }}</h5>
    <div ></div>
    <load-more-btn></load-more-btn>
  </div>
</template>

<script>
import LoadMoreButton from './LoadMoreButton.vue';

export default {
  name: 'comp-one',
  data () {
    return {
      msg: 'Comp 1 '
    }
  },
  props: ['val'],
  components: {
    'load-more-btn': LoadMoreButton
  },
  methods: {
    loadMore: function (event) {
      alert(`load more ${this.val}`);
    }
  }
}
</script>

<style lang="css">
  
</style>