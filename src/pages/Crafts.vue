<template>
  <div class="page">
    <h1>Craft</h1>
    <h2>Liste Craft</h2>
    <ul id="liste-craft">
      <li v-for="craft in crafts" :key="craft.id">
        <router-link :to="{ path: '/craft/' + craft.id }">
          {{ craft.nom }}
          {{ craft.categorie }}
          {{ craft.type }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import sourceCrafts from '../../donnees/craft.json';
export default {
  name: 'Crafts',
  data() {
    return {
      crafts: sourceCrafts,
    };
  },
};
</script>

<style scoped></style>
