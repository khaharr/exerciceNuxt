<template>
    <div>
      <button @click="refresh">Refresh</button> 
      <!-- <pre> -->
        <!-- <p v-for="el in eltss.data" > {{el.id}}</p> -->
        <!-- {{ eltss }}
        </pre> -->
      <listeTableau :eltss="eltss.data"  />
    </div>
  </template>
  
  <script setup>
  const eltss = ref([])
 const data =   await useFetch('https://fakestoreapi.com/users');
 eltss.value = data  


 function refresh() {

  console.log(typeof eltss.value)
  console.log(eltss.value)
const a = eltss.value.data

a.pop()
    eltss.value.data = a

  }
  </script>