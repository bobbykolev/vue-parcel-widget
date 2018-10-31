<template>
<button :class="loading ? 'disabled' :''" class="btn" @click="onClick" :disabled="loading">
    <template v-if="loading" class="">
        <div class="loading animated">
            <div></div>
        </div>
    </template>
    <span v-else>
        Load More
    </span>
  </button>
</template>

<script>
export default {
    name: 'load-btn',
    props: ['loadClick', 'loading'],
    methods: {
        onClick: function (event) {
            this.$emit('load-click', event);
        }
    }
}
</script>

<style lang="css">
.btn {
    width: 100%;
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
    box-shadow: none;
    transition: box-shadow 0.2s linear;
}

.disabled {
    background: white;
    cursor: not-allowed;
    box-shadow: none;
}

.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    margin: auto;
    border-radius: 50%;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#03dac6+0,8af2eb+100 */
    background: #03dac6;
    /* Old browsers */
    background: -moz-linear-gradient(top, #03dac6 0%, #8af2eb 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #03dac6 0%, #8af2eb 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #03dac6 0%, #8af2eb 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#03dac6', endColorstr='#8af2eb', GradientType=0);
    /* IE6-9 */
}

.loading>div {
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background: white;
}

.loading.animated {
    -webkit-animation: spin 1s ease-out infinite;
    -moz-animation: spin 1s ease-out infinite;
    animation: spin 1s ease-out infinite;
}

@-moz-keyframes spin {
    100% {
        -moz-transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
