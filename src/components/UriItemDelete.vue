<template>
  <b-button variant="danger" v-on:click="deleteUriItem">
    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
    Delete
  </b-button>  
</template>

<script>
import EventBus from '../EventBus/index.js'

export default {
  props : ['index'],
  methods : {
    deleteUriItem(){
      console.log(`delete uri item idx =  ${this.index}`)
      EventBus.$emit('delete-uri-item', this.index)
    }
  }
}
</script>

<style>

</style>