<template>
    <Alayout>


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
                                            <h4 class="gaps-title">ABOUT TERUMO AORTIC
                                            </h4>
                                            <p class="font14">At Terumo Aortic, our mission is to transform the
                                                treatment of aortic disease worldwide. With our comprehensive portfolio
                                                of surgical, endovascular and hybrid technologies, we enable physicians
                                                to find the right fit for each patient anatomy.</p>
                                            <p class="font14"> The company has over 1,250 associates around the world
                                                with manufacturing facilities in Glasgow, Scotland and Sunrise, Florida.<br/>
                                                Terumo Aortic is focused on the continuing development of new and
                                                innovative products driving the growth of the business globally.
                                                Associates are part of a stimulating and exciting environment in which
                                                they can develop their skills and achieve career goals. Working for the
                                                company, each associate’s role contributes greatly to helping to save or
                                                improve the lives of patients in over 100 countries worldwide.<br/>
<!--                                                For technical questions, <a href="http://www.terumoaortic.com/"-->
<!--                                                                            target="_blank">http://www.terumoaortic.com/</a>.-->
                                            </p>
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

    </Alayout>
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
    export default class AorticJobListing extends Vue {

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

            await axios.get(`https://api.lever.co/v0/postings/terumo?department=Terumo%20Aortic`)
                .then(((jobRes) => {
                    this.JobPostings = jobRes.data;

                    if (this.location == 'null' && this.department == 'null') this.JobPostings = this.JobPostings;
                    else this.JobPostings = (this.location !== 'null' && this.department !== 'null') ? this.JobPostings.filter((job: any) => job.categories.location === this.location && job.categories.department === this.department) : '' || (this.department !== '' && this.location === 'null') ? this.JobPostings.filter((job: any) => job.categories.department === this.department) : '' || (this.location !== '' && this.department === 'null') ? this.JobPostings.filter((job: any) => job.categories.location === this.location) : '';
                    this.isLoading = false;

                }))
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

<style>
</style>
