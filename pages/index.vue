<template>
  <div class="d-flex flex-wrap cool">
    <div class="col-4" v-for="elt in elts" :key="elt.id">
      <cardFichier
        :id="elt.id"
        :title="elt.title"
        :price="elt.price"
        :description="elt.description"
        :category="elt.category"
        :image="elt.image"
        :name="elt.name"
      />
    </div>
  </div>
</template>
<script setup>
const elts = await $fetch("/api/info");
</script>
<style lang="scss" scoped>
.cool {
  background-color: rgb(241, 241, 241);
}

</style>
