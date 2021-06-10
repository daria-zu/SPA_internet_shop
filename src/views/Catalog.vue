<template>

<section>
  <div class="nav">
      <router-link class="catalog" v-for="tab in tabs" :key="tab.name" :to="tab.path">{{tab.name}}</router-link>
   </div>
   <div class="products">
      <transition>
         <router-view/>
      </transition>
   </div>
</section> 
</template>

<script>
export default {
   name: 'Catalog',
   data(){
      return{
         tabs:[
            {name: 'Ноутбуки', path: '/catalog/desktop'},
            {name: 'Планшеты', path: '/catalog/tab'},
            {name: 'Телефоны', path: '/catalog/phone'},
            {name: 'Часы', path: '/catalog/watch'}
         ]
      }
   }
}
</script>

<style scoped>
   section{
      display: flex;
      flex-grow: 1;
   }
   .router{
      padding: 0;
   }
   .nav{
      width: 250px;
      height: 580px;
      display: flex;
      flex-direction: column;
      background-color: #161a1f;
      border: 2px solid #f5f5f5;
      justify-content: center;
   }
   .catalog{
      text-align: center;
      padding: 15px 60px;
      width: 130px;
      font-size: 1.5rem;
      text-decoration: none;
      color: #f5f5f5;
   }
   .catalog:focus{
      background-color: #b30000;
    }
   .catalog:hover{
      background-color: #b30000
    }
   .products{
      padding: 2rem;
      flex-grow: 1;
      display: flex;
   }
   .v-enter,
   .v-leave-to {
   opacity: 0;
   }
   
   .v-enter-to,
   .v-leave {
   opacity: 1;
   }
   
   .v-enter-active,
   .v-leave-active {
   transition: all 0.2s linear;
   transform-origin: top center;
   }
</style>