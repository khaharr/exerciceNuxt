<template>
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">nom</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(element, index) in eltss" :key="element.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ element.username }}</td>
            <td> {{ element.name }}</td>
            <td>{{ element.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "listeTableau",
    props: {
      eltss: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>