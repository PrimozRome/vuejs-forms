/*
* STATIC DATA FOR
* - rendering tables
* - rendering form layouts
* - form validation
*
* FIELD TYPES
* - check component for props for each form type
*
* FIELD VALIDATION
* - required: true => required validation
* - email: true => email validation
*    length: 6 => '' must be exactly 6 characters long
*    minlegth: 6 => '' must be at list 6 characters long
*    maxlength: 6 => '' must be max 6 characters long
* - numerical: true => numbers only
*     integer: true => integer only, required
*     min: 0 => minmum value
*     max: 100 => maximum value
* - date => TODO
*
* FORM LAYOUTs
* - layouts: set of different defined layouts
* - name: Filedset display name
* - collapsed: if this fieldset is collaped
* - rows: definitiion of field by row and column class
*/

export default {
  layouts: {
    general: {
      basic: {
        name: 'Basic information',
        collapsed: true,
        rows: [
          {
            firstname: 'col-sm-6',
            lastname: 'col-sm-6'
          },
          {
            email: 'col-xs-12'
          },
          {
            password: 'col-sm-6',
            passwordConfirm: 'col-sm-6'
          }
        ]
      },
      contact: {
        name: 'Contact information',
        collapsed: false,
        rows: [
          {
            addresses: 'col-xs-12',
          }
        ]
      },
      administration: {
        name: 'Administration data',
        collapsed: true,
        rows: [
          {
            orderType: 'col-xs-12'
          },
          {
            heroes: 'col-xs-12'
          },
          {
            currency: 'col-xs-12'
          },
          {
            description: 'col-xs-12'
          },
          {
            dateBirth: 'col-xs-12'
          }
        ]
      }
    }
  },
  fields: {
    firstname: {
      type: 'TextInput',
      subtype: 'TextInput',
      label: 'Firstname',
      placeholder: 'Enter customer\'s firstname',
      readonly: false,
      disabled: false,
      dataType: '',
      save: 'profiles.firstname',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        },
        minlength: {
          rule: 4,
          error: 'Firstname must be at list 4 characters long.'
        }
      }
    },
    lastname: {
      type: 'TextInput',
      subtype: 'TextInput',
      label: 'Lastname',
      placeholder: 'Enter customer\'s lastname',
      readonly: false,
      disabled: false,
      dataType: '',
      save: 'profiles.lastname',
      validation: {
        required: {
          rule: true,
          error: 'Please enter lastname.'
        }
      }
    },
    email: {
      type: 'TextInput',
      subType: 'email',
      label: 'E-mail',
      placeholder: 'Enter customer\'s email',
      readonly: false,
      disabled: false,
      dataType: '',
      save: 'users.email',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        },
        email: {
          rule: true,
          error: 'Please enter valid email.'
        },
      }
    },
    password: {
      type: 'TextInput',
      subType: 'password',
      label: 'Password',
      placeholder: 'Enter password',
      readonly: false,
      disabled: false,
      dataType: '',
      canSave: false,
      save: 'users.password',
      validation: {
        required: {
          rule: true,
          error: 'Please enter password.'
        },
        minlength: {
          rule: 6,
          error: 'Password must be at list 6 characters long.'
        },
      }
    },
    passwordConfirm: {
      type: 'TextInput',
      subType: 'password',
      label: 'Confirm password',
      placeholder: 'Confirm password',
      readonly: false,
      disabled: false,
      dataType: '',
      save: 'users.password_confirm',
      validation: {
        required: {
          rule: true,
          error: 'Please enter password.'
        },
        minlength: {
          rule: 6,
          error: 'Password must be at list 6 characters long.'
        },
        equals: {
          rule: 'password',
          error: 'Passwords do not match.'
        }
      }
    },
    addresses: {
      type: 'MultipleInput',
      label: 'Addresses',
      save: 'addresses',
      dataType: [],
      rows: [
        {
          address: 'col-lg-4 col-sm-8',
          post: 'col-lg-2 col-sm-4',
          city: 'col-lg-3 col-sm-6',
          country: 'col-lg-3 col-sm-6'
        }
      ],
      validation: {
        required: {
          rule: true,
          error: 'Please enter address.'
        }
      }
    },
    address: {
      type: 'TextInput',
      subtype: 'TextInput',
      label: 'Address',
      placeholder: 'Enter address',
      readonly: false,
      disabled: false,
      dataType: '',
      save: 'addresses.address',
      validation: {
        required: {
          rule: true,
          error: 'Please enter address.'
        }
      }
    },
    post: {
      type: 'TextInput',
      subtype: 'TextInput',
      label: 'Post',
      placeholder: 'Enter post number',
      readonly: false,
      disabled: false,
      dataType: '',
      save: 'addresses.post',
      validation: {
        required: {
          rule: true,
          error: 'Please enter post.'
        },
        numerical: {
          rule: true,
          onlyInteger: true,
          min: 1000,
          max: 9999,
          error: 'Please enter valid post number.'
        },
      }
    },
    city: {
      type: 'TextInput',
      subtype: 'TextInput',
      label: 'City',
      placeholder: 'Enter city number',
      readonly: false,
      disabled: false,
      dataType: '',
      save: 'addresses.city',
      validation: {
        required: {
          rule: true,
          error: 'Please enter city.'
        }
      }
    },
    country: {
      type: 'SelectInput',
      label: 'Country',
      placeholder: 'Select country',
      readonly: false,
      disabled: false,
      dataType: '',
      options: ['Austria', 'Croatia', 'Slovenia', 'Zimbabwe'],
      save: 'addresses.country_id',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        }
      }
    },
    orderType: {
      type: 'RadioInput',
      subType: '',
      label: 'Type',
      readonly: false,
      disabled: false,
      dataType: '',
      options: ['Faker', 'Zeeeee', 'Poldi polenta', 'Hrabri misek', 'Batman', 'Looney tunes', 'Pisuka poldi'],
      css: 'radio-success',
      save: 'misc.order_type',
      validation: {
        required: {
          rule: true,
          error: 'Please select order type.'
        }
      }
    },
    heroes: {
      type: 'CheckboxInput',
      subType: '',
      label: 'Select heroes',
      readonly: false,
      disabled: false,
      dataType: [],
      options: ['Hrabri misek', 'Batman', 'Looney tunes', 'Pisuka poldi'],
      css: 'check-success',
      save: 'misc.heroes',
      validation: {
        required: {
          rule: true,
          error: 'Please pick your heroes.'
        }
      }
    },
    currency: {
      type: 'TextInput',
      subType: 'number',
      label: 'Currency',
      placeholder: 'Enter total amount',
      readonly: false,
      disabled: false,
      dataType: '',
      addon: 'EUR',
      save: 'misc.currency',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        },
        numerical: {
          rule: true,
          onlyInteger: true,
          min: 5,
          max: 100,
          error: 'Please enter valid currency.'
        },
      }
    },
    description: {
      type: 'TextareaInput',
      label: 'Description',
      placeholder: 'Your notes',
      rows: 6,
      readonly: false,
      disabled: false,
      dataType: '',
      save: 'misc.description',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        }
      }
    },
    dateBirth: {
      type: 'TextInput',
      subType: 'date',
      label: 'Birthday',
      placeholder: 'Enter customer\'s birth date',
      readonly: false,
      disabled: false,
      dataType: '',
      save: 'misc.employments',
      validation: {
        required: {
          rule: true,
          error: 'Please enter birth date.'
        },
        date: {
          rule: true,
          error: 'Please enter valid date.'
        }
      }
    }
  }
}