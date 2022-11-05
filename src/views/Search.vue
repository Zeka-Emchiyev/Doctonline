<template>
    <div class="container mt-3">

        <div class="row my-4">
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

        <div class="row">
            <div class="col-md-9 col-sm-12 border rounded mb-2">
                <div class="row mt-4">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-3">
                                <div class="position-relative rounded-circle border" style="width:104px; height: 104px">
                                    <img class="rounded-circle" style="height: 100%;"
                                        src="../assets/7f7c19d5-51e4-4c6c-ac41-527b59b41892.jpg" alt="">
                                    <span
                                        class="position-absolute top-0 p-2 bg-light border border-light rounded-circle">
                                        <i class="bi bi-heart"></i>
                                    </span>
                                </div>
                                <div v-for="doctor in doctors">
                                    <router-link class="text-decoration-none"
                                        :to="{ name: 'doctor', params: { id: doctor.id } }">
                                        Profile bax
                                    </router-link>
                                </div>

                            </div>
                            <div class="col-9" v-for="doctor in doctors">
                                <p>{{ doctor.profession }}</p>
                                <router-link class="text-decoration-none"
                                    :to="{ name: 'doctor', params: { id: doctor.id } }">
                                    {{ doctor.fullname }}
                                </router-link>
                                <p>{{ doctor.city }}</p>
                                <p><i class="bi bi-star"></i>
                                    <span>4.86</span>
                                    (254 dəyərləndirmə )
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        Calendar
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                google map
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ProjectsSearch',

    data() {
        return {
            professions: '',
            doctors: '',
            searchProfession: ''
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
        this.professionApi()
        this.doctorsApi()
    },

    methods: {
        professionApi() {
            axios.get("http://159.223.22.111/api-professions")
                .then(response => {
                    this.professions = response.data
                    // console.log(this.professions)
                })
                .catch(e => console.log(e))
        },

        doctorsApi() {
            axios.get("http://159.223.22.111/api-doctors/" + this.$route.params.id)
                .then(response => {
                    this.doctors = response.data
                    console.log(this.doctors)
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
</style>