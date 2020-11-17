<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="row-md">
      <uri-input></uri-input>
    </div>
    <div class="row-md">
      <uri-list-view></uri-list-view>
    </div>    
  </div>
</template>
<script>
import UriInput from '../components/UriInput.vue'
import UriListView from '../components/UriListView.vue' 


export default {
  components:{
    UriInput,
    UriListView
  }
}
</script>

<style>

</style>