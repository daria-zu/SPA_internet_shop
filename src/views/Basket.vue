<template>
   <section>
      <h2>Корзина</h2>
      <div v-if="$store.state.shop.length > 0">
         <table>
            <!-- <th>
               <th>№</th>
               <th>Название товара</th>
               <th>Цена товара</th>
               <th>Колличество</th>
            </th>
            <th v-for="item in $store.state.shop" :key="item.id">
               <th>{{$store.state.number ++}}</th>
               <th>{{item.name}}</th>
               <th>{{item.prise}}</th>
               <th>{{item.quantity}}</th>
            </th>
            <th>
               <th class="summ" colspan="4">Итого: {{totalPrise}}</th>
            </th> -->
         </table>
      </div>
      <div v-else>
         <p>Корзина пуста</p>
      </div>
   </section>

   <!-- <router-view>
    </router-view> -->
</template>

<script>
export default {
name: 'Basket'
}
</script>

<style scoped>
   section{
      width: 500px;
      background: white;
      text-align: center;
      padding-top: 50px;
   }
   .summ{
      text-align: right;
   }
   h2{
      text-align: center;
   }
</style>