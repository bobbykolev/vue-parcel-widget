<template>
<div>
    <h5>{{ msg + ' ' + this.val }}</h5>
    <div class="list">
        <user-item v-for="(item, index) in list" :key="item.name" :item="item" :index="index">
            <user-item>
    </div>
    <load-btn :loading="loading" v-if="visibleMore" @load-click="loadMoreClick"></load-btn>
</template>

<script>
import restUtil from '../utils/restUtil';
/* lazy loaded if commented */
//import LoadButton from './LoadButton.vue';
//import UserItem from './UserItem.vue';

export default {
    name: 'app-list',
    data() {
        return {
            msg: 'SWAPI with Nicolas Cage gifs',
            currentPage: 1,
            visibleMore: true,
            list: [],
            loading: false
        }
    },
    props: ['val'],
    components: {
        'load-btn': () => import('./LoadButton'),
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
            this.loading = true;
            return restUtil.get('https://swapi.co/api/people/', {
                page: this.currentPage
            }, this.onSuccess, this.onError);
        },
        onSuccess: function (data) {
            this.loading = false;
            if (this.currentPage === 1) {
                this.list = data.results;
            } else {
                this.list = [...this.list, ...data.results];
            }

            if (data.count <= this.list.length) {
                this.visibleMore = false;
            }
        },
        onError: function () {
            this.loading = false;
        }
    }
}
</script>

<style lang="css">
.list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0 10px;
}
</style>
