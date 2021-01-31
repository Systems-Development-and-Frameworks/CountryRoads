<template>
  <header  class="container mx-auto p-5 font-bold lato">
    <nav class="flex-row flex justify-between">
      <div class="flex flex-row justify-between text-xl w-full">
        <a href="/" class="py-3 px-5 border-8 border-teal-600">
          LOGO
        </a>
        <button v-on:click="toggleNavbar" id="hamburgerbtn" class="block lg:hidden">MENU</button>
        <input type="checkbox" id="hamburgerCbx" class="hidden"/>
      </div>
      <ul class="hidden lg:block lg:flex lg:flex-row align-middle text-lg" id="mobileMenu">
        <li class="pr-5 py-3 px-5 border-8 border-transparent"><a href="#">Services</a></li>
        <li class="pr-5 py-3 px-5 border-8 border-transparent"><a href="#">Porfolio</a></li>
        <li class="pr-5 py-3 px-5 border-8 border-transparent"><a href="#">About</a></li>
        <li class="py-3 px-5 border-8 border-transparent"><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  methods: {
    toggleNavbar: function() {
      const checkBox = document.getElementById("hamburgerCbx");
      checkBox.checked = !checkBox.checked
      if(checkBox.checked) {
        document.getElementById("mobileMenu").classList.add("show");
        document.getElementById("mobileMenu").classList.add("active");
      } else {
        document.getElementById("mobileMenu").classList.remove("active");
      }
    }
  }
}
</script>

<style>
  #mobileMenu.show {
    position: fixed;
    top: 210px;
    right: 0;
    z-index: 9999;
    background: #9fc1c3;
    height: 100%;
    display: block;
    border-left: 15px solid #319795;
    width: 300px;
    margin: -100px 0 0 0;
    padding: 50px;
    padding-top: 125px;
    right: -100px;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

  #mobileMenu.show.active {
    transform: none;
    opacity: 1;
  }

</style>
