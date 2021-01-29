<template>
    <div class="item p-10">
        <header class="text-center">
            <img class="avatar rounded-full my-5 m-auto" :src="require(`~/assets/img/${item.avatar}`)" width="120" />
            <h3 class="text-3xl text-indigo-500 mb-4 font-bold capitalize">{{item.name}}</h3>
        </header>
        <p class="capitalize text-justify">{{item.description}}</p>
        <footer class="text-left">
        <button class="p-2.5 px-6 bg-white mt-6 text-black rounded shadow-md">
            <a :href="item.link" target="_blank">MORE</a>
        </button>
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
    header {
        .avatar {
            border: 10px solid #9fc1c3;
        }
        h3 {
            color: #2A2C39;
        }
    }
    footer {
        button {
            background: #2A2C39;
            color: #e6cf1a;
        }
    }
}
</style>