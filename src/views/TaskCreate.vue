<template>
    <section class="taskForm">
        <h2 class="centered">Create a new Task</h2>

        <label for="titleInput">Title</label>
        <input
            id="titleInput"
            placeholder="Choose a short title"
            class="taskName"
            type="text"
            v-model="titleInput"
        />

        <label for="descInput">Description</label>
        <textarea
            id="descInput"
            placeholder="Write a detailed description"
            v-model="descInput"
        ></textarea>

        <label for="prioInput">Priority</label>
        <select id="prioInput" v-model="prioInput">
            <option value="highPrio">High</option>
            <option value="mediumPrio">Medium</option>
            <option value="lowPrio">Low</option>
        </select>

        <label for="statusInput">Status</label>
        <select class="statusInput" v-model="statusInput">
            <option value="finished">Finished</option>
            <option value="open">Open</option>
        </select>

        <Button text="Create Task" @click="createTask" id="createButton" />
        <Button text="Cancel" @click="cancel" id="cancelButton" />
    </section>
    <section class="errorMessage">
        {{ error }}
    </section>
</template>

<script>
    import Button from "../components/Button.vue";
    import { generateId } from "../assets/js/utils.js";

    export default {
        name: "TaskCreate",
        props: ["tasks"],
        emits: ["task"],
        components: {
            Button,
        },
        data() {
            return {
                error: null,
                titleInput: "",
                descInput: "",
                prioInput: "mediumPrio",
                statusInput: "open",
            };
        },
        methods: {
            createTask() {
                if (!this.titleInput) {
                    this.error = "There is no title";
                    return;
                }
                const task = {
                    id: generateId(10),
                    title: this.titleInput,
                    description: this.descInput,
                    prio: this.prioInput,
                    status: this.statusInput,
                };
                this.$emit("task", task);
                this.cancel();
            },
            cancel() {
                this.$router.push({ name: "list" });
            },
        },
    };
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