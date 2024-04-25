<template>
  <div class="animationCard maxTaille">
    <!-- ce code sert a afficher une card avec images texte et l input de fichier  -->
    <div class=" d-flex align-items-start grid gap-5 mt-5">
      <div class="card mb-3 " style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="assets\img\login.webp" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"> {{ titre }}</h5>
              <!--condition longueur text -->
              <p v-if="name.length < 30 " class="card-text text-danger">
                <!-- sert a afficher le texte present dans la variable name -->
                Veuillez insérer plus de 30 caractères !
              </p>
              <p v-else> {{ name }}</p>

              <p class="card-text">
                <small class="text-body-secondary">il y a {{ id }} min </small>
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
          <button class="btn btn-outline-secondary" @click="myTest" type="button" id="inputGroupFileAddon04">Valider</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "cardFichier",
  props: ["id", "name","titre"],
  methods:{
    myTest: function() {
        alert("valide avec succés")
    }
}
};


</script>

<style lang="css" scoped>
.animationCard{
    transition: transform .3s ease-out;
  display: inline-block;
}
.animationCard:hover{
    transform: translateY(-10px);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.35);

}   
.maxTaille{
    height: 10px;
}
</style>
