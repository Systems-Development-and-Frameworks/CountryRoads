<template>
    <div class="item p-10">
        <header class="text-center">
            <img class="avatar rounded-full my-5 m-auto" :src="require(`~/assets/img/${item.avatar}`)" width="120" />
            <h3 class="text-3xl text-indigo-500 mb-4 font-bold capitalize">{{item.name}}</h3>
        </header>
        <p class="capitalize text-justify">{{item.description}}</p>
        <footer class="text-left">
        <button class="p-2.5 px-6 bg-white mt-6 text-black rounded shadow-md">MORE</button>
        </footer>
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
    .avatar {
        border: 10px solid #50e0ac;
    }
    &:first-child {
        .avatar {
             border-color:#e6cf1a;
        }
    }
    &:last-child {
        .avatar {
            border-color:#10deea;
        }
    }
}
</style>