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

      <b-button v-bind:href="uriItem" variant="primary">{{uriItem}}</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['uriItem'],
  created(){
    console.log(this.uriItem);
  }
}
</script>

<style>

</style>