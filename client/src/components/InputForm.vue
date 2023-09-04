<template>
  <form @submit.prevent="onSubmit">
    <input v-model="value" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { socket } from '../socket'

export default {
  name: 'InputForm',

  data () {
    return {
      value: ''
    }
  },

  methods: {
    onSubmit () {
      socket.emit('new-message', this.value)
      this.value = ''
    }
  }
}
</script>
