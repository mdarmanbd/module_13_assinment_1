<script setup>
import { ref,reactive,onBeforeMount } from 'vue';
import axios from 'axios'

const posts = ref([]);

onBeforeMount(()=>
{
    fetch('https://dummyjson.com/posts?limit=20')
    .then(response => response.json())
    .then(data=>{
        posts.value=data.posts
    })

    // axios.get(`https://dummyjson.com/posts?limit=20`)
    // .then(res => {
    //     posts.value = res.posts
    // })
})

function LoadMore(){
        axios.get(`https://dummyjson.com/posts?limit=20&skip=20`)
        .then(res =>{
            posts.value = [...posts.value, ...res.data.posts]
        })

        console.log(...res.data.posts)
    }


</script>

<template>
    <article class="mb-10">
        <div v-for="(post,index) in posts" :key="post.id" class="">
           <router-link :to="`/posts/${post.id}`"><h1 class="text-xl mb-2">{{ post.title }}</h1></router-link> 
            <div>
               <router-link :to="`/posts/${post.id}`"><img :src="`https://source.unsplash.com/random/300x200?${post.id}`" :alt="post.title"></router-link> 
                <p>{{ post.body }}</p>
            </div>
            
        </div>
        <div v-if="posts.length > 0" class="">
                <button @click="LoadMore()" class="bg-green-300 p-1">Lode More</button>
        </div>
    </article>
</template>

<style scoped></style>