<template>
  <section class="content">
    <section class="header-banner relative  py-56 bg-gray-900 h-64 px-0">
        <div class="wrapper max-w-4xl relative m-auto px-8 text-center z-10">
          <h5 class="lato leading-4 font-hairline px-8 thick-header-line uppercase tracking-wider mt-0 text-white inline-block relative">
            Systems Development <span class="decorative-span text-red-500 relative my-0 mx-3 leading-10 inline-block">and</span> Frameworks
          </h5>
          <p class="text-6xl text text-yellow-400 mb-2 montserrat font-bold uppercase">
            THE COUNTRY<br> ROADS
          </p>
        </div>
	  </section>
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
<style lang="scss">
.decorative-span{
  vertical-align: middle;
  &:before, &:after {
    background-color: #fff;
    bottom: 100%;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    right: 0;
  }
  &:after {
    top: 96%;
  }
}

.thick-header-line {
  &:before, 
  &:after {
    content: "";
    display: block;
    position: absolute;
    width:7rem;
    height: 4px;
    background-color: #fff;
    top:50%;
    margin-bottom: -4px;
  }
  &:before{
	  left: -7.5rem;
  }
  &:after{
	  right: -7.5rem;
  }
}

.lato{
  font-family: 'Lato'
}

.montserrat{
  font-family: 'Montserrat';
}

.wrapper{
	transform: translateY(-50%);
	top:50%;
}
</style>