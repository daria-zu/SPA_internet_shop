<template>
  <header-nav :tabs="tabs"></header-nav>
  
  <div class="router">
     
   <router-view>
    </router-view>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav';

export default {
  components:{HeaderNav},

  data() {
   return {
      tabs: [
        {name: 'Каталог', path: '/catalog'},
        {name: 'Авторизация', path: '/form'},
        {name: 'Корзина', path: '/basket'}
      ]
   } 
  }
}
</script>

<style>
*{
  margin: 0;
}

#app {
  color: #151719;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f2f2f2;
  height: 100vh;
}


</style>
