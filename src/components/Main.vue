<template>
  <div class="wrapper">

    <div class="headliner">
      <h1>About Bryan</h1>
      <h3>Javascript and Frontend Development</h3>
      <p>
        I have many years experience as a front-end developer, creating responsive websites of a high quality.
        In my past experience as a freelancer and working for agencies I have also obtained an eye for detail and appreciation for design,
        knowledge of integrating with and developing server-side, as well as knowing how to efficiently project manage and work with clients
        and colleagues successfully.
      </p>

      <div class="toolbox">
        <h4>Technical Toolbox</h4>
        <ul class="list-inline folio-icons">
          <li v-for="(item, index) in icons" :key="index" class="icon">
            <img :src="`./static/icons/${item.name}.jpg`" alt="">
            <span>{{item.name | capitalizeFirst }}</span>
          </li>
        </ul>
      </div>

      <div class="view-more btn-group">
        <router-link to="about">View Resume</router-link>
        <a href="./static/HensterBryanPardo_FrontendDeveloper.pdf" download>Download CV</a>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      icons: [
        {
          id: 0,
          name: "javascript"
        },
        {
          id: 1,
          name: "typescript"
        },
        {
          id: 2,
          name: "html5"
        },
        {
          id: 3,
          name: "css3"
        },
        {
          id: 4,
          name: "vuejs"
        },
        {
          id: 5,
          name: "angular"
        },
        {
          id: 6,
          name: "photoshop"
        },
        {
          id: 7,
          name: "sketch"
        },
        {
          id: 8,
          name: "babel"
        },
        {
          id: 9,
          name: "bootstrap"
        },
        {
          id: 10,
          name: "sass"
        },
        {
          id: 11,
          name: "jquery"
        },
        {
          id: 12,
          name: "webpack"
        },
        {
          id: 13,
          name: "rest"
        }
      ]
    };
  },
  filters: {
    capitalizeFirst(arg) {
      return arg.charAt(0).toUpperCase() + arg.slice(1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.toolbox
  margin-top: 20px
  margin-bottom: 20px
</style>
