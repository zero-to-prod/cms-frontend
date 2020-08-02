import Vue from 'vue'
import { deserialize } from "deserialize-json-api";

Vue.mixin({
  methods: {
    deserialize(data){
      return deserialize(data)
    }
  }
})
