<template>
   <section>
      <h2>Корзина</h2>
      <div v-if="$store.state.shop.length">
         <table cellspacing="20">
            <tr>
              
               <th>Название товара</th>
               <th>Цена товара</th>
               <th>Колличество</th>
               <th></th>
            </tr>
            <tr v-for="item in $store.state.shop" :key="item.id">
              
               <td>
               <router-link :to="{name:'Card', params: {id: item.id}}">{{item.name}}</router-link>
               </td>
               <td class="prise">{{item.totalprise}} руб.</td>
               <td class="quantity">
                  <span class="less" @click="less(item)">-</span>{{item.quantity}}<span @click="more(item)">+</span>

               </td>
               <td>
                  <button @click="delItem(item)" class="del">x</button>
               </td>
            </tr>
            <tr>
               <th class="all" colspan="4">Итого: {{$store.state.totalSum}} руб.</th>
            </tr>
             <tr>
               <th class="all" colspan="4">
                  <button @click="removeFromShop" class="del big">Очистить корзину</button>
               </th>
            </tr>
         </table>
      </div>
      <div v-else>
         <p>Корзина пуста</p>
      </div>
   </section>

</template>

<script>
import {mapMutations} from 'vuex';
export default {
   name: 'Basket',

   methods:{
         less(item){
            this.$store.commit('getLess', {product: item});
         },
         more(item){
            this.$store.commit('getMore', {product: item});
         },
         delItem(item){
            this.$store.commit('removeFromShopItem', {product: item});
         },
         ...mapMutations(['removeFromShop'])
    }
}
</script>

<style scoped>
   section{
      width: 800px;
      background: white;
      margin: auto;
      padding: 50px;
      margin-top: 150px;
   }
   .all{
      text-align: right;
      padding-right: 10px;
   }
   h2{
      text-align: center;
      margin-bottom: 25px;
   }
   table{
       margin: auto;
   }
   .quantity, .prise{
      text-align: center;
   }
   span{
      margin-right: 10px;
      margin-left: 10px;
   }
   span:hover{
      cursor: pointer;
   }
   .less{
      font-size: 1.3rem;
   }
   .del{
      border: 1px solid rgb(29, 28, 28);
      border-radius: 2px;
      width: 20px;
      height: 23;
      background-color: rgb(146, 148, 151);
      color: rgb(29, 28, 28);
      cursor: pointer;
   }
   .big{
      width: 130px;
   }
   .del:focus{
      border: 1px solid #b30000;
   }
</style>