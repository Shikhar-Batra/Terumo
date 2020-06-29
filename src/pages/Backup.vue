<template>
    <Glayout>


        <body pagetitle="Job Search Welcome | Terumo CV Group">
        <!-- ngIf: bConfigMode -->
        <div id="homeContainer">
            <div class="home ng-scope noBkgImage" id="content">
                <div class="homeContentLiner">
                    <div class="ng-scope">
                        <div class="pageHeaderContainer ng-scope">
                            <div class="pageHeader clearfix">
                                <div class="rightIcons">
                                </div>
                            </div>

                        </div>
                    </div>
                    <!--GAPS-->


                    <div class="gaps-container-fluid">
                        <div class="gaps-row">
                            <div class="gaps-col-12">
                                <div class="box-inner  pt50 pb50">
                                    <div class="box-heading text-center">
                                        <div class="max-width">
                                            <h4 class="gaps-title">Thank you for visiting the Terumo Career Center
                                            </h4>
                                            <p class="font14">Here you can view and apply for current job openings at
                                                Terumo regional and company-specific Jobs, Inc. within the United
                                                States.<br/>
                                                For job opportunities outside the U.S., view our locations around the
                                                world and contact the office nearest you.<br/>
                                                For technical questions, <a href="">contact us</a>.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <DropDown @filterJobs="filteredJobs($event)"></DropDown>

                    <div v-if="isLoading">
                        <h5 class="loading-txt"> loading please wait......</h5>
                    </div>



                    <div class="box-wrapper job-search">
                        <div class="gaps-container-fluid">
                            <div class="gaps-row">
                                <div class="gaps-col-12">
                                    <div class="box-inner pb50">

                                        <div class="box-container pt50">
                                            <div class="gaps-row">
                                                <div class="gaps-col-3 gaps-col-xs-6"  v-for="JobPosting in JobPostings" :key="JobPosting.id">

                                                    <div class="box">

                                                        <div class="box-bg">

                                                            <div class="v-icon quality">
                                                                <span></span>
                                                            </div>

                                                            <div class="box-details">

                                                                <div class="box-title">
<!--                                                                    <small class="txt-muted">9028BR</small>-->

                                                                    <h2>{{JobPosting.text}}</h2>
                                                                </div>

                                                                <div class="box-height"></div>

                                                                <div class="box-sub-title">
                                                                    <span class="gaps-icon gaps-icon-company"></span>

                                                                    <span class="bold text-dark gaps-txt"> {{JobPosting.categories.team}}</span>
                                                                </div>


                                                                <div class="box-sub-title pt10">

                                                                    <span class="gaps-icon gaps-icon-location"></span>

                                                                    <span class="bold text-dark gaps-txt"> {{JobPosting.categories.location}}</span>
                                                                </div>

                                                                <div class="box-sub-title pt10">

                                                                    <span class="gaps-icon gaps-icon-description"></span>

                                                                    <span class="bold text-dark gaps-txt"> {{JobPosting.additionalPlain.slice(0,70)}}<a target="_blank" @click="sendToLever(JobPosting.hostedUrl)"> ... read more</a></span>
                                                                </div>

                                                            </div>


                                                        </div>

                                                    </div>


                                                </div>

                                            </div>



                                            <div class="col-md-12 text-center" v-if="this.JobPostings.length === 0">
                                                                        <img class="img-ok" src="../assets/images/no-job.png">
                                                <p class="no-job">No matching jobs found. Please Try Again</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>








                        </div>
                    </div>




                </div>

            </div>


        </div>


        </body>

    </Glayout>
</template>


<script lang="ts">
    import axios from "axios"
    import {Component, Prop, Vue} from 'vue-property-decorator';
    // import DropDown from "../component/Dropdown.vue";
    import DropDown from "../components/Dropdown.vue";


    @Component({
        components: {
            DropDown
        }
    })
    export default class JobListing extends Vue {

        @Prop() private msg!: string;
        JobPostings: any = [];
        jobs: any = [];
        posts: any;

        postings: any = [];
        JobId: any = this.JobPostings.id;
        isLoading: boolean = true;
        icon: any = [];
        count: any = 0;
        location: any = this.getQueryString('location', window.location.href)
        department: any = this.getQueryString('department', window.location.href)
        load: Boolean = false;


        async mounted() {
            this.location = this.location ? this.location.replace("%2C+", ", ") : "null"
            this.department = this.department ? this.department.replace("%2F", "/").replace("%26", "&").replace("%20", " ").replace("+", " ") : "null"
            await this.listJobs()
        }

        sendToLever(applyLink: any) {
            location.href = `${applyLink}`;
        }


        getQueryString(field: any, url: any) {
            let href = url ? url : window.location.href;
            let reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            let string = reg.exec(href);
            return string ? string[1] : null;
        }


        filteredJobs(data: any) {
            this.JobPostings = data
            this.isLoading = false;
        }


        loadMore() {
            let post = this.jobs;
            let posts = post.splice(12, 12)
            if (posts) {
                if (posts.length < 12) this.load = false;
                this.JobPostings = [...this.JobPostings, ...posts]
            }
        }

        async listJobs() {

            await axios.get(`https://api.lever.co/v0/postings/terumo`)
                .then(((jobRes) => {
                    this.JobPostings = jobRes.data;

                    if (this.location == 'null' && this.department == 'null') this.JobPostings = this.JobPostings;
                    else this.JobPostings = (this.location !== 'null' && this.department !== 'null') ? this.JobPostings.filter((job: any) => job.categories.location === this.location && job.categories.department === this.department) : '' || (this.department !== '' && this.location === 'null') ? this.JobPostings.filter((job: any) => job.categories.department === this.department) : '' || (this.location !== '' && this.department === 'null') ? this.JobPostings.filter((job: any) => job.categories.location === this.location) : '';
                    this.isLoading = false;

                }))
            this.jobs = this.JobPostings
            this.postings = this.JobPostings
            if (this.postings.length > 12) {
                this.load = true
                this.JobPostings = this.postings.slice(0, 12)
            }
            this.isLoading = false;

        }
    }

</script>


<!--<script>-->

<!--    // export default {-->
<!--        // metaInfo: {-->
<!--        //     title: 'Main'-->
<!--        // }-->
<!--    // }-->




<!--    // const axios = require('axios')-->

<!--    import axios from 'axios'-->
<!--    import DropDown from "../components/Dropdown.vue";-->
<!--    // const Dropdown = require('/components/Dropdown')-->

<!--    export default {-->


<!--        metaInfo: {-->
<!--            title: 'Main'-->
<!--        },-->

<!--        components: {-->
<!--            DropDown-->
<!--        },-->
<!--        methods: {-->
<!--            async listAllJobs() {-->
<!--                await axios.get(`https://api.lever.co/v0/postings/terumo`)-->
<!--                    .then(((jobRes) => {-->
<!--                        this.listJobs = jobRes.data;-->
<!--                        // console.log(this.listJobs)-->
<!--                    }))-->
<!--            },-->

<!--            filteredJobs(data) {-->
<!--                this.JobPostings = data-->
<!--                this.isLoading = false;-->
<!--            }-->


<!--        },-->
<!--        data() {-->
<!--            return {-->

<!--                // todos: null,-->
<!--                listJobs: null,-->
<!--                JobPostings: []-->


<!--            }-->
<!--        },-->
<!--        // metaInfo: {-->
<!--        //     title: 'Main'-->
<!--        // },-->

<!--        async mounted() {-->




<!--            this.listAllJobs()-->

<!--            // this.filteredJobs()-->


<!--            // async submit()-->
<!--            // {-->
<!--            //     let filterJobs-->
<!--            //     if (this.location == null && this.department == null) filterJobs = this.DropdownValues;-->
<!--            //     else filterJobs = (this.location !== null && this.department !== null) ? this.DropdownValues.filter((job: any) => job.categories.location === this.location && job.categories.department === this.department) : '' || (this.department !== '' && this.location === null) ? this.DropdownValues.filter((job: any) => job.categories.department === this.department) : '' || (this.location !== '' && this.department === null) ? this.DropdownValues.filter((job: any) => job.categories.location === this.location) : '';-->
<!--            //     await this.$emit('filterJobs', filterJobs)-->
<!--            // }-->



<!--            // async function listJobs(){-->
<!--            //     await axios.get(`https://api.lever.co/v0/postings/velocitycloud`)-->
<!--            //         .then(((jobRes) => {-->
<!--            //             this.JobPostings = jobRes.data;-->
<!--            //             console.log(this.JobPostings)-->
<!--            //-->
<!--            //         }))-->
<!--            //     console.log('Hi2')-->
<!--            // }-->




<!--        }-->
<!--    }-->














<!--</script>-->

<style>
    h5.loading-txt {
        position: absolute;
        left: 0;
        right: 0;
        height: 100%;
        top: 100%;
        z-index: 999999;
        text-align: center;
        vertical-align: middle;
    }


    .loading-txt:before {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        top: -60px;
        margin: 0 auto;
        background-image: url("http://uat.gas.ind.in/loading.svg");
        background-size: 60px;
        width: 60px;
        height: 60px;
        z-index: 9999;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
    }


    .loading-txt:after {
        content: '';
        background-color: rgba(255, 255, 255, 0.35);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .img-ok {
        max-width: 200px;
        width: 100%;
        margin-bottom: 20px;
    }


</style>
