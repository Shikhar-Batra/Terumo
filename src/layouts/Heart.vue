<template>
    <div class="heart-layout">
        <div class="primaryHeaderLogoWrapperLink">
            <a href="/heart">
                <g-image src="~/terumoCV_logo.png" alt="Terumo CV Group" class="primaryHeaderLogo"></g-image>
            </a>&nbsp;
        </div>
        <header class="header">
            <!--      <strong>-->
            <!--        <g-link to="/">{{ $static.metadata.siteName }}</g-link>-->
            <!--      </strong>-->
            <nav class="nav">
                <g-link class="nav__link" to="/">All Jobs</g-link>
                <g-link class="nav__link" to="/heart">Heart Jobs</g-link>
            </nav>
        </header>

        <slot/>
        <global-footer></global-footer>
    </div>
</template>

<script>
    import GlobalFooter from "~/components/GlobalFooter.vue";

    export default {
        components: {
            "global-footer": GlobalFooter
        },
        mounted() {
        }
    };
</script>

<style scoped>
    body {
        /*font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;*/
        font-family: Barlow, Arial, sans-serif;
        margin: 0;
        padding: 0;
        line-height: 1.5;
        body: #415364;
    }


    .new-layout {
        /*max-width: 1243px;*/
        /*margin: 0 auto;*/
        /*padding-left: 20px;*/
        /*padding-right: 20px;*/
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*max-width: 1243px;*/
        /*margin: 0 auto;*/
    }

    .heart-layout .nav__link {
        margin-left: 20px;
        color: #415364;
        font-size: 16px;
        line-height: 60px;
        font-weight: bold;
    }

    .heart-layout .nav__link:hover {
        border-bottom: none !important;
        opacity: 0.7 !important;
        color: #444b52 !important;
        font-weight: bold;

    }


    .heart-layout .primaryHeaderLogoWrapperLink {
        /*max-width: 1243px;*/
        margin-top: 10px;

    }


    img.primaryHeaderLogo {
        height: 35px;
        /*width: auto;*/

    }

    header.nav {
        float: left;
        margin: 0 20px;

    }

    @media (min-width: 576px) {

        .header {
            max-width: 540px;
            margin: 0 auto;
        }

        .primaryHeaderLogoWrapperLink {
            max-width: 540px;
            margin: 0 auto;
        }

    }

    @media (min-width: 768px) {

        .header {
            max-width: 720px;
            margin: 0 auto;
        }

        .primaryHeaderLogoWrapperLink {
            max-width: 720px;
            margin: 0 auto;
        }


    }

    @media (min-width: 992px) {

        .header {
            max-width: 960px;
            margin: 0 auto;
        }

        .primaryHeaderLogoWrapperLink {
            max-width: 960px;
            margin: 0 auto;
        }


    }

    @media (min-width: 1200px) {

        .header {
            max-width: 1140px;
            margin: 0 auto;
        }

        .primaryHeaderLogoWrapperLink {
            max-width: 1140px;
            margin: 0 auto;
        }


    }

    @media (min-width: 1600px) {
        .header {
            max-width: 1440px;
            margin: 0 auto;
        }


        .primaryHeaderLogoWrapperLink {
            max-width: 1440px;
            margin: 0 auto;
        }
    }


</style>
