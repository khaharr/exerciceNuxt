<template>
    <div class="d-flex justify-content-evenly large px-3">  
        <div class="row row-cols-1 row-cols-md-auto">
            <div class="col mb-3 mr-3">
    <cardFichier v-for="elt in elts" :id="elt.id" :name="elt.name" :titre="elt.titre"/>
</div>
</div> 
</div>
</template>


<script setup>

const elts  =  await $fetch("/api/infoCard")

</script>

<style lang="scss" scoped>

</style>
