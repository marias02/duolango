<template>
    <main class="questionChoice" :class="{selected: selected}" @click="checkQuestion(position)" v-bind:style="{backgroundColor: backgroundColor, border: border, borderBottom: borderBottom, color: textColor}">
        <!-- <input type="radio" name="answers" :id="option" :value="position" v-model="value"> -->
        <span class="choiceNumber" :class="{selected: selected}">{{ position }}</span>
        <span class="inputTag" :class="{selected: selected}" :for="option">{{ option }}</span>
    </main>
</template>

<script>
// import { useStore } from "../store.js";
// import { ref } from 'vue';


    export default {
        name: 'DuoQuestions',
        props: [
            'option',
            'position',
            'rightAnswer'
        ],
        data(){
            return {
                textColor: 'rgb(75, 75, 75)',
                backgroundColor: 'white',
                border: '2px solid rgb(229, 229, 229)',
                borderBottom: '4px solid rgb(229, 229, 229)',
                selected: false
            }
        },
        emits: ['selectChoice', 'resetAllColors', 'changeNextButton'],
        methods: {
            checkQuestion(position){
                // if (this.choice != ""){
                //     if (this.choice == this.rightAnswer){
                //         console.log(this.value)
                //         console.log('have I told you how smart you are?')
                //     }
                // }
                this.$emit('resetAllColors')
                this.$emit('changeNextButton')
                // this.selected = !this.selected;
                // if (this.selected) {
                //     this.color = 'lightblue'; // Set a new color for selection
                // } else {
                //     this.color = 'white'; // Reset color to default
                // }
                this.selected = true;
                this.backgroundColor = 'rgb(221, 244, 255)';
                this.border = '2px solid rgb(132, 216, 255)'
                this.borderBottom = '4px solid rgb(132, 216, 255)'
                this.textColor = 'rgb(24, 153, 214)'

                console.log(this.selected)
                this.$emit('selectChoice', position)
                console.log('I am selectChoice', position)
            }
        }
    }
</script>

<style>
.questionChoice{
    cursor: pointer;
    border: 2px solid rgb(229, 229, 229);
    border-bottom: 4px solid rgb(229, 229, 229);
    height: 30px;
    width: 564px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: rgb(75, 75, 75);
}

.questionChoice:hover{
    background-color: rgb(247, 247, 247);
}

.choiceNumber.selected{
    border: 2px solid rgb(132, 216, 255);
    color: rgb(24, 153, 214);
}

.questionChoice input{
    position: absolute;
    cursor: pointer;
    opacity: 0;
}

.choiceNumber{
    width: 30px;
    height: 30px;
    border-radius: 7px;
    border: 2px solid rgb(229, 229, 229);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(175, 175, 175);
    font-weight: 1000px;
}

input[type="radio"]{
    padding: 10px;
}

.inputTag{
    font-weight: 500;
    min-width: 508px;
    font-size: 19px;
    margin-left: 12px;
    margin-right: 14px;
    margin-bottom: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>