<template>
<div class="wrapper">
    <h1>{{ msg }}</h1>
    <app-list :val="valueToPass"></app-list>
</div>
</template>

<script>
import AppList from '../components/AppList';

export default {
    name: 'list-page',
    data() {
        return {
            msg: 'Hello World!',
            valueToPass: 'List'
        }
    },
    components: {
        'app-list': AppList
    },
}
</script>
