<template>
    <section class="taskForm">
        <h2 class="centered" v-if="mode == 'create'">Create a new Task</h2>
        <h2 class="centered" v-if="mode == 'edit'">Edit your Task</h2>

        <label for="titleInput">Title</label>
        <input id="titleInput" placeholder="Choose a short title" class="taskName" type="text" v-model="titleInput">

        <label for="descInput">Description</label>
        <textarea id="descInput" placeholder="Write a detailed description" v-model="descInput"></textarea>

        <label for="prioInput">Priority</label>
        <select id="prioInput" v-model="prioInput">
            <option value="highPrio">
                High
            </option>
            <option value="mediumPrio">
                Medium
            </option>
            <option value="lowPrio">
                Low
            </option>
        </select>

        <label for="statusInput">Status</label>
        <select class="statusInput" v-model="statusInput">
            <option value="finished">Finished</option>
            <option value="open">Open</option>
        </select>
        <Button text = "CreateTask" v-if="mode == 'create'" @click="createTask" />
        <Button text = "UpdateTask" v-if="mode == 'edit'" @click="updateTask" />
        <Button :text = "deleteText" v-if="mode == 'edit'" @click="deleteTask" class="danger" />
        <Button text = "Cancel" @click="hideForm" id="cancelButton" />

    </section>
    <section class="errorMessage">
    </section>
</template>

<script>
import Button from './Button.vue'

export default {
    name: "TaskForm",
    emits: ['hideForm', 'delete'],
    components: {
        Button
    },
    props: {
        mode: String,
        task: Object
    },
    data() {
        return {
            deleteText: "Delete Task",
            error: null,
            titleInput: "",
            descInput: "",
            prioInput: "medium",
            statusInput: "open",
        }
    },
    methods: {
        createTask() {
            console.log("create task!");
        },
        updateTask() {
            console.log("update task!");
        },
        deleteTask() {
            if (this.deleteText == "Delete Task") {
                this.deleteText = "Are you sure?";
            } else {
                this.editingTask = false;
                this.hideForm();
                this.$emit("delete", this.task.id);
            }
        },
        hideForm() {
            this.error = null;
            this.$emit("hideForm");
        }
    },
    mounted() {
        if (this.mode == 'edit' && this.task) {
            this.titleInput = this.task.title;
            this.descInput =  this.task.description;
            this.prioInput =  this.task.prio;
            this.statusInput =  this.task.status;
            this.deleteText = "Delete Task";
        }
    }
}
</script>

<style scoped>

input,
select,
textarea,
button {
    font-family: inherit;
    font-size: inherit;
    display: inline-block;
    padding: 10px;
}

.taskForm {
    display: flex;
    flex-direction: column;
}

label {
    font-size: 20px;
    margin: 30px 0px 10px 0px;
    color: var(--gray-color);
}

textarea {
    resize: vertical;
}

.statusInput {
    margin-bottom: 50px;
}

.taskForm button {
    margin: 10px 0px;
}

.errorMessage {
    text-align: center;
    color: var(--danger-color);
    font-weight: bold;
}
</style>