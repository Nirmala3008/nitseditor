<template>
    <div>
        <!--begin: Head -->
        <div class="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x" style="background-image: url(/nits-assets/media/media/misc/bg-1.jpg)">
            <div class="kt-user-card__avatar">
                <img class="kt-hidden" alt="Pic" src="/nits-assets/media/media/users/300_25.jpg" />

                <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->
                <span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">S</span>
            </div>
            <div class="kt-user-card__name">
                Super Admin
            </div>
            <div class="kt-user-card__badge">
                <span class="btn btn-success btn-sm btn-bold btn-font-md">23 messages</span>
            </div>
        </div>

        <!--end: Head -->

        <!--begin: Navigation -->
        <div class="kt-notification">
            <a href="#" class="kt-notification__item">
                <div class="kt-notification__item-icon">
                    <i class="flaticon2-calendar-3 kt-font-success"></i>
                </div>
                <div class="kt-notification__item-details">
                    <div class="kt-notification__item-title kt-font-bold">
                        My Profile
                    </div>
                    <div class="kt-notification__item-time">
                        Account settings and more
                    </div>
                </div>
            </a>
            <a href="#" class="kt-notification__item">
                <div class="kt-notification__item-icon">
                    <i class="flaticon2-mail kt-font-warning"></i>
                </div>
                <div class="kt-notification__item-details">
                    <div class="kt-notification__item-title kt-font-bold">
                        My Messages
                    </div>
                    <div class="kt-notification__item-time">
                        Inbox and tasks
                    </div>
                </div>
            </a>
            <a href="#" class="kt-notification__item">
                <div class="kt-notification__item-icon">
                    <i class="flaticon2-rocket-1 kt-font-danger"></i>
                </div>
                <div class="kt-notification__item-details">
                    <div class="kt-notification__item-title kt-font-bold">
                        My Activities
                    </div>
                    <div class="kt-notification__item-time">
                        Logs and notifications
                    </div>
                </div>
            </a>
            <a href="#" class="kt-notification__item">
                <div class="kt-notification__item-icon">
                    <i class="flaticon2-hourglass kt-font-brand"></i>
                </div>
                <div class="kt-notification__item-details">
                    <div class="kt-notification__item-title kt-font-bold">
                        My Tasks
                    </div>
                    <div class="kt-notification__item-time">
                        latest tasks and projects
                    </div>
                </div>
            </a>
            <div class="kt-notification__custom">
                <a class="btn btn-label-brand btn-sm btn-bold" @click.prevent="logout">Sign Out</a>
            </div>
        </div>

        <!--end: Navigation -->
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "UserDetails",
        data() {
            return {
                nitseditor: JSON.parse(nitseditor)
            }
        },
        methods:{
            logout() {
                this.$auth.logout()
                this.$router.push('/');
            }
        },
        computed: {
            ...mapState({
                user: state => state.user
            })
        }
    }
</script>

<style scoped>

</style>
