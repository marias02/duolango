// import { reactive } from 'vue'

// export const store = reactive({
//     exp: 0,
//     life: 5,
//     accuracy: 0,
//     correctAnswersCount: 0
// })

import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({
        exp: 0,
        life: 5,
        accuracy: 0,
        correctAnswersCount: 0
    }),
    actions: {
        loseALife(){
            if (this.life > 0) {
                this.life -= 1
            }
        }
    }
})