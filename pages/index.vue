<template >
    <div class="d-flex justify-content-evenly">  
    <cardFichier v-for="elt in elts" :id="elt.id" :name="elt.name" :titre="elt.titre"/>
    </div> 
</template>


<script setup>

const elts  =  await $fetch("/api/infoCard")

</script>

<style lang="scss" scoped>

</style>
