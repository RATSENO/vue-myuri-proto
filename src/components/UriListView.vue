<template>
  <span>
    <div v-for="(item, index) in list" v-bind:key="index">
      <uri-item-view v-bind:uriItem="{uri:item,index:index}"></uri-item-view>
    </div>
  </span>
</template>

<script>
import EventBus from '../EventBus/index.js'
import UriItemView from './UriItemView'

export default {
  data(){
    return {
      list : this.uriList
    }
  },
  created(){
    EventBus.$on('render-uri-list', (payload)=>{
      console.log(`EventBus $on render-uri-list payload = ${payload}`)
      this.list = payload
    }),
    EventBus.$on('delete-uri-item', (payload)=>{
      console.log(`EventBus $on delete-uri-item payload = ${payload}`)
      this.list.splice(payload, 1)
    })    
  },
  components: {
    UriItemView
  }

}
</script>

<style scoped>

</style>