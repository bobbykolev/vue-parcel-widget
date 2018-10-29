<template>
<button class="btn" @click="loadMore">
    Load More
  </button>
</template>

<script>
export default {
    name: 'load-more-btn',
    props: ['loadClick'],
    methods: {
        loadMore: function (event) {
            this.$emit('load-click', event);
        }
    }
}
</script>

<style lang="css">
.btn {
    font-size: 16px;
    padding: 10px 20px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: inherit;
    border: 0;
    border-radius: 2px;
    color: #fff;
    background-color: #03DAC6;
    border-color: #03DAC6;
    outline: 0;
    outline-offset: 0;
    cursor: pointer;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    transition: box-shadow 0.2s linear;
}

.btn:focus,
.btn:active,
.btn.active,
.btn:active:focus,
.btn.active:focus,
.btn:hover {
    outline: 0;
    outline-offset: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    transition: box-shadow 0.2s linear;
}
</style>
