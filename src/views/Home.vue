<template>
    <div class="container-fluid position-relative ">
        <Navbar></Navbar>
        <div class="contain-img">
            <div class="search-content pt-5 pb-5">
                <h1 class="text-center animate__animated animate__bounce animate__zoomInDown">
                    Sağlamlığınıza baxın!
                </h1>

                <div class="row my-4 justify-content-center">
                    <div class=" col-10 col-md-6 ">
                        <div class="dropdown">
                            <input v-model="searchProfession" class="icon dropdown-toggle form-control" type="text"
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                            <div class=" dropdown-menu form-control mt-2" aria-labelledby="dropdownMenuButton1">
                                <p class="dropdown-item text-position">Ixtisaslar</p>

                                <div class="d-flex flex-row flex-wrap">
                                    <div class="profession-title me-3" v-for="profession in filterProfessions">
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
        <div class="container my-5">
            <h1 class="mb-5">Ən çox axtarılan ixtisaslar</h1>
            <div class="row">
                <div class="col-2" v-for="profession in frequentlyUsedProfessions">
                    <div class="professions-box">
                        <img src="" alt="">
                        <router-link :to="{ name: 'search', params: { id: profession.id } }"
                            class="professions-txt pt-5">
                            {{ profession.name }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'Home',
    components: {
        Navbar
    },

    data() {
        return {
            professions: '',
            searchProfession: '',
            frequentlyUsedProfessions: [
                {
                    id: 23,
                    name: 'Stomatoloq',
                },
                {
                    id: 48,
                    name: 'Dermatoloq',
                },
                {
                    id: 21,
                    name: 'Psixiatr',
                },
                {
                    id: 47,
                    name: 'Oftalmoloq',
                },
                {
                    id: 26,
                    name: 'Terapevt',
                },
                {
                    id: 11,
                    name: 'Mama-ginekoloq',
                },
            ]
        };
    },
    computed: {
        filterProfessions() {
            let filtered = this.professions
            if (this.searchProfession != '') {
                filtered = this.professions.filter(profession => {
                    let professionNameLowercase = profession.name.toLowerCase()
                    let searchProfessionLowercase = this.searchProfession.toLowerCase()
                    return professionNameLowercase.includes(searchProfessionLowercase)
                })
            }
            return filtered
        }
    },

    mounted() {
        this.professionsApi()
    },

    methods: {

        professionsApi() {
            axios.get(this.$apiUrl + "/api-professions")
                .then(response => {
                    this.professions = response.data
                    console.log(this.professions)
                    this.frequentlyUsedProfessions === this.professions
                    // console.log(this.frequentlyUsedProfessions)


                })
                .catch(e => console.log(e))
        },


    },
};
</script>

<style lang="scss" scoped>
.professions-box {
    border: 1px solid #4CB147;
    border-radius: 10px;
    height: 200px;
    width: 180px;
    background-color: #F2FFF2A1;
    text-align: center;
}

.professions-txt {
    text-decoration: none;
    font-weight: 500;
    color: #101825;
    font-weight: bold;
}

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
    height: 60vh;
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
