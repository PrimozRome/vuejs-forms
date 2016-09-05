<template>
  <form @submit.prevent="submit" novalidate>
    <fieldset v-for="(fieldset, fieldsetKey, index) in layout">        
      <legend>
        <button
          class="btn btn-success btn-xs btn-collapse"
          @click.prevent="toggleFieldset(index)">
            <i class="fa fa-plus" v-if="layoutState[index]"></i>
            <i class="fa fa-minus" v-else></i>
        </button>
        {{ fieldset.name }}
      </legend>
      
      <div v-show="!layoutState[index]">
        <div 
          class="row" 
          v-for="(row, index) in fieldset.rows">
          <div :class="colClass" v-for="(colClass, fieldName, index) in row">
            <component 
              v-model="fieldsData[fieldName].value"
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
              :options="fields[fieldName].options"
              :css="fields[fieldName].css"
              :rows="fields[fieldName].rows"
              :fields="fields"
              :fields-data="fieldsData"
              :update-mode="updateMode"
              @validate="validate"
              @save="inplaceSave">                
            </component>
          </div>
        </div>
      </div>
    </fieldset>
    <button class="btn btn-primary" type="submit" @click.prevent="save">Create a new user</button>
  </form>
</template>

<script>
import Vue from 'vue'
import TextInput from './types/text.vue'
import TextareaInput from './types/textarea.vue'
import SelectInput from './types/select.vue'
import RadioInput from './types/radio.vue'
import CheckboxInput from './types/checkbox.vue'
import MultipleInput from './types/multiple.vue'

export default {
  name: 'Form',

  components: {
    TextInput,
    TextareaInput,
    SelectInput,
    RadioInput,
    CheckboxInput,
    MultipleInput
  },

  data: function () {
    return {
      updateMode: true,
      fieldsData: {},
      layoutState: []
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
    /* Form fields layout */
    layout: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    },
    /* Form fields */
    fields: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  },

  methods: {
    getDataFields () {
      let fields = this.fields
      for(var fieldName in this.fields) {
        this.$set(this.fieldsData, fieldName, {
          valid: false,
          value: (fields[fieldName].dataType.constructor === Array) ? [] : ''
        })
      }
    },
    getlayoutState () {
      for(var fieldset in this.layout)
        this.layoutState.push(this.layout[fieldset].collapsed)
    },
    toggleFieldset (index) {
      this.$set(this.layoutState, index, !this.layoutState[index])
    },
    getFildsetState(state, index) {
      return this.layoutState[index]
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
      let data = {}
      for (var fieldName in this.fieldsData) {
        let key = this.fields[fieldName].save
        let value = this.fieldsData[fieldName]['value']
        this.stringToObj(key, value, data)
      }
      this.$emit('save')
      console.log(data)
    },
    stringToObj (key, value, obj) {
      var parts = key.split("."), part
      var last = parts.pop()
      while(part = parts.shift()) {
        if( typeof obj[part] != "object") obj[part] = {}
        obj = obj[part]
      }
      obj[last] = value
    },
    fetchData () {
      let fieldsData = this.fieldsData
      setTimeout(function () {
        for(var fieldName in fieldsData) {
          let val = (this.fieldsData[fieldName].value.constructor === Array) ? ['Batman'] : 'Juhuhuhu'
          this.$set(fieldsData[fieldName], 'value', val)
        }
      }.bind(this), 5000)
    }
  },

  created: function () {
    this.getDataFields()
    this.getlayoutState()
    // this.fetchData()
  }
}
</script>

<style>
/* Change the white to any color ;) */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus {
  background-color: #FFFFFF !important;
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
}
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

.panel.panel-form {
  background-color: rgba(255, 255, 255, 0.6);
  margin-bottom: -1px;
}
</style>
