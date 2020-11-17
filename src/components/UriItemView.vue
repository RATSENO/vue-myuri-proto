<template>
  <div>
    <b-card
      title="내가 등록한 포스팅 타이틀"
      img-src=""
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
      align="center"
    >
      <b-card-text>
        내가 등록한 포스팅 타이틀
      </b-card-text>
      <b-button v-bind:href="uriItem.uri" variant="primary">{{uriItem.uri}}</b-button>
      <uri-item-delete v-bind:index="uriItem.index"></uri-item-delete>
    </b-card>
  </div>
</template>

<script>
import UriItemDelete from '../components/UriItemDelete.vue'

export default {
  props: ['uriItem'],
  components : {
    UriItemDelete
  },
  created(){
    console.log(this.uriItem);
  }
}
</script>

<style>

</style>