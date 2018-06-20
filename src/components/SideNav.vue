<template>
  <div class="sidebar">
    <div class="avatar">
      <router-link to="/" class="animated infinite"><img class="" src="@/assets/logo.jpg" alt="" /></router-link>
    </div>
    <ul class="links">
      <li>
        <router-link to="/" class="">
          <i class="fa fa-home"></i>
        </router-link>
      </li>
      <li>
        <router-link to="about" class="">
          <i class="fa fa-address-card-o"></i>
        </router-link>
      </li>
      <li>
        <router-link to="download" class="">
          <i class="fa fa fa-briefcase"></i>
        </router-link>
      </li>
    </ul>

    <hr class="divider">

    <span class="small-title follow">FOLLOW ME</span>

    <ul class="links">
      <li v-for="(item, index) in socialLinks" :key="index">
        <a :href="item.url">
          <i class="fa" :class="item.fa">
            <span class="sr-only">{{ item.name }}</span>
          </i>
        </a>
      </li>

      <li>
        <a href="mailto://devpardo@gmail.com">
          <i class="fa fa-envelope">
            <span class="sr-only">Contact Me</span>
          </i>
        </a>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
    name: "SideNav",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        socialLinks: [
          {
            id: 0,
            name: "Facebook",
            url: "https://www.facebook.com/web.pardo",
            fa: "fa-facebook-square"
          },
          {
            id: 1,
            name: "Github",
            url: "https://github.com/devpardo",
            fa: "fa-github-square"
          },
          {
            id: 2,
            name: "Linkedin",
            url: "https://www.linkedin.com/in/henster-bryan-pardo-a09249119/",
            fa: "fa-linkedin-square"
          },
          {
            id: 3,
            name: "Stackoverflow",
            url: "https://stackoverflow.com/users/9929730/devpardo",
            fa: "fa-stack-overflow"
          }
        ]
      };
    },
    methods: {
      goTo(arg) {
        this.$router.push('/about')
      }
    }
}
</script>

<style lang="sass" scoped>
.sidebar
  height: 100%
  position: fixed
  width: 50px
  z-index: 1
  top: 0
  left: 0
  overflow-x: hidden
  background: #353535
  .avatar
    padding: 5px 0
    margin-bottom: 15px
    a
      display: block
      -webkit-animation-name: pulse
      animation-name: pulse
      img
        display: block
        height: 40px
        width: 40px
        margin: 0 auto
        border-radius: 5px
  .links
    li
      height: 40px
      border-bottom: 1px solid #545252
      a
        display: block
        width: 100%
        height: 100%
        color: #fff
        line-height: 40px
        text-align: center
        i
          font-size: 1.3em
        &.router-link-exact-active
          background: #4c4c4c

      &:last-child
        border-bottom: 0

    &.bottom
      background: red

  .divider
    border-style: dashed
    border-width: 0.5px
    border-color: #545454
    margin: 40px 0

  .small-title
    font-size: .5em
    display: block
    text-align: center

    &.follow
      color: #797979

</style>
