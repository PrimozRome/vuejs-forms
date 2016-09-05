<template>
  <div id="app">
    <section id="cover" v-if="false">
      <div class="col-group">
        <div class="col-12">
          <canvas id="scene" height="500" width="700"></canvas>
        </div>
      </div>
    </section>

    <div class="content">
      <div class="container-fluid container-fixed-lg">
        <input-form 
          :layout="layout"
          :fields="fields"
          @change="change"
          @save="save">
        </input-form>
      </div>
    </div>
  </div>
</template>

<script>
import InputForm from './components/form.vue'
import Columns from './assets/columns.js'

export default {
  name: 'App',

  components: {
    InputForm
  },

  data () {
    return {
      layout: Columns.layouts.general,
      fields: Columns.fields
    }
  },

  methods: {
    change (name, val) {
      // this.formFields[name].value = val;
    },
    save (e) {
      // console.log('Save pressed')
    }
  },

}
</script>

<style>
a {
  cursor: pointer;
}

.container-fluid { 
  padding-top: 40px 
}
/* 3D TEST*/
#cover {
  background-color: #1F3335;
  margin-bottom: 40px;
}
#cover canvas {
  display: block;
  width: 60%;
  margin: 0 auto;
}
.col-group {
  padding: 0 36px;
}
.col-group:after {
  display: table;
  clear: both;
  content: " ";
}
.col-group .col-group {
  padding: 0;
}
.col-group [class*="col-"] {
  min-height: 1px;
  box-sizing: border-box;
}
.col-group [class*="push-"],
.col-group [class*="pull-"] {
  position: relative;
}
#cover .col-12 {
  position: relative;
  background: radial-gradient(circle closest-side at 51%, #00757F 0%, #00757F 26%, #1f3335 140%);
}
.fullpage {
  overflow: hidden;
  #cover {
    height: 150%;

    .col-12 {
      position:relative;
      background: -webkit-radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);
      background: -moz-radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);
      background: -o-radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);
      background: -ms-radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);
      background: radial-gradient(circle closest-side at 50%, @color-base 0%, @color-base 26%, fade(@color-base-darker, 100) 100%);

      height: 1000px;
    }
  }
}
</style>
