<template>
  <div class="">
    <h1>Craft</h1>
    <h2>le craft</h2>
    <div v-for="craft" class="page">
      <h3>{{ craft.nom }}</h3>
      <span>categorie</span>
      <p>{{ craft.categorie }}</p>
      <span>type</span>
      <p>{{ craft.type }}</p>
      <span>artos</span>
      <p>{{ craft.artos }}</p>
      <span>materiaux</span>
      <p>{{ craft.materiaux }}</p>
      <span>tier</span>
      <p>{{ craft.tier }}</p>
      <span>enchentement</span>
      <p>{{ craft.enchentement }}</p>
      <span>sort</span>
      <p>{{ craft.sort }}</p>
      <span>attack</span>
      <p>{{ craft.attack }}</p>
      <span>crafter</span>
      <p>{{ craft.crafter }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue';
import crafts from '../../donnees/craft.json';
import { useRoute } from 'vue-router';
export default {
  setup() {},
  name: 'Craft',
  data() {
    return {
      craft: this.craft,
    };
  },
  created() {
    const route = useRoute();
    const id = route.params.id;
    //console.log(id);
    //console.log(oiseaux);
    this.craft = crafts.find((item) => {
      return Number(item.id) == Number(id);
    });
    console.log(this.craft);
  },
};
</script>

<style scoped></style>
