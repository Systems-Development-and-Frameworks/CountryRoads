<template>
  <section class="content">
    <figure>
      <div class="py-10 px-12 text-purple-50 bg-gradient-to-r from-purple-800 to-purple-500 bg-cover bg-no-repeat bg-center">
        <h2 class="text-5xl font-bold text-white">THE COUNTRY<br/>ROADS</h2>
        <button class="p-2.5 px-6 bg-white mt-6 text-black rounded shadow-md">MORE</button>
      </div>
    </figure>
    <figure>
        <div class="grid grid-cols-3">
            <Item v-for="(item, index) in items" :key="index" :item="item" />
        </div>
    </figure>
  </section>
</template>

<script>
export default {
  data() {
    const description = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;

    return {
      items: [
            {avatar:'an_avatar.png', name:'An', description, link: 'https://github.com/yiimnta'},
            {avatar:'andrej_avatar.png', name:'Andrej', description, link: 'https://github.com/aloparev'},
            {avatar:'ilona_avatar.png', name:'Ilona', description, link: 'https://github.com/ilonae'}
      ]
    }
  }
}
</script>