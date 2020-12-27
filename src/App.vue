<template>
  <Header text="Vue Task App (CLI Version)"/>
  <main id="container">
    <TaskList v-on:edit="showForm" v-if="!formMode"/>
    <TaskForm v-if="formMode" v-on:hideForm="hideForm" :mode = "formMode"
    :task = "currentTask" v-on:delete="deleteTask"/>
    <div class="centered" v-if="!formMode">
      <Button text="Add New Task" @click = "showForm"/>
    </div> 
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Button from './components/Button.vue'
import TaskList from './components/TaskList.vue'
import TaskForm from './components/TaskForm.vue'

export default {
  name: 'App',
  components: {
    Header, Button, TaskList, TaskForm
  },
  data() {
    return {
      formMode: null,
      currentTask: null,
    }    
  },
  methods: {
    showForm(task) {
      if (task.id) {
        this.formMode = "edit";
        this.currentTask = task;
      }
      else {
        this.formMode = "create";
        this.currentTask = null;
      }
    },
    hideForm() {
      this.formMode = null;
      this.currentTask = null
    },
    deleteTask(id) {
      console.log("delete task with id", id);
      // how?!
    }
  },
}
</script>

<style>
#container {
  max-width: 550px;
  margin: 0 auto;
  padding: 20px 40px;
}
</style>
