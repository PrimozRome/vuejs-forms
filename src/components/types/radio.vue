<template>
  <div>
    <div 
      class="form-group form-group-default" 
      :class="{ 'input-group': inplaceSave || addon, 'inplace-save': inplaceSave, 'required': required, 'disabled': disabled, 'has-error': !valid }">
      <label>{{ label }}</label>
      <div class="radio" :class="css">
        <div :class="subType" v-for="(option, index) in options">
          <input 
            type="radio" 
            :id="name+index"
            :name="name"
            :value="option"
            :required="required" 
            :readonly="readonly"
            :disabled="disabled"
            v-model="input"
            @blur="blur">
          <label :for="name+index">{{ option }}</label>
        </div>
      </div>
      <span 
        v-if="inplaceSave"
        class="input-group-addon button-addon"
        @click.prevent="save">
        <button class="btn btn-success">SAVE</button>
      </span>
    </div>
    <label 
      class="error" 
      :for="name"
      v-if="!valid">
        {{ getFirstValidationError() }}
    </label>
  </div>
</template>
<script>
import inputMixin from './inputMixin.js'

export default {
  name: 'RadioInput', 
  mixins: [inputMixin],
  props: {
    /*
    * CSS class that floats checkboxes horizontaly (radio-input-horizontal)
    */
    subType: {
      type: String,
      required: false,
      default: ''
    },
    /*
    * Array of radio button vales 
    */
    options: {
      type: Array,
      required: true,
      default: []
    },
    /*
    * Initilly selected value 
    */
    selected: {
      type: String,
      required: false,
      default: ''
    },
    /*
    * CSS class for radio 
    */
    css: {
      type: String,
      required: false,
      default: ''
    }
  },
  created: function () {
    this.input = this.selected
  }
}
</script>

<style>
.radio-input-horizontal {
  float:left;
  margin-right: 15px;
}
</style>