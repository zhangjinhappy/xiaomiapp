<template>
    <div class="me-header">
       <img class="user-logo" src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt="">
       <p>{{title}}</p>
    </div>
</template>
<script>
export default {
     props:['title'],
    data() {
        return {
        }
    },
}
</script>
<style lang="less" scoped>
.me-header{
    width: 100%;
    height: 4.6rem;
    background:url("https://m.mi.com/static/img/bg.63c8e19851.png") center 0 #f37d0f;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
       width: 1.6rem ;
    }
    p{
        color: aliceblue;
        margin-top: 0.4rem;
        font-size: 0.3rem;
        letter-spacing:3px;
    }
}
</style>

