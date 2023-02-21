<template>
    <div class="Second"> 
        {{tip}}
    </div>
</template>
<script>
   //函数式编程
   export default{
     props:['msg'],
     setup(props){
        let tip="这是第二张页面";
        return {tip};
     }
   }
</script>
<style scoped>
  .Second{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
  }
</style>