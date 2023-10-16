//create home component
<script setup>
import {ref,reactive,onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'
import axios from 'axios'

const route = useRoute()
const routeId = route.params.id
const post = ref([])
const comments = ref([])


onBeforeMount(()=>
{
    // fetch(`https://dummyjson.com/posts/${routeId}`)
    // .then(response => response.json())
    // .then(data => {
    //     post.value = data
    // })

    axios.get(`https://dummyjson.com/posts/${routeId}`)
        .then(res =>{
            post.value = res.data
        })
    
    axios.get(`https://dummyjson.com/posts/${routeId}/comments`)
        .then(res => {
            console.log(res.data.comments)
            comments.value = res.data.comments
        })
       // console.log(comments.value)
    
})

</script>

<template>
    <h1 class="text-2xl mb-3">{{ post.title }}</h1>
    <img :src="`https://source.unsplash.com/random/300x200?${post.id}`" alt="">
    <p>
        {{ post.body }}
    </p>
    <div v-if="comments.length > 0" v-for="(comment,index) in comments" :key="comment.id">
        <p class="text-green-600 text-lg font-bold">comments {{ comment.id }}</p>
        <p><b>{{ comment.user.username }} </b> said : {{ comment.body }} </p>
    </div>
</template>

<style></style>