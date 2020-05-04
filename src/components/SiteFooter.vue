<template>
    <div class="homeFooterWrapper">
        <div role="contentinfo" class="themed pageFooter ng-scope">
            <div class="footerLinkContainer responsiveWidth  fullFooter">
               <div class="footerLink responsiveWidth  ng-scope" ng-repeat="link in FooterLinks">
                <a href="http://www.terumomedical.com/home/research/iisr-proposal.html" class="ng-scope ng-binding urlLink">FOR INVESTIGATORS</a>
            </div>
                <div class="footerLink responsiveWidth  ng-scope">
              <a href="http://www.terumomedical.com/home/about/quality-systems.html" class="ng-scope ng-binding urlLink">QUALITY SYSTEMS</a>
            </div>

              <div class="footerLink responsiveWidth  ng-scope" >
             <a href="http://www.terumomedical.com/home/tmc-disclaimer.html" class="ng-scope ng-binding urlLink">NOTICES</a>
            </div>

               <div class="footerLink responsiveWidth  ng-scope" >
                <a href="http://www.terumomedical.com/home/tmc-privacy-policy.html" class="ng-scope ng-binding urlLink">PRIVACY POLICY</a>
            </div>

                <div class="footerLink responsiveWidth  ng-scope" >
               <a href="https://www.ibm.com/privacy/details/us/en" class="ng-scope ng-binding urlLink">IBM Online Privacy Statement</a>
            </div>
            </div>
        </div>

    </div>

</template>


<script>
    export default {
        name: 'SiteFooter',
        data () {
            return {
            }
        },
        methods: {

        },
        mounted() {
            //
            // function listJobs(){
            //     axios.get(`https://api.lever.co/v0/postings/velocitycloud`)
            //        .then(((jobRes) => {
            //            this.JobPostings = jobRes.data;
            //            console.log(this.JobPostings)
            //
            //        }))
            //     console.log('Hi')

            // }

        }


    }
</script>

<style>
    .homeFooterWrapper .themed.pageFooter {
        background-color: #5a5a5a;
    }

    .pageFooter {
        left: 0;
        bottom: 0;
        padding: 8px;
        height: 40px;
        overflow: hidden;
        width: 100%;

    }
    .pageFooter .fullFooter {
        width: 100%;
    }

    .footerLinkContainer {
        padding: 0;
        /*max-width: 1243px;*/
        /*margin: 0 auto;*/
    }

    .footerLink{
        border-color: #E0E0E0;
        color: #ffffff;
    }


    .pageFooter .fullFooter :first-child {
        border-left: 0px;
    }
    .pageFooter .fullFooter .footerLink {
        display: inline-block;
    }
    .footerLink {
        text-decoration: none;
        min-width: 8%;
        max-width: 30%;
        text-align: center;
        border-left: 1px solid;
        display: inline-block;
        margin-right: 6px;
        padding: 5px 10px;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }


    .pageFooter .fullFooter :first-child {
        border-left: 0px;
    }

     .themed.pageFooter a {
         color: #ffffff;
         border-color: #ffffff;
         font-size:16px !important
     }
    .pageFooter .urlLink {
        border-bottom: none;
    }

    @media (min-width: 576px){

        .footerLinkContainer{
            max-width: 540px;
            margin:0 20px;
        }

    }

    @media (min-width: 768px) {

        .footerLinkContainer{
            max-width: 720px;
            margin:0 20px;
        }


    }
    @media (min-width: 992px) {

        .footerLinkContainer{
            max-width: 960px;
            margin:0 20px;
        }


    }

    @media (min-width: 1200px) {

        .footerLinkContainer{
            max-width: 1140px;
            margin:0 20px;
        }


    }

    @media (min-width: 1600px) {
        .footerLinkContainer{
            max-width: 1440px;
            margin:0 20px;
        }
    }


</style>


