<template>
<div class="wrapper">
    <h1>{{ msg }}</h1>
</div>
</template>

<script>
export default {
    name: 'not-found',
    data() {
        return {
            msg: 'No such page!'
        }
    }
}
</script>
