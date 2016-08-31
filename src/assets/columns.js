/*
* STATIC DATA FOR
* - rendering tables
* - rendering form layouts
* - form validation
*
* FORM TYPES
* - check component for props for each form type
*
* VALIDATION
* - required: true => required validation
* - email: true => email validation
*    length: 6 => string must be exactly 6 characters long
*    minlegth: 6 => string must be at list 6 characters long
*    maxlength: 6 => string must be max 6 characters long
* - numerical: true => numbers only
*     integer: true => integer only, required
*     min: 0 => minmum value
*     max: 100 => maximum value
* - date => TODO
*
* LAYOUT
* - 
**/

export default {
  groups: {
    basic: {
      name: 'Basic information',
      collapsed: false
    },
    contact: {
      name: 'Contact information',
      collapsed: true,
    },
    administration: {
      name: 'Administration data',
      collapsed: true
    }
  },
  fields: {
    firstname: {
      type: 'text',
      subType: 'text',
      label: 'Firstname',
      placeholder: 'Enter customer\'s firstname',
      readonly: false,
      disabled: false,
      value: '',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        },
        minlength: {
          rule: 4,
          error: 'Firstname must be at list 4 characters long.'
        },
      },
      layout: {
        group: 'basic',
        col: 'col-sm-6',
        row: 1
      }
    },
    lastname: {
      type: 'text',
      subType: 'text',
      label: 'Lastname',
      placeholder: 'Enter customer\'s lastname',
      readonly: false,
      disabled: false,
      value: '',
      validation: {
        required: {
          rule: true,
          error: 'Please enter lastname.'
        },
        minlength: {
          rule: 4,
          error: 'Lastname must be at list 4 characters long.'
        },
      },
      layout: {
        group: 'basic',
        col: 'col-sm-6',
        row: 1
      }
    },
    email: {
      type: 'text',
      subType: 'email',
      label: 'E-mail',
      placeholder: 'Enter customer\'s email',
      readonly: false,
      disabled: false,
      value: '',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        },
        email: {
          rule: true,
          error: 'Please enter valid email.'
        },
      },
      layout: {
        group: 'basic',
        col: 'col-sm-12',
        row: 2
      }
    },
    password: {
      type: 'text',
      subType: 'password',
      label: 'Password',
      placeholder: 'Enter password',
      readonly: false,
      disabled: false,
      value: '',
      validation: {
        required: {
          rule: true,
          error: 'Please enter password.'
        },
        minlength: {
          rule: 6,
          error: 'Password must be at list 6 characters long.'
        },
      },
      layout: {
        group: 'basic',
        col: 'col-sm-6',
        row: 3
      }
    },
    passwordConfirm: {
      type: 'text',
      subType: 'password',
      label: 'Confirm password',
      placeholder: 'Confirm password',
      readonly: false,
      disabled: false,
      value: '',
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
      },
      layout: {
        group: 'basic',
        col: 'col-sm-6',
        row: 3
      }
    },
    orderType: {
      type: 'radio',
      subType: '',
      label: 'Type',
      readonly: false,
      disabled: false,
      value: 'Poldi polenta',
      selected: 'Poldi polenta',
      options: ['Faker', 'Zeeeee', 'Poldi polenta', 'Hrabri misek', 'Batman', 'Looney tunes', 'Pisuka poldi'],
      css: 'radio-success',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        }
      },
      layout: {
        group: 'administration',
        col: 'col-sm-12',
        row: 1
      }
    },
    heroes: {
      type: 'checkbox',
      subType: '',
      label: 'Select heroes',
      readonly: false,
      disabled: false,
      value: ['Batman'],
      selected: ['Batman'],
      options: ['Hrabri misek', 'Batman', 'Looney tunes', 'Pisuka poldi'],
      css: 'check-success',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        }
      },
      layout: {
        group: 'contact',
        col: 'col-sm-12',
        row: 2
      }
    },
    countries: {
      type: 'select',
      label: 'Country',
      placeholder: 'Select country',
      readonly: false,
      disabled: false,
      value: 'Slovenia',
      addon: 'EUR',
      options: ['Austria', 'Croatia', 'Slovenia', 'Zimbabwe'],
      selected: 'Slovenia',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        }
      },
      layout: {
        group: 'contact',
        col: 'col-sm-12',
        row: 1
      }
    },
    currency: {
      type: 'text',
      subType: 'number',
      label: 'Currency',
      placeholder: 'Enter total amount',
      readonly: false,
      disabled: false,
      value: '',
      addon: 'EUR',
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
      },
      layout: {
        group: 'administration',
        col: 'col-sm-12',
        row: 3
      }
    },
    description: {
      type: 'textarea',
      label: 'Description',
      placeholder: 'Your notes',
      rows: 6,
      addon: 'EUR',
      readonly: false,
      disabled: false,
      value: '',
      validation: {
        required: {
          rule: true,
          error: 'Please enter firstname.'
        }
      },
      layout: {
        group: 'administration',
        col: 'col-sm-12',
        row: 4
      }
    },
    dateBirth: {
      type: 'text',
      subType: 'date',
      label: 'Birthday',
      placeholder: 'Enter customer\'s birth date',
      readonly: false,
      disabled: false,
      value: '',
      validation: {
        required: {
          rule: true,
          error: 'Please enter birth date.'
        },
        date: {
          rule: true,
          error: 'Please enter valid date.'
        }
      },
      layout: {
        group: 'administration',
        col: 'col-sm-12',
        row: 5
      }
    }
  }
}