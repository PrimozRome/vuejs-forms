<template>
  <div>
    <div 
      class="form-group form-group-default" 
      :class="{ 'input-group': inplaceSave || addon, 'inplace-save': inplaceSave, 'input-addon': addon, 'required': required, 'disabled': disabled, 'has-error': !valid }">
      <label :for="id">{{ label }}</label>
      <input 
        :id="id"
        :name="name"
        :value="value"
        :type="subType" 
        class="form-control" 
        :class="{ 'has-error': !valid }"
        :required="required" 
        :placeholder="placeholder" 
        :readonly="readonly"
        :disabled="disabled"
        @blur="blur"
        @input="onInput">
      <span 
        v-if="addon"
        class="input-group-addon add-on">
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

export default {
  name: 'TextInput', 
  mixins: [inputMixin],
  props: {
    /*
    * Text field type option. Supported: text,, email, numeric, date
    */
    subType: {
      type: String,
      required: true,
      default: 'text'
    }
  }
}
</script>

<style>
</style>