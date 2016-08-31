<template>
  <div>
    <div 
      class="form-group form-group-default" 
      :class="{ 'input-group': inplaceSave || addon, 'inplace-save': inplaceSave, 'input-addon': addon, 'required': required, 'disabled': disabled, 'has-error': !valid }">
      <label>{{ label }}</label>
      <textarea
        :name="name"
        class="form-control textarea" 
        :class="{ 'has-error': !valid }"
        :rows="rows"
        :required="required" 
        :placeholder="placeholder" 
        :readonly="readonly"
        :disabled="disabled"
        @blur="blur"
        v-model="input">
      </textarea>
      <span 
        class="input-group-addon add-on" 
        v-if="addon">
        {{ addon }}
      </span>
      <span 
        class="input-group-addon button-addon button-addon-textarea" 
        v-if="inplaceSave"
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
  name: 'TextareaInput', 
  mixins: [inputMixin],
  props: {
    /*
    * Rows attribute to be added to textarea
    */
    rows: {
      type: Number,
      required: false,
      default: 4
    }
  }
}
</script>

<style>
.form-group-default textarea.form-control {
  height: 70px;
}
.button-addon-textarea {
  height: 80px;
}
</style>