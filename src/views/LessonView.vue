<script>
import DuoQuestions from "@/components/DuoQuestions.vue";
import json from "../data.json"
import {ref} from 'vue'
import { useStore } from "../store.js";
import router from "@/router";
// import { useRoute } from "vue-router";
// import DuoLesson from "@/components/DuoLesson.vue";
// import { provide } from "vue";
// const store = useStore();

export default{
    setup () {
        const questionNumber = ref(0);
        // const lessonExp = ref(0);
        const rightChoice = ref('');
        const store = useStore();

        function nextQuestion(){
            if (questionNumber.value < 9){
                questionNumber.value++; 
                console.log(rightChoice);
            } else {
                this.endLesson();
            } 
        }

        // function endLesson(){
        //     let page = "/lesson/"+  + "/summary";
        //     router.push({path: page})
        // }

        return {
            questionNumber, 
            nextQuestion,
            lifeBar: store.life,
            exp: store.exp,
            correctAnswersCount: store.correctAnswersCount,
            progressBar: 0,
            barWidth: ''
        }
    },
    name: 'LessonView',
    components: {
        DuoQuestions,
        // DuoLesson
    },
    props: ['lesson'],
    data(){
        return {
            lessonData: null,
            duoChoice: null,
            nextColor: false,
            nextButtonText: 'CHECK',
            nextTextColor: 'rgba(16, 16, 16, 0.3)'
            // lifeBar: store.life
        }
    },
    watch: {
        '$route.params.id': 'fetchLesson',
    },
    created(){
        this.fetchLesson();
    },
    methods: {
        fetchLesson(){
            const lessonId = this.$route.params.id;
            this.lessonData = json.find((lesson) => lesson.lessonId === Number(lessonId));
        },
        selectChoice(selection){
            if (this.lessonData !== null){
                this.duoChoice = selection;
                this.rightChoice = this.lessonData.questions[this.questionNumber].rightAnswer
                // console.log('rightChoice', this.rightChoice);
                // console.log('duoChoice', selection);
            }
        },
        changeNextButton(){
            this.nextColor = true;
            this.nextTextColor = 'white';
            console.log('nextColor', this.nextColor)
        },
        resetAllColors(){
            console.log('hello');
            this.$refs.duoOptions.forEach((question) => {
                question.selected = false
                question.backgroundColor = 'white'
                question.border = '2px solid rgb(229, 229, 229)'
                question.textColor = 'rgb(75, 75, 75)'
                question.borderBottom = '4px solid rgb(229, 229, 229)'
            })
            this.nextColor = false;
        },
        skipQuestion(){
            this.progressBar += 10;
            this.nextQuestion();
            this.barWidth = 'width: ' + this.progressBar + '%';
        },
        quitLesson(){
            router.push({path: '/', replace: true})
        },
        checkAnswer(){
            if (this.duoChoice !== null){
                console.log(this.duoChoice)
                if (this.rightChoice == this.duoChoice){
                    this.exp += 1;
                    this.correctAnswersCount += 1;
                    this.progressBar += 10;
                    this.nextQuestion();
                    this.resetAllColors();
                    this.duoChoice = null;
                    this.barWidth = 'width: ' + this.progressBar + '%'
                } else {
                    console.log('LIAR!')
                    if (this.lifeBar > 0){
                        this.lifeBar -= 1;
                        this.progressBar += 10;
                        this.nextQuestion();
                        this.resetAllColors();
                        this.barWidth = 'width: ' + this.progressBar + '%'
                    }
                }
            }
        },
        endLesson(){
            router.push({path: '/lesson/' + this.$route.params.id + '/summary'})
        }
    },
    
}


</script>

<template>
    <main class="lessonQuestion">
        <div class="header">
            <div class="quitButton" @:click="quitLesson">
                 <i class="fa-solid fa-xmark fa-xl"></i>
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" v-bind:style="barWidth" v-bind:aria-valuenow="progressBar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="lifeBar">
                <i class="fa-solid fa-heart" style="color: #ff0000;"></i>
                <span class="lifeCount">{{ lifeBar }}</span>
            </div>
        </div>
        <div class="question">
            <h1>{{ lessonData.questions[questionNumber].sentence }}</h1>
            <legend>{{ lessonData.questions[questionNumber].question }}</legend>
            <!-- <DuoLesson 
                :sentence="lessonData.questions[questionNumber].sentence"
                :question="lessonData.questions[questionNumber].question"
                :options="lessonData.questions[questionNumber].options"
                :correctAnswer="lessonData.questions[questionNumber].rightAnswer"
                :questionNumber="questionNumber"
                :questions="lessonData.questions[questionNumber]">
            </DuoLesson> -->
        </div>
        <div class="options">
            <!-- Change DuoQuestions to DuoOptions to avoid confusion -->
            <DuoQuestions 
                        ref="duoOptions" 
                        v-on:selectChoice="selectChoice"
                        v-on:resetAllColors="resetAllColors"  
                        v-on:changeNextButton="changeNextButton"
                        v-for="(option, index) in lessonData.questions[questionNumber].options" 
                        :key="index" 
                        :option="option" 
                        :index="index"
                        :position="index"
                        :rightAnswer="lessonData.questions[questionNumber].rightAnswer">
            </DuoQuestions>  
        </div>       
        <div class="lessonFooter">
            <div class="buttonsContainer">
                <div class="button">
                    <button id="skip" @:click="skipQuestion">
                        <span class="buttonText">SKIP</span>
                    </button>
                    <button id="next" class="buttonNext" :class="{optionSelected: this.nextColor}" @:click="checkAnswer">
                        <span class="buttonText">{{ this.nextButtonText }}</span>
                    </button>
                </div>
            </div>
        </div>    
    </main>
</template>

<style>
.header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
}

.quitButton{
    height: 18px;
    cursor: pointer;
}

.progress{
    height: 16px;
    width: 885px;
    border-radius: 16px;
}

.progress-bar{
    background-color: rgb(88, 204, 2);
    border-radius: 16px;
}

.lifeBar{
    width: 50px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.lifeBar > i{
    font-size: 32px;
    color: rgb(255, 75, 75);
}

.lifeCount{
    font-size: 17px;
    color: rgb(255, 75, 75);
}

.lessonQuestion{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

h1{
    font-weight: 800;
}

legend{
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 500;
    color: rgb(75, 75, 75)
}

.questions{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

input[type="radio"]{
    padding: 10px;
}

.options{
    height: 300px;
    width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.lessonFooter{
    height: 138px;
    width: 100%;
    border-top: 2px solid rgb(229, 229, 229);
}

.buttonsContainer{
    padding: 0px 40px;
    margin-left: 256px;
    height: 138px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.button{
    /* width: 150px;
    height: 50px; */
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

button{
    box-sizing: content-box;
    width: 118px;
    height: 46px;
    padding: 0px 16px;
    border-radius: 16px;
    font-family: "Nunito", serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 17px;
}

button:focus{
    outline: 0
}

button#skip{
    background-color: white;
    border: 2px solid rgb(229, 229, 229);
    border-bottom: 4px solid rgb(229, 229, 229);
}

.buttonNext{
    background-color: rgb(229, 229, 229);
    border-color: transparent;
    color: rgba(16, 16, 16, 0.3);
}

.buttonNext.optionSelected{
    background-color: rgb(88, 204, 2);
    color: white;
    border-bottom: 4px solid rgb(88, 167, 0);
    cursor: pointer;
}

.buttonText{
    height:20px;
    width: 55px;
}
</style>