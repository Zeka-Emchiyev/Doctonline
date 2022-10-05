<template>
    <div class="container-fluid">
        <div class="contain-img ">
            <router-link to="/user" class="btn btn-primary">Usere kec</router-link>
            <h1 class="text-center mt-5">Sağlamlığınıza baxın!</h1>
            <div class="row my-4 justify-content-center">
                <div class=" col-10 col-md-6 ">
                    <!-- <input type="text" class="icon form-control" value placeholder="Search" @click="searchDoctor"
                        @blur="closeProfessional">
                    <div class="border mt-1 content" v-if="textLoad">
                        <p class="text-position my-3">Ixtisaslar</p>
                        <button class="btn btn-light">Kardioloq</button>
                    </div> -->
                    <div class="dropdown">
                        <input class="dropdown-toggle form-control" type="text" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">

                        <diw class=" dropdown-menu form-control mt-2" aria-labelledby="dropdownMenuButton1">
                            <p class="dropdown-item text-position">Ixtisaslar</p>
                            <div class="d-flex flex-row flex-wrap">
                                <div class="profession-title me-3" v-for="a in 6">
                                    <p><a class="dropdown-item btn btn-light" href="#">Dermatoloq {{ a }}</a></p>
                                </div>
                                <!-- <div class="">
                                    <p><a class="dropdown-item btn btn-light" href="#">Endokrinoloq</a></p>
                                </div>
                                <div class="">
                                    <p><a class="dropdown-item btn btn-light" href="#">Mama-ginekoloq</a></p>
                                </div>
                                <div class="">
                                    <p><a class="dropdown-item btn btn-light" href="#">Kardioloq</a></p>
                                </div>
                                <div class="">
                                    <p><a class="dropdown-item btn btn-light" href="#">Kardioloq</a></p>
                                </div> -->
                            </div>
                        </diw>
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',

    data() {
        return {
            textLoad: false
        };
    },

    mounted() {

    },

    methods: {
        searchDoctor() {
            this.textLoad = true

        },
        closeProfessional() {
            this.textLoad = false
        }
    },
};
</script>

<style lang="scss" scoped>
.icon {
    padding-left: 45px;
    background: url("../assets/search-icon.png") no-repeat left;
    ;
    background-size: 20px;
    line-height: 30px;
    background-position: 12px 12px;
    // border: 1px solid #4CB147;
    transition: none;

    &:focus {
        border-color: #4CB147;
        box-shadow: 0 0 0 0.25rem rgb(76, 177, 71, 15%);
    }
}


.contain-img {
    background-image: url('../assets/home.svg');
    height: 100vh;
    width: 100%;
}

.text-position {
    color: #b7bbc2;
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
}
</style>