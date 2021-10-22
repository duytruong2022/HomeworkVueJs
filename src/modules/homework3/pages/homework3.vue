<template>
    <div>
        <Contact />
        <Topbar />
        <div class="banner">
            <img src="../../../assets/images/homework3/baner.png" />
        </div>
        <div>
            Home › Laptops › Everyday Use Notebooks › MSI Prestige Series › MSI WS Series
        </div>
        <div>MSI PS Series (20)</div>
    </div>
</template>

<script>
import Topbar from '../components/Topbar.vue';
import Contact from '../components/Contact.vue';
export default {
    components: {
        Topbar,
        Contact,
    },
};
</script>
<style>
.banner {
    margin-top: 8px;
    text-align: center;
}
.banner img {
    width: 1250px;
    height: 100px;
}
</style>
