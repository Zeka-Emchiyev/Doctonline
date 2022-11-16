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
                                    @click.native="getDoctorsForProfession" class="dropdown-item link">
                                    {{ profession.name }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 col-md-9">
                <div v-for="doctor in doctors" class="border rounded mb-2">

                    <div class="row mt-4 p-3">
                        <div class="col-3 col-lg-2">
                            <div class="position-relative rounded-circle border img-profile">
                                <img class="rounded-circle" style="height: 100%; width: 100%;"
                                    :src="`${$apiUrl}/${doctor.profile_photo}`" alt="">
                                <!-- <span
                                            class="position-absolute top-0 p-2 bg-light border border-light rounded-circle">
                                            <i class="bi bi-heart"></i>
                                        </span> -->
                            </div>


                        </div>
                        <div class="col-9 col-lg-10">
                            <span class="text-profession" style="display: block;">{{ doctor.profession }}</span>
                            <router-link class="text-decoration-none rout-link"
                                :to="{ name: 'doctor', params: { id: doctor.id } }">
                                {{ doctor.fullname }}
                            </router-link>

                            <span class="city mb-1">{{ doctor.address }} {{ doctor.city }}</span>
                            <span class="city fw-bold">{{ doctor.clinic }}</span>
                            <span class="city ">{{ doctor.experiences }}</span>
                            <div><i class="bi bi-star-fill star"></i>
                                <span class="star-assess mx-1">4.86</span>
                                <span class="text-worth">(254 dəyərləndirmə )</span>
                            </div>
                        </div>
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
        this.getDoctorsForProfession()
    },

    methods: {
        professionApi() {
            axios.get(this.$apiUrl + "/api-professions")
                .then(response => {
                    this.professions = response.data
                    // console.log(this.professions)
                })
                .catch(e => console.log(e))
        },

        getDoctorsForProfession() {
            axios.get(this.$apiUrl + "/api-doctors/profession/" + this.$route.params.id)
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

.rout-link {
    color: black;
    font-size: 24px;

}

.text-profession {
    color: #848b98;
}

.city {
    font-size: 16px;
    line-height: 24px;
    display: block;
}

.star {
    color: #ffad0d;
    font-size: 24px;

}

.star-assess {
    color: #ffad0d;
    font-size: 20px;

}

.text-worth {
    color: #273142;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
}

// .profile {
//     color: #4cb147;

// }

.img-profile {
    width: 104px;
    height: 104px;
}

@media screen and (max-width: 576px) {
    .img-profile {
        width: 78px;
        height: 78px;
    }

    .text-profession {
        color: #848b98;
        font-size: 14px;
    }

    .rout-link {
        color: black;
        font-size: 16px;
    }

    .star {
        color: #ffad0d;
        font-size: 20px;

    }

    .star-assess {
        color: #ffad0d;
        font-size: 16px;

    }

    .text-worth {
        color: #273142;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
    }

    .city {
        font-size: 12px;
        line-height: 24px;
    }
}
</style>
