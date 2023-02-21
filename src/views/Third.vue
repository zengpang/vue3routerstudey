<template>
   <div class="Third">
     {{tip}}
   </div>
</template>
<script>
  //选项式编程
  export default{
    props:['msg'],
    setup(props){
        let tip="这是第三张页面";
        return {tip};
     }
  }
</script>
<style scoped>
   .Third{
     display: flex;
     align-items: center;
     justify-content: center;
     width: 300px;
   }
</style>