<template>
  <div class="container">
      <h1>Detalles del articulo: {{$route.params.id}}</h1>
      <div class="card">
        <div class="card-body">
          <h1>{{articulo.title}}</h1>
          <p>{{articulo.body}}</p>
          <nuxt-link class="btn btn-primary" to="/blog">Regresar</nuxt-link>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      articulo:{}
    }
  },
  async created(){
    try {
      const id = this.$route.params.id
      const resp = await axios.get("https://jsonplaceholder.typicode.com/posts/"+id)      
      this.articulo = resp.data
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>