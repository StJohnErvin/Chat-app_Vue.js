<template>
    <div class="site-footer">
       <van-field v-model="value" placeholder="Text" />
    </div>
</template>
<script>
export default {
    name: 'Footer',
    components: {

    },
    data: () => {
        return {

        }
    }    
}
</script>
<style scoped>
    .site-footer{
        padding: 24px 0 24px;
        width: 100vw;
        height: auto;
        background-color: #075E54;
    }
</style>