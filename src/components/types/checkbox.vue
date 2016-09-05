<template>
  <div>
    <div 
      class="form-group form-group-default" 
      :class="{ 'input-group': inplaceSave || addon, 'inplace-save': inplaceSave, 'required': required, 'disabled': disabled, 'has-error': !valid }">
      <label>{{ label }}</label>
      <div class="checkbox" :class="css">
        <div :class="subType" v-for="(option, index) in options">
          <input 
            type="checkbox" 
            :id="id+'-'+index"
            :name="name"
            :value="option"
            :required="required" 
            :readonly="readonly"
            :disabled="disabled"
            @blur="blur"
            @change="onInput">
          <label :for="id+'-'+index">{{ option }}</label>
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
  name: 'CheckboxInput', 
  mixins: [inputMixin],
  data: function () {
    return {
      selectedValues: []
    }
  },
  props: {
    /*
    * Form field initial value, overriden from mixin because here can be array
    */
    value: {
      type: Array,
      required: false,
      default: function () {
        return []
      }
    },
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
      default: function () {
        return []
      }
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
  methods: {
    onInput (e) {
      let val = event.target.value,
          index = this.value.indexOf(val)
      if (index === -1)
        this.selectedValues.push(val)
      else
        this.selectedValues.splice(index, 1)
      this.$emit('input', this.selectedValues)
    }
  }
}
</script>

<style>
.radio-input-horizontal {
  float:left;
  margin-right: 15px;
}
</style>