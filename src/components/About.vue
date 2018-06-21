<template>
  <div class="wrapper">
    <div class="header profile">
      <img src="@/assets/avatar.jpeg" alt="">

      <h3>Henster Bryan Pardo</h3>
      <h5>Web Frontend Developer</h5>

      <ul class="contact-info">
        <li>
          <i class="fa fa-envelope"></i>
          <span>devpardo@gmail.com</span>
        </li>
        <li>
          <i class="fa fa-map-pin"></i>
          <span>Makati City, Philippines</span>
        </li>
        <li>
          <i class="fa fa-phone"></i>
          <span>+639157887622</span>
        </li>
      </ul>

      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.profile
  border-bottom: 1px solid #e3e3e3
  img
    height: 150px
    width: 150px
    margin-right: 20px
    float: left

.contact-info
  margin-top: 10px
  font-size: 13px
  li
    vertical-align: middle
    line-height: 1.5em
    i
      display: inline-block
      width: 20px
      text-align: center
      line-height: 1.5em

</style>
