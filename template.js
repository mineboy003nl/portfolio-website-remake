
//*navbar----------------------------------------------------------------------
const navItems = document.getElementsByClassName("navItem")
let activeDropdown = null

for (let i = 0; i < navItems.length; i++) {
    let navItem = navItems[i]

    navItem.addEventListener("mouseenter", function() {
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

    navItem.addEventListener("mouseleave", function() {
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

//*carousel--------------------------------------------------------------------
class carouselWorkings{
    selectedItem = null
    carousel = null
    items = null
    spacing = 35
    constructor(id){
        this.carousel =  id
        this.items = this.carousel.getElementsByClassName("carouselItem")
        this.selectedItem = Math.ceil(this.items.length / 2 - 1)
        this.rotateCarousel()
    }
    rotateCarousel(){
        for (let i = 0; i < this.items.length; i++){
            let item = this.items[i]

            item.style.left = `${50+(this.spacing*(i-(this.selectedItem)))}%`
        }
    }
    plus(){
        if (this.selectedItem + 1 == this.items.length){
            return this.selectedItem
        }
        this.selectedItem += 1
        this.rotateCarousel()
        return this.selectedItem
    }
    min(){
        if(this.selectedItem - 1 == -1){
            return this.selectedItem
        }
        this.selectedItem -= 1
        this.rotateCarousel()
        return this.selectedItem
    }
    set(index){
        this.selectedItem = index
        this.rotateCarousel()
        return this.selectedItem
    }
}

const carousels = document.getElementsByClassName("carouselContainer")
const carouselList = new Map()

for (let i = 0; i < carousels.length; i++){
    let carousel = carousels[i]

    let id = carousel.id

    carouselList.set(`${id}`, new carouselWorkings(carousel))
}


//selector-menu----------------------------------------------------------------
const carouselSections = document.getElementsByClassName("carousel")

function selecterView(){
    for (let i = 0; i < carouselSections.length; i++){
        let carouselSection = carouselSections[i]
    
        let selectors = carouselSection.getElementsByClassName("selector")
        for (let i = 0; i < selectors.length; i++){
            let selector = selectors[i]
    
            let selectorButtons = selector.getElementsByTagName("button")
            for (let i = 0; i < selectorButtons.length; i++){
                let selectorButton = selectorButtons[i]
                let index = i
                let id = selectorButton.classList
    
                if (carouselList.get(`${id}`).selectedItem == index){
                    selectorButton.style.aspectRatio = "2/1"
                }else{
                    selectorButton.style.aspectRatio = "1/1"
                }
            }
        }
    }
}

selecterView()