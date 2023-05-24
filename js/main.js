// Active nav left
let navBarLeft = document.querySelector(".nav_left");
let listItemLeft = navBarLeft.children;
for (const item of listItemLeft) {
    item.addEventListener('click', () => {

        let id = item.id;
        let listClass = item.classList;
        let flag = false;
        listClass.forEach(nameClass => {
            if (nameClass === "active") {
                flag = true;
            }
        })
        if (flag) {
            item.classList.remove('active')
            hideListCar()
        } else {
            for (const removeItem of listItemLeft) {
                removeItem.classList.remove('active');
            }
            item.classList.add('active');
            if (id === "activeVehicleList") {
                showListCar();
            } else {
                hideListCar();
            }
        }
    })
}
//hide when click
let vehicleList = document.getElementById("vehicle");
vehicleList.addEventListener("click", (event) => {
    let id = event.target.id;
    if (vehicleList.id === id) {
        hideListCar();
        document.getElementById("activeVehicleList").classList.remove("active");
    }
})
document.querySelector(".vehicle_close").onclick = () => {
    hideListCar();
    document.getElementById("activeVehicleList").classList.remove("active");
};


//show and hide vihecle list
let hideListCar = () => {
    document.getElementById("vehicle_content").style.animation = "hide 0.5s linear 1";
    setTimeout(() => {
        document.getElementById('vehicle').className = "hide-vehicle";
    }, 500)
}
let showListCar = () => {
    document.getElementById('vehicle').className = "show-vehicle";
    document.getElementById("vehicle_content").style.animation = "show 0.5s linear 1";
}
//Popup
let navRight = document.getElementById("myNavRight").children;
let rightItems = navRight[0].children;
for (const item of rightItems) {
    item.addEventListener("click", (event) => {
        let listClass = item.classList;
        let flag = false;
        listClass.forEach(className => {
            if (className === "active")
                flag = true;
        })
        if (flag) {
            item.classList.remove("active");
            hidePopup();
        } else {
            for (const itemRemove of rightItems) {
                itemRemove.classList.remove("active");
            }
            item.classList.add("active");
            if (item.id === "discovers") {
                showPopup();
            } else {
                hidePopup();
            }
        }
    })
}

let showPopup = () => {
    document.querySelector(".dropdown_popup").style.display = "block";
    document.querySelector(".dropdown_popup").style.animation = "showPopUp 0.5s"
}
let hidePopup = () => {
    document.querySelector(".dropdown_popup").style.animation = "hidePopUp 0.5s";
    setTimeout(() => {
        document.querySelector(".dropdown_popup").style.display = "none";
    }, 400)

}
// Active carousel
let liItemCarousel = document.querySelector(".carousel-indicators-config").children;
for (const item of liItemCarousel) {
    item.addEventListener("click", () => {
        for (const iterator of liItemCarousel) {
            iterator.classList.remove("active");
        }
        item.classList.add("active");
    })
}
//Show and hide indicator
let xsIndicator = document.getElementsByClassName("indicator-xs-header");
let ol = document.getElementById("ol-indicator");
xsIndicator[0].onclick = () => {
    let menu = document.getElementById("menu");
    ol.classList.toggle("active");
    if (ol.className === "active") {
        ol.style.display = "block";
        ol.style.animation = "slideShow 0.5s"
        document.getElementById("arrow-menu").style.transform = "rotateX(180deg)";
        setTimeout(() => {
            ol.style.height = "307px"
        }, 500)

    } else {
        ol.style.animation = "slideHide 0.5s"
        document.getElementById("arrow-menu").style.transform = "rotateX(0)";
        setTimeout(() => {
            ol.style.display = "none";
        }, 400);
    }
};
ol.addEventListener("click", (event) => {
    let listLi = ol.children;
    for (const li of listLi) {
        li.classList.remove("active");
    }
    event.target.classList.add("active");
    document.getElementById("type-chossen").innerHTML = event.target.innerHTML;
    ol.style.animation = "slideHide 0.5s";
    document.getElementById("arrow-menu").style.transform = "rotateX(0)";
    setTimeout(() => {
        ol.style.display = "none";
    }, 400);
})
// Active li when click pre next button
document.querySelector(".carousel-control-prev").onclick = () => {
    let index = getIndex();
    let preIndex = findPreIndex(index);
    addClassActive(preIndex);
}

document.querySelector(".carousel-control-next").onclick = ()=>{
    let index = getIndex();
    let nextIndex = findNextIndex(index);
    addClassActive(nextIndex);
}

function getIndex() {
    let slider = document.querySelector(".carousel-inner");
    return slider.querySelector(".active").getAttribute("data-num");
}
function findPreIndex(num) {
    if (Number(num) === 0) {
        return 4;
    } else {
        return num - 1;
    }
}
function findNextIndex(num){
    if (Number(num) === 4) {
        return 0;
    } else {
        return Number(num) + 1;
    }
}
function addClassActive(index) {
    let listLi = document.querySelector(".carousel-indicators-config").children;
    for (const li of listLi) {
        li.classList.remove("active");
    }
    listLi[index].classList.add("active");
    document.getElementById("type-chossen").innerHTML = listLi[index].innerHTML;
}
