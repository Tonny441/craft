<template>
  <div id="app">
    <router-link :to="{ name: 'accueil' }"> Accueil </router-link>
    |
    <router-link to="/crafts">Liste Crafts</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import Accueil from './pages/Accueil.vue';

export default {
  name: 'App',
  components: {
    Accueil,
  },
};
</script>

<style>
#app {
  text-align: center;

  margin-top: 50px;
}

.page {
  max-width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  color: #ffffff;
  font-size: 42px;
  text-align: center;
  margin-bottom: 30px;
}

#liste-craft {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  list-style: none;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
}

.liste-craft-item {
  background-color: #3a3a3a;
  border: 2px solid #1f1f1f;
  color: #ffffff;
  padding: 25px;
  text-decoration: none;
  width: 50%;
  max-width: 600px;
  text-align: center;
  border-radius: 8px;
  font-size: 22px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.liste-craft-item:hover {
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
}

body {
  background-color: #2e2e2e;
  color: #ffffff;

  margin: 0;
  padding: 0;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
}

.page {
  max-width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

h1 {
  color: #ffffff;
  font-size: 60px;
  margin-bottom: 20px;
}

h2 {
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 10px;
}

#html-vue-craft span {
  font-weight: bold;
  display: block;
  margin-top: 10px;
  color: #cccccc;
  font-size: 18px;
}

#html-vue-craft p {
  background-color: #3a3a3a;
  border: 2px solid #1f1f1f;
  padding: 12px;
  border-radius: 6px;
  margin: 5px 0 15px 0;
  font-size: 18px;
}

a.action {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 18px;
  background-color: #3a3a3a;
  border: 2px solid #1f1f1f;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 18px;
}

a.action:hover {
  background-color: #ffffff;
  color: #000000;
}
</style>
