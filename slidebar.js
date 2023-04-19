// DOM => document object model

function iris() {
    const hamburger = document.querySelector(".hamburger");
    const sidebarCloseButton = document.querySelector(".close-button")
    const sidebarContainer = document.querySelector(".sidebar-container");

    const openSidebar = () => {
        sidebarContainer.classList.add("show-sidebar");
        console.log(sidebarContainer.classList);
    };

    const closeSidebar = () => {
        console.log(sidebarContainer.classList);
        sidebarContainer.classList.remove("show-sidebar");
        console.log(sidebarContainer.classList);
    }

    hamburger.addEventListener("click", openSidebar);
    sidebarCloseButton.addEventListener("click", closeSidebar);

}

iris();

function navRelatedcode() {
    const navbarContainer = document.querySelector(".nav-container");
    console.log(navbarContainer);

    window.addEventListener("scroll", function () {
        const scrollNumber = window.scrollY;
        const targetNumber = this.window.innerWidth >= 992 ? 70 : 50;
        if (scrollNumber >= targetNumber) {
            navbarContainer.classList.add("sticky-nav");
        } else {
            navbarContainer.classList.remove("sticky-nav");
        }
    });
}
