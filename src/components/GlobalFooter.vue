<template>
    <footer class="f_footer">
        <div class="p_inner">
            <ul class="p_link">
                <li><a href="/term_of_use/">Terms and Conditions of Use</a></li>
                <li><a href="/sitemap/">Site Map</a></li>
                <li><a href="/privacy_policy/">Privacy Policy</a></li>
                <li><a href="/socialmedia_policy/">Social Media Policy</a></li>
            </ul>
            <p class="p_copyright">Copyright (C) Terumo Corporation, All Rights Reserved.</p>
        </div>
    </footer>

</template>


<script>
    export default {
        name: 'GlobalFooter',
        data () {
            return{

            }
        },
        methods: {
        }
    }
</script>

<style>
    .f_footer .p_link a:hover {
        color: #008d61;
    }

    .f_footer {
        border-top: 2px solid #008d61;
        padding: 30px 20px 15px;
    }

    .f_footer .p_inner {
        /*max-width: 1243px;*/
        /*margin: 0 auto;*/
    }

    .f_footer .p_link {
        margin-bottom: 15px;
        overflow: hidden;
    }
    .f_footer .p_link li {
        float: left;
        margin: 0 45px 15px 0;

    }

    .f_footer .p_link a {
        position: relative;
        display: inline-block;
        padding: 5px 16px 5px 5px;
        color: #415364;
        line-height: 1.53 !important;
        font-size:17px !important;
    }

    .f_footer .p_link a::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 9px;
        height: 9px;
        border-top: 2px solid #008d61;
        border-right: 2px solid #008d61;
        transform-origin: right top;
        transform: rotate(45deg);
    }

    ol, ul, li {
        list-style: none;
    }

    .f_footer .p_copyright {
        text-align: right;
        font-size: 1.4rem;
    }

    .f_footer {
        border-top: 2px solid #008d61;
        padding: 30px 20px 15px;
    }


    @media (min-width: 576px){

        .f_footer .p_inner{
            max-width: 540px;
            margin:0 auto;
        }

    }

    @media (min-width: 768px) {

        .f_footer .p_inner{
            max-width: 720px;
            margin:0 auto;
        }


    }
    @media (min-width: 992px) {

        .f_footer .p_inner{
            max-width: 960px;
            margin:0 auto;

        }


    }

    @media (min-width: 1200px) {

        .f_footer .p_inner{
            max-width: 1140px;
            margin:0 auto;

        }


    }

    @media (min-width: 1600px) {
        .f_footer .p_inner{
            max-width: 1440px;
            margin:0 auto;

        }
    }





</style>


