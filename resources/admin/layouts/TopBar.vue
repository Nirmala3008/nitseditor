<template>
    <div>
        <div id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default ">
            <div class="row" style="margin-left: 500px; margin-top: 20px">
               <h5>Welcome to Stellar Investor Relations</h5>
                <ul style="width: 55%; margin-left: 300px; margin-top: -25px">
                    <li> <router-link to="/plugins/Stellar/clients"> Clients </router-link></li>
                    <li> <router-link to="/plugins/Stellar/contacts"> Contacts </router-link></li>
                    <li> <router-link to="/plugins/Stellar/companies"> Companies </router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar"
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
