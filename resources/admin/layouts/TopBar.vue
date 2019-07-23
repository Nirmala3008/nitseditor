<template>
    <div>
        <form v-if="menuType === 'search'" class="kt-form" style="padding: 15px;">
            <div class="form-group row">
                <div class="col-lg-8">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Find In
                            </button>
                            <div class="dropdown-menu dropdown-menu-fit dropdown-menu-xl" aria-labelledby="dropdownMenuButton">
                                <div class="kt-notification">
                                    <a href="#" class="kt-notification__item">
                                        <div class="kt-notification__item-icon">
                                            <i class="flaticon2-line-chart kt-font-success"></i>
                                        </div>
                                        <div class="kt-notification__item-details">
                                            <div class="kt-notification__item-title">
                                                Entire Projects
                                            </div>
                                            <div class="kt-notification__item-time">
                                                search from name, description, location, specs etc
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="kt-notification__item">
                                        <div class="kt-notification__item-icon">
                                            <i class="flaticon2-image-file kt-font-warning"></i>
                                        </div>
                                        <div class="kt-notification__item-details">
                                            <div class="kt-notification__item-title">
                                                Projects by awarded contracts
                                            </div>
                                            <div class="kt-notification__item-time">
                                                search by contracts, awards
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="kt-notification__item">
                                        <div class="kt-notification__item-icon">
                                            <i class="flaticon2-bar-chart kt-font-info"></i>
                                        </div>
                                        <div class="kt-notification__item-details">
                                            <div class="kt-notification__item-title">
                                                Projects by tenders
                                            </div>
                                            <div class="kt-notification__item-time">
                                                search by tenders
                                            </div>
                                        </div>
                                    </a>
                                    <!--                                        <a href="#" class="kt-notification__item">-->
                                    <!--                                            <div class="kt-notification__item-icon">-->
                                    <!--                                                <i class="flaticon2-bar-chart kt-font-info"></i>-->
                                    <!--                                            </div>-->
                                    <!--                                            <div class="kt-notification__item-details">-->
                                    <!--                                                <div class="kt-notification__item-title">-->
                                    <!--                                                    Entire companies-->
                                    <!--                                                </div>-->
                                    <!--                                                <div class="kt-notification__item-time">-->
                                    <!--                                                    search from name, description, location, specs etc-->
                                    <!--                                                </div>-->
                                    <!--                                            </div>-->
                                    <!--                                        </a>-->
                                </div>
                            </div>
                        </div>
                        <input type="text" class="form-control" placeholder="Find.." aria-label="Text input with dropdown button">
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="button">Go!</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="input-group">
                        <button type="button" class="btn btn-brand dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Biltrax Data
                        </button>
                        <div class="dropdown-menu dropdown-menu-md">
                            <ul class="kt-nav kt-nav--bold kt-nav--md-space">
                                <li class="kt-nav__item">
                                    <a class="kt-nav__link active" href="#">
                                        <span class="kt-nav__link-icon"><i class="flaticon2-user"></i></span>
                                        <span class="kt-nav__link-text">Biltrax Data</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a class="kt-nav__link" href="#">
                                        <span class="kt-nav__link-icon"><i class="flaticon-feed"></i></span>
                                        <span class="kt-nav__link-text">Biltrax Analytics</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div v-else id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default ">
            <base-menu-top-one></base-menu-top-one>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        date() {
            return {
                menuType: 'search',
            }
        }
    }
</script>

<style scoped>

    li{
        display: inline-block;
        font-size: 14px;
        width: 30%;
        font-weight: 500;
    }

</style>