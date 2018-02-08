<template>
  <div class="hello">
    <h1>musical Dinosaur</h1>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="item in myData" :key="item.id">
        <a :href="item.url"  @click.stop.prevent="changes(item,$event)" :target="item.target">{{item.desc}}</a>
      </li>
      <br>
    </ul>
    <h2>Ecosystem</h2>
    <input v-model.trim="usertext" placeholder="edit……" >
    <p>Your text : {{usertext}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
   console.log(this);
   let array = [{
      url:'https://vuejs.org',
      target:'_blank',
      desc:'Core Docs',
      id:1
  },{
      url:'https://forum.vuejs.org',
      target:'_blank',
      desc:'Forum',
      id:2
  },{
      url:'https://chat.vuejs.org',
      target:'_blank',
      desc:'Community Chat',
      id:3
  },{
      url:'https://twitter.com/vuejs',
      target:'_blank',
      desc:'Twitter',
      id:4
  }];
  let changes = (item,event)=> {
    console.log(item.desc);
  };
   return {
     myData : array,
     msg : 'Welcome to Your demo',
     changes: changes,
     usertext : 'input your text'
   };
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a,p {
  color: #42b983;
}
input{
  text-shadow: none;
  border: 1px solid #42b983;
  height: 2.5rem;
  width: 60%;
  padding: 1rem 2rem;
}
</style>
