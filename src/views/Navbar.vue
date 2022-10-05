<template>
    <div class="container">
        <div class="row align-items-center justify-content-between mt-2 mb-2">

            <div class="col-8 col-md-4">
                <img src="../assets/24px.png" alt="" class="img me-3 pb-2">
                <router-link to="/" class="text-decoration-none">
                    <span class="text">Doct</span>
                    <span class="text-online">Online</span>
                </router-link>
            </div>

            <div class="d-none col-4 d-md-block">
                <span class="me-2 call-line fw-bold ">Dəstək xətti:</span>
                <span class="call">+994 (50) 831 31 16</span>
            </div>
            <div class="d-md-none col-4">
                <button class="btn btn-success  col-sm-4">Randevu al</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.call {
    font-size: 16px;
    line-height: 24px;
    color: #273142;
    font-weight: 400;

}

.call-line {
    font-size: 16px;
    line-height: 24px;

}

.text {
    font-size: 28px;
    color: black;
}

.text-online {
    font-size: 28px;
    color: #4CB147;
}
</style>