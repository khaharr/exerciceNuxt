<!-- affiche la page avec les differents composant -->
<template>
    <div>
        <AppHeader/>
        <NuxtPage/>
        <AppFooter/>
    </div>
</template>

<script >
import AppHeader from '../components/inc/AppHeader.vue';
import AppFooter from '../components/inc/AppFooter.vue';

export default{
    name: 'default',
    components:{
        AppHeader,
        AppFooter,
    }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>