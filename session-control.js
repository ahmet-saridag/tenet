export default function(context){
    if(process.client){
       context.store.dispatch('initAuth')
       context.store.dispatch('initFirebaseName' , context.store.state.firebaseName)
    }
    else {
      context.store.dispatch('initAuth' , context.req)
      context.store.dispatch('initFirebaseName' , context.store.state.firebaseName)
    }
}