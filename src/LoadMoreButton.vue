<template>
  <button @click="loadMore">
    Load More
  </button>
</template>

<script>
export default {
  name: 'load-more-btn',
  data () {
    return {
      msg: ''
    }
  },
  props: ['loadMoreCb'],
  methods: {
    loadMore: function (event) {
      this.$parent.loadMore && this.$parent.loadMore(event);
    }
  }
}
</script>

<style lang="css">
  
</style>