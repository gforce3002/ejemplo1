import {db} from '../plugins/firebase'
export const state = ()=>({
    tareas:''
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
    }

}

export const actions = {
    nuxtServerInit({commit}, {req}){
       
        return  db.collection('tareas').get()
        .then(query=>{
          const tareas = []
          query.forEach(element => {
            console.log(element)  
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
            db.collection('tareas').doc(payload.id).delete()
                .then(e=>{
                    console.log("Tarea eliminada")
                    commit('removeTarea',payload)
                })
        } catch (error) {
            
        }
    }
}