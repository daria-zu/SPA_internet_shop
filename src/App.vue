<template>
  <section>
    <header-nav class="header" :tabs="tabs"></header-nav>
    <main>
      <div class="router">
      <router-view>
        </router-view>
      </div>
    </main>
  </section>
</template>

<script>
import HeaderNav from '@/components/HeaderNav';

export default {
  components:{HeaderNav},
  data() {
   return {
      tabs: [
        {name: 'Каталог', path: '/catalog', class: 'catalag'},
        {name: 'Авторизация', path: '/form', class: 'form'},
        {name: 'Корзина', path: '/basket', class: 'basket'}
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
