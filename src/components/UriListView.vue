<template>
  <span>
    <div v-for="(item, index) in list" v-bind:key="index">
      <uri-item-view v-bind:uriItem="item"></uri-item-view>
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
      console.log(`EventBus $on payload = ${payload}`)
      this.list = payload
    })
  },
  components: {
    UriItemView
  }

}
</script>

<style scoped>

</style>