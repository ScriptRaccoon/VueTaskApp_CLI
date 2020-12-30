<!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->

<template>
    <Header text="Vue Task App (CLI Version)" />
    <main id="container">
        <router-view
            :tasks="tasks"
            @down="moveTaskDown"
            @up="moveTaskUp"
            @edit="edit"
            @task="createTask"
        />
    </main>
</template>

<script>
    import Header from "./components/Header.vue";

    export default {
        name: "App",
        components: {
            Header,
        },
        data() {
            return {
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
                        description:
                            "... because it is still deeply rooted in our society.",
                        prio: "mediumPrio",
                        status: "open",
                    },
                    {
                        id: "JYAXT4L8EO",
                        title: "Try to be a nice person",
                        description:
                            "You also like to be around nice people, right? :)",
                        prio: "lowPrio",
                        status: "finished",
                    },
                ],
            };
        },
        methods: {
            getIndex(task) {
                return this.tasks.findIndex((x) => x.id === task.id);
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
                console.log("want to edit task with id", task.id);
                // todo
            },
            createTask(task) {
                this.tasks.push(task);
            },
        },
        // methods: {
        //     deleteTask(task) {
        //         const index = this.getIndex(task);
        //         this.tasks.splice(index, 1);
        //     },
        //     createTask(task) {
        //         this.tasks.push(task);
        //     },
        //     updateTask(task) {
        //         const index = this.getIndex(task);
        //         this.tasks[index] = task;
        //     },
        // },
    };
</script>

<style>
    #container {
        max-width: 550px;
        margin: 0 auto;
        padding: 20px 40px;
    }
</style>