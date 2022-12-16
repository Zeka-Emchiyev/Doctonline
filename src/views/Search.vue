<template>
    <div class="container-fluid">
        <Navbar></Navbar>
        <div class="container mt-3">
            <div class="row my-4">

                <div class="d-none d-md-block col-md-8">
                    <h1 class="animate__animated animate__bounce animate__zoomInDown">
                        Digər axtarışı edin
                    </h1>
                    <div class="input-group dropdown">
                        <i class="bi bi-search icon-search"></i>
                        <input v-model="searchProfession" class="icon dropdown-toggle form-control border-0 input-all"
                            type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
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

                <!-- <div class=" col-10 col-md-6 ">
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
                </div> -->
            </div>


            <div v-for="doctor in doctors" class="hold-doctor">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row mt-4">
                            <div class="col-3 col-lg-2">
                                <div class="rounded-circle border img-profile">
                                    <img class="rounded-circle" style="height: 100%; width: 100%;"
                                        :src="`${$apiUrl}/${doctor.profile_photo}`" alt="">
                                    <router-link class="text-decoration-none profile-link"
                                        :to="{ name: 'doctor', params: { id: doctor.id } }">
                                        Profilə bax
                                    </router-link>
                                </div>


                            </div>
                            <div class="col-9 col-lg-10">

                                <router-link class="text-decoration-none rout-link"
                                    :to="{ name: 'doctor', params: { id: doctor.id } }">
                                    {{ doctor.fullname }}
                                </router-link>
                                <span class="text-profession" style="display: block;">{{ doctor.profession
                                }}</span>

                                <span class="city mb-1">{{ doctor.address }} </span>
                                <span class="city fw-bold">{{ doctor.clinic }}</span>
                                <i class="bi bi-shield-check icon-ins pe-1"></i>
                                <p class="insurance">Paşa siğorta</p>

                                <!-- <span class="city ">{{ doctor.experiences }}</span> -->
                                <!-- <div><i class="bi bi-star-fill star"></i>
                                    <span class="star-assess mx-1">4.86</span>
                                    <span class="text-worth">(254 dəyərləndirmə )</span>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <Calendar @dateSelected="showSelectedAppointmentModal" :doctor="doctor"></Calendar>

                    </div>
                </div>
            </div>

        </div>

        <!-- Modal -->
        <div class="modal fade" id="takeAppointmentModal" tabindex="-1" aria-labelledby="takeAppointmentModalLabel"
            aria-hidden="hidden">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="takeAppointmentModalLabel">Randevu detallari</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container d-flex align-items-center justify-content-center my-5 ">
                            <div class="row">
                                <div class="col-4">
                                    <img class="rounded-circle" style="height: 100px; width: 100px"
                                        :src="`${$apiUrl}/${selectedDoctor.profile_photo}`" alt="">
                                </div>
                                <div class="col-8">
                                    <h6>{{ selectedDoctor.fullname }}, {{ selectedDoctor.profession }} </h6>
                                    <p> {{ moment(selectedDay).format('DD MMMM YYYY dddd') }} - {{
                                            selectedTime
                                    }}</p>
                                    <p>{{ selectedDoctor.clinic }}</p>
                                </div>

                                <div class="col-8 mt-3">
                                    <label for="">Ad, Soyad</label>
                                    <input v-model="form.fullname" class="form-control" type="text">
                                </div>
                                <div class="col-8 mt-2" width="100%">
                                    <label for="">Mobil nömrə</label>
                                    <input v-model="form.phone" class="form-control" type="text">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success" @click="createAppointment" data-bs-toggle="modal"
                            data-bs-target="#successModal">
                            Təsdiqlə
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal result -->
        <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="clinic-border text-center"> <i style="color: #4CB147; "
                                class="bi bi-check-circle-fill d-block fs-1 "></i>
                            {{ result.message }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from 'axios'
import Calendar from "@/components/Calendar"
import 'moment/locale/az';
import moment from 'moment'


export default {
    name: 'ProjectsSearch',

    data() {
        return {
            selectedProfession: '',
            active: true,
            professions: '',
            doctors: '',
            searchProfession: '',
            selectedDay: null,//moment().toDate().toISOString(),
            selectedTime: '',
            form: {
                date: null,
                doctor_id: null,
                email: null,
                fullname: null,
                phone: null,
                time: null,
            },
            selectedDoctor: {},
            appointmentDate: null,
            selectedDate: null,
            moment,
            result: '',
        };
    },
    components: {
        Navbar, Calendar
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
        this.myModal = new bootstrap.Modal(document.getElementById('takeAppointmentModal'))
        this.successModal = new bootstrap.Modal(document.getElementById('successModal'))
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
                    // console.log(this.doctors)
                })
                .catch(e => console.log(e))
        },
        selected(selected) {

            this.searchProfession = selected.name
            this.selectedProfession = selected.id
            // console.log(this.selectedProfession)
        },
        searchProfessions() {
            if (this.selectedProfession != '') {
                this.$router.push('/search/' + this.selectedProfession)
                this.getDoctorsForProfession()

            }
        },
        setDay() {
            console.log('day')
        },
        setTime() {
            console.log('time')
        },
        showSelectedAppointmentModal(data) {
            this.selectedDoctor = data.doctor
            this.selectedDate = data.time
            this.selectedDay = data.date
            this.myModal.show()
            // console.log(data)
        },
        createAppointment() {
            this.form.doctor_id = this.selectedDoctor.id
            this.form.date = moment(this.selectedDay).format('YYYY-MM-DD HH:mm')
            this.form.time = this.selectedTime
            if (this.form.fullname !== '' && this.form.phone !== '') {
                axios.post(this.$apiUrl + "/api-appointments/create", this.form)
                    .then((resp) => {
                        // console.log(resp)
                        this.result = resp.data
                        // this.myModal.show()
                    })
                    .catch(e => console.log(e))
            }
            this.form.fullname = ''
            this.form.phone = ''

        },

    },
};
</script>

<style lang="scss" scoped>
.hold-doctor {
    // border-top: 1px solid #EDF0F4;
    border-bottom: 1.5px solid #EDF0F4;
    // padding-top: 15px;
    padding-bottom: 15px;
}

.text-position {
    color: #535F72;
    font-size: 11px;
    line-height: 20px;
    font-weight: 500;
    margin: 0;
}

.profile-link {
    color: #0072DB;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 18px;
}

.insurance {
    font-size: 15px;
    font-weight: 500;
    color: #01234B;
    display: inline;
}

.icon-ins {
    font-size: 12px;
    color: #0072DB;
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


.span-line {
    border-right: 2px solid #A1A1A1;
    height: 80%;
    margin: auto;
}

.professions-txt {
    text-decoration: none;
    font-weight: 400;
    color: #01234B;
    font-weight: bold;
    font-size: 13px;
}

.icon-button {
    background-color: rgba(31, 193, 23, 0.63) !important;
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

.input-group {
    border: 1.5px solid #01234B;
    border-radius: 8px;
    background-color: white;
    height: 48px;
}

.link {
    text-decoration: none;
    font-weight: 400;
    color: #01234B;
    cursor: pointer;
    padding: 1px 12px;
    // margin: 5px;
    border-radius: 8px;
    font-size: 13px;

    &:hover {
        background-color: #DDFDDB;
    }
}

.rout-link {
    color: #01234B;
    font-weight: 600;
    font-size: 24px;

}

.text-profession {
    color: #01234B;
    font-size: 16px;
    font-weight: 500;
}

.city {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    display: block;
    color: #01234B;
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
        width: 75px;
        height: 75px;
        font-weight: 400;
        line-height: 17px;
    }

    .text-profession {
        color: #848b98;
        font-size: 15px;
    }

    .rout-link {
        color: #01234B;
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

    .profile-link {
        color: #0072DB;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        padding-left: 13px;
    }
}
</style>
