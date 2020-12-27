<template>
  <Header text="Vue Task App (CLI Version)" />
  <main id="container">
    <TaskList
      @edit="showForm"
      v-if="!formMode"
      :tasks="tasks"
      @moveTaskUp="moveTaskUp"
      @moveTaskDown="moveTaskDown"
    />
    <TaskForm
      v-if="formMode"
      :mode="formMode"
      :task="currentTask"
      @hideForm="hideForm"
      @deleteTask="deleteTask"
      @createTask="createTask"
      @updateTask="updateTask"
    />
    <div class="centered" v-if="!formMode">
      <Button text="Add New Task" @click="showForm" />
    </div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import TaskList from "./components/TaskList.vue";
import TaskForm from "./components/TaskForm.vue";

export default {
  name: "App",
  components: {
    Header,
    Button,
    TaskList,
    TaskForm,
  },
  data() {
    return {
      formMode: null,
      currentTask: null,
      tasks: [
        {
          id: "XZBS45NF4W",
          title: "Reduce your carbon footprint",
          description:
            "For example by choosing a vegan diet, going by bike more often, avoiding planes, buying only stuff you actually need. Get active!",
          prio: "highPrio",
          status: "open",
        },
        {
          id: "HSUBXOX2D8",
          title: "Educate yourself about structural racism",
          description: "... because it is still deeply rooted in our society.",
          prio: "mediumPrio",
          status: "open",
        },
        {
          id: "JYAXT4L8EO",
          title: "Try to be a nice person",
          description: "You also like to be around nice people, right? :)",
          prio: "lowPrio",
          status: "finished",
        },
      ],
    };
  },
  methods: {
    getIndex(task) {
      return this.tasks.findIndex((x) => x.id == task.id);
    },
    showForm(task) {
      if (task.id) {
        this.formMode = "edit";
        this.currentTask = task;
      } else {
        this.formMode = "create";
        this.currentTask = null;
      }
    },
    hideForm() {
      this.formMode = null;
      this.currentTask = null;
    },
    deleteTask(task) {
      const index = this.getIndex(task);
      this.tasks.splice(index, 1);
    },
    moveTaskUp(task) {
      const index = this.getIndex(task);
      if (index === 0) return;
      this.tasks.splice(index, 1);
      this.tasks.splice(index - 1, 0, task);
    },
    moveTaskDown(task) {
      const index = this.getIndex(task);
      if (index === this.tasks.length - 1) return;
      this.tasks.splice(index, 1);
      this.tasks.splice(index + 1, 0, task);
    },
    createTask(task) {
      this.tasks.push(task);
    },
    updateTask(task) {
      const index = this.getIndex(task);
      this.tasks[index] = task;
    },
  },
};
</script>

<style>
#container {
  max-width: 550px;
  margin: 0 auto;
  padding: 20px 40px;
}
</style>
