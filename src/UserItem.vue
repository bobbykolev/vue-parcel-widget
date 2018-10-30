<template>
<div class="item">
    <div class="avatar"><img :src="'https://www.placecage.com/gif/'+(30+index)+'/'+(30+index)"/></div>
        <div>{{item.name}}</div>
    </div>
</template>

<script>
export default {
    name: 'user-item',
    props: ['item', 'index'] 
}
</script>

<style lang="css">
.item {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 2px;
    margin: 10px;
    overflow: hidden;
    opacity: 1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.23);
}

.item>div {
    margin: 10px;
    color: #005457;
    font-weight: 700;
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
