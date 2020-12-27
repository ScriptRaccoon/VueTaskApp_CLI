<template>
    <h1>{{text}}</h1>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    color: white;
    background-color: var(--main-color);
    padding: 30px 0px;
    font-weight: 300;
}
</style>