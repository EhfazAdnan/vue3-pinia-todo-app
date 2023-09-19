import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "Task One", isFav: false},
            {id: 2, title: "Task Two", isFav: true}
        ],
        name: 'Adnan'
    }),
    // like computed functionality
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    // like functions
    actions : {
        addTask(task){
            this.tasks.push(task);
        }
    }
})