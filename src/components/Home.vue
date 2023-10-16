<script setup>
import{ref,reactive,computed,watch} from 'vue'

const election = ref(false)
const voting = ref(false)
const numberOfAge = ref(0)

const user = ref({
    name:'jonh doe',
    birthDate: '2010',
})
const birthOfAge = computed(()=>{
    const currentDate = new Date().getFullYear()
    const todayDate = user.value.birthDate
    return ( currentDate - todayDate)
})

const birthOfYear = computed(() => {
        const currentDate = new Date().getFullYear()
        if(birthOfAge.value>= 18){
            election.value = true
        }else{
            election.value = false
        }
        return (currentDate - birthOfAge.value)
})


watch(numberOfAge,(parameter)=>{
    console.log(parameter)
    if(parameter>=18){
        voting.value = true
    }else{
        voting.value = false
    }
})


</script>
<template>
    <div class="bg-slate-50 h-screen w-full">
        <div class="px-5 py-3 flex gap-5">
            <div class="w-1/5">
                <img src="../assets/photo.jpg" class="w-full">
                <p v-if="voting == true" class="text-green-600">you are selected for votting</p>
                <p v-if="voting == false" class="text-red-600">you are not selected for votting</p>
            </div>
            <div class="w-full pl-5">
                <div class="">
                    <h1 class="text-xl font-semibold text-blue-950 capitalize">profile details</h1>
                    <div class="mt-3">
                        <label class="text-base font-medium text-blue-900 capitalize ">name: {{ user.name }} </label>
                    </div>
                    <div class="mt-3">
                        <p class="text-base text-green-600 font-normal">birth of year:{{ birthOfYear }} </p>
                    </div>
                    <div class="mt-3">
                        <p class="text-base text-green-600 font-normal">age: {{ birthOfAge }}</p>
                    </div>
                    <div v-if="election == true">
                        <p class="text-green-600">you are select for vote</p>
                    </div>
                    <div v-if="election == false">
                        <p class="text-red-500">you are not select for vote</p>
                    </div>
                </div>
                <div>
                    <label>write your age : </label>
                    <input type="number" v-model="numberOfAge" class="border border-green-700 outline-0 px-1">
                </div>
                
            </div>
        </div>
    </div>
</template>

<style></style>