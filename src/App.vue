<template>
  <div id="app">
    <div class="content ">
      <div class="container-fluid container-fixed-lg">
        <input-form 
          :field-sets="fieldSets"
          :form-fields="formFields"
          @change="change"
          @save="save">
        </input-form>
      </div>
    </div>
  </div>
</template>

<script>
import InputForm from './components/form.vue'
import Columns from './assets/columns.js'

export default {
  name: 'App',

  components: {
    InputForm
  },

  data () {
    return {
      fieldSets: Columns.groups,
      formFields: Columns.fields
    }
  },

  methods: {
    change (name, val) {
      // this.formFields[name].value = val;
    },
    save (e) {
      // console.log('Save pressed')
    }
  },

}
</script>

<style>
.container-fluid { 
  padding-top: 40px 
}
</style>
