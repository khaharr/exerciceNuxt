<template>
  <div class="d-flex flex-wrap cool ">
    <cardFichier :elts="elts.data"  />
  </div>
  <button @click="refresh">RESFRESH</button>
  <!-- </div> -->
</template>

<script  setup>

const elts = ref([])
 const data =   await useFetch('https://fakestoreapi.com/products');
 elts.value = data  


 function refresh() {

console.log(typeof elts.value)
console.log(elts.value)
const a = elts.value.data

a.pop()
  elts.value.data = a

}
</script>

<style lang="css" scoped></style>
