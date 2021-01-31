<template>
  <header  class="container mx-auto p-5 font-bold lato">
    <nav class="flex-row flex justify-between">
      <div class="flex flex-row justify-between text-xl w-full">
        <a href="/" class="py-3 px-5 border-8 border-teal-600">
          LOGO
        </a>
        <button v-if="!show" @click="show = !show" class="block lg:hidden" id="menu-btn">MENU</button>
      </div>
      <ul class="hidden lg:flex lg:flex-row align-middle text-lg">
        <li v-for="(item, index) in menu" :key="index" class="pr-5 py-3 px-5 border-8 border-transparent"><a :href="item.link">{{item.text}}</a></li>
      </ul>
      <transition name="slide-fade">
        <div v-if="show" class="hamburger-menu-list block lg:hidden align-middle text-lg fixed top-0 right-0 z-50 h-screen p-12 m-0 text-center" >
          <button @click="show = !show" class="outline-none text-white py-2 px-5 border-4" id="hamburger-btn" >X</button>
          <ul>
            <li v-for="(item, index) in menu" :key="index" class="pr-5 py-3 px-5 border-8 border-transparent"><a :href="item.link">{{item.text}}</a></li>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    const link = '#'
    return {
      show: false,
      menu: [
          {text:'Services', link},
          {text:'Porfolio', link},
          {text:'About', link},
          {text:'Contact', link},
      ]
    }
  }
}
</script>
<style lang="scss">
#menu-btn:focus{
  outline: none;
  display: none;
}

#hamburger-btn {
  border: solid 3px #fff;
  &:focus{
    outline: none;
  }
}

.hamburger-menu-list {
  border-left: 15px solid #319795;
  width: 51vh;
  min-width: 150px;
  -webkit-font-smoothing: antialiased;
  background: #9fc1c3;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(500px);
  opacity: 0;
}
</style>
