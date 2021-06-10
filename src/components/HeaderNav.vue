<template>
  <div class="header">
      <div>
          <router-link to="/" class="name">HOME</router-link>
      </div>
      <nav>
           <router-link class="nav_item" v-for="tab in tabs" :key="tab.path" :to="tab.path">{{tab.name}}</router-link>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'HeaderNav',
    props: {
        tabs: Array
    }
}
</script>

<style scoped>
    /* .nav_item:focus{
        background-color: #b30000;
    } */

    .nav_item:hover{
        background-color: #b30000;
    }

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #161a1f;
        height: 4rem;
        padding: 0 3rem;
    }
    nav{
        width: 50%;
        display: flex;
    }
    nav a{
        flex: 1;
        color: #f5f5f5;
        font-size: 1.5rem;
        text-decoration: none;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
    }
    .name{
        margin: 0;
        padding-left: 2rem;
        line-height: 4rem;
        color: #f5f5f5;
        font-size: 2rem;
        text-decoration: none;
    }
</style>