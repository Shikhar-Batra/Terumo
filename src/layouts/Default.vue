<template>
    <div class="layout">
        <div class="primaryHeaderLogoWrapperLink">
            <!--                  <img ng-if="! bNull" class="primaryHeaderLogo" alt="Terumo CV Group" dynamic-load-callback="" brand-property="primaryHeaderLogo" ng-src="https://sjobs.brassring.com/img/images_25987_5326/images/img_terumoLogo-TCG.png" src="./Job Search Welcome_files/img_terumoLogo-TCG.png">&lt;!&ndash; end ngIf: ! bNull &ndash;&gt;&lt;!&ndash; ngIf: bNull &ndash;&gt;
            -->
            <a href="/">
                <g-image src="~/terumo-logo.png" alt="Terumo CV Group" class="primaryHeaderLogo"></g-image>
            </a>&nbsp;
        </div>
        <header class="header">
            <!--      <strong>-->
            <!--        <g-link to="/">{{ $static.metadata.siteName }}</g-link>-->
            <!--      </strong>-->
            <nav class="nav">
                <g-link class="nav__link" to="/aortic">Aortic</g-link>
<!--                <g-link class="nav__link" to="/heart">Heart</g-link>-->
                <g-link class="nav__link" to="/cardiovascular">Cardiovascular</g-link>
                <g-link class="nav__link" to="/medical">Medical</g-link>


            </nav>
        </header>
        <slot/>
        <site-footer></site-footer>
    </div>
</template>


<style>
    /*#homeContainer{*/

    /*    max-width: 1243px;*/
    /*    margin: 0 auto;*/
    /*}*/

    body {
        font-family: Barlow, Arial, sans-serif;
        margin: 0;
        padding: 0;
        line-height: 1.5;
        body: #415364;
    }

    .layout {
        /*max-width: 1243px;*/
        /*margin: 0 auto;*/
        /*padding-left: 20px;*/
        /*padding-right: 20px;*/
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*margin-bottom: 20px;*/
        /*height: 80px;*/
        /*  max-width: 1243px;*/
        /*  margin: 0 auto;*/
    }

    .nav__link {
        margin-left: 20px;
        color: #008737;
        font-size: 16px;
        line-height: 60px;
    }

    .nav__link:hover {
        border-bottom: 1px solid;
        color: #008737;
    }


    .primaryHeaderLogoWrapperLink {
        /*max-width: 1243px;*/
        margin-top: 10px !important;
    }


    img.primaryHeaderLogo {
        height: 35px;
        /*width: auto;*/
    }

    header.nav {
        float: left;


    }


    @media (min-width: 576px) {

        .header {
            max-width: 540px;
            margin: 0 20px;
        }

        .primaryHeaderLogoWrapperLink {
            max-width: 540px;
            margin: 0 20px;
        }

    }

    @media (min-width: 768px) {

        .header {
            max-width: 720px;
            margin: 0 20px;
        }

        .primaryHeaderLogoWrapperLink {
            max-width: 720px;
            margin: 0 20px;
        }


    }

    @media (min-width: 992px) {

        .header {
            max-width: 960px;
            margin: 0 20px;
        }

        .primaryHeaderLogoWrapperLink {
            max-width: 960px;
            margin: 0 20px;
        }


    }

    @media (min-width: 1200px) {

        .header {
            max-width: 1140px;
            margin: 0 20px;
        }

        .primaryHeaderLogoWrapperLink {
            max-width: 1140px;
            margin: 0 20px;
        }


    }

    @media (min-width: 1600px) {
        .header {
            max-width: 1440px;
            margin: 0 20px;

        }


        .primaryHeaderLogoWrapperLink {
            max-width: 1440px;
            margin: 0 20px;
        }
    }


</style>
<script>
    import SiteFooter from "~/components/SiteFooter.vue";

    export default {
        components: {
            "site-footer": SiteFooter,
        },
        mounted() {
        }
    };
</script>
