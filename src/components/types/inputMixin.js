import { validate } from '../../services/validation.js';

export default {
  data: function () {
    return {
      input: '',
      inputValidation: {},
      touched: false
    }
  },
  props: {
    /*
    * Input name attribute
    */
    name: {
      type: String,
      required: true
    },
    /*
    * Form field label text
    */
    label: {
      type: String,
      required: true,
      default: 'Label'
    },
    /*
    * Form field placeholder text
    */
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    /*
    * Form field should be readonly
    */
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    /*
    * Form field should be disabled
    */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    /*
    * Form field initial value
    */
    value: {
      type: String,
      required: false,
      default: ''
    },
    /*
    * Form field should have an addon
    */
    addon: {
      type: String,
      required: false,
      default: ''
    },
    /*
    * Form field's validation rules
    * See App.vue for available rules
    */
    validation: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    },
    /*
    * Is form field in updateMode?
    */
    updateMode: {
      type: Boolean,
      required: true,
      default: false
    },
    /*
    * Form fields data
    */
    fieldsData: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    valid: function () {
      var validation = this.inputValidation
      return Object.keys(validation).every(function (key) {
        return (typeof validation[key] === 'undefined')
      })
    },
    dirty: function () {
      if (this.input.constructor === Array)
        return !this.value.equals(this.input)
      else
        return this.value !== this.input
    },
    pristine: function () {
      if (this.input.constructor === Array)
        return this.value.equals(this.input)
      else
        return this.value === this.input
    },
    required: function () {
      return ('required' in this.validation) ? this.validation.required : false
    },
    inplaceSave: function () {
      return (this.updateMode && this.dirty && this.valid)
    }
  },
  created: function () {
    this.input = this.value
  },
  watch: {
    'input': function(val, oldVal) {
      this.$emit('change', this.name, this.input)
      this.validate()
    }
  },
  methods: {
    blur (e) {
      this.validate()
      this.touched = true
    },
    getFirstValidationError () {
      for (var validator in this.inputValidation) {
        if (this.inputValidation[validator]) return this.inputValidation[validator][this.name][0]
      }
    },
    validate () {
      this.inputValidation = validate(this.validation, this.name, this.input, this.fieldsData)
      this.$emit('validate', this.name, this.valid)
    },
    save (e) {
      this.$emit('save', this.name, this.input)
    }
  }
}