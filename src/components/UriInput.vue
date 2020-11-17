<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group
    description="기억하고 싶은 링크를 입력하세요"
    label="링크를 입력하세요"
    label-for="uri-input-text"
    valid-feedback="감사합니다."
    :invalid-feedback="invalidFeedback"
    :state="state"
    >
        <b-form-input id="uri-input-text" v-model="uriText" :state="state" trim></b-form-input>
    </b-form-group>
    <div class="row row-cols-2">
      <div class="col">
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
      <div class="col">
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
import EventBus from '../EventBus/index.js'

  export default {
    data() {
      return {
        uriText: '',
        savedUriTextList : []
      }
    },
    methods : {
        onSubmit(evt){
          console.log(evt);
            evt.preventDefault()
            console.log(this);
            if(this.validUriInputText(this.uriText)){
              this.savedUriTextList.push(this.uriText)
              this.uriText = ''
              console.log(`EventBus $emit payload = ${this.savedUriTextList}`)
              EventBus.$emit('render-uri-list', this.savedUriTextList)
            }
        },
        onReset(evt){
            evt.preventDefault()
            this.uriText = ''
        },
        validUriInputText(text){
          if(text == ""){
            return false;
          }else{
            return true;
          }
        }
    },
    computed: {
      state() {
        return this.uriText.length >= 4
      },
      invalidFeedback() {
        if (this.uriText.length > 0) {
          return '4글자 이상은 입력해주세요'
        }
        return '링크를 입력해주세요'
      }
    }
  }
</script>

<style>

</style>