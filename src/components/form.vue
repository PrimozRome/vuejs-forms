<template>
  <div>
    <form @submit.prevent="submit" novalidate>
      <fieldset v-for="(fieldset, fieldsetKey, index) in fieldSets">        
        <legend>
          <button
            class="btn btn-success btn-xs btn-collapse"
            @click.prevent="toggleFieldset(index)">
              <i class="fa fa-plus" v-if="fieldSetsState[index]"></i>
              <i class="fa fa-minus" v-else></i>
          </button>
          {{ fieldset.name }}
        </legend>
        
        <div 
          class="row" 
          v-show="!fieldSetsState[index]"
          v-for="row in getMaxRowsForFieldset(fieldsetKey)">
          <div :class="field.layout.col" v-for="(field, fieldName, index) in getColsForRowInGroup(row, fieldsetKey)">
            <text-input 
              v-if="field.type === 'text'"
              :sub-type="field.subType"
              :name="fieldName"
              :label="field.label"
              :placeholder="field.placeholder"
              :value="field.value"
              :disabled="field.disabled"
              :readonly="field.readonly"
              :addon="field.addon"
              :validation="field.validation"
              :update-mode="updateMode"
              :fields-data="fieldsData"
              @change="change"
              @validate="validate"
              @save="inplaceSave">
            </text-input>
            
            <textarea-input 
              v-if="field.type === 'textarea'"
              :name="fieldName"
              :label="field.label"
              :placeholder="field.placeholder"
              :value="field.value"
              :rows="field.rows"
              :disabled="field.disabled"
              :readonly="field.readonly"
              :addon="field.addon"
              :validation="field.validation"
              :update-mode="updateMode"
              :fields-data="fieldsData"
              @change="change"
              @validate="validate"
              @save="inplaceSave">
            </textarea-input>

            <select-input
              v-if="field.type === 'select'"
              :name="fieldName"
              :label="field.label"
              :placeholder="field.placeholder"
              :value="field.value"
              :disabled="field.disabled"
              :readonly="field.readonly"
              :selected="field.selected"
              :options="field.options"
              :validation="field.validation"
              :update-mode="updateMode"
              :fields-data="fieldsData"
              @change="change"
              @validate="validate"
              @save="inplaceSave">
            </select-input>
          
            <radio-input
              v-if="field.type === 'radio'"
              :sub-type="field.subType"
              :name="fieldName"
              :label="field.label"
              :value="field.value"
              :disabled="field.disabled"
              :readonly="field.readonly"
              :selected="field.selected"
              :options="field.options"
              :css="field.css"
              :validation="field.validation"
              :update-mode="updateMode"
              :fields-data="fieldsData"
              @change="change"
              @validate="validate"
              @save="inplaceSave">
            </radio-input>

            <checkbox-input
              v-if="field.type === 'checkbox'"
              :sub-type="field.subType"
              :name="fieldName"
              :label="field.label"
              :value="field.value"
              :disabled="field.disabled"
              :readonly="field.readonly"
              :selected="field.selected"
              :options="field.options"
              :css="field.css"
              :validation="field.validation"
              :update-mode="updateMode"
              :fields-data="fieldsData"
              @change="change"
              @validate="validate"
              @save="inplaceSave">
            </checkbox-input>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import TextInput from './types/text.vue'
import TextareaInput from './types/textarea.vue'
import SelectInput from './types/select.vue'
import RadioInput from './types/radio.vue'
import CheckboxInput from './types/checkbox.vue'

export default {
  name: 'Form',

  components: {
    TextInput,
    TextareaInput,
    SelectInput,
    RadioInput,
    CheckboxInput
  },

  data: function () {
    return {
      updateMode: true,
      fieldsData: {},
      fieldSetsState: []
    }
  },

  computed: {
    valid: function () {
      var fieldsData = this.fieldsData
      return Object.keys(fieldsData).every(function (key) {
        return fieldsData[key]['valid']
      })
    },
    dirty: function () {
      return true
    },
    pristine: function () {
      return true
    }
  },

  props: {
    fieldSets: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    },
    formFields: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  },

  methods: {
    getMaxRowsForFieldset (fieldsetKey) {
      let max = 0,
          formFields = this.formFields
      for (var key in formFields) {
        if (formFields[key].hasOwnProperty('layout')) {
          if (formFields[key].layout.group === fieldsetKey) {
            if (formFields[key].layout.row > max) {
              max = formFields[key].layout.row
            }
          }
        }
      }
      return max
    },
    getColsForRowInGroup (row, fieldsetKey) {
      let formFields = this.formFields,
          cols = {}
      for (var key in formFields) {
        if (formFields[key].hasOwnProperty('layout')) {
          if (formFields[key].layout.group === fieldsetKey) {
            if (formFields[key].layout.row === row) {
              cols[key] = formFields[key]
            }
          }
        }
      }
      return cols
    },
    getDataFields () {
      for(var fieldName in this.formFields) {
        this.fieldsData[fieldName] = {
          valid: false,
          value: ''
        }
      }
    },
    getFieldSetState () {
      for(var fieldset in this.fieldSets)
        this.fieldSetsState.push(this.fieldSets[fieldset].collapsed)
    },
    toggleFieldset (index) {
      this.$set(this.fieldSetsState, index, !this.fieldSetsState[index])
    },
    getFildsetState(state, index) {
      return this.fieldSetsState[index]
    },
    change (fieldName, value) {
      this.fieldsData[fieldName]['value'] = value
      this.$emit('change', fieldName, value)
    },
    validate (fieldName, valid) {
      this.fieldsData[fieldName]['valid'] = valid
    },
    inplaceSave (fieldName, value) {
      var data = {}
      data[fieldName] = value
      console.log(data)
    },
    save (e) {
      this.$emit('save')
      var data = {}
      for(var fieldName in this.fieldsData) {
        data[fieldName] = this.fieldsData[fieldName]['value']
      }
      console.log(data)
    },
  },

  created: function () {
    this.getDataFields()
    this.getFieldSetState()
  }
}
</script>

<style>
.form-group.has-error {
  margin-bottom: 5px;
}

.btn-collapse {
  margin-bottom: 2px;
}

.button-addon {
  padding: 0;
  overflow: hidden;
}
.button-addon .btn-success {
  display: inline-block;
  padding: 6px 9px;
  width: 100%;
  height: 1000%;
  border-radius: 0px;
  line-height: 14px;
}

.input-group .radio, .input-group .checkbox {
  padding: 0 12px;
}
.input-group.required:after {
  right:62px;
}
.input-group.inplace-save.required:after {
  right:68px;
}
.input-group.inplace-save.input-addon.required:after {
  right:120px;
}
</style>
