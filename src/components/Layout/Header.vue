<template>
    <div style="background-color: #5f86cf">
        <h2>Im a header component</h2>
    </div>
</template>
<script>
import { Toast } from 'vant';

export default {
    name: 'Header',
    components: {

    },
    data: () => {
        return {
            
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
<style scoped>
    h2{
        margin: 0;
        padding: 0;
    }
</style>