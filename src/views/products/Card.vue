<template>
  <section>
  <div class="card">{{$route.params.id}}
      <div class="box_img">

        <CarouselCard :interval="7000" height="300px" type="card" arrow="always">
        <CarouselCardItem v-for="img in card.img_slider" :key="img.id">
            <h1 v-text="img"></h1>
        </CarouselCardItem>
        </CarouselCard>
                
      </div>
      <div class="box_text">
        <h2>{{card.name}}</h2>
        <p>{{card.description}}</p>
        <p>{{card.prise}} руб.</p>
        <button @click="shop(item)">Купить</button>
      </div>
  </div>
</section>
</template>

<script>
import {
  CarouselCard,
  CarouselCardItem
} from 'vue-carousel-card';
import 'vue-carousel-card/styles/index.css';
export default {
    name: 'Card',
    components: { CarouselCard, CarouselCardItem },
    computed: {
        card(){
            return this.$store.getters.getCardById(this.$route.params.id);
        }
    },
    methods:{
         shop(item){
            this.$store.commit('addToBasket', {product: item});
        }
    }
}
</script>

<style scoped>
    section{
        display: flex;
        flex-direction: column;
    }
    .card{
        
        margin: 1rem;
        background-color: white;
        padding: 1rem;
        display: flex;
        border: 2px solid white;
    }
    .box_img{
        width: 30%;
        border: 1px solid transparent
    }
    img{
        overflow: hidden;
    }
    .box_text{
        width: 70%;
        padding-left: 5px;
        display: flex;
        flex-direction: column;
    }
    p{
        margin-top: 10px;
    }
    button{
      width: 15%;
      border: 1px solid rgb(29, 28, 28);
      border-radius: 3px;
      background-color: rgb(146, 148, 151);
      color: rgb(29, 28, 28);
      cursor: pointer;
      margin-top: 10px;
   }
   button:focus{
      border: 2px solid #b30000;
   }
   h1 {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    background: linear-gradient(90deg, rgba(88,140,236,1), rgba(106,106,207,1))
    }
</style>