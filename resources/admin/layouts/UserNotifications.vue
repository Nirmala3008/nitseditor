<template>
    <form>

        <!--begin: Head -->
        <div class="kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b" style="background-image: url(/nits-assets/media/media/misc/bg-1.jpg)">
            <h3 class="kt-head__title">
                User Notifications
<!--                &nbsp;<span class="btn btn-success btn-sm btn-bold btn-font-md">23 new</span>-->
            </h3><br/><br/>
        </div>

        <!--end: Head -->
        <div class="tab-content">
            <div class="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll" data-scroll="true" data-height="300" data-mobile-height="200">
                <a href="#" class="kt-notification__item" v-if="!activityData.length" @click.prevent="">
                    <span class="text-info"> No notifications yet.   </span>
                </a>
                <a v-else href="#" class="kt-notification__item" v-for="(item,index) in activityData" @click.prevent="checkNotification(item)">
                    <div class="kt-notification__item-icon" v-if="item.notifiable_type === 'Nitseditor\\Plugins\\Stellar\\Models\\Interaction' && (item.type === 'interaction_created' || item.type === 'interaction_updated')">
                        <i class="flaticon2-line-chart kt-font-success"></i>
                    </div>
                    <div class="kt-notification__item-icon" v-if="item.notifiable_type === 'Nitseditor\\Plugins\\Stellar\\Models\\Interaction' && item.type === 'summary_mentioned'">
                        <i class="flaticon2-line-chart kt-font-brand"></i>
                    </div>
                    <div class="kt-notification__item-icon" v-if="item.notifiable_type === 'Nitseditor\\Plugins\\Stellar\\Models\\Task'">
                        <i class="flaticon2-line-chart kt-font-danger"></i>
                    </div>
                    <div class="kt-notification__item-details" v-if="item.notifiable_type === 'Nitseditor\\Plugins\\Stellar\\Models\\Interaction' && (item.type === 'interaction_created' || item.type === 'interaction_updated')">
                        <div class="kt-notification__item-title">
                            <span v-if="!item.read">
                                <strong>
                                    {{item.created_by.first_name+ ' '+ item.created_by.last_name}} has added you in interaction, scheduled at {{item.notifiable.scheduled}}
                                </strong>
                            </span>
                            <span v-else>
                                {{item.created_by.first_name+ ' '+ item.created_by.last_name}} has added you in interaction, scheduled at {{item.notifiable.scheduled}}
                            </span>
                        </div>
                        <div class="kt-notification__item-time">
                            {{ item.created_at }}
                        </div>
                    </div>
                    <div class="kt-notification__item-details" v-if="item.notifiable_type === 'Nitseditor\\Plugins\\Stellar\\Models\\Interaction' && item.type === 'summary_mentioned'">
                        <div class="kt-notification__item-title">
                            {{item.created_by.first_name+ ' '+ item.created_by.last_name}} has mentioned you in interaction summary
                        </div>
                        <div class="kt-notification__item-time">
                            {{ item.created_at }}
                        </div>
                    </div>
                    <div class="kt-notification__item-details" v-if="item.notifiable_type === 'Nitseditor\\Plugins\\Stellar\\Models\\Task'">
                        <div class="kt-notification__item-title">
                            {{item.created_by.first_name+ ' '+ item.created_by.last_name}} has assigned task to you
                        </div>
                        <div class="kt-notification__item-time">
                            {{ item.created_at }}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </form>
</template>

<script>
    import api from 'NitsModels/_api.js'

    export default {
        name: "UserNotifications",
        data(){
            return{
                activityData:[],
            }
        },
        methods:{
            getNotification(){
                new api().get('/nits-plugins-api/Stellar/notifications').then(response => {
                    if(response.status === 200)
                    {
                        this.activityData = response.data.notifications.data
                    }

                })
            },
            checkNotification(item) {
                if(item.notifiable_type === 'Nitseditor\\Plugins\\Stellar\\Models\\Interaction'){
                    new api().get('/nits-plugins-api/Stellar/notifications/'+item.id).then(response => {
                        if(response.status === 200)
                            this.$router.push({ name: 'Stellar__interaction-details', params: { id: item.notifiable_id }})
                    })
                }
                else if(item.notifiable_type === 'Nitseditor\\Plugins\\Stellar\\Models\\Task'){
                    new api().get('/nits-plugins-api/Stellar/notifications/'+item.id).then(response => {
                        if(response.status === 200)
                        {
                            // this.$router.push({ name: 'Stellar__interaction-details', params: { id: item.notifiable_id }}) whatever task page will be made...
                        }

                    })
                }
            }
        },
        created() {
            this.getNotification()
        },
        watch: {
            '$route'(to, from) {
               this.getNotification()
            }
        }
    }
</script>

<style scoped>

</style>
