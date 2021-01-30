<template>
  <div class="container mx-auto p-5">
    <nav class="flex-row md:flex md:justify-between">

      <div class="flex flex-row justify-between">
        <a href="/">
          LOGO
<!--          <img src="/favicon.ico" alt="logo image">-->
        </a>
        <button v-on:click="toggleNavbar" id="hamburgerbtn" class="md:hidden">MENU</button>
      </div>

      <ul v-bind:class="{active: showMenu}" class="hidden md:flex md:flex-row align-middle" id="mobileMenu">
        <li class="pr-5"><a href="#">Services</a></li>
        <li class="pr-5"><a href="#">Porfolio</a></li>
        <li class="pr-5"><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style>
  .active{
    display: block;
  }
</style>
