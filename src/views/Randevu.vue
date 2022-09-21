<template>
    <div class="container d-flex align-items-center justify-content-center my-5 ">
        <div class="col-4">
            <div class="row">
                <div class="col-3">
                    <img src="../assets/Rectangle 334.png" alt="">
                </div>
                <div class="col-9">
                    <h6>Həsən Mehdiyev, Cərrah </h6>
                    <p>22 sentyabr 2022 Bazar ertəsi-14:00</p>
                    <p>Ege hospital -Akademik H.Əliyev 9</p>
                </div>
            </div>

            <div>
                <label for="">Ad, Soyad</label>
                <input class="form-control" type="text">
            </div>
            <div>
                <label for="">Mobil nömrə</label>
                <input class="form-control" type="text">
            </div>
            <button class="btn btn-success mt-3 col-12">Randevunu təsdiqləyin</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DERSRandevu',

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

</style>