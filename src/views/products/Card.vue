<template>
  <section>
  <div class="card">
      <div class="slider">
          <slider :slider_data="card.img_slider"></slider>                
      </div>
      <div class="box_text">
        <h2>{{card.name}}</h2>
        <p>{{card.description}}</p>
        <p>{{card.prise}} руб.</p>
        <button @click="shop(card)">Купить</button>
      </div>
  </div>
</section>
</template>

<script>
import Slider from '../../components/Slider.vue';
export default {
    name: 'Card',
    components: {Slider},
    computed: {
        card(){
            return this.$store.getters.getCardById(this.$route.params.id);
        }
    },
    methods:{
         shop(card){
            this.$store.commit('addToBasket', {product: card});
        }
    },
}
</script>

<style scoped>
    section{
        display: flex;
    }
    .card{
        margin: 1rem;
        background-color: white;
        padding: 1rem;
        display: flex;
        border: 2px solid white;
    
    }
    .slider{
        width: 30%;
        border: 1px solid transparent;
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