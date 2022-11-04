<template>
    <div>
        <!-- Footer -->
        <footer class=" text-lg-start text-muted pt-3">
            <!-- Section: Links  -->
            <div class="container-fluid text-center-lg text-md-start mt-5 text-white">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <div>
                            <img src="../assets/Logo 1.png" alt="">
                        </div>
                    </div>

                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-contact fw-bold mb-4">
                            Linklər
                        </h6>
                        <p>
                            <a href="#!" class="link">Daxil ol</a>
                        </p>
                        <p>
                            <a href="#!" class="link">Qeydiyyatdan keç</a>
                        </p>
                        <p>
                            <a href="#!" class="link">Dəstək (FAQ)</a>
                        </p>
                        <p>
                            <a href="#!" class="link">Həkim qeydiyyatı</a>
                        </p>
                    </div>

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-contact  mb-4">
                            Əlaqə
                        </h6>
                        <p class="link">+994 (50) 831 31 16</p>
                        <p class="link">Xan Şuşinski küç 21</p>
                    </div>
                    <div class="col-6 d-md-none mb-5">
                        <a class="me-4" href="https://www.facebook.com/"><img src="../assets/fb.png" alt=""></a>
                        <a class="me-4" href="https://www.instagram.com/"><img src="../assets/instagram.png" alt=""></a>
                        <a class="me-4" href="https://www.telegram.com/"><img src="../assets/telegram.png" alt=""></a>
                    </div>
                </div>
                <!-- Grid row -->
            </div>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="container-fluid footer bg-dark">
                <div class="row justify-content-between p-3">
                    <div class="col-3 ms-5 d-none d-md-block">
                        <a class="me-5" href="https://www.facebook.com/"><img src="../assets/fb.png" alt=""></a>
                        <a class="me-5" href="https://www.instagram.com/"><img src="../assets/instagram.png" alt=""></a>
                        <a class="me-5" href="https://www.telegram.com/"><img src="../assets/telegram.png" alt=""></a>
                    </div>
                    <div class="col-12 col-md-3">
                        <p class="text-footer">© 2020 Doctonline - Bütün hüquqlar qorunur.</p>
                    </div>
                </div>
            </div>


            <!-- Copyright -->
        </footer>
        <!-- Footer -->
    </div>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
footer {
    background-color: #101825;
}

.link {
    text-decoration: none;
    color: white;
    font-size: 14px;
    line-height: 20px;
}

.text-contact {
    font-size: 16px;
    line-height: 24px;
}

.text-footer {
    font-size: 16px;
    line-height: 24px;
    color: white;
}
</style>