<template>
  <div class="container">
      <h1>Detalles del articulo: {{$route.params.id}}</h1>
      <div class="card">
        <div class="card-body">
          <h1>{{articulo.data.title}}</h1>
          <small>{{articulo.autor.name}}</small>
          <p>{{articulo.data.body}}</p>
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
      //articulo:{data:{},autor:{}}
    }
  },
  async created(){
    /* try {
      const id = this.$route.params.id
      const resp = await axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
      const respAutor = await axios.get("https://jsonplaceholder.typicode.com/users/"+resp.data.userId)      
      this.articulo.data = resp.data
      this.articulo.autor = respAutor.data

      console.log(resp,respAutor)
    } catch (error) {
      console.log(error)
    } */
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    try {
      const id = params.id
      const resp = await axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
      const respAutor = await axios.get("https://jsonplaceholder.typicode.com/users/"+resp.data.userId)      
      const articulo = {}
      articulo.data = resp.data
      articulo.autor = respAutor.data

      console.log(articulo)
      return {articulo}
    } catch (error) {
      console.log(error)
      return {error: error}
    }
  }
}
</script>

<style>

</style>