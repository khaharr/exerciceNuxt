<template>
  <div v-for="(element) in elts" :key="element.id" class="animationCard maxTaille">
    <!-- ce code sert a afficher une card avec images texte et l input de fichier -->
    <div class="d-flex align-items-start grid gap-5">
      <div class="card" >
        <div class="row g-0">
          <div class="col-md-4"><img :src="element.image" class="img-fluid rounded-start" alt="..." /></div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ element.title }}</h5>
              <!--condition longueur text -->
              <p v-if="element.description.length<30" class="card-text text-danger">
                <!-- sert a afficher le texte present dans la variable name -->
                Veuillez insérer plus de 30 caractères !
              </p>
              <p v-else>{{ element.description }}</p>
              <p> categorie : {{ element.category }}</p>
              <p class="card-text">
                <small class="text-body-secondary">le prix est a {{ element.price }} €</small>
              </p>
            </div>
          </div>
        </div>
        <div class="input-group">
          <input
            type="file"
            class="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
          <BoutonValider></BoutonValider>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BoutonValider from './boutonValider.vue';

defineProps(['elts'])

</script>

<style lang="css" scoped>
.animationCard {
  transition: transform 0.3s ease-out;
  display: inline-block;
}
.animationCard:hover {
  transform: translateY(-10px);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.35);
}
.card{
  max-width: 540px
}
.maxTaille {
  margin-top: 50px;
}
</style>
