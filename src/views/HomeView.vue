<script>
import json from '../data.json'

export default {
  name: 'HomeView',
  data(){
    return{
      myJson: json
    }
  },
}
</script>

<template>
  <main id="wholeApp">
    <nav id="sidebar-left">
      <img id="logo" src="../../src/assets/logo_duolango copy.png" alt="">
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <div id="center">
        <div class="lessons">
            <ul>
                <div class="chapterTitle" style="background-color: orange;">
                    <span id="chapterNumber">Chapter 1</span>
                    <span id="chapterName">Fundamentals</span>
                </div>
                <li class="lessonBox" v-for="lesson in myJson.slice(0,5)" :key="lesson.lessonId" style="background-color: orange;">
                    <RouterLink :to="{ name: 'LessonView', params: {id: lesson.lessonId}} ">
                        <i v-if="lesson.lessonId == 3" class="fa-solid fa-star fa-3x"></i>
                        <i v-else-if="lesson.lessonId != 5" class="fa-solid fa-book-open fa-3x"></i>
                        <i v-else class="fa-solid fa-trophy fa-3x"></i>
                    </RouterLink>
                </li>
                <div class="chapterTitle" style="background-color: rgb(68, 213, 68);">
                    <span id="chapterNumber">Chapter 2</span>
                    <span id="chapterName">Everyday Life</span>
                </div>
                <li class="lessonBox" v-for="lesson in myJson.slice(5,10)" :key="lesson.lessonId " style="background-color: rgb(68, 213, 68);">
                    <RouterLink :to="{name: 'LessonView', params: {id: lesson.lessonId}}">
                        <i v-if="lesson.lessonId === 8" class="fa-solid fa-star fa-3x"></i>
                        <i v-else-if="lesson.lessonId != 10" class="fa-solid fa-book-open fa-3x"></i>
                        <i v-else class="fa-solid fa-trophy fa-3x"></i>
                    </RouterLink>
                </li>
            </ul>
        </div>
      <RouterView />
    </div>
    <div id="sidebar-right">
      <p>here goes life</p>
      <i class="fa-solid fa-heart"></i>
      <p>flag</p>
      <div id="contact">
        <a href= "mailto:maria.ariasm02@gmail.com">
          <i class="fa-solid fa-envelope"></i>
          maria.ariasm02@gmail.com
        </a>
        <a href="www.linkedin.com/in/maria-arias-miranda">
          <i class="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
        <a href="https://github.com/marias02">
          <i class="fa-brands fa-github"></i>
          GitHub
        </a>
        <a href="https://marias02.github.io/">
          <i class="fa-solid fa-briefcase"></i>
          Portfolio
        </a>
      </div>
    </div>
  </main>
</template>

<style>

#wholeApp{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
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

.lessons > ul{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.chapterTitle{
    width: 620px;
    height: 80px;
    border-radius: 15px;
    margin: 20px 20px 10px 30px;
    background-color: orange;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
}

.chapterTitle > span{
    color: white;
    font-weight: bold;
    margin-left: 20px;
}

#chapterNumber{
    font-size: 17px;
}

#chapterName{
    font-size: 25px;
}

.lessonBox{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: aquamarine;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

.lessonBox > a{
    color: white;
}
</style>

<!-- <template>
    <main>
        <div class="lessons">
            <ul>
                <div class="chapterTitle" style="background-color: orange;">
                    <span id="chapterNumber">Chapter 1</span>
                    <span id="chapterName">Fundamentals</span>
                </div>
                <li class="lessonBox" v-for="lesson in myJson.slice(0,5)" :key="lesson.lessonId" style="background-color: orange;">
                    <RouterLink :to="{ name: 'LessonView', params: {id: lesson.lessonId}} ">
                        <i v-if="lesson.lessonId == 3" class="fa-solid fa-star fa-3x"></i>
                        <i v-else-if="lesson.lessonId != 5" class="fa-solid fa-book-open fa-3x"></i>
                        <i v-else class="fa-solid fa-trophy fa-3x"></i>
                    </RouterLink>
                </li>
                <div class="chapterTitle" style="background-color: rgb(68, 213, 68);">
                    <span id="chapterNumber">Chapter 2</span>
                    <span id="chapterName">Everyday Life</span>
                </div>
                <li class="lessonBox" v-for="lesson in myJson.slice(5,10)" :key="lesson.lessonId " style="background-color: rgb(68, 213, 68);">
                    <RouterLink :to="{name: 'LessonView', params: {id: lesson.lessonId}}">
                        <i v-if="lesson.lessonId === 8" class="fa-solid fa-star fa-3x"></i>
                        <i v-else-if="lesson.lessonId != 10" class="fa-solid fa-book-open fa-3x"></i>
                        <i v-else class="fa-solid fa-trophy fa-3x"></i>
                    </RouterLink>
                </li>
            </ul>
        </div>
        
        <RouterView />
    </main>
</template> -->

<!-- <style>
.lessons > ul{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.chapterTitle{
    width: 620px;
    height: 80px;
    border-radius: 15px;
    margin: 20px 20px 10px 30px;
    background-color: orange;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
}

.chapterTitle > span{
    color: white;
    font-weight: bold;
    margin-left: 20px;
}

#chapterNumber{
    font-size: 17px;
}

#chapterName{
    font-size: 25px;
}

.lessonBox{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: aquamarine;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

.lessonBox > a{
    color: white;
}
</style> -->