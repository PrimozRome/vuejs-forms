<template>
  <div>
    <template v-for="(rowValue, index) in value">
      <div 
        class="row" 
        v-for="(row, rowIndex) in rows">
        <div :class="colClass" v-for="(colClass, fieldName, colIndex) in row">
          <component 
            v-model="rowValue[fieldName]"
            :is="fields[fieldName].type"
            :name="fieldName"
            :sub-type="fields[fieldName].subType"
            :label="fields[fieldName].label"
            :placeholder="fields[fieldName].placeholder"
            :disabled="fields[fieldName].disabled"
            :readonly="fields[fieldName].readonly"
            :addon="fields[fieldName].addon"
            :validation="fields[fieldName].validation"
            :can-save="fields[fieldName].canSave"
            :rows="fields[fieldName].rows"
            :options="fields[fieldName].options"
            :css="fields[fieldName].css"
            :update-mode="updateMode"
            :fields-data="fieldsData"
            @validate="validate"
            @save="save">                
          </component>
        </div>
      </div>
      <div class="row m-b-10">
        <div class="col-xs-12">
          <a @click.prevent="remove(index)" class="m-l-5">
            <i class="fa fa-trash"></i> Remove address
          </a>
        </div>
      </div>
    </template>
    <div class="row m-b-5">
      <div class="col-xs-12">
        <a @click.prevent="add" class="m-l-5">
          <i class="fa fa-plus"></i> Add new address
        </a>
        <a @click.prevent="duplicate" class="m-l-10" v-if="value.length">
          <i class="fa fa-clone"></i> Duplicate address
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import inputMixin from './inputMixin.js'
import TextInput from './text.vue'
import TextareaInput from './textarea.vue'
import SelectInput from './select.vue'
import RadioInput from './radio.vue'
import CheckboxInput from './checkbox.vue'

export default {
  name: 'MultipleInput', 
  mixins: [inputMixin],
  components: {
    TextInput,
    TextareaInput,
    SelectInput,
    RadioInput,
    CheckboxInput
  },
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
    * List of fields 
    */
    fields: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    },
    /*
    * Rows layour for fields 
    */
    rows: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  },
  methods: {
    add (e) {
      this.value.push({
        address: '',
        post: '',
        city: '',
        country: ''
      })
    },
    duplicate (e) {
      let copy = Object.assign({}, this.value[this.value.length - 1]);
      this.value.push(copy)
    },
    remove (index, e) {
      this.value.splice(index)
    },
    save (fieldName, value) {
      var data = {}
      data[fieldName] = value
      console.log('This should be emitted to the form')
    },
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
</style>