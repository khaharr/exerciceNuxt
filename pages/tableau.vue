<template>
    <div>
      <listeTableau :eltss="eltss" />
    </div>
  </template>
  
  <script setup>
  const eltss = await $fetch("/api/logs");
  </script>