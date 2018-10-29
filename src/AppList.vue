<template>
<div>
    <h5>{{ msg + ' ' + this.val }}</h5>
    <div class="list">
        <user-item v-for="item in list" :key="item.id" :item="item">
            <user-item>
    </div>
    <load-more-btn v-if="visibleMore" @load-click="loadMoreClick"></load-more-btn>
</template>

<script>
import restUtil from './restUtil';
/* lazy loaded if commented */
//import LoadMoreButton from './LoadMoreButton.vue';
//import UserItem from './UserItem.vue';

export default {
    name: 'app-list',
    data() {
        return {
            msg: 'App List',
            currentPage: 1,
            visibleMore: true,
            list: []
        }
    },
    props: ['val'],
    components: {
        'load-more-btn': () => import('./LoadMoreButton'),
        'user-item': () => import('./UserItem')
    },
    created() {
        this.getData();
    },
    methods: {
        loadMoreClick: function (event) {
            this.currentPage++;
            this.getData();
        },
        getData() {
            return restUtil.get('https://reqres.in/api/users', {
                page: this.currentPage
            }, this.onSuccess);
        },
        onSuccess: function (data) {
            if (this.currentPage === 1) {
                this.list = data.data;
            } else {
                this.list = [...this.list, ...data.data];
            }

            if (data.total <= this.list.length) {
                this.visibleMore = false;
            }
        }
    }
}
</script>

<style lang="css">
.list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;
}
</style>
