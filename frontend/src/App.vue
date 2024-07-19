<template>
  <div id="app">
    <SearchBar @search="fetchWeather"/>
    <WeatherCard :weather="weather"/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import WeatherCard from './components/WeatherCard.vue'
import axios from 'axios'

export default {
  components: {
    SearchBar,
    WeatherCard
  },
  data() {
    return {
      weather: null
    }
  },
  methods: {
    async fetchWeather(city) {
      try {
        const response = await axios.get(`http://localhost:5000/api/weather`, { params: { city } })
        this.weather = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
