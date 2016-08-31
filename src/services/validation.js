import Validate from 'validate.js';

export function validate (validators, name, value, fieldsData) {
  var values = {},
      constraints = {},
      result = {}
  values[name] = value

  for (var validator in validators) {
    if (validators[validator].rule) {
      switch (validator) {
        case 'required':
          constraints[name] = {
            presence: true
          }
          break
        case 'email':
          constraints[name] = {
            presence: true,
            email: true
          }
          break
        case 'length':
          constraints[name] = {
            presence: true,
            length: {
              is: validators[validator].rule
            }
          }
          break
        case 'minlength':
          constraints[name] = {
            presence: true,
            length: {
              minimum: validators[validator].rule
            }
          }
          break
        case 'maxlength':
          constraints[name] = {
            presence: true,
            length: {
              maximum: validators[validator].rule
            }
          }
          break
        case 'numerical':
          constraints[name] = {
            numericality: {
              onlyInteger: validators[validator]['onlyInteger']
            }
          }
          if ('min' in validators[validator]) constraints[name]['numericality']['greaterThanOrEqualTo'] = validators[validator]['min']
          if ('max' in validators[validator]) constraints[name]['numericality']['lessThanOrEqualTo'] = validators[validator]['max']
          break
        case 'equals':
          values[validators[validator].rule] = fieldsData[validators[validator].rule].value
          constraints[name] = {
            equality: validators[validator].rule
          }
          break
      }
      result[validator] = Validate(values, constraints)
    }
    else {
      result[name] = null
    }
  }
  return result;
}