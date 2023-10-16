<script setup>
import {authStore} from './store/store'
const auth = authStore
</script>

<template>
  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl justify-between">
    <h1>A Wonderful Blog (<span>{{ auth.user?.username }}</span>)</h1>
    <p>
        <button v-if="auth.isAuthenticated" class="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded">
          <span @click="auth.logout">Log out</span>
        </button>
    </p>
  </header>
  <section class="flex">
    <aside class="w-[450px] bg-black ">
      <router-view name="LeftSideBar"></router-view>
    </aside>
    <main class="w-full min-h-screen p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
</template>

<style scoped></style>