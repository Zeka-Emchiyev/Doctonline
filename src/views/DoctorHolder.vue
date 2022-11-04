<template>
    <div class="container">
        <h1>Yaz</h1>
        <button class="btn btn-success" @click="changeQueryString">Click</button>
        <input type="text" v-model="fruit" class="">
    </div>
</template>

<script>
export default {
    name: 'DoctorHolder',

    data() {
        return {
            fruit: ''
        };
    },

    mounted() {

    },

    methods: {
        changeQueryString() {

            this.$router.push({
                path: 'doctors',
                query: {
                    page: 1,
                    categories: [1, 2, 3]
                }
            });
            // this.$router.replace({ query: { fruit: this.fruit } })

        }
    },
};
</script>

<style lang="scss" scoped>

</style>