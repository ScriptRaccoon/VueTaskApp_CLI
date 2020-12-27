<template>
    <div class="taskList">
        <div class="task" v-for="task in tasks" :key = "task.id" :class="[task.prio, task.status]">
            <span class="arrows">
                <i v-if="getIndex(task) > 0" class="control fas fa-arrow-up"
                    title="Move your task up" @click="moveTaskUp(task)"></i>
                <i v-if="getIndex(task) < tasks.length-1" class="control fas fa-arrow-down"
                title="Move your task down" @click="moveTaskDown(task)"></i>
            </span>
            <i class="control fas fa-edit" title="Edit your task"
            @click="edit(task)"></i>
            <div class="taskContent" @click="edit(task)">
                <h3 class="taskTitle">{{task.title}}</h3>
                <div class="taskDescription">
                    {{task.description}}
                </div>   
            </div>                    
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [
                {
                    id: 'XZBS45NF4W',
                    title: "Reduce your carbon footprint",
                    description:
                        "For example by choosing a vegan diet, going by bike more often, avoiding planes, buying only stuff you actually need. Get active!",
                    prio: "highPrio",
                    status: "open",
                },
                {
                    id: 'HSUBXOX2D8',
                    title: "Educate yourself about structural racism",
                    description: "... because it is still deeply rooted in our society.",
                    prio: "mediumPrio",
                    status: "open",
                },
                {
                    id: 'JYAXT4L8EO',
                    title: "Try to be a nice person",
                    description: "You also like to be around nice people, right? :)",
                    prio: "lowPrio",
                    status: "finished",
                },
            ],
        }
    },
    methods: {
        getIndex(task) {
            return this.tasks.findIndex((x) => x === task);
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
        edit(task) {
            this.$emit("edit", task);
        },
        deleteTask(id) {
            console.log("hello from tasklist");
            console.log(id);
        }
    }
}
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