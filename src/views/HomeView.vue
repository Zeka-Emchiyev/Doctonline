<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 ">
        <div class="row w-100 bg-light">
          <div class="col-3 col-sm-3 me-4">
            <img class="image" src="../assets/Rectangle 332.png" alt="">
          </div>

          <div class="col-7">
            <p class="text-success doc-profession">Stomatoloq</p>
            <h5 class="name-surname">Azər Həsənov</h5>
            <div class="d-none d-md-flex flex-row mb-2">
              <p class="city">Bakı</p>
              <p class="location"><span class="location-square">&#9632;</span> Elmed Medical Center <span
                  class="location-square">&#9632;</span></p>
            </div>
            <button class="btn btn-success d-none d-md-block col-sm-12 col-lg-5 ">Randevu al</button>
          </div>
          <div class="col-12 d-md-none">
            <div class="d-flex flex-row mb-2">
              <p class="city">Bakı</p>
              <p class="location"><span class="location-square">&#9632;</span> Elmed Medical Center <span
                  class="location-square">&#9632;</span></p>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <div class="row randevu">
                    <div class="col-2 mt-2">
                      <img class="" src="../assets/17px.png" alt="">

                    </div>
                    <div class="col-10 mt-2">
                      <p class="text-nowrap">Klinikada randevu</p>
                    </div>
                  </div>


                </div>
                <div class="col-6">
                  <div class="row randevu ">
                    <div class="col-2 mt-2">
                      <img class="" src="../assets/16px.png" alt="">
                    </div>
                    <div class="col-10 mt-2">
                      <p class="text-nowrap ">Video randevu</p>

                    </div>
                  </div>


                </div>
              </div>
            </div>
            <button class="btn btn-success col-12 mt-2">Randevu al</button>
          </div>
        </div>
        <hr>
        <div class="container ms-2">
          <div class="row">
            <div class="col-2 text-header">Ünvan</div>
            <div class="col-2 text-header">Məlumat</div>
            <div class="col-2 text-header">FAQ</div>
          </div>
        </div>

        <hr>

        <div class="container">
          <div class="row">
            <div class="col-7">
              <h2>Ünvan</h2>
              <h2 class="fw-bold">Ege Hospital</h2>
              <p class="street">Academician Hasan Aliyev St.38</p>
              <p class="number">+994 (55) 850 11 15</p>
              <h5 class="mb-4"><img src="../assets/File_dock_fill.png" alt=""> Məlumat</h5>
            </div>
            <div class="col">
              <img class="" src="../assets/Screen Shot 2020-10-11 at 15.48 1.png" alt="">
            </div>
          </div>


          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h2 class="modal-title" id="exampleModalLabel">Məlumat</h2>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae consequatur non ipsum
                  sint beatae a quo excepturi temporibus ex? Temporibus, sint. Tenetur facilis fuga odit amet ad sint
                  velit, facere porro quaerat! Sed itaque aut nam quisquam minima ipsam asperiores delectus nostrum
                  voluptates veniam possimus omnis maxime nemo in tempore, accusantium mollitia expedita. Exercitationem
                  saepe veniam pariatur accusantium? Ducimus quod harum accusamus magni officia dicta odio in
                  blanditiis, tempora, vel quaerat sunt repellat possimus rerum corporis neque? Cupiditate sequi omnis
                  ad laboriosam consequuntur impedit modi, dignissimos hic, tempora exercitationem repudiandae
                  blanditiis dolore alias doloribus totam, sapiente possimus voluptate. Qui?
                </div>

              </div>
            </div>
          </div>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus hac ut sit tempor et
            fames. Malesuada mattis amet arcu elementum vitae. Egestas bibendum lorem tempor augue cursus laoreet
            placerat lacus.Interdum et scelerisque non accumsan venenatis mattis. Aliquam nulla egestas non, ac.
            <span class="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Ətraflı
            </span>
          </p>

          <h2 class="mb-4"><img src="../assets/Widget.svg" alt=""> Xidmətlər</h2>

          <div class="row">
            <div class="col mb-3">
              <button class="text-header border-0">Kanal müalicəsi</button>
            </div>
            <div class="col">
              <button class="text-header border-0">Kanal müalicəsi</button>
            </div>
            <div class="col">
              <button class="text-header border-0">Kanal müalicəsi</button>
            </div>
            <div class="col">
              <button class="text-header border-0">Kanal müalicəsi</button>
            </div>

            <div class="col-1"><img src="../assets/more.png" alt=""></div>
          </div>

          <h2 class="mb-4"><img src="../assets/Lable_fill.png" alt=""> İş təcrübəsi</h2>
          <p class="text fw-bold">İstanbul NS klinikası- (2010-2015)</p>
          <p class="text fw-bold">Baku medical plaza- (2016-2019)</p>
          <p class="text fw-bold">Ege hospital- (2019-2022)</p>

          <h2 class="mb-4"><img src="../assets/Mortarboard.png" alt=""> Təhsil</h2>
          <p class="text">Azərbaycan Tibb Universiteti</p>
          <p class="txt-light">Kurs</p>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p class="text">Egestas bibendum lorem tempor augue cursus laoreet</p>
          <p class="text">Aliquam nulla egestas non, ac.</p>

          <p class="txt-light">Konqresslər</p>
          <p class="text">Egestas bibendum lorem tempor augue cursus laoreet</p>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p class="text">Aliquam nulla egestas non, ac.</p>

          <h5>FAQ</h5>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item border-0">
              <button class="fw-bold border-0 bg-light accordion-button accor-button" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                aria-controls="collapseOne">
                Rhoncus nullam aliquam nam proin</button>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam.
                  Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem
                  vestibulum quis eu. Ut commodo, eget lorem venenatis urna.
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">

              <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Duis enim bibendum dui ut fringilla suspendisse vel sed ultricies </button>

              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam.
                  Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem
                  vestibulum quis eu. Ut commodo, eget lorem venenatis urna.
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Lectus fringilla volutpat egestas nisi, viverra mauris
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam.
                  Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem
                  vestibulum quis eu. Ut commodo, eget lorem venenatis urna.
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Vitae sollicitudin vitae libero tincidunt </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam.
                  Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem
                  vestibulum quis eu. Ut commodo, eget lorem venenatis urna.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-5 shadow p-3 mb-5 bg-body rounded h-50">
        <div class="container">
          <h2>Randevu al</h2>
          <p>Randevu tipini və tarixi seçərək davam edin</p>
          <div class="row d-none d-md-block">
            <div class="col-6">
              <div class="container btn btn-outline-success randevu">
                <div class="row mb-2 ">
                  <div class="col-6">
                    <img class="me-5" src="../assets/16px.png" alt="">
                  </div>
                  <div class="col-6">
                    <i class="bi bi-info-circle ms-5"></i>
                  </div>
                </div>
                <p>Onlayn randevu</p>
              </div>

            </div>
            <div class="col-6">
              <div class="container btn btn-outline-success randevu">
                <div class="row mb-2">
                  <div class="col-6">
                    <img class="me-5" src="../assets/17px.png" alt="">
                  </div>
                  <div class="col-6">
                    <i class="bi bi-info-circle ms-5"></i>
                  </div>
                </div>
                <p>Klinikada randevu</p>
              </div>
            </div>
          </div>
          <div>
            <p class="mt-3">Ege Hospital - 38 Academician Hasan </p>
            <small>Randevu saatını seçin</small>
          </div>
          <div class="d-none d-md-block" style="height:300px ;">
            <!-- <calendar></calendar> -->
            <!-- <v-date-picker v-model='selectedDate' /> -->
            <vue-cal show-week-numbers :hide-weekdays="[]" :disable-views="['years', 'year',]" hide-weekends
              show-time-in-cells :special-hours="specialHours" :events="events">
            </vue-cal>
          </div>
          <div class="text-center mt-2">
            <router-link to="/randevu" class="btn btn-success d-none d-md-block col-11 my-3">Randevu al</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.image {
  width: 153px;
  height: 158px;
}

.doc-profession {
  font-size: 20px;
  line-height: 28px;
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

.location {
  // position: absolute;
  width: auto;
  font-size: 16px;
  line-height: 24px;
}

.location-square {
  font-size: 10px;
}

.text-header {
  font-size: 14px;
  line-height: 20px;
}

.street {
  font-size: 24px;
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

// .accordion-button {
//   --bs-bg-opacity: none !important;
//   border: 0;
//   background-color: none;
// }


.accordion-button:not(.collapsed) {
  background-color: none !important;
  color: black !important;
}

// .accordion-button:focus {
//   box-shadow: none;
// }

.accor-button {
  color: none !important;
  box-shadow: none !important;
  --bs-bg-opacity: none !important;
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

  .randevu {
    width: 160px;
    height: 48px;
    border: 1px solid #4CB147;
    border-radius: 8px;

  }
}
</style>


<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'


export default {
  name: 'HomeView',
  data() {
    return {
      selectedDate: null,
      specialHours: {
        1: {
          from: 8 * 60,
          to: 17 * 60,
          class: 'doctor-1',
          // label: 'Doctor 1Full day shift'
        },
        2: {
          from: 9 * 60,
          to: 18 * 60,
          class: 'doctor-2',
          // label: 'Doctor 2Full day shift'
        },
        3: [
          {
            from: 8 * 60,
            to: 12 * 60,
            class: 'doctor-1',
            // label: 'Doctor 1Morning shift'
          },
          {
            from: 14 * 60,
            to: 19 * 60,
            class: 'doctor-3',
            // label: 'Doctor 3Afternoon shift'
          }
        ],
        4: {
          from: 8 * 60,
          to: 17 * 60,
          class: 'doctor-1',
          // label: 'Doctor 1Full day shift'
        },
        5: {
          from: 9 * 60,
          to: 18 * 60,
          class: 'doctor-3',
          // label: 'Doctor 3Full day shift'
        },

      },
      events: [
        {
          start: '2018-11-16 10:30',
          end: '2018-11-16 11:30',
          // You can also define event dates with Javascript Date objects:
          // start: new Date(2018, 11 - 1, 16, 10, 30),
          // end: new Date(2018, 11 - 1, 16, 11, 30),
          title: 'Doctor appointment',
          content: '<i class="icon material-icons">local_hospital</i>',
          class: 'health'
        }

      ]
    };
  },
  components: { VueCal },
}
</script>
