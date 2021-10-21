<template>
  <div class="container">
      <h2>Pagina en vuex</h2>
      <b-form @submit.prevent="btnAddTarea">
        <b-form-group label="Nueva tarea">
          <b-input-group>
            <b-form-input type="text" placeholder="Ingresa nueva tarea" v-model="tarea"></b-form-input>
            <b-input-group-append>
              <b-button variant="success" type="submit" >Agregar</b-button>
            </b-input-group-append>
          </b-input-group>
          
        </b-form-group>
      </b-form>
      <b-card class="my-2" v-for="tarea in tareas" :key="tarea.id">
          <b-card-text>
            {{tarea.nombre}}
            <b-button variant="warning">Editar</b-button>
            <b-button variant="danger" @click="eliminarTarea(tarea)">Eliminar</b-button>
          </b-card-text>
      </b-card>
  </div>
</template>

<script>
import {db} from '@/plugins/firebase'
import {mapState, mapActions} from 'vuex'
export default {
  data(){
    return{
      tarea:''
    }
  },
  /* fetch({store}){
    db.collection('tareas').get()
      .then(query=>{
        const tareas = []
        query.forEach(element => {
          tareas.push(element.data())
        });
       return store.commit('setTareas', tareas);
      })
      .catch(error=>{

      })
  } */
  computed:{
    ...mapState(['tareas'])
  },
  methods:{
    ...mapActions(['addTarea','eliminarTarea']),
    btnAddTarea(){
      this.addTarea(this.tarea)
      this.tarea='';
    }
  }

}
</script>

<style>

</style>