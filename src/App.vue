<template>
    <div id="app">
        <span class="my-icon">
            <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
        </span>
        <font-awesome-icon :icon="['fab', 'weixin']"></font-awesome-icon>
    </div>
</template>

<script>
    export default {
        name: 'app',
    };
</script>

<style>
    .my-icon {
        color: red;
        background-color: blue;
        font-size: 32px;
    }
</style>
