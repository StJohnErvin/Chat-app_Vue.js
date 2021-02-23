<template>
    <div class="site-header">
        <van-tabs v-model="activeName">
            <van-tab title="tab 1" name="a">content of tab 1</van-tab>
            <van-tab title="tab 2" name="b">content of tab 2</van-tab>
            <van-tab title="tab 3" name="c">content of tab 3</van-tab>
        </van-tabs>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
    name: 'Header',
    components: {

    },
    data() {
        return {
            activeName: 'a',
        }
    },
    methods: {
        onClickLeft() {
        Toast('Back');
        },
        onClickRight() {
        Toast('Button');
        },
    }    
}
</script>
<style scope>
    .site-header{
        width: 100vw;
        height: 64px;
        background-color: #075E54;
    }
    h2{
        margin: 0;
        padding: 0;
    }
</style>