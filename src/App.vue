<template>
  <main>

    <!--heading-->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia log"/>
      <h1>Pinia Tasks {{ taskStore.name }}</h1>
    </header>

    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Fav Tasks</button>
    </nav>

    <!-- all task list-->
    <div class="task-list" v-if="filter === 'all'">
      <p>Total ({{ taskStore.totalCount }}) tasks to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <!-- fav task list-->
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have ({{ taskStore.favCount }}) fav tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task"/>
      </div>
    </div>

  </main>
</template>

<script>
import { ref } from "vue"
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from "@/stores/TaskStore";

export default {
  components: { TaskDetails },
  setup(){
    const taskStore = useTaskStore();
    const filter = ref('all');

    return { taskStore, filter }
  }
}
</script>
