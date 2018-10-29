<template>
<div class="item">
    <div class="avatar"><img :src="item.avatar"/></div>
        <div>{{item.first_name}}</div>
    </div>
</template>

<script>
export default {
    name: 'user-item',
    props: ['item']
}
</script>

<style lang="css">
.item {
    display: flex;
    align-items: center;
}

.item>div {
    margin: 10px;
}

.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
}

img {
    max-width: 100%;
    height: auto;
}
</style>
