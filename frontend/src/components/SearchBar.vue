<template>
  <div>
    <input v-model="city" @keyup.enter="search" placeholder="Enter city"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.city)
    }
  }
}
</script>
