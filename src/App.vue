<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>musical Dinosaur</h1>
    <h1>{{ msg }}</h1>
    <div class="jump">
      <el-button round @click="getStart">
        <!-- <span>点击查看</span> -->
        <i class="el-icon-d-arrow-right"></i>
        <router-link to="start" >
          <!-- <router-view/> -->
          <span>点击查看</span>
        </router-link>      
      </el-button>
    </div>
  
    <!-- <router-view/> -->
  </div>
</template>

<script>

  export default {
    name : 'App',
    data :  ()=> {
      return {
        msg : 'Welcome to my demo'
      };
    },
    methods : {
      getStart : ( e )=>{
        console.log(this.$route);
      }
    }
  }
</script>

<style>
  #app {
    font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",
    "Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1, h2 {
    font-weight: normal;
  }
  a,p,span{
    color: #42b983;
  }
  .jump{
    margin-top : 3rem;
  }
</style>
