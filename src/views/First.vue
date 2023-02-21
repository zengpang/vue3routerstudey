<template>
    <div class="First">
      <p>{{tip}}</p>
    </div>
</template>
<script>
  //选项式编程
  export default{
    name:"First",
    props:['msg'],
    data(){
       return{
        tip:"这是第一页"
       }
    },
    mounted(){
        console.log("First挂载之后");
    }
  }
</script>
<style scoped>
   .First{
      position: relative;
   }
   .First p{
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%);
     margin: 0;
     width: 300px;
   }
</style>