<template>


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
                                                                    <select name="location" id="location" class="gaps-form-control"
                                                                            v-model="location" :options="allLocations">
                                                                        <option value=null disabled>All</option>
                                                                        <option v-for="DropdownValue in uniqueArrLoc"
                                                                                :key="DropdownValue.index"
                                                                                :value="DropdownValue">
                                                                            {{DropdownValue}}
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
                                                                        <select name="department" id="department"
                                                                                class="gaps-form-control"
                                                                                v-model="department" :options="allDepartments">
                                                                            <option value=null disabled>All</option>
                                                                            <option v-for="DropdownValue in uniqueArrDep"
                                                                                    :key="DropdownValue.index"
                                                                                    :value="DropdownValue">
                                                                                {{DropdownValue}}
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gaps-col-2 gaps-col-xs">
                                                            <div class="gaps-form-group">
                                                                <div class="gaps-form-field">
                                                                    <button type="submit" @click.prevent="Submit"
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


</template>

<script lang="ts">
    import axios from "axios"
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class DropDown extends Vue {
        @Prop() private msg!: string;
        icon: any = [];
        DropdownValues: any = [];
        location: any = null;
        allLocations: any = [];
        uniqueArrLoc: any = [];
        uniqueArrDep: any = [];
        department: any = null;
        allDepartments: any = [];
        filterJobs: any = [];

        async mounted() {

            await this.listDropdownValues()
            this.uniqueArrLoc = [...new Set(this.DropdownValues.map((data: any) => data.categories.location))]
            this.uniqueArrDep = [...new Set(this.DropdownValues.map((data: any) => data.categories.department))]
        }


        async listDropdownValues() {
            await axios.get(`https://api.lever.co/v0/postings/terumo`)
                .then(((jobRes) => {
                    this.DropdownValues = jobRes.data;
                }))
        }

        async Submit() {
            let filterJobs
            if (this.location == null && this.department == null) filterJobs = this.DropdownValues;
            else filterJobs = (this.location !== null && this.department !== null) ? this.DropdownValues.filter((job: any) => job.categories.location === this.location && job.categories.department === this.department) : '' || (this.department !== '' && this.location === null) ? this.DropdownValues.filter((job: any) => job.categories.department === this.department) : '' || (this.location !== '' && this.department === null) ? this.DropdownValues.filter((job: any) => job.categories.location === this.location) : '';
            await this.$emit('filterJobs', filterJobs)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    /*.banner-wrapper {*/
    /*    !*background-image: url(../assets/job-banner.jpg);*!*/
    /*    background-repeat: no-repeat;*/
    /*    background-position: center center;*/
    /*    background-size: cover;*/
    /*    position: relative;*/
    /*    min-height: 400px;*/
    /*    display: block;*/
    /*}*/

    /*.container {*/
    /*    margin-right: auto;*/
    /*    margin-left: auto;*/
    /*    padding-left: 15px;*/
    /*    padding-right: 15px;*/
    /*    max-width: 985px;*/
    /*}*/

    /*.row {*/
    /*    margin-left: -15px;*/
    /*    margin-right: -15px;*/
    /*}*/

    /*.pt50 {*/
    /*    padding-top: 50px !important;*/
    /*}*/

    /*.banner-inner .banner-title h1 {*/
    /*    font-size: 24px;*/
    /*    font-weight: bolder;*/
    /*    text-align: center;*/
    /*}*/

    /*.banner-main {*/
    /*    position: relative;*/
    /*    display: block;*/
    /*    border-radius: 4px;*/
    /*    box-shadow: 0px 14px 56.43px 0.57px rgba(169, 171, 175, 0.7);*/
    /*}*/

    /*.p-4 {*/
    /*    padding: 0rem !important;*/
    /*}*/

    /*.search-job .form-group {*/
    /*    position: relative;*/
    /*    margin-bottom: 0px !important;*/
    /*}*/

    /*.banner-main .form-group .icon .icon-briefcase {*/
    /*    position: absolute;*/
    /*    !*background-image: url(../assets/briefcase.svg);*!*/
    /*    background-repeat: no-repeat;*/
    /*    background-size: 20px;*/
    /*    width: 20px;*/
    /*    height: 20px;*/
    /*    top: 0;*/
    /*    margin-top: 20px;*/
    /*    margin-left: 10px;*/
    /*    opacity: .4;*/
    /*}*/

    /*.banner-main .form-group .icon .icon-location {*/
    /*    position: absolute;*/
    /*    !*background-image: url(../assets/location.svg);*!*/
    /*    background-repeat: no-repeat;*/
    /*    background-size: 20px;*/
    /*    width: 20px;*/
    /*    height: 20px;*/
    /*    top: 0;*/
    /*    margin-top: 20px;*/
    /*    margin-left: 10px;*/
    /*    opacity: .4;*/
    /*}*/

    /*.pb30 {*/
    /*    padding-bottom: 30px !important;*/
    /*}*/

    /*.pt30 {*/
    /*    padding-top: 30px !important;*/
    /*}*/

    /*.banner-main .form-group .icon {*/
    /*    position: absolute;*/
    /*    left: 10px;*/
    /*    font-size: 16px;*/
    /*    -webkit-transform: translateY(-50%);*/
    /*    -ms-transform: translateY(-50%);*/
    /*    transform: translateY(-50%);*/
    /*    color: #d9d9d9;*/
    /*}*/

    /*.search-job .form-group .form-control {*/
    /*    padding-left: 60px !important;*/
    /*    display: block;*/
    /*    width: 92%;*/
    /*    font-size: 14px;*/
    /*    padding: 12px 30px;*/
    /*    min-height: 60px;*/
    /*    color: #000;*/
    /*    border-radius: 5px;*/
    /*    -webkit-box-shadow: none !important;*/
    /*    box-shadow: none !important;*/
    /*    border: none !important;*/
    /*    !*background-image: url(../assets/down-button.svg);*!*/
    /*    background-size: 12px;*/
    /*    background-position-x: right;*/
    /*    background-position-y: center;*/
    /*    background-repeat: no-repeat;*/
    /*    -webkit-appearance: none;*/
    /*    -moz-appearance: none;*/
    /*    appearance: none;*/
    /*}*/

    /*.banner-main .form-group .form-control option {*/
    /*    padding-left: 50px !important;*/
    /*}*/

    /*.search-job button.form-control.btn.btn-primary {*/
    /*    position: relative;*/
    /*    right: 5px;*/
    /*    background-color: #b92f2f;*/
    /*    color: #fff;*/
    /*    background-image: none !important;*/
    /*    padding-left: 0px !important;*/
    /*    padding-right: 0px !important;*/
    /*    padding-top: 0px !important;*/
    /*    padding-bottom: 0px !important;*/
    /*    height: 50px;*/
    /*    min-height: 50px;*/
    /*    margin-top: 5px;*/
    /*    margin-right: 5px !important;*/
    /*    border-radius: 4px;*/
    /*    font-weight: bold;*/
    /*}*/

</style>
