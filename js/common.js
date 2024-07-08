/* ================================ common ================================ */
let url = location.href.split('/')[(location.href.split('/').length - 2)];
let html = document.querySelector("html"),
    body = document.querySelector("body"),
    main = document.querySelector("main"),
    header = document.querySelector("header"),
    footer = document.querySelector("footer"),
    menuicon = document.querySelector(".menuicon");

window.addEventListener("DOMContentLoaded",function(){
    let scrollY = window.scrollY,
        lastScroll = 0;
    $(".menuicon").on("click", function () {
        $(this).toggleClass("active");
    });

    $("#gnb>li>a").off("click").click(function(e){
        if(window.innerWidth <= 1024 && ($(this).siblings(".sub-menu").length > 0)){
            e.preventDefault();
            $(".sub-menu").stop().slideUp();
            $(this).siblings(".sub-menu").stop().slideToggle();
        }
    });

    $(".header-wrap #gnb").off("mouseenter").mouseenter(function(e){
        if(window.innerWidth > 1024){
            $("header").addClass("hover");
            $(".header_blur").addClass("on");
        }
    });

    $("header").off("mouseleave").mouseleave(function(e){
        if(window.innerWidth > 1024){
            $("header").removeClass("hover");
            $(".header_blur").removeClass("on");
        }
    });

    window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
        // if (window.innerWidth <= 1024 && header_gnb.classList.contains("active")) return false;
        let scrollTop = window.scrollY;
        if (scrollTop > lastScroll) {
            header.classList.remove("active");
        } else {
            header.classList.add("active");
        }
        lastScroll = scrollTop;
    });

    if(url == "main"){
        var main_slide = new Swiper(".main_slide", {
            loop: true,
            autoplay: {
                delay: 8000,
            },
            speed: 1000,
        });

        var s04_banner = new Swiper(".s04 .swiper",{
            loop: true,
            watchSlidesProgress: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
            },
            slidesPerView: "auto",
            speed: 10000,
            on: {
                resize: function (el) {
                    setTimeout(() => {
                        el.autoplay.running == true;
                        el.autoplay.paused == true;
                        el.autoplay.start();
                    }, 100);
                }
            }
        });

        var s05_banner = new Swiper(".s05 .swiper",{
            loop: true,
            watchSlidesProgress: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
            },
            slidesPerView: "auto",
            speed: 10000,
            on: {
                resize: function (el) {
                    setTimeout(() => {
                        el.autoplay.running == true;
                        el.autoplay.paused == true;
                        el.autoplay.start();
                    }, 100);
                }
            }
        });
    }
});

/* writeText는 local이나 https에서만 작동함, http에서는 작동안함 */
//innertext.textContent.trim().replace(/[^0-9]/g,"");
function copytext(elementName){
    let copyClick = document.querySelector(`${elementName}`);
    if(!copyClick || copyClick == null || copyClick == undefined) return false;
    copyClick.addEventListener("click", function(e) {
        e.preventDefault();
        let innertext = copyClick.textContent.trim();
        window.navigator.clipboard.writeText(innertext).then(() => {
            alert("복사되었습니다.");
        });
    });    
};

/* ================================ contact ================================ */
const form = document.querySelector(".contact form");
if (form) {
    let f_submit = document.querySelector(".f_submit"),
        input_company = document.querySelector(".input_company_name"),
        input_name = document.querySelector(".input_name"),
        input_tel = document.querySelector(".input_tel"),
        input_email = document.querySelector(".input_email"),
        textarea_detail = document.querySelector(".textarea_detail"),
        input_privacy = document.querySelector(".input_privacy"),
        file_btn = document.querySelectorAll("input.file_btn"),
        file_name = document.querySelectorAll(".file_name"),
        file_size = document.querySelectorAll(".file_size"),
        num = /[0-9]/,
        email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    form.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        };
    }, true);


    if (file_btn[0]) {
        file_btn.forEach((el, index) => {
            el.addEventListener("change", () => {
                if (el.files[0] == undefined) return false;
                file_name[index].textContent = el.files[0].name;
                if (el.files[0].size >= 1024) {
                    if (el.files[0].size >= (1024 * 1024 * 1024)) {
                        alert("1000MB를 초과하였습니다.");
                        file_name[index].textContent = "";
                        el.value = "";
                    } else {
                        file_name[index].innerHTML += `<span class="file_size">${(el.files[0].size / (1024 * 1024)).toFixed(2)} MB</span>`;
                    }
                } else {
                    file_name[index].innerHTML += `<span class="file_size">${(el.files[0].size / (1024 * 1024)).toFixed(10)} MB</span>`;
                }
            });
        });
    }

    function contactCheck(el) {
        if (el == input_tel && !num.test(el.value.trim())) {
            el.focus();
            return false;
        } else if (el == input_email && !email.test(input_email.value.trim())) {
            el.focus();
            return false;
        } else if (el == input_privacy && !el.checked) {
            el.focus();
            return false;
        } else if(!el.value.trim().length > 0 || el.value.trim().length == 0) {
            el.focus();
            return false;
        }
        return true;
    }

    f_submit.addEventListener("click", () => {
        if (!contactCheck(input_name)) {
            alert("이름을 입력해주세요");
            return false;
        }
        f_submit.disabled = false;
        form.submit();
    });
}

let t = [],
    u = [],
    e = document.querySelector(".split-title").textContent.trim(),
    s = document.querySelector(".split-sub-title").textContent.trim();

for(let i = 0; i <= e.length ; i++){
    if(e[i] != undefined){
        t.push(e[i]);
    }
}

for(let i = 0 ; i <= s.length;i++){
    if(s[i] != undefined){
        u.push(s[i]);
    }
}


document.querySelector(".split-title").textContent = "";
document.querySelector(".split-sub-title").textContent = "";



t.forEach(function(el,index){
    document.querySelector(".split-title").innerHTML += `<span>${el}</span>`;
});
u.forEach(function(el,index){
    document.querySelector(".split-sub-title").innerHTML += `<span>${el}</span>`;
});


let se = 0;
setTimeout(() => {
    document.querySelectorAll(".split-title span").forEach((el,index)=>{
        el.style.transition = `all 1s ${index / 20}s`;
        el.style.opacity = "1";
        el.style.transform = `translateY(0)`;
        se = index / 20;
    })
    setTimeout(() => {
        document.querySelectorAll(".split-sub-title span").forEach((el,index)=>{
            el.style.transition = `all 1s ${index / 20}s`;
            el.style.opacity = "1";
            el.style.transform = `translateY(0)`;
        });
    }, se * 1000);
}, 1000);