
const navItems = document.getElementsByClassName("navItem")

let activeDropdown = null

for (let i = 0; i < navItems.length; i++) {
    let navItem = navItems[i]

    navItem.addEventListener("mouseenter", function () {
        if (activeDropdown && activeDropdown !== this) {
            activeDropdown.classList.remove("drop")
            setTimeout(() => {
                activeDropdown.classList.remove("extend")
            }, 350)
            activeDropdown = null
        }

        this.classList.add("extend")

        if (this.classList.contains("dropDown")) {
            setTimeout(() => {
                if (this.classList.contains("extend")){
                    this.classList.add("drop")
                }else{
                    this.classList.add("extend")
                    this.classList.add("drop")
                }
            }, 350)
            activeDropdown = this
        }
    });

    navItem.addEventListener("mouseleave", function () {
        if (this.classList.contains("dropDown")) {
            this.classList.remove("drop")
            setTimeout(() => {
                if (!this.classList.contains("drop")){
                    this.classList.remove("extend")
                }else{
                    this.classList.remove("drop")
                    this.classList.remove("extend")
                }
                if (activeDropdown === this) {
                    activeDropdown = null
                }
            }, 350)
        } else {
            this.classList.remove("extend")
        }
    });
}


const carousels = document.getElementsByClassName("carouselContainer")

var eenAndereNaam = 3

function carouselWorkings(selectedItem){
    for (let i = 0; i < carousels.length; i++) {
        let carousel = carousels[i]
    
        let carouselItems = carousel.getElementsByTagName("div")
        for (let j = 0; j < carouselItems.length; j++){
            let carouselItem = carouselItems[j]
    
            carouselItem.style.left=`${50+(25*(j-(selectedItem-1)))}%`
        }
    }
}

carouselWorkings(eenAndereNaam)