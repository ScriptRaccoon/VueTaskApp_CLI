<template>
    <div class="taskList">
        <div
            class="task"
            v-for="task in tasks"
            :key="task.id"
            :class="[task.prio, task.status]"
        >
            <span class="arrows">
                <i
                    class="control fas fa-arrow-up"
                    title="Move your task up"
                    @click="$emit('up', task)"
                ></i>
                <i
                    class="control fas fa-arrow-down"
                    title="Move your task down"
                    @click="$emit('down', task)"
                ></i>
            </span>
            <i
                class="control fas fa-edit"
                title="Edit your task"
                @click="edit(task)"
            ></i>
            <div class="taskContent" @click="edit(task)">
                <h3 class="taskTitle">{{ task.title }}</h3>
                <div class="taskDescription">
                    {{ task.description }}
                </div>
            </div>
        </div>
    </div>
    <div class="centered">
        <Button text="Add New Task" @click="create" />
    </div>
</template>

<script>
    import Button from "../components/Button.vue";

    export default {
        props: ["tasks"],
        emits: ["up", "down"],
        components: { Button },
        methods: {
            edit(task) {
                this.$router.push({ name: "edit", params: { id: task.id } });
            },
            create() {
                this.$router.push({ name: "create" });
            },
        },
    };
</script>

<style scoped>
    .taskList {
        margin-bottom: 20px;
    }

    /* tasks */

    .task {
        padding: 10px 20px 20px 20px;
        margin: 35px 0px;
        border-radius: 5px;
        position: relative;
        text-align: justify;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
        border-left: 5px solid transparent;
    }

    .taskContent {
        cursor: pointer;
    }

    .taskTitle {
        font-weight: 600;
        margin: 10px 0px;
        line-height: 1.2;
    }

    .taskDescription {
        color: var(--gray-color);
    }

    /* controls */

    .control {
        color: var(--lightgray-color);
        margin: 0px 2px;
        transition: color 150ms linear;
    }

    .control:hover {
        cursor: pointer;
        color: inherit;
    }

    .arrows {
        position: absolute;
        top: 0px;
        left: -35px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

    .fa-edit {
        position: absolute;
        top: 0;
        right: -30px;
    }

    /* status display */

    .finished .taskTitle {
        opacity: 0.3;
        margin: 0;
    }

    .finished .taskDescription {
        display: none;
    }

    .finished {
        box-shadow: none;
    }

    .open {
        opacity: 1;
    }

    /* priority display */

    .highPrio {
        border-left: 8px solid rgba(255, 0, 0, 0.5);
    }

    .mediumPrio {
        border-left: 8px solid rgba(255, 255, 0, 0.5);
    }

    .lowPrio {
        border-left: 8px solid rgba(0, 255, 0, 0.5);
    }
</style>