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
            <th >{{ index + 1 }}</th>
            <td>{{ element.username }}</td>
            <td> {{ element.name.firstname }}  {{ element.name.lastname }}  </td>
            <td>{{ element.email }}</td>
          </tr> 
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>

defineProps(['eltss'])

  </script>
  
  <style lang="scss" scoped>
  
  </style>