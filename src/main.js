import Vue from 'vue'
import App from './App.vue'

if(Array.prototype.equals)
  console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.")
Array.prototype.equals = function (array) {
  if (!array)
    return false

  if (this.length != array.length)
    return false

  for (var i = 0, l=this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i]))
        return false
    }           
    else if (this[i] != array[i]) { 
      return false
    }           
  }       
  return true
}
Object.defineProperty(Array.prototype, "equals", {enumerable: false})

new Vue({
  el: '#app',
  render: h => h(App)
})
