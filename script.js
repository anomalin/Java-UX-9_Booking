const TopMenu = {
    name: "TopMenu",
    template: `<div class="topmenu">
                <div><img src="img/Group_7.svg" alt="logo"></div>
                <div class="menu-icons"><img src="img/fluent_people-community-16-filled.svg" alt="">
                    <img src="img/Vector-1.svg" alt="">
                    <img src="img/mdi_cog.svg" alt="">
                    <img src="img/Vector-2.svg" alt="">
                    <img src="img/Group_45.svg" alt="">
                </div>
                </div>`
}




const app = Vue.createApp({
    components: {
        "top-menu": TopMenu
    }
});

app.mount("#app");