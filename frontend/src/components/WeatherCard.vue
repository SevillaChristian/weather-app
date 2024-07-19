<template>
  <div v-if="weather">
    <h2>{{ weather.name }}</h2>
    <p>Temperature: {{ weather.main.temp }}°C</p>
    <p>Weather: {{ weather.weather[0].description }}</p>
    <!-- More details here -->
  </div>
</template>

<script>
export default {
  props: {
    weather: Object
  }
}
</script>
