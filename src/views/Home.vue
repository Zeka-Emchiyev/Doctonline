<template>
    <div class="container-fluid position-relative ">
        <div class="contain-img">
            <Navbar></Navbar>

            <div class="search-content pt-5 pb-5">

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <h1 class="animate__animated animate__bounce animate__zoomInDown">
                                Sizə uyğun həkim <br /> seçin və randevu götürün
                            </h1>
                            <div class="input-group dropdown">
                                <i class="bi bi-search icon-search"></i>
                                <input v-model="searchProfession"
                                    class="icon dropdown-toggle form-control border-0 input-all" type="text"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                    aria-label="First name" placeholder="Xidmət,şikayət,həkim axtarin...">

                                <div class="dropdown-menu form-control  border overflow-auto"
                                    aria-labelledby="dropdownMenuButton1" style="max-height:265px; min-width:230px">
                                    <p class="dropdown-item text-position">Ixtisaslar</p>

                                    <div class="flex-row flex-wrap ">
                                        <option :v-model="selectedProfession" @click="selected(profession)"
                                            class="dropdown-item link" v-for="profession in filterProfessions"
                                            v-bind:value="profession.id">
                                            {{ profession.name }}
                                        </option>
                                    </div>
                                </div>

                                <span class="span-line"></span>
                                <i class="bi bi-geo-alt-fill icon-location ms-2"></i>
                                <input type="text" aria-label="Last name" class="form-control border-0 input-all"
                                    placeholder="Rayon">
                                <span class="span-line"></span>
                                <i class="bi bi-shield-check icon-insurance ms-2"></i>
                                <input type="text" aria-label="Insurance" class="form-control border-0 input-all"
                                    placeholder="Paşa sığorta" disabled>

                                <button @click="searchProfessions()"
                                    class="icon-button btn btn-success bg-success rounded-start ms-1"></button>

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
                        <img class="rounded-circle my-3 border-0" :src="profession.photo" alt="image" height="100px"
                            style="background-color:#4CB147;">
                        <router-link :to="{ name: 'search', params: { id: profession.id } }" class="professions-txt ">
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
            selectedProfession: '',
            active: true,
            professions: '',
            searchProfession: '',
            frequentlyUsedProfessions: [
                {
                    id: 23,
                    name: 'Stomatoloq',
                    photo: require('@/assets/Vector-tooth.png')
                },
                {
                    id: 48,
                    name: 'Dermatoloq',
                    photo: require('@/assets/Vector-dermatoloq.png')

                },
                {
                    id: 21,
                    name: 'Psixiatr',
                    photo: require('@/assets/Vector-psixiatr.png')

                },
                {
                    id: 47,
                    name: 'Oftalmoloq',
                    photo: require('@/assets/Vector-oftalmoloq.png')

                },
                {
                    id: 26,
                    name: 'Terapevt',
                    photo: require('@/assets/Vector-heart.png')

                },
                {
                    id: 11,
                    name: 'Mama-ginekoloq',
                    photo: require('@/assets/Vector-ginekoloq.png')

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
                    this.professions === this.frequentlyUsedProfessions

                    // console.log(this.frequentlyUsedProfessions)


                })
                .catch(e => console.log(e))
        },

        selected(selected) {

            this.searchProfession = selected.name
            this.selectedProfession = selected.id
            console.log(this.selectedProfession)
        },

        searchProfessions() {
            if (this.selectedProfession != '') {
                this.$router.push('/search/' + this.selectedProfession)
            }
        }

    },
};
</script>

<style lang="scss" scoped>
.span-line {
    border-right: 2px solid #A1A1A1;
    height: 80%;
    margin: auto;
}

.input-group {
    border: 1.5px solid #01234B;
    border-radius: 8px;
    background-color: white;
    height: 48px;
}

.professions-box {
    border: 1px solid #4CB147;
    border-radius: 10px;
    height: 200px;
    width: 180px;
    background-color: #F2FFF2A1;
    text-align: center;
    transition: box-shadow .3s;

}

.professions-box:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, .2);

}

.professions-txt {
    text-decoration: none;
    font-weight: 400;
    color: #01234B;
    font-weight: bold;
    font-size: 13px;
}

.icon-button {
    padding-left: 33px;
    background: url("../assets/Vector.svg") no-repeat left;
    ;
    background-size: 17px;
    line-height: 30px;
    background-position: 12px 15px;

    &:focus {
        border-color: #4CB147;
        box-shadow: 0 0 0 0.25rem rgb(76, 177, 71, 15%);
    }
}

.input-all {
    background-color: #fff !important;

    &:focus {
        box-shadow: none;
    }
}

.icon-search {
    padding-top: 12px;
    padding-left: 17px;
    font-size: 15px;
    color: #01234B;
}

.icon-insurance {
    padding-top: 10px;
    font-size: 18px;
    color: #01234B;
}

.icon-location {
    padding-top: 10px;
    font-size: 18px;
    color: #01234B;
}

.contain-img {
    background-image: url('../assets/home.svg');
    height: 60vh;
    width: 100%;
}

.text-position {
    color: #535F72;
    font-size: 11px;
    line-height: 20px;
    font-weight: 500;
}

.link {
    text-decoration: none;
    font-weight: 400;
    color: #101825;
    cursor: pointer;
    padding: 5px 12px;
    margin: 5px;
    border-radius: 8px;
    font-size: 13px;

    &:hover {
        background-color: #DDFDDB;
    }
}
</style>
