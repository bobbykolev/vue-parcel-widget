<template>
<div class="wrapper">
    <h1>{{ msg }}</h1>
    <app-list :val="valueToPass"></app-list>
</div>
</template>

<script>
import AppList from './AppList';

export default {
    name: 'app',
    data() {
        return {
            msg: 'Hello World!',
            valueToPass: 'Users'
        }
    },
    components: {
        'app-list': AppList
    },
}
</script>

<style lang="css">
.wrapper {
    height: 100%;
    width: 360px;
    margin: auto;
    text-align: center;
    font-family: sans-serif;
}

h1 {
    color: #03DAC6;
}
</style>
