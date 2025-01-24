<template>
    <form>
        <div>
            <h3>{{ questions.sentence }}</h3>
            <legend>{{ questions.question }}</legend>
            <!-- Change DuoQuestions to DuoOptions to avoid confusion -->
            <DuoQuestions v-for="(option, index) in questions.options" 
                        :key="index" 
                        :option="option"
                        :position="questionNumber" 
                        :index="index">
            </DuoQuestions>  
        </div>       
        <div>
            <button type="button" @:click="nextQuestion">CHECK</button>
        </div>
    </form>
</template>

<script>
import DuoQuestions from "@/components/DuoQuestions.vue";
// import { ref } from "vue";
// import { useStore } from "@/store";

    export default{
        // setup () {
            // const questionNumber = ref(0);
            // const rightChoice = ref('');
            // const store = useStore();

            // function nextQuestion(){
            //     if (questionNumber.value < 9){
            //         questionNumber.value++; 
            //     }  
            // }

            // return {
            //     questionNumber, 
            //     nextQuestion,
            //     lifeBar: store.life
            // }
        // },
        components: {
            DuoQuestions
        },
        props: [
            'question',
            'questions',
            'options',
            // 'questionNumber',
            'correctAnswer'
        ]  
    }
</script>