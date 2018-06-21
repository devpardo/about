<template>
  <div class="wrapper">
    <div class="header">
      <h1>Projects</h1>
    </div>

    <div class="container">

      <div v-for="(item, index) in projects" :key="index" class="card">
        <img :src="item.thumbnailUrl" alt="Avatar" style="width:100%">
        <div class="container">
          <h4>Jane Doe</h4>
          <ul>
            <li>afdsfadsf</li>
            <li>afdsfadsf</li>
            <li>afdsfadsf</li>
          </ul>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>

  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Download",
  data() {
    return {
      projects: [],
      errors: []
    }
  },
  created() {
    axios.get(`http://www.splashbase.co/api/v1/images/latest`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.projects = response.data.images
      console.log(this.projects);
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style lang="sass" scoped>
.card
  float: left
</style>
