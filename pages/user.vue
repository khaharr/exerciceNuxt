<template>
    <div >
  <form class="px-4 py-3 ">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Email</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Mot de passe</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Mot de passe">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">clé d'activation</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="clé">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <BoutonValider></BoutonValider>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
</template>


<script>
export default{
    name : "user",
}
</script>

<style lang="scss">

</style>