<template>
  <div class="container">
      <h1>Vista Editar {{$route.params.id}}</h1>
      <b-form @submit.prevent="editarTarea(tarea)">
        <b-form-group label="Nueva tarea">
          <b-input-group>
            <b-form-input type="text" placeholder="Ingresa nueva tarea" v-model="tarea.nombre"></b-form-input>
            <b-input-group-append>
              <b-button variant="warning" type="submit" >Editar</b-button>
            </b-input-group-append>
          </b-input-group>
          
        </b-form-group>
      </b-form>
      <b-button>Regresar</b-button>
  </div>
</template>

<script>
import {db} from '../../plugins/firebase'
import {mapState, mapActions} from 'vuex'
export default {
    fetch({store, params}){
        return db.collection('tareas').doc(params.id).get()
            .then(doc => {
                if(doc.exists){
                    let tarea = doc.data();
                    tarea.id = doc.id
                    return store.commit('getOneTarea', tarea);
                }   
            })
            .catch(e=>{console.log(e)})
    },
    computed:{
        tarea:{
            get(){
                return{
                    nombre: this.$store.state.tarea.nombre,
                    id: this.$store.state.tarea.id
                }
            }
        }
    },
    methods:{
        ...mapActions(['editarTarea'])
    }
}
</script>

<style>

</style>