<template>
    <Clayout>


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
                                            <h4 class="gaps-title">Thank you for visiting the Terumo Cardiovascular
                                                Career Center
                                            </h4>
                                            <p class="font14">Here you can view and apply for current job openings at
                                                Terumo Cardiovascular, Inc. and Terumo Heart, Inc. within the United
                                                States.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <d  <DropDown @filterJobs="filteredJobs($event)"></DropDown>

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

    </Clayout>
</template>


<script lang="ts">
    import axios from "axios"
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import DropDown from "../components/Dropdown.vue";


    @Component({
        components: {
            DropDown
        }
    })
    export default class MedicalJobListing extends Vue {

        @Prop() private msg!: string;
        JobPostings: any = [];
        responseArr: any = [];
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

            await axios.get(`https://api.lever.co/v0/postings/terumo?department=Terumo%20Cardiovascular`)
                .then(((jobRes) => {
                    this.JobPostings = jobRes.data;

                    if (this.location == 'null' && this.department == 'null') this.JobPostings = this.JobPostings;
                    else this.JobPostings = (this.location !== 'null' && this.department !== 'null') ? this.JobPostings.filter((job: any) => job.categories.location === this.location && job.categories.department === this.department) : '' || (this.department !== '' && this.location === 'null') ? this.JobPostings.filter((job: any) => job.categories.department === this.department) : '' || (this.location !== '' && this.department === 'null') ? this.JobPostings.filter((job: any) => job.categories.location === this.location) : '';
                    this.isLoading = false;

                }))



            // let one = "https://api.lever.co/v0/postings/terumo?department=Terumo%20Cardiovascular"
            // let two = "https://api.lever.co/v0/postings/terumo?department=Terumo%20Heart"
            //
            // const requestOne = axios.get(one);
            // const requestTwo = axios.get(two);
            //
            //
            //               axios.all([axios.get(`https://api.lever.co/v0/postings/terumo?department=Terumo%20Cardiovascular`),
            //                  axios.get(`https://api.lever.co/v0/postings/terumo?department=Terumo%20Heart`)]
            //                     )
            //                               .then(axios.spread((requestOne, requestTwo) => {
            //                                           // this.listJobs = jobRes.data;
            //                                   const responseOne = this.responses[0];
            //                                   const responseTwo = this.responses[1];
            //                                              console.log(responseTwo);
            //                                                 }))
            //



            // axios.all([
            //     axios.get('https://api.lever.co/v0/postings/terumo?department=Terumo%20Cardiovascular'),
            //     axios.get('https://api.lever.co/v0/postings/terumo?department=Terumo%20Heart')
            // ])
            //     .then(responseArr => {
            //         //this will be executed only when all requests are complete
            //         // console.log('Date created: ', responseArr[0].data.created_at);
            //         // console.log('Date created: ', responseArr[1].data.created_at);
            //         console.log('Date created: ', responseArr[]);
            //     });

















            //
            // this.jobs = this.JobPostings
            // this.postings = this.JobPostings
            // if (this.postings.length > 12) {
            //     this.load = true
            //     this.JobPostings = this.postings.slice(0, 12)
            // }
            // this.isLoading = false;

        }
    }

</script>






<!--<script>-->

<!--    // export default {-->
<!--    //     metaInfo: {-->
<!--    //         title: 'Cardiovascular'-->
<!--    //     }-->
<!--    // }-->
<!--    //-->
<!--    //-->


<!--    import axios from 'axios'-->
<!--    // import DropDown from "../components/Dropdown.vue";-->
<!--    // const Dropdown = require('/components/Dropdown')-->

<!--    export default {-->


<!--        metaInfo: {-->
<!--            title: 'Cardiovascular'-->
<!--        },-->

<!--        // components: {-->
<!--        //     DropDown-->
<!--        // },-->
<!--        methods: {-->
<!--            async listAllJobs() {-->
<!--                // await axios.get(`https://api.lever.co/v0/postings/terumo?department=Terumo%20Cardiovascular`)-->
<!--                //     .then(((jobRes) => {-->
<!--                //         this.listJobs = jobRes.data;-->
<!--                //         // console.log(this.listJobs)-->
<!--                //     }))-->


<!--                // axios.all([axios.get(`https://api.lever.co/v0/postings/terumo?department=Terumo%20Cardiovascular`),-->
<!--                //     axios.get(`https://api.lever.co/v0/postings/terumo?department=Terumo%20Heart`)]-->
<!--                //    )-->
<!--                //     .then(axios.spread((firstResponse, secondResponse) => {-->
<!--                //                 this.listJobs = jobRes.data;-->
<!--                //         let firstResponse = responses[0];-->
<!--                //         let secondResponse = responses[1];-->
<!--                //         console.log(responses.data);-->
<!--                //     }))-->





<!--                let one = "https://api.lever.co/v0/postings/terumo?department=Terumo%20Cardiovascular"-->
<!--                let two = "https://api.lever.co/v0/postings/terumo?department=Terumo%20Heart"-->

<!--                const requestOne = axios.get(one);-->
<!--                const requestTwo = axios.get(two);-->

<!--                axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {-->
<!--                        const responseOne = responses[0]-->
<!--                        const responseTwo = responses[1]-->

<!--                    console.log(responses.data);-->
<!--                })).catch(errors => {-->
<!--                    // react on errors.-->
<!--                })-->
<!--            },-->

<!--            filteredJobs(data) {-->
<!--                this.JobPostings = data-->
<!--                // this.isLoading = false;-->
<!--            }-->


<!--        },-->
<!--        data() {-->
<!--            return {-->

<!--                // todos: null,-->
<!--                listJobs: null,-->
<!--                JobPostings: [],-->
<!--                responses: []-->


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

<style scoped>


    .box-bg {
        min-height: 280px;
    }


    .v-icon.icon-technician {
        display: none;
    }

    .box-bg:hover .v-icon.icon-technician {
        display: none;
    }


    .v-icon.icon-product {
        display: none;
    }

    .box-bg:hover .v-icon.icon-product {
        display: none;
    }


    .v-icon.icon-marketing {
        display: none;
    }

    .box-bg:hover .v-icon.icon-marketing {
        display: none;
    }

    .v-icon.icon-assembler {
        display: none;
    }

    .box-bg:hover .v-icon.icon-assembler {
        display: none;
    }


    .v-icon.icon-operations {
        display: none;
    }

    .box-bg:hover .v-icon.icon-operations {
        display: none;
    }


    .v-icon.icon-engineer {
        display: none;
    }

    .box-bg:hover .v-icon.icon-engineer {
        display: none;
    }


    .v-icon.icon-worker {
        display: none;
    }

    .box-bg:hover .v-icon.icon-worker {
        display: none;
    }

    .v-icon.quality {
        /*background-image: unset;*/
        display: none;
    }

    .box-bg:hover .v-icon.quality {
        /*background-image: url(../assets/icons/quality-white.svg);*/
        display: none;
    }


</style>
