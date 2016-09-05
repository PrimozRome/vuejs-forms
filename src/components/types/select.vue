<template>
  <div>
    <div 
      class="form-group form-group-default input-select overflow-visible" 
      :class="{ 'input-group': inplaceSave || addon, 'inplace-save': inplaceSave, 'input-addon': addon, 'required': required, 'disabled': disabled, 'has-error': !valid }">
      <label>{{ label }}</label>
      <div class="select2-container select2-container-multi full-width">
        <multiselect
          :name="name"
          :options="options"
          :selected="value"
          class="form-control textarea" 
          :class="{ 'has-error': !valid }"
          :placeholder="placeholder" 
          :readonly="readonly"
          :disabled="disabled"
          @update="updateSelected"
          @close="blur">
        </multiselect>
      </div>
      <span 
        class="input-group-addon add-on" 
        v-if="addon">
        {{ addon }}
      </span>
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
import Multiselect from 'vue-multiselect'

export default {
  name: 'SelectInput', 
  mixins: [inputMixin],
  components: {
    Multiselect
  },
  props: {
    /*
    * Array of select options
    */
    options: {
      type: Array,
      required: true,
      default: []
    }
  },
  methods: {
    updateSelected (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style>
.overflow-visible {
  overflow: visible;
}

.input-select {
  padding-left: 0px;
  padding-right: 0px;
}

.input-select label {
  padding-left: 12px;
}

.multiselect__tags {
  border: none !important;
  padding: 2px 30px 0 0 !important;
  min-height: inherit !important;
  background: none !important;
}

.multiselect__option--highlight,
.multiselect__option--highlight:after {
  background-color: #10CFBD !important;
}

.multiselect__tag {
  background-color: #10CFBD !important;
}

.multiselect__tag-icon:focus, 
.multiselect__tag-icon:hover{
  background-color: #10CFBD !important;
}

.multiselect {
  min-height: inherit !important;
}

.multiselect__select {
  right: 0 !important;
  top: -9px !important;
  width: 35px !important;
}

.multiselect__spinner {
  right: 8px !important;
  top: -10px !important;
}

.multiselect__input, 
.multiselect__single {
  padding-left: 12px !important;
  margin-bottom: 0 !important;
  color: rgb(44, 44, 44);
  font-size: 14px;
  font-family: Arial, sans-serif;
  background: none !important;
}

.multiselect__content {
  margin-top: 6px !important;
}
  
*::-webkit-input-placeholder {
  color: #C8C8C8;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

*:-moz-placeholder {
  /* FF 4-18 */
  color: #C8C8C8;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

*::-moz-placeholder {
  /* FF 19+ */
  color: #C8C8C8;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

*:-ms-input-placeholder {
  /* IE 10+ */
  color: #C8C8C8;
  font-family: Arial, sans-serif;
  font-size: 14px;
}
</style>