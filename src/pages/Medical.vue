<template>
    <Mlayout>


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
                                            <h4 class="gaps-title">Thank you for visiting the TERUMO MEDICAL CORPORATION
                                                Career Center
                                            </h4>
                                            <p class="font14">You are the lifeblood of our business. You share a passion
                                                for improving lives. Consider a career with Terumo. Terumo has long
                                                attracted and retained the brightest and most accomplished people in the
                                                world. We value our Associates as our most important assets. Our
                                                Associates follow rewarding and meaningful career paths and maintain a
                                                strong sense of job satisfaction. That’s what comes from our dedication
                                                to innovation, creative problem solving, teamwork and lifelong learning.
                                                We maintain a passionate, dedicated and collaborative team environment
                                                across multiple functional areas. Whether your area of expertise is
                                                marketing, engineering, sales or manufacturing, if you are the best at
                                                what you do, we look forward to speaking with you.</p>
                                            <p class="font14"> Terumo Medical Corporation (TMC) was established in 1972
                                                as a U.S. subsidiary of Tokyo-based Terumo Corporation, one of the
                                                world’s leading medical device manufacturers. TMC develops,
                                                manufactures, and markets high-quality medical devices used in a broad
                                                range of applications in numerous healthcare markets. TMC is structured
                                                across the following four business divisions: Terumo Interventional
                                                Systems, offering minimally-invasive solutions for entry site management
                                                and lesion access; Terumo Medical Products providing devices for
                                                injection and infusion therapy; Terumo Pharmaceutical Solutions
                                                developing drug delivery devices, and Terumo Business Edge, a consulting
                                                group focusing on identifying operational and administrative process
                                                improvements in the Cardiac Cath Lab. For more information, visit <a
                                                        href="http://www.terumomedical.com" target="_blank">http://www.terumomedical.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="box-wrapper job-search">
                        <div class="banner-wrapper">
                            <div class="gaps-container">
                                <div class="gaps-row">
                                    <div class="gaps-col-12">
                                        <div class="custom-margin-top">

                                            <div class="banner-inner">

                                                <div class="gaps-row">

                                                    <div class="gaps-col-12 ">
                                                        <div class="banner-title">
                                                            <h1 class="pb30 pt30">Search job opportunities that match
                                                                your interests</h1>
                                                        </div>
                                                    </div>

                                                    <div class="gaps-col-12 ">
                                                        <div class="banner-search">

                                                            <div class="banner-main bg-white ">
                                                                <div class="p-4">
                                                                    <form action="#" class="search-job">
                                                                        <div class="gaps-row no-gutters">
                                                                            <div class="gaps-col-5 gaps-col-xs-6 bdr-r">
                                                                                <div class="gaps-form-group">
                                                                                    <div class="form-field">
                                                                                        <div class="icon"><span
                                                                                                class="icon-location"></span>
                                                                                        </div>
                                                                                        <select name="country"
                                                                                                class="gaps-form-control">
                                                                                            <option value="">USA
                                                                                            </option>
                                                                                            <option value="">United
                                                                                                Kingdom
                                                                                            </option>
                                                                                            <option value="">India
                                                                                            </option>
                                                                                            <option value="">Canada
                                                                                            </option>

                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="gaps-col-5 gaps-col-xs-6">
                                                                                <div class="gaps-form-group">
                                                                                    <div class="gaps-form-field">
                                                                                        <div class="select-wrap">
                                                                                            <div class="icon"><span
                                                                                                    class="icon-briefcase"></span>
                                                                                            </div>
                                                                                            <select name="" id="Job"
                                                                                                    class="gaps-form-control">
                                                                                                <option value="">
                                                                                                    Infrastructure
                                                                                                </option>
                                                                                                <option value="">Sales
                                                                                                </option>
                                                                                                <option value="">
                                                                                                    Marketing
                                                                                                </option>
                                                                                                <option value="">
                                                                                                    Consultant
                                                                                                </option>
                                                                                                <option value="">
                                                                                                    Trainee
                                                                                                </option>
                                                                                                <option value="">Project
                                                                                                    Manager
                                                                                                </option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="gaps-col-2 gaps-col-xs">
                                                                                <div class="gaps-form-group">
                                                                                    <div class="gaps-form-field">
                                                                                        <button type="submit"
                                                                                                class="gaps-form-control btn btn-primary">
                                                                                            Find it now
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
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
                        </div>


                        <div class="gaps-container-fluid">
                            <div class="gaps-row">
                                <div class="gaps-col-12">
                                    <div class="box-inner pb50">
                                        <div class="box-container pt50">
                                            <div class="gaps-row">
                                                <div class="gaps-col-3 gaps-col-xs-6"  v-for="listJob in listJobs">

                                                    <div class="box">

                                                        <div class="box-bg">

                                                            <div class="v-icon quality">
                                                                <span></span>
                                                            </div>

                                                            <div class="box-details">

                                                                <div class="box-title">
<!--                                                                    <small class="txt-muted">9028BR</small>-->

                                                                    <h2>{{listJob.text}}</h2>
                                                                </div>

                                                                <div class="box-height"></div>

                                                                <div class="box-sub-title">
                                                                    <span class="gaps-icon gaps-icon-company"></span>

                                                                    <span class="bold text-dark gaps-txt">{{listJob.categories.team}}</span>
                                                                </div>


                                                                <div class="box-sub-title pt10">

                                                                    <span class="gaps-icon gaps-icon-location"></span>

                                                                    <span class="bold text-dark gaps-txt"> {{listJob.categories.location}}</span>
                                                                </div>

                                                                <div class="box-sub-title pt10">

                                                                    <span class="gaps-icon gaps-icon-description"></span>

                                                                    <span class="bold text-dark gaps-txt"> {{listJob.additionalPlain.slice(0,50)}}<a href=""> ... read more</a></span>
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
                        </div>
                    </div>


                </div>

            </div>


        </div>


        </body>

    </Mlayout>
</template>

<script>

    // export default {
    //     metaInfo: {
    //         title: 'Medical'
    //     }
    // }


    import axios from 'axios'
    // import DropDown from "../components/Dropdown.vue";
    // const Dropdown = require('/components/Dropdown')

    export default {


        metaInfo: {
            title: 'Medical'
        },

        // components: {
        //     DropDown
        // },
        methods: {
            async listAllJobs() {
                await axios.get(`https://api.lever.co/v0/postings/terumo?department=Terumo%20Medical`)
                    .then(((jobRes) => {
                        this.listJobs = jobRes.data;
                        console.log(this.listJobs)
                    }))
            },

            filteredJobs(data) {
                this.JobPostings = data
                // this.isLoading = false;
            }


        },
        data() {
            return {

                // todos: null,
                listJobs: null,
                JobPostings: []


            }
        },
        // metaInfo: {
        //     title: 'Main'
        // },

        async mounted() {




            this.listAllJobs()

            // this.filteredJobs()


            // async submit()
            // {
            //     let filterJobs
            //     if (this.location == null && this.department == null) filterJobs = this.DropdownValues;
            //     else filterJobs = (this.location !== null && this.department !== null) ? this.DropdownValues.filter((job: any) => job.categories.location === this.location && job.categories.department === this.department) : '' || (this.department !== '' && this.location === null) ? this.DropdownValues.filter((job: any) => job.categories.department === this.department) : '' || (this.location !== '' && this.department === null) ? this.DropdownValues.filter((job: any) => job.categories.location === this.location) : '';
            //     await this.$emit('filterJobs', filterJobs)
            // }



            // async function listJobs(){
            //     await axios.get(`https://api.lever.co/v0/postings/velocitycloud`)
            //         .then(((jobRes) => {
            //             this.JobPostings = jobRes.data;
            //             console.log(this.JobPostings)
            //
            //         }))
            //     console.log('Hi2')
            // }




        }
    }
















</script>

<style scoped>
    .search-job button.gaps-form-control.btn.btn-primary {
        background-color: #008d61;
    }

    .box-details .box-title h2 {
        color: #008d61;
    }

    .box-bg:hover {
        background-color: #008d61;
        margin-top: -10px;
    }

</style>
