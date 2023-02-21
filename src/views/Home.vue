<template>
    <div class="Home">
        <p class="tip">{{tip}}</p>
        <button @click="jumpClick(1)">去往第一页</button>
        <button @click="jumpClick(2)">去往第二页</button>
        <button @click="jumpClick(3)">去往第三页</button>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

   
   
   //函数式编程
   export default{
     props:['msg'],
     setup(props){
        const router = useRouter();//路由控制
        const route=useRoute();//路由信息
        let tip="这是主页内容";
        const jumpClick=(jumpPage=1)=>{
            console.log("点击跳转按钮");
            switch(jumpPage)
            {
                case 1:{router.push('first');};break;
                case 2:{router.push('second');};break;
                case 3:{router.push('third');};break;
            }
            
        };
        onMounted(()=>{
            console.log("挂载之后");
            console.log(route.path);
        })
        return {tip,jumpClick};
     }
   }
</script>
<style scoped>
   .Home{
     position: relative;
    
   }
   .Home :nth-child(){
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     width: 300px;
     text-align: center;
   }
</style>