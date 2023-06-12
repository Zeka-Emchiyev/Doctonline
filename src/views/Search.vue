<template>
    <div class="container-fluid">
        <div class="container mt-3">
            <div class="my-4">
                <div class="d-none d-md-block col-md-9">
                    <h1 class="animate__animated animate__bounce animate__zoomInDown">
                        Digər axtarışı edin
                    </h1>
                    <div class="input-group justify-content-between">
                        <div class="input-holder dropdown">
                            <i class="bi bi-search icon-search"></i>
                            <input v-model="searchProfession" class="icon dropdown-toggle form-control border-0 input-all"
                                type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                aria-label="First name" placeholder="İxtisaslar üzrə">

                            <div class="dropdown-menu form-control  border overflow-auto"
                                aria-labelledby="dropdownMenuButton1" style="max-height:360px; min-width:280px">
                                <p class="dropdown-item text-position">İxtisaslar üzrə</p>

                                <div class="flex-row flex-wrap ">
                                    <div @click="selected(profession)" class="dropdown-item link"
                                        v-for="profession in filterProfessions">
                                        {{ profession.name }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="input-holder dropdown">
                            <span class="span-line"></span>
                            <i class="bi bi-geo-alt-fill icon-location ms-2"></i>
                            <input v-model="searchRegion" class="icon dropdown-toggle form-control border-0 input-location"
                                type="text" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
                                aria-label="First name" placeholder="Rayonlar üzrə">

                            <div class="dropdown-menu form-control  border overflow-auto"
                                aria-labelledby="dropdownMenuButton2" style="max-height:360px; min-width:280px">
                                <p class="dropdown-item text-position">Rayonlar üzrə</p>

                                <div class="flex-row flex-wrap">
                                    <div @click="select(region)" class="dropdown-item link" v-for="region in filterRegions">
                                        {{ region.name }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="input-holder dropdown">
                            <span class="span-line"></span>
                            <i class="bi bi-shield-check icon-insurance ms-2"></i>

                            <input v-model="searchClinic" class="icon dropdown-toggle form-control border-0 input-insurance"
                                type="text" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false"
                                aria-label="First name" placeholder="Klinikalar üzrə">

                            <div class="dropdown-menu form-control  border overflow-auto"
                                aria-labelledby="dropdownMenuButton3" style="max-height:365px; min-width:280px">
                                <p class="dropdown-item text-position">Klinikalar üzrə</p>

                                <div class="flex-row flex-wrap">
                                    <div @click="selectClinic(clinic)" class="dropdown-item link"
                                        v-for="clinic in filterClinics">
                                        {{ clinic.name }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button @click="searchProfessions()"
                            class="icon-button btn btn-success bg-success rounded-start ms-1"></button>

                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="d-block d-md-none col-md-9">
                        <h1 class="title-txt animate__animated animate__bounce animate__zoomInDown d-none d-md-block">
                            Sizə uyğun həkim <br /> seçin və randevu götürün
                        </h1>
                        <div class="input-group justify-content-between">
                            <div class="input-holder dropdown">
                                <i class="bi bi-search icon-search"></i>
                                <input v-model="searchProfession"
                                       class="icon dropdown-toggle form-control border-0 input-search" type="text"
                                       placeholder="İxtisaslar" data-bs-toggle="modal" data-bs-target="#professionsModal"
                                       disabled>

                            </div>

                            <!-- Modal Professions-->
                            <div class="modal fade " data-bs-backdrop="static" id="professionsModal" tabindex="-1"
                                 aria-labelledby="professionsModalLabel" aria-hidden="true" data-bs-keyboard="false">
                                <div class="modal-dialog modal-dialog-scrollable m-0 h-100">
                                    <div class="modal-content">
                                        <div class="modal-header position-relative">
                                            <i v-if="searchProfession.length > 0" @click="removeProfession()"
                                               class="bi bi-x icon-close position-absolute"></i>

                                            <input v-model="searchProfession"
                                                   class="icon border-0 input-search-profession" type="text"
                                                   placeholder="İxtisaslar">
                                            <button type="button" class="link" data-bs-dismiss="modal">Imtina</button>
                                        </div>
                                        <div class="modal-body">

                                            <p class="dropdown-item text-position">İxtisaslar</p>

                                            <div class="flex-row flex-wrap">
                                                <div @click="selected(profession)" class="dropdown-item text-link"
                                                     v-for="profession in filterProfessions">
                                                    {{ profession.name }}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="input-holder dropdown">
                                <span class="span-line"></span>
                                <i class="bi bi-geo-alt-fill icon-location ms-2"></i>

                                <input v-model="searchRegion"
                                       class="icon dropdown-toggle form-control border-0 input-location" type="text"
                                       placeholder="Rayonlar üzrə" data-bs-toggle="modal" data-bs-target="#regionsModal"
                                       disabled>

                            </div>


                            <!-- Modal Regions-->
                            <div class="modal fade" data-bs-backdrop="static" id="regionsModal" tabindex="-1"
                                 aria-labelledby="regionsModalLabel" aria-hidden="true" data-bs-keyboard="false">
                                <div class="modal-dialog modal-dialog-scrollable m-0 h-100">
                                    <div class="modal-content">
                                        <div class="modal-header position-relative">
                                            <i v-if="searchRegion.length > 0" @click="removeRegion()"
                                               class="bi bi-x icon-close position-absolute"></i>
                                            <input v-model="searchRegion" class="icon border-0 input-search-profession"
                                                   type="text" placeholder="Rayonlar üzrə">
                                            <button type="button" class="link" data-bs-dismiss="modal">Imtina</button>
                                        </div>
                                        <div class="modal-body">

                                            <p class="dropdown-item text-position">Rayonlar üzrə</p>

                                            <div class="flex-row flex-wrap">
                                                <div @click="select(region)" class="dropdown-item text-link"
                                                     v-for="region in filterRegions">
                                                    {{ region.name }}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="input-holder dropdown">
                                <span class="span-line"></span>
                                <i class="bi bi-shield-check icon-insurance ms-2"></i>

                                <input v-model="searchClinic"
                                       class="icon dropdown-toggle form-control border-0 input-insurance" type="text"
                                       placeholder="Klinikalar üzrə" data-bs-toggle="modal" data-bs-target="#clinicsModal"
                                       disabled>
                            </div>

                            <button @click="searchProfessions()" class="icon-button btn btn-success rounded-start">
                                <span class="d-block d-md-none" style="color: #01234B;">Axtar</span>
                            </button>
                        </div>

                        <!-- Modal Clinics-->
                        <div class="input-modal modal fade " data-bs-backdrop="static" id="clinicsModal" tabindex="-1"
                             aria-labelledby="clinicsModalLabel" aria-hidden="true" data-bs-keyboard="false">
                            <div class="modal-dialog modal-dialog-scrollable m-0 h-100">
                                <div class="modal-content">
                                    <div class="modal-header position-relative">
                                        <i v-if="searchClinic.length > 0" @click="removeClinic()"
                                           class="bi bi-x icon-close position-absolute"></i>C
                                        <input v-model="searchClinic" class="icon border-0 input-search-profession"
                                               type="text" placeholder="Klinikalar üzrə">
                                        <button type="button" class="link" data-bs-dismiss="modal">Imtina</button>
                                    </div>
                                    <div class="modal-body">

                                        <p class="dropdown-item text-position">Klinikalar üzrə</p>

                                        <div class="flex-row flex-wrap">
                                            <div @click="selectClinic(clinic)" class="dropdown-item text-link"
                                                 v-for="clinic in filterClinics">
                                                {{ clinic.name }}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div v-for="doctor in paginatedDoctors" class="hold-doctor">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row mt-4">
                            <div class="col-3 col-lg-2">
                                <div class="rounded-circle border profile-image" :style="{
                                                                        'background-image': 'url(' + `${$apiUrl}/${doctor.profile_photo}` + ')'
                                                                    }">
                                </div>
                                <router-link class="text-decoration-none profile-link"
                                    :to="{ name: 'doctor', params: { id: doctor.id } }">
                                    Profilə bax
                                </router-link>
                            </div>
                            <div class="col-9 col-lg-10">
                                <router-link class="text-decoration-none rout-link"
                                    :to="{ name: 'doctor', params: { id: doctor.id } }">
                                    {{ doctor.fullname }}
                                </router-link>
                                <span class="text-profession" style="display: block;">{{
                                                                    doctor.profession
                                                                    }}</span>

                                <span class="city mb-1">
                                    <i class="bi bi-geo-alt-fill"></i>
                                    {{ doctor.address }}
                                </span>
                                <span class="city">{{ doctor.clinic }}</span>
<!--                                <i class="bi bi-shield-check icon-ins pe-1"></i>-->
<!--                                <p class="insurance">Paşa siğorta</p>-->

                                <!-- <span class="city ">{{ doctor.experiences }}</span> -->
                                <!-- <div><i class="bi bi-star-fill star"></i>
                                    <span class="star-assess mx-1">4.86</span>
                                    <span class="text-worth">(254 dəyərləndirmə )</span>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <Calendar2
                            @dateSelected="showSelectedAppointmentModal"
                            :doctor="doctor"
                            :selected-doctor="selectedDoctor"
                            @showMore="showMoreSlotsForDoctor"
                        />
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center mt-5">
                <pagination class="search-pagination" v-model="pagination.page" :records="doctors.length"
                    :per-page="pagination.perPage" @paginate="myCallback" :options="pagination.options" />
            </div>

        </div>

        <MoreSlotsModal
            :show="showMoreSlotsModal"
            :doctor="moreSlotsDoctor"
            @closeModal="showMoreSlotsModal = false"
            @dateSelected="showSelectedAppointmentModal"
        />

        <!-- Modal -->
            <div class="modal fade" id="takeAppointmentModal" tabindex="-1" aria-labelledby="takeAppointmentModalLabel"
            aria-hidden="hidden">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title head ms-3" id="takeAppointmentModalLabel">Doctonline</h5>
                    </div>
                    <div class="modal-body position-relative">
                        <button type="button" class="btn-close position-absolute" style="right: 15px; opacity: 0.2;"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="container align-items-center justify-content-center my-4 pt-md-3">
                            <div class="row">
                                <div class="col-3 col-md-2">
                                    <div class="profile-image rounded"
                                         :style="{
                                            'background-image': 'url(' + `${$apiUrl}/${selectedDoctor.profile_photo}` + ')'
                                         }">
                                    </div>
                                </div>
                                <div class="col-9 col-md-10">
                                    <h6 class="fullname">{{ selectedDoctor.fullname }}, {{ selectedDoctor.profession }} </h6>
                                    <p  class="time-zone"> {{ moment(selectedDay).format('DD MMMM YYYY dddd') }} - {{ selectedTime }}</p>
                                    <p>{{ selectedDoctor.clinic }}</p>
                                </div>

                                <div class="col-8">
                                    <label class="doc-profession-modal mb-2 mt-2" for="">Ad, Soyad</label>
                                    <input v-model="form.fullname" :class="{'form-control':true, 'input-error': !formValidation.fullname}" type="text" placeholder="Firəngiz Vahabova">
                                </div>
                                <div class="mb-1 col-8 mt-2 doc-profession-modal">
                                    <label class="mb-2 " for="">Mobil nömrə</label>
                                    <input v-model="form.phone" :class="{'form-control':true, 'input-error': !formValidation.phone}" type="number" placeholder="0501234567">
                                </div>
                            </div>
                            <button type="button" class="col-12 btn btn-primary mt-5" @click="createAppointment">
                                <div class="doc-profession-button">
                                    Randevunu təsdiqləyin
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal result -->
        <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content h-100">
                    <div class="modal-header">
                        <router-link to="/" class="text-decoration-none" >
                            <h5 class="modal-title head ms-3" id="takeAppointmentModalLabel" data-bs-dismiss="modal">Doctonline</h5>
                        </router-link>
                    </div>
                    <div class="modal-body mt-4">
                        <div class="d-flex gap-3">
                            <div class="">
                                <div class="profile-image rounded" :style="{
                                        'background-image': 'url(' + `${$apiUrl}/${selectedDoctor.profile_photo}` + ')'
                                      }">
                                </div>
                            </div>
                            <div class="">
                                <h6 class="fullname">{{ selectedDoctor.fullname }}, {{ selectedDoctor.profession }} </h6>
                                <div class="time-zone mb-2"> {{ moment(selectedDay).format('DD MMMM YYYY dddd') }} - {{ selectedTime }}</div>
                                <div class="doctor-clinic">{{ selectedDoctor.clinic }}</div>
                            </div>
                        </div>
                        <p class="ms-4 fullname mt-4">
                            <img class="pe-2" src="@/assets/icons/check-circle.svg" alt="">
                            {{ result.message }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from 'vue-pagination-2'
import Navbar from '@/components/Navbar.vue';
import axios from 'axios'
import Calendar from "@/components/Calendar"
import 'moment/locale/az';
import moment from 'moment'
import Calendar2 from "@/components/Calendar2.vue";
import MoreSlotsModal from "@/components/MoreSlotsModal.vue";
import {isWeekend} from "@/helper/util";


export default {
    name: 'ProjectsSearch',
    components: {
      MoreSlotsModal,
      Calendar2,
        Navbar, Pagination
    },
    data() {
        return {
            selectedProfession: '',
            doctors: [],
            professions: '',
            searchProfession: '',
            searchRegion: '',
            selectedRegion: '',
            clinics: '',
            searchClinic: '',
            selectedClinic: '',
            regionsDoctors: null,
            regions: '',
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
            formValidation:{
                phone: true,
                fullname: true
            },
            selectedDoctor: {},
            appointmentDate: null,
            selectedDate: null,
            moment,
            result: '',
            pagination: {
                perPage: 15,
                page: 1,
                options: {
                    texts: {
                        count: '',
                        first: '',
                        last: ''
                    },
                }
            },
            showMoreSlotsModal: false,
            moreSlotsDoctor: null,
            isSameDoctorTimeSelected: true,
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
        },
        filterRegions() {
            let filtered = this.regions
            if (this.searchRegion != '') {
                filtered = this.regions.filter(region => {
                    let regionNameLowerCase = region.name.toLowerCase()
                    let searchRegionLowerCase = this.searchRegion.toLowerCase()
                    return regionNameLowerCase.includes(searchRegionLowerCase)
                })
            }
            return filtered
        },
        filterClinics() {
            let filtered = this.clinics
            if (this.searchClinic != '') {
                filtered = this.clinics.filter(clinic => {
                    let clinicNameLowerCase = clinic.name.toLowerCase()
                    let searchClinicLowerCase = this.searchClinic.toLowerCase()
                    return clinicNameLowerCase.includes(searchClinicLowerCase)
                })
            }
            return filtered
        },
        paginatedDoctors() {
            const startIndex = this.pagination.perPage * (this.pagination.page - 1);
            const endIndex = startIndex + this.pagination.perPage;
            return this.doctors.slice(startIndex, endIndex);
        }
    },

    mounted() {
        this.professionApi()
        this.regonsApi()
        this.clinicsApi()
        const profId = this.$route.query['prof-id'] || ''
        const regionId = this.$route.query['region-id'] || ''
        const clinicId = this.$route.query['clinic-id'] || ''
        this.getDoctorsForProfessionAndRegion(profId, regionId, clinicId)

        this.myModal = new bootstrap.Modal(document.getElementById('takeAppointmentModal'), { backdrop: 'static', keyboard: false })
        this.successModal = new bootstrap.Modal(document.getElementById('successModal'), { backdrop: 'static', keyboard: false })
        this.myModalProfessions = new bootstrap.Modal(document.getElementById('professionsModal'))
        this.myModalregions = new bootstrap.Modal(document.getElementById('regionsModal'))
        this.myModalclinics = new bootstrap.Modal(document.getElementById('clinicsModal'))
    },

  watch: {
    searchProfession(value) {
      if (!value) {
        this.selectedProfession = value;
      }
    },
    searchRegion(value) {
      if (!value) {
        this.selectedRegion = value;
      }
    },
    searchClinic(value) {
      if (!value) {
        this.selectedClinic = value;
      }
    }
  },
    methods: {
        removeProfession() {
          this.searchProfession = ''
        },
        removeRegion() {
          this.searchRegion = ''
        },
        removeClinic() {
          this.searchClinic = ''
        },
        showMoreSlotsForDoctor(doctor) {
          this.moreSlotsDoctor = doctor;
          this.showMoreSlotsModal = true;
        },
        myCallback(page) {
            console.log(this.pagination.page)
            window.scroll(0, 0)
        },

        professionApi() {
            axios.get(this.$apiUrl + "/api-professions")
                .then(response => {
                    this.professions = response.data
                    // check if prof id exist. if so then set.
                    // Region and insurance selection also should be added like this way
                    if (this.$route.query['prof-id']) {
                        const selectedProfession = this.professions.find(pro => pro.id === Number(this.$route.query['prof-id']))
                        if (selectedProfession) {
                            this.selected(selectedProfession)
                        }
                    }
                    // console.log(this.professions)
                })
                .catch(e => console.log(e))
        },
        regonsApi() {
            axios.get(this.$apiUrl + '/api-regions')
                .then(resp => {
                    this.regions = resp.data

                    if (this.$route.query['region-id']) {
                        const selectedRegion = this.regions.find(region => region.id === Number(this.$route.query['region-id']))
                        if (selectedRegion) {
                            this.select(selectedRegion)
                        }
                    }
                })
                .catch(e => console.log(e))
        },
        clinicsApi() {
            axios.get(this.$apiUrl + '/api-clinics')
                .then(resp => {
                    this.clinics = resp.data
                    if (this.$route.query['clinic-id']) {
                        const selectedClinic = this.clinics.find(clinic => clinic.id === Number(this.$route.query['clinic-id']))
                        if (selectedClinic) {
                            this.selectClinic(selectedClinic)
                        }
                    }
                    // console.log(this.clinics)
                })
        },
        getDoctorsForProfessionAndRegion(profId, regionId, clinicId) {
            // const profId = this.$route.query['prof-id'] || ''
            // const regionId = this.$route.query['region-id'] || ''
            // const clinicId = this.$route.query['clinic-id'] || ''
            const queryLink = `${this.$apiUrl}/api-doctors?prof-id=${profId}&region-id=${regionId}&clinic-id=${clinicId}`
            axios.get(queryLink)
                .then(response => {
                    // this.doctors = response.data
                    if (response.data != null) {
                        this.doctors = response.data
                    }
                })
                .catch(e => console.log(e))
        },
        select(selected) {
          this.searchRegion = selected.name
          this.selectedRegion = selected.id
          this.myModalregions.hide()
        },
  
        selected(selected) {
          this.searchProfession = selected.name
          this.selectedProfession = selected.id
          this.myModalProfessions.hide()
        },
        selectClinic(selected) {
          this.searchClinic = selected.name
          this.selectedClinic = selected.id
          this.myModalclinics.hide()
        },

        searchProfessions() {
          console.log(this.selectedProfession)
            this.getDoctorsForProfessionAndRegion(this.selectedProfession, this.selectedRegion, this.selectedClinic)
            this.$router.push({ path: '/search', query: { 'prof-id': this.selectedProfession, 'region-id': this.selectedRegion, 'clinic-id': this.selectedClinic } })
        },
        showSelectedAppointmentModal(data) {
            this.selectedDoctor = data.doctor
            this.selectedTime = data.time
            this.selectedDay = data.date
            this.myModal.show()
        },
        formValidationClass(){
            this.formValidation = {
                phone: !!this.form.phone,
                fullname: !!this.form.fullname,
            }
            return Object.values(this.formValidation).every((v) => v)
        },
        createAppointment() {
            let is_valid = this.formValidationClass()
            if (is_valid){
                this.form.doctor_id = this.selectedDoctor.id
                this.form.date = moment(this.selectedDay).format('YYYY-MM-DD HH:mm')
                this.form.time = this.selectedTime
                    axios.post(this.$apiUrl + "/api-appointments/create", this.form)
                        .then((resp) => {
                            console.log(resp)
                            this.result = resp.data
                            this.myModal.hide()
                            this.successModal.show()
                        })
                        .catch(e => console.log(e))
                this.form.fullname = ''
                this.form.phone = ''
            }
        },

    },
};
</script>

<style lang="scss" scoped>
.input-error {
    border:1px solid red;
}
#takeAppointmentModal {
    .profile-image {
        height: 80px;
        width: 70px;
        background-size: cover;
    }
  .modal-content {
    height: 100%;
  }
}
.doctor-clinic{
    color: #596573;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
}
.fullname {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #01234B;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0;
    /* <-- Apparently some margin are still there even though it's hidden */
}
.doc-profession-modal {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    color: #01234B;
    font-family: Montserrat;
}
.doc-profession-button{
    font-size: 20px;
    margin-bottom: 12px;
    margin-top: 12px;
    line-height: 20px;
    font-weight: 500;
    color: #01234B;
    font-family: Montserrat;
}
.time-zone{
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    color: #01234B;
    line-height: 20px;
}
.search-pagination ::v-deep {

    li.VuePagination__pagination-item-prev-chunk,
    .VuePagination__pagination-item-next-chunk {
        display: none !important;
    }

    .page-link.active {
        background-color: #4CB147;
    }

    li.VuePagination__pagination-item-prev-page a {
        visibility: hidden;
    }

    li.VuePagination__pagination-item-prev-page {
        background-image: url(../assets/icons/icon-back.svg);
        background-repeat: no-repeat;
        background-size: 15px;
        background-position: center;
        border: 1px solid #dee2e6;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        height: 37.5px;
        cursor: pointer;

        &:hover {
            color: #4CB147 !important;
        }
    }

    li.VuePagination__pagination-item-next-page a {
        visibility: hidden;
    }

    li.VuePagination__pagination-item-next-page {
        background-image: url(../assets/icons/next-icon.svg);
        background-repeat: no-repeat;
        background-size: 15px;
        background-position: center;
        border: 1px solid #dee2e6;
        border-left: 0;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        height: 37.5px;
        cursor: pointer;

    }

    .pagination>li>a {
        color: #01234B;
    }

}

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
    padding-left: 17px;
    font-size: 15px;
    color: #01234B;
}

.icon-insurance {
    font-size: 18px;
    color: #01234B;
}

.icon-location {
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
    background-position: 15px 15px;
    border: none;

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
    flex-wrap: nowrap;

    .input-holder {
        display: flex;
        align-items: center;
        width: 100%;
    }
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

.profile-image {
    height: 80px;
    width: 70px;
    background-size: cover;
    background-position: center top;
}

@media screen and (max-width: 576px) {
    .input-group {
        border: none;
    }
    .doc-profession-button{
        font-size: 16px;
    }
    .time-zone{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }

    #takeAppointmentModal {
        .modal-dialog {
            margin: 0;
            height: 100%;
        }
    }
    #successModal {
        .modal-dialog {
            margin: 0;
            height: 100%;
        }
    }
    #randevuModal {
        .modal-dialog {
            margin: 0;
            height: 100%;
        }
    }
    .doc-profession-modal {
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
    }
    .profile-image {
        width: 75px;
        height: 75px;
        font-weight: 400;
        line-height: 17px;
    }

    .text-profession {
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
        display: block;
        margin-top: 5px;
        white-space: nowrap;
    }
}
@media screen and (max-width: 576px) {
  .icon-close {
    right: 95px;
    color: #01234B;
    font-size: 20px;
  }

  .link {
    text-decoration: none;
    font-weight: 400;
    color: #01234B;
    cursor: pointer;
    padding: 1px 12px;
    // margin: 5px;
    // border-radius: 8px;
    font-size: 16px;
    background-color: #fff;
    border: none !important;

    &:hover {
      background-color: #DDFDDB;
    }
  }

  .text-link {
    text-decoration: none;
    font-weight: 400;
    color: #01234B;
    cursor: pointer;
    padding: 1.5px 12px;
    font-size: 18px;
    background-color: #fff;
  }

  .modal-dialog-scrollable .modal-body {
    overflow-x: hidden;
    height: 100vh;
    width: 100vh;
  }



  .text-position {
    color: #535F72;
    font-size: 13px;
    line-height: 20px;
    font-weight: 500;
    margin: 0;
    padding-left: 13px;
    padding-bottom: 6px;
  }

  .dropdown-menu {
    position: fixed !important;
    margin-top: 0;
    margin-left: 0;
    min-width: auto;
    max-height: none !important;
  }

  .icon-search {
    display: none !important;
    padding-top: 12px;
    padding-left: 17px;
    font-size: 15px;
    color: #01234B;
  }

  .btn-success {
    background-color: #8DEB8B !important;
  }

  .icon-insurance {
    display: none !important;
    padding-top: 10px;
    font-size: 18px;
    color: #01234B;
  }

  .icon-location {
    display: none !important;
    padding-top: 10px;
    font-size: 18px;
    color: #01234B;
  }

  .span-line {
    // border-bottom: 1px solid #A1A1A1;
    margin: auto;
    display: none;
    // padding-left: 100%;
  }

  .icon-button {
    padding-left: 0;
    padding-right: 0;
    background-image: none;
    width: 100%;
    // background-size: 17px;
    display: block;
    text-align: center;
    margin-top: 25px;


    line-height: 30px;
    // background-position: 12px 15px;

    &:focus {
      border-color: #4CB147;
      box-shadow: 0 0 0 0.25rem rgb(76, 177, 71, 15%);
    }
  }

  .input-search {
    border-bottom: 1px solid #D2D1D1 !important;
    background-color: #fff !important;
    width: 100% !important;
    border-radius: unset;
    // padding: 10px !important;
    // text-align: center;
    background: url(../assets/icons/Vector-search.svg) no-repeat scroll 1px 14px;
    padding-left: 30px;


    &:focus {
      box-shadow: none;
    }
  }

  .input-search-profession {
    border-right: 1px solid #D2D1D1 !important;
    background-color: #fff !important;
    width: 100% !important;
    border-radius: unset;
    // padding: 10px !important;
    // text-align: center;
    background: url(../assets/icons/Vector-search.svg) no-repeat scroll 1px 8px;
    padding-left: 30px;
    outline: none;
  }

  .input-location {
    border-bottom: 1px solid #D2D1D1 !important;
    background-color: #fff !important;
    width: 100% !important;
    border-radius: unset;
    // padding: 10px !important;
    // text-align: center;
    background: url(../assets/icons/Vector-location.svg) no-repeat scroll 1px 12px;
    padding-left: 30px;


    &:focus {
      box-shadow: none;
    }
  }

  .input-insurance {
    border-bottom: 1px solid #D2D1D1 !important;
    background-color: #fff !important;
    width: 100% !important;
    // padding: 10px !important;
    // text-align: center;
    border-radius: unset;

    background: url(../assets/icons/Group.svg) no-repeat scroll 1px 12px;
    padding-left: 30px;


    &:focus {
      box-shadow: none;
    }
  }

  .search-content {
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .input-group {
    border-radius: 8px;
    background-color: white;
    height: auto;
    display: block;
    width: 100%;
    padding: 30px 15px;
  }

  .input-group i {
    padding: 10px;
    position: absolute;
    text-align: center;
    display: block;
    z-index: 1;
    // background-color: #4CB147;
  }

  .contain-img {
    background-image: none;
    background-color: #F5FFF5;
    width: 100%;
    margin-bottom: 34px;
    padding-bottom: 34px;
    height: auto;
  }

  .profession-container {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .title-txt {
    font-size: 26px;
    padding-left: 10px;
  }

  .profession-title {
    font-size: 22px;
    margin-bottom: 0;

  }

  .professions-box {
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    height: 150px;
    width: 150px;
    background-color: #F2FFF2A1;
    text-align: center;
    transition: box-shadow .3s;

  }

  .profession-photo {
    height: 70px;
    border: none;
    background-color: #4CB147;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .professions-txt {
    text-decoration: none;
    font-weight: 500;
    color: #01234B;
    font-weight: bold;
    font-size: 14px;

  }
}
</style>
