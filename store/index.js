import {db} from '../plugins/firebase'
export const state = ()=>({
    tareas:'',
    tarea:''
})

export const mutations = {
    setTareas(state, payload){
        state.tareas = payload
    },
    setTarea(state,payload){
        state.tareas.push(payload)
    },
    removeTarea(state, payload){
        state.tareas = state.tareas.filter( e => e.id != payload.id)
    },
    updateTarea(state, payload){
        const index = state.tareas.findIndex(e => e.id === payload.id)
        state.tareas[index].nombre = payload.nombre
    },
    getOneTarea(state, payload){
        state.tarea = payload
    }

}

export const actions = {
    /**Esta funcion solo se ejecuta cuando se inicia por 
     * primera vez la app
     */
    nuxtServerInit({commit}, {req}){
       
        return  db.collection('tareas').get()
        .then(query=>{
          const tareas = []
          query.forEach(element => {
            
            let tarea = element.data()
            tarea.id = element.id
            tareas.push(tarea)
          });
          
          return commit('setTareas', tareas)
        })
        .catch(error=>{
            console.log(error)
        })      
    },
    async addTarea({commit},payload){
        try {
            
            const doc = await db.collection('tareas').add({
                nombre: payload,
                fecha: new Date()
            })
            commit('setTarea',{nombre:payload, id: doc.id})
        } catch (error) {
            console.log(error)
        }
    },
    async eliminarTarea({commit}, payload){
        try {
            await db.collection('tareas').doc(payload.id).delete()
                .then(e=>{
                    console.log("Tarea eliminada")
                    commit('removeTarea',payload)
                })
        } catch (error) {
            console.log(error)
        }
    },
    async editarTarea({commit}, payload){
        console.log(payload)
        try {
            await db.collection('tareas').doc(payload.id).update({
                nombre: payload.nombre
            }).then(()=>{
                console.log("Tarea editada")
                commit('updateTarea',payload)
                this.app.router.push('/vuex')
            })

        } catch (error) {
            console.log(error)
        }
    },
    async getOneTarea({commit},payload){
        try {
            const resp = await db.collection('tareas').doc() 
        } catch (error) {
            console.log(error)
        }
    }
}