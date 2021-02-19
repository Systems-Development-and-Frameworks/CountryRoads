<template>
    <div class="item p-10 grid grid-cols-4 lg:grid-cols-1">
        <header class="col-span-1">
            <img class="avatar rounded-full my-5 m-auto w-32" :src="require(`~/assets/img/${item.avatar}`)"  />
        </header>
        <div class="col-span-3 px-10 lg:px-5">
            <h3 class="text-3xl text-left lg:text-center text-gray-900 mb-0 lg:m-b4 font-bold capitalize">{{item.name}}</h3>
            <p class="capitalize text-justify">{{item.description}}</p>
            <button class="py-2 px-6 bg-gray-900 text-yellow-400 mt-6 text-black rounded shadow-md">
                <a :href="item.link" target="_blank">MORE</a>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.item {
    header {
        .avatar {
            border: 10px solid #9fc1c3;
        }
    }
}
</style>