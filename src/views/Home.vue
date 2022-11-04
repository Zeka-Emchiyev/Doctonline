<template>
    <div class="container-fluid">
        <div class="contain-img ">
            <h1 class="text-center mt-5">Sağlamlığınıza baxın!</h1>

            <div class="row my-4 justify-content-center">
                <div class=" col-10 col-md-6 ">
                    <div class="dropdown">
                        <input class="icon dropdown-toggle form-control" type="text" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">

                        <div class=" dropdown-menu form-control mt-2" aria-labelledby="dropdownMenuButton1">
                            <p class="dropdown-item text-position">Ixtisaslar</p>

                            <div class="d-flex flex-row flex-wrap">
                                <div class="profession-title me-3" v-for="profession in professions">
                                    <router-link :to="{ name: 'search', params: { id: profession.id } }"
                                        class="dropdown-item link">
                                        {{ profession.name }}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',

    data() {
        return {
            professions: '',
        };
    },

    mounted() {
        this.professionsApi()
    },

    methods: {

        professionsApi() {
            axios.get("https://admin.drrandevu.az/api-professions")
                .then(response => {
                    this.professions = response.data
                    console.log(this.professions)
                })
                .catch(e => console.log(e))
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

.link {
    text-decoration: none;
    font-weight: 500;
    color: #101825;
    background-color: #edf0f4;
    cursor: pointer;
    padding: 5px 12px;
    margin: 5px;
    border-radius: 8px;
}
</style>
