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

                                                                    <span class="bold text-dark gaps-txt"> {{listJob.categories.team}}</span>
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

    </Glayout>
</template>

<script>

    // export default {
        // metaInfo: {
        //     title: 'Main'
        // }
    // }




    // const axios = require('axios')

    import axios from 'axios'
    // import DropDown from "../components/Dropdown.vue";
    // const Dropdown = require('/components/Dropdown')

    export default {


        metaInfo: {
            title: 'Main'
        },

        // components: {
        //     DropDown
        // },
        methods: {
            async listAllJobs() {
                await axios.get(`https://api.lever.co/v0/postings/terumo`)
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

<style>


</style>
