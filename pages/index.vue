<template>
    <!-- <div class="d-flex large px-5 cool">   -->
        <div class="d-flex  justify-content-between flex-wrap  cool">
 
    <cardFichier v-for="elt in elts" :id="elt.id" :name="elt.name" :titre="elt.titre"/>
</div>
<!-- </div> -->
</template>


<script setup>

const elts  =  await $fetch("/api/infoCard")

</script>

<style lang="scss" scoped>
.cool{
    background-color: rgb(241, 241, 241);
}
</style>
