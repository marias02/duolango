<!-- <template>
  <DuoLife v-bind:duoNumber="5"/>
  <DuoChapter duoChapterName="English" />
  <DuoLesson duoText="this is lesson #1"/>
  <DuoLesson duoText="this is lesson #2"/>
  <DuoLesson duoText="this is lesson #3"/>
  <DuoLesson duoText="this is lesson #4"/>
  <DuoLesson duoText="this is lesson #5"/>
  <DuoLesson duoText="this is lesson #6"/>
  <DuoLesson duoText="this is lesson #7"/>
  <DuoLesson duoText="this is lesson #8"/>
  <DuoLesson duoText="this is lesson #9"/>
  <DuoLesson duoText="this is lesson #10"/>
</template>

<script>
import DuoLesson from './components/DuoLesson.vue'
import DuoLife from './components/DuoLife.vue';
import DuoChapter from './components/DuoChapter.vue';

export default {
  name: 'App',
  components: {
    DuoLife,
    DuoChapter,
    DuoLesson
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
<script setup>
import { RouterView } from "vue-router";
</script>


<template>
  <main id="wholeApp">
    <RouterView />
  </main>
</template>

<style>
*{
  box-sizing: content-box;
}

html, body{
  padding: 0;
  margin: 0;
}

body{
  height: 95vh;
  width: 100vw;
  box-sizing: content-box;
}

#wholeApp{
  height: 100%;
  display: block;
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
}

#sidebar-left {
  width: 190px;
  display:flex;
  flex-direction: column;
}

#center{
  display: flex;
  justify-content: center;
}

#sidebar-right{
  display: flex;
  flex-direction: column;
}

#logo{
  height: 50px;
}

#contact{
  display: flex;
  flex-direction: column;
}

#contact > a{
  text-decoration: none;
  color: rgb(0, 186, 65);
  font-weight: bold;
  font-size: 25px;
}
</style>