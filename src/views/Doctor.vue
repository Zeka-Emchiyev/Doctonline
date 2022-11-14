<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-3 col-sm-4 col-md-5 col-lg-4 col-xl-3 ">
            <img class="image rounded-circle" :src="`${$apiUrl}/${doctor.profile_photo}`" alt="profile picture">
          </div>

          <div class="col-9 col-sm-8 col-md-7 col-lg-8 col-xl-9 ">
            <p class="text-success doc-profession">{{ doctor.profession }}</p>
            <h5 class="name-surname">{{ doctor.fullname }}</h5>
            <div class="d-none d-md-flex flex-row mb-2">
              <p class="city">{{ doctor.city }}</p>

            </div>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success col-sm-12 d-md-none" data-bs-toggle="modal"
              data-bs-target="#randevuModal">
              Randevu al </button>

            <!-- Modal -->
            <div class="modal fade" id="randevuModal" tabindex="-1" aria-labelledby="randevuModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="row px-3 p-3">
                    <div class="col-4">
                      <img class="image rounded-circle" :src="`${$apiUrl}/${doctor.profile_photo}`"
                        alt="profile picture">
                    </div>
                    <div class="col-8">
                      <p class="text-success doc-profession">{{ doctor.profession }}</p>
                      <h5 class="name-surname">{{ doctor.fullname }}</h5>
                    </div>

                  </div>
                  <div class="modal-body">
                    <div class="container">
                      <p>Görüş növü</p>
                      <div class="row">
                        <div class="col-6">
                          <div class="container btn btn-outline-success">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                              <img class="ms-2" src="../assets/16px.png" alt="">
                              <p class="mb-0" style="font-size: 12px;">Onlayn randevu</p>
                              <i class="bi bi-info-circle ms-2"></i>
                            </div>
                          </div>

                        </div>
                        <div class="col-6">
                          <div class="container btn btn-outline-success">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                              <img class="ms-2" src="../assets/17px.png" alt="">
                              <p class="mb-0" style="font-size: 12px;">Klinikada randevu</p>
                              <i class="bi bi-info-circle ms-2"></i>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div class="location my-3">
                        <p class="location-content my-3"> <i class="bi bi-check-circle-fill mx-3 location-icon"></i>
                          {{ doctor.clinic }}</p>

                      </div>
                      <div>
                        <small>Randevu saatını seçin</small>
                      </div>

                      <div>
                        <Carousel :per-page="4" :navigation-enabled="true" :pagination-enabled="false"
                          navigationPrevLabel="" navigationNextLabel="" :navigationClickTargetSize="4"
                          :scrollPerPage="false">
                          <slide v-for="day in monthlyDates" :key="moment(day).format('MMM DD')">
                            <div @click="setDay(day)" class="day-container"
                              :class="{ 'bg-success text-white': selectedDay === day }">
                              {{ moment(day).format('MMM DD') }}
                            </div>
                          </slide>
                        </Carousel>
                        <div class="time-slots mt-4">
                          <div class="row">
                            <div v-for="timeSlot in timeSlots" class="col-3">
                              <div class="time-slot"
                                :class="{ 'bg-success text-white': selectedTime === timeSlot.timeFormatted }"
                                @click="setSelectedTime(timeSlot)">{{ timeSlot.timeFormatted }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button data-bs-toggle="modal" data-bs-target="#takeAppointmentModal"
                      :class="{ 'text-white': !dateTimeSelected }" class="btn btn-success  col-11 my-3 mx-auto"
                      :disabled="!dateTimeSelected">
                      Randevu al
                    </button>
                    <!-- <button class="btn btn-success">Randevu gotur</button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <hr>
        <div class="container ms-2">
          <div class="row">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="col-2 text-header" :class="{ 'text-header-bottom-line': selectedHeader === 'location' }"
                  href="#scrollspyHeading1" @click="selectedHeader = 'location'">Ünvan</a>
              </li>
              <li class="nav-item">
                <a class="col-2 text-header" :class="{ 'text-header-bottom-line': selectedHeader === 'information' }"
                  href="#scrollspyHeading2" @click="selectedHeader = 'information'">Məlumat</a>
              </li>

            </ul>

          </div>
        </div>

        <hr>

        <div class="container">
          <div class="row">
            <div class="col-7">
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example"
                tabindex="0">
                <h2 class="head" id="scrollspyHeading1">Ünvan</h2>
                <h3 class="head-ege">{{ doctor.clinic }}</h3>
                <p class="street">{{ doctor.address }}</p>
                <!-- <p class="number">{{ doctor.phone }}</p> -->
                <h5 class="mb-4" id="scrollspyHeading2"><img src="../assets/File_dock_fill.png" alt=""> Məlumat</h5>
              </div>
            </div>

            <div class="col">
              <img class="" src="../assets/Screen Shot 2020-10-11 at 15.48 1.png" alt="">
            </div>
          </div>


          <!-- Modal -->
          <div class="modal fade" id="informationModal" tabindex="-1" aria-labelledby="informationModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h2 class="modal-title" id="informationModalLabel">Məlumat</h2>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text">{{ doctor.description }}</div>

              </div>
            </div>
          </div>
          <p class="text">{{ doctor.description }}
            <span class="text-primary" data-bs-toggle="modal" data-bs-target="#informationModal">
              Ətraflı
            </span>
          </p>

          <h2 class="mb-4 head"><img src="../assets/Widget.svg" alt=""> Xidmətlər</h2>

          <div class="row">
            <div class="col mb-3">
              <button class="text-kanal text-nowrap border-0" v-for="service in doctor.services">{{ service }}</button>
            </div>
            <div class="col-1"><img src="../assets/more.png" alt=""></div>
          </div>

          <h2 class="mb-4 mt-3 head"><img src="../assets/Lable_fill.png" alt=""> İş təcrübəsi</h2>
          <div v-for="doctorExperience in doctor.experiences">
            <p class="text-experience">{{ doctorExperience }}</p>
          </div>


          <h2 class="mb-4 head"><img src="../assets/Mortarboard.png" alt=""> Təhsil</h2>
          <p class="text" v-for="education in doctor.educations"> {{ education }}</p>
          <p class="txt-light">Kurs</p>
          <p class="text">{{ doctor.courses }}</p>

          <p class="txt-light">Konqresslər</p>
          <p class="text">{{ doctor.congress }}</p>

          <FaqHolder />
        </div>

      </div>
      <div class="col-md-5 shadow p-3 mb-5 bg-body rounded h-50 d-none d-md-flex  ">
        <div class="container">
          <h2>Randevu al</h2>
          <p>Randevu tipini və tarixi seçərək davam edin</p>

          <div class="row">
            <div class="col-6">
              <div class="container btn btn-outline-success">
                <div class="d-flex flex-row justify-content-between align-items-center">
                  <img class="ms-2" src="../assets/16px.png" alt="">
                  <p class="mb-0">Onlayn randevu</p>
                  <i class="bi bi-info-circle ms-2"></i>
                </div>
              </div>

            </div>
            <div class="col-6">
              <div class="container btn btn-outline-success">
                <div class="d-flex flex-row justify-content-between align-items-center">
                  <img class="ms-2" src="../assets/17px.png" alt="">
                  <p class="mb-0">Klinikada randevu</p>
                  <i class="bi bi-info-circle ms-2"></i>
                </div>

              </div>
            </div>
          </div>

          <div>
            <div class="location my-3">
              <p class="location-content my-3 text-nowrap"> <i class="bi bi-check-circle-fill mx-3 location-icon"></i>
                {{ doctor.clinic }}</p>
            </div>
          </div>
          <div class="d-none d-md-block">
            <Carousel ref="cr-2" id="cr-2" :per-page="4" :navigation-enabled="true" :pagination-enabled="false"
              navigationPrevLabel="" navigationNextLabel="" :navigationClickTargetSize="4" :scrollPerPage="false">
              <slide v-for="day in monthlyDates" :key="moment(day).format('MMM DD')">
                <div @click="setDay(day)" class="day-container"
                  :class="{ 'bg-success text-white': selectedDay === day }">
                  {{ moment(day).format('MMM DD') }}
                </div>
              </slide>
            </Carousel>
            <div class="time-slots mt-4">
              <div class="row">
                <div v-for="timeSlot in timeSlots" class="col-3">
                  <div class="time-slot" :class="{ 'bg-success text-white': selectedTime === timeSlot.timeFormatted }"
                    @click="setSelectedTime(timeSlot)">{{ timeSlot.timeFormatted }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <button data-bs-toggle="modal" data-bs-target="#takeAppointmentModal"
              :class="{ 'text-white': !dateTimeSelected }" class="btn btn-success d-none d-md-block col-11 my-3 mx-auto"
              :disabled="!dateTimeSelected">
              Randevu al
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="takeAppointmentModal" tabindex="-1" aria-labelledby="takeAppointmentModalLabel"
      aria-hidden="true">
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
                  <img :src="`${$apiUrl}/${doctor.profile_photo}`" alt="profile image" width="100%"
                    class="rounded-circle">
                  <!--                    <img :src="$apiUrl + '/' + doctor.profile_photo" alt="profile image">-->
                </div>
                <div class="col-8">
                  <h6>{{ doctor.fullname }}, {{ doctor.profession }} </h6>
                  <p> {{ moment(selectedDay).format('DD MMMM YYYY dddd') }} - {{ selectedTime }}</p>
                  <p>{{ doctor.clinic }}</p>
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
            <button type="button" class="btn btn-success" @click="createAppointment">Tesdiqle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.day-container {
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #edf0f4;
  cursor: pointer;
  transition: border-color .15s linear, background-color .15s linear;
  margin-left: 5px;
  margin-right: 5px;
}

.time-slots {
  .time-slot {
    cursor: pointer;
    text-align: center;
    display: block;
    border-radius: 8px;
    background-color: #edf0f4;
    border: 1px solid #edf0f4;
    color: #101825;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -.1px;
    font-weight: 500;
    transition: background-color .15s linear, color .15s linear, border-color .15s linear;
    padding: 10px 3px;
    margin-bottom: 10px;
  }
}

// .VueCarousel-inner {
//   visibility: visible !important;
//   transform: translate(0px, 0px);
//   transition: transform 0.5s ease 0s;
//   flex-basis: 110.5px !important;
//   height: auto !important;
// }

.VueCarousel-navigation-prev {
  &:before {
    content: url(@/assets/icons/arrow-ios-left.svg);
    height: 20px;
    width: 20px;
  }
}

.VueCarousel-navigation-next {
  &:before {
    content: url(@/assets/icons/arrow-ios-right.svg);
    height: 20px;
    width: 20px;
  }
}
</style>
<style lang="scss">
.image {
  width: 153px;
  height: 158px;
}

.doc-profession {
  font-size: 20px;
  line-height: 28px;
  // font-family: Gilroy-Regular;
}

.name-surname {
  font-size: 34px;
  line-height: 40px;
}

.city {
  // position: relative;
  padding-right: 10px;
  font-size: 16px;
  line-height: 24px;
}

.location-content {
  width: auto;
  font-size: 16px;
  line-height: 24px;
  color: #273142;
}

.location {
  height: 56px;
  border-radius: 8px;
  padding: 0 10 px;
  margin: auto;
  display: flex;
  border: 1px solid #4CB147;
  background-color: #f2faf2;
}

.location-icon {
  // font-size: 12px;
  color: #4CB147;
}

.location-square {
  font-size: 10px;
}

.text-header {
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  margin-right: 20px;
  color: black;
  padding-bottom: 18px;

  &.text-header-bottom-line {
    border-bottom: 2px solid #4CB147;
  }
}

.head {
  font-size: 24px;
  line-height: 32px;
}

.head-ege {
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
}

.text-experience {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
}

.street {
  font-size: 18px;
  line-height: 24px;
}

.number {
  font-size: 20px;
  line-height: 24px;
}

.text {
  font-size: 16px;
  line-height: 24px;
}

.txt-light {
  font-size: 14px;
  line-height: 20px;
  color: #848B98;
}

.accordion-body {
  font-size: 16px;
  line-height: 22px;
}

.text-kanal {
  font-size: 14px;
  line-height: 20px;
}



.randevu {
  width: 183px;
  height: 80px;
}

@media screen and (max-width: 576px) {
  .image {
    width: 80px;
    height: 80px;
  }

  .doc-profession {
    font-size: 16px;
    line-height: 20px;
  }

  .name-surname {
    font-size: 20px;
    line-height: 28px;
  }

  .head {
    font-size: 20px;
    line-height: 28px;
  }

  .head-ege {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }

  .text-experience {
    font-size: 14px;
    line-height: 24px;
    font-weight: bold;
  }

  .street {
    font-size: 16px;
    line-height: 24px;
  }

  .text-kanal {
    font-size: 14px;
    line-height: 20px;
  }

  .text-faq {
    font-size: 20px;
    line-height: 28px;
  }

  .randevu {
    width: 160px;
    height: 48px;
    border: 1px solid #4CB147;
    border-radius: 8px;

  }

  .accordion-button {
    font-size: 14px !important;
    line-height: 16.8px;
  }

  .accordion-body {
    font-size: 14px;
    line-height: 19.6px;
    color: rgba(60, 60, 67, 0.85);
    font-family: 'HK Grotesk';
  }

  .text-nowrap {
    font-size: 14px;
  }

  .location-content {
    font-size: 14px;
  }
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';
import 'moment/locale/az';
import axios from 'axios'
import moment from 'moment'
import FaqHolder from "@/components/FaqHolder";

export default {
  name: 'Doctor',
  components: { FaqHolder, Carousel, Slide },
  data() {
    return {
      selectedDay: null,//moment().toDate().toISOString(),
      selectedTime: '',
      selectedHeader: 'location',
      monthlyDates: [],
      timeSlots: [],
      form: {
        date: null,
        doctor_id: null,
        email: null,
        fullname: null,
        phone: null,
        time: null,
      },
      appointmentDate: null,
      selectedDate: null,
      moment,
      doctor: '',
    };
  },
  computed: {
    dateTimeSelected() {
      return this.selectedDay && this.selectedTime
    }
  },
  mounted() {
    this.moment.locale('az')
    this.user()
    this.generateDays()
    this.myModal = new bootstrap.Modal(document.getElementById('takeAppointmentModal'))
    this.randevuModal = new bootstrap.Modal(document.getElementById('randevuModal'))
  },

  methods: {
    createAppointment() {
      this.form.doctor_id = this.doctor.id
      this.form.date = moment(this.selectedDay).format('YYYY-MM-DD HH:mm')
      this.form.time = this.selectedTime
      axios.post(this.$apiUrl + "/api-appointments/create", this.form)
        .then((resp) => {
          console.log(resp)
          alert(resp.data.message)
          this.myModal.hide()
          this.myModal.hide()
          this.randevuModal.hide()
        })
        .catch(e => console.log(e))
    },
    generateDays() {
      // todo : 6ci gunleri hekimden yoxlamaq. bazar gunlerini cixarmaq.
      const today = moment()
      const monthLater = moment().add(1, 'month')
      var enumerateDaysBetweenDates = function (startDate, endDate) {
        var now = startDate.clone(), dates = [];

        while (now.isSameOrBefore(endDate)) {
          dates.push(now.toDate());
          now.add(1, 'days');
        }
        return dates;
      };
      this.monthlyDates = enumerateDaysBetweenDates(today, monthLater)
    },
    generateTimeSlots() {
      const startTime = moment(this.doctor.start_time, "HH:mm")
      const endTime = moment(this.doctor.end_time, "HH:mm")
      const diffInMinutes = endTime.diff(startTime, 'minutes')
      const slotMinute = 30
      for (let i = 0; i <= diffInMinutes; i += slotMinute) {
        const time = startTime.add(slotMinute, 'minutes')
        this.timeSlots.push({
          id: i,
          timeFormatted: time.format('HH:mm'),
          time: time
        })
      }
    },
    user() {
      axios.get(this.$apiUrl + "/api-doctors/" + this.$route.params.id)
        .then(response => {
          this.doctor = response.data[0]
          this.generateTimeSlots()
        })
        .catch(e => console.log(e))
    },
    setDay(day) {
      this.selectedDay = day
    },
    setSelectedTime(time) {
      this.selectedTime = time.timeFormatted
    }
  },
}
</script>
