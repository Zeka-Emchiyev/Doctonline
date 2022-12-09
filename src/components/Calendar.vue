<template>
    <div class="container">
        <Carousel ref="cr-2" id="cr-2" :per-page="4" :navigation-enabled="true" :pagination-enabled="false"
            navigationPrevLabel="" navigationNextLabel="" :navigationClickTargetSize="4" :scrollPerPage="false">
            <slide v-for="day in monthlyDates" :key="moment(day.date).format('MMM DD')" class="slide-content">
                <div @click="setDay(day.date)" class="day-container"
                    :class="{ 'bg-success text-white': selectedDay === day.date }">
                    {{ moment(day.date).format('MMM DD') }}
                </div>
                <div class="time-slots mt-4 ">
                    <div v-for="(timeSlot, index) in day.timeSlots">
                        <div v-if="index < 4 && !day.showMore" class="time-slot"
                            :class="{ 'bg-success text-white': selectedTime === timeSlot.timeFormatted && selectedDay === day.date }"
                            @click="setSelectedTime(day, timeSlot)">
                            {{ timeSlot.timeFormatted }}
                        </div>
                        <div v-if="day.showMore" class="time-slot"
                            :class="{ 'bg-success text-white': selectedTime === timeSlot.timeFormatted && selectedDay === day.date }"
                            @click="setSelectedTime(day, timeSlot)">
                            {{ timeSlot.timeFormatted }}
                        </div>
                    </div>
                    <div v-show="!day.showMore" class="time-slot slot-more" @click="showMoreTimeSlots(day)">daha çox
                    </div>
                    <div v-show="day.showMore" class="time-slot slot-more" @click="showMoreTimeSlots(day, false)">daha
                        az</div>
                </div>
            </slide>

        </Carousel>
        <div class="text-center mt-2">
            <button data-bs-toggle="modal" :data-bs-target="'#takeAppointmentModal' + doctor.id"
                :class="{ 'text-white': !dateTimeSelected }"
                class="btn btn-success d-none d-md-block col-11 my-3 mx-auto" :disabled="!dateTimeSelected">
                Randevu al
            </button>
        </div>


        <!-- Modal -->
        <div class="modal fade" :id="'takeAppointmentModal' + doctor.id" tabindex="-1"
            aria-labelledby="takeAppointmentModalLabel" aria-hidden="true">
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
                                    <img class="rounded" style="height: 100%; width: 100%;"
                                        :src="`${$apiUrl}/${doctor.profile_photo}`" alt="">
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
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success" @click="createAppointment" data-bs-toggle="modal"
                            data-bs-target="#successModal">
                            Təsdiqlə
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Modal -->
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
import { Carousel, Slide } from 'vue-carousel';
import 'moment/locale/az';
import axios from 'axios'
import moment from 'moment'
import Calendar from "@/components/Calendar";

export default {
    name: 'Calendar',
    components: { Carousel, Slide, Calendar },
    props: {
        profession: {
            type: Object
        }
    },
    data() {
        return {
            selectedDay: null,//moment().toDate().toISOString(),
            selectedTime: '',
            selectedHeader: 'location',
            selectedBox: 'clinic',
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
            result: '',
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
        // this.generateTimeSlots()
        this.generateDays()
        this.myModal = new bootstrap.Modal(document.getElementById('takeAppointmentModal'))
        // console.log(this.profession)
    },

    methods: {
        createAppointment() {
            this.form.doctor_id = this.doctor.id
            this.form.date = moment(this.selectedDay).format('YYYY-MM-DD HH:mm')
            this.form.time = this.selectedTime
            axios.post(this.$apiUrl + "/api-appointments/create", this.form)
                .then((resp) => {
                    // console.log(resp)
                    this.result = resp.data
                    this.myModal.hide()
                })
                .catch(e => console.log(e))
        },
        generateDays() {
            // todo : 6ci gunleri hekimden yoxlamaq. bazar gunlerini cixarmaq.
            // const today = moment()
            const tomorrow = moment().add(1, 'days');
            const monthLater = moment().add(1, 'month')
            let enumerateDaysBetweenDates = (startDate, endDate) => {
                let now = startDate.clone(), dates = [];
                let i = 0;
                while (now.isSameOrBefore(endDate)) {
                    dates.push({
                        id: i++,
                        date: now.toDate(),
                        showMore: false
                    });
                    now.add(1, 'days');
                }
                return dates;
            };
            this.monthlyDates = enumerateDaysBetweenDates(tomorrow, monthLater)
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
        async user() {

            this.doctor = this.profession
            console.log(this.doctor)
            await this.generateTimeSlots()

            this.monthlyDates = this.monthlyDates.map(day => {
                return {
                    ...day,
                    timeSlots: JSON.parse(JSON.stringify(this.timeSlots))
                }
            })
            // console.log(this.monthlyDates)

        },

        setDay(day) {
            this.selectedDay = day.date
        },
        setSelectedTime(day, time) {
            this.setDay(day)
            this.selectedTime = time.timeFormatted
            // console.log(this.selectedDay)
        },
        showMoreTimeSlots(day, showState = true) {
            const dayIndex = this.monthlyDates.findIndex(date => date.id === day.id)
            this.monthlyDates[dayIndex].showMore = showState
        }
    },
}
</script>

<style lang="scss" scoped>
#takeAppointmentModal {
    .profile-image {
        height: 100px;
        width: 100px;
        background-size: cover;
    }
}

.slide-content {
    height: 290px;
    overflow-y: auto;
}

.day-container {
    margin: 0 auto;
    width: 64px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    color: #01234B;
    font-weight: bold;
    //border: 1px solid #edf0f4;
    cursor: pointer;
    transition: border-color .15s linear, background-color .15s linear;
    //margin-left: 5px;
    //margin-right: 5px;

}

.time-slots {
    display: flex;
    flex-direction: column;
    align-items: center;

    .time-slot {
        width: 64px;
        height: 36px;
        cursor: pointer;
        text-align: center;
        // display: block;
        border-radius: 8px;
        background-color: #edf0f4;
        border: 1px solid #edf0f4;
        color: #01234B;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -.1px;
        font-weight: bold;
        transition: background-color .15s linear, color .15s linear, border-color .15s linear;
        padding: 9px 3px;
        margin-bottom: 10px;

        &.slot-more {
            font-size: 10px;
        }
    }
}

// .VueCarousel-inner {
//   visibility: visible !important;
//   transform: translate(0px, 0px);
//   transition: transform 0.5s ease 0s;
//   flex-basis: 110.5px !important;
//   height: auto !important;
// }

.VueCarousel-slide {
    border-right: 1px solid #EDF1F7;
}

.VueCarousel-navigation-button {
    top: 20px;
}

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