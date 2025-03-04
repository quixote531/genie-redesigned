// 모바일메뉴
$(document).ready(function(){
    const 
        mbBtn = $('.mobile-btn'),
        mbMenu = $('.mb-menu'),  
        closeBtn = $('.close-btn')
    
        mbBtn.click(function(e){
            e.preventDefault();
            // mbBtn.addClass('active')
            mbMenu.addClass('active')
        })
        closeBtn.click(function(e){
            e.preventDefault();
            mbMenu.removeClass('active')
        })
})


// 비주얼 영역
let swiperVisual;

function initialSwiper() {
    if (swiperVisual) swiperVisual.destroy(true, true); // 기존 Swiper 초기화

    let windowWidth = window.innerWidth;

    if (windowWidth > 960) {
        // 960px 이상에서는 Coverflow 효과 적용
        swiperVisual = new Swiper(".sw-visual", {
            autoplay: {
                delay: 20000,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: ".sw-visual-prev",
                nextEl: ".sw-visual-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            mousewheel: true,
            keyboard: true,
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 150,
            centeredSlides: true,
            effect: "coverflow",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                scale: 1.05,
                depth: 150,
                modifier: 1,
                slideShadows: true,
            }
        });
    } else {
        // 960px 이하에서는 일반 슬라이드로 변경
        swiperVisual = new Swiper(".sw-visual", {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                prevEl: ".sw-visual-prev",
                nextEl: ".sw-visual-next",
            },
            loop: true,
        });
    }
}

// 초기 실행
initialSwiper();

// 화면 크기 변경 감지하여 Swiper 재설정
window.addEventListener("resize", initSwiper);





// 최신음악 영역

let swiper1, swiper2;

function initSwiper() { //탭을 변경할 때마다 호출
    if (swiper1) swiper1.destroy(true, true); // 기존 swiper 삭제
    if (swiper2) swiper2.destroy(true, true); // 기존 swiper 삭제

    swiper1 = new Swiper(".ns-slider01", {
        slidesPerView: 6,
        loop: true,
        autoplay: true,
        autoplay: {
            delay: 5000, 
        },
        mousewheel: false,
        navigation: {
            nextEl: ".sw-newsong-next",
            prevEl: ".sw-newsong-prev",
        },
        breakpoints : {
            1800: {slidesPerView: 6},
            1380: {slidesPerView: 5},
            980: {slidesPerView: 4},
            680: {slidesPerView: 3},
            0: {slidesPerView: 2.5},
        }
    });

    swiper2 = new Swiper(".ns-slider02", {
        slidesPerView: 6,
        loop: true,
        autoplay: true,
        autoplay: {
            delay: 5000, 
        },
        mousewheel: false,
        navigation: {
            nextEl: ".sw-newsong-next",
            prevEl: ".sw-newsong-prev",
        },
        breakpoints : {
            1800: {slidesPerView: 6},
            1380: {slidesPerView: 5},
            980: {slidesPerView: 4},
            680: {slidesPerView: 3},
            0: {slidesPerView: 2.5},
        }
    });
}

$(function () {
    const nsTabList = $(".ns-tabmenu li"),
        nsTabContent = $(".ns-tabs > div");

    nsTabList.click(function (e) {
        e.preventDefault();
        nsTabList.removeClass("active");
        $(this).addClass("active");
        nsTabList.find("a").removeClass("active");
        $(this).find("a").addClass("active");
        nsTabContent.hide();

        let targetIdx = $(this).index();
        nsTabContent.eq(targetIdx).stop().show();

        // Swiper 초기화
        setTimeout(initSwiper, 0);
    });

    // 초기에 첫 번째 탭을 활성화하고 Swiper 초기화
    nsTabList.eq(0).trigger("click");
    setTimeout(initSwiper, 0); 
});


// 핫 아티스트 섹션
new Swiper('.sw-artist', {
    loop: true,
    autoplay: true,
        autoplay: {
            delay: 2000, 
        },
    slidesPerView: 3,
    centeredSlides: true,
    mousewheel: false,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 10,
        scale: 0.7,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        1280: {
            coverflowEffect: {
                stretch: 0,
                scale: 0.7,
                depth: 0,
            }
        },
    }
})

// 매거진 섹션
$(function(){
    const magazineList = $('.magazine .list-wrap li'),
        magazineImg = $('.magazine .img-wrap');
    magazineList.click(function(e){
        e.preventDefault()
        magazineList.find('a').removeClass("active")
        $(this).find('a').addClass("active")
        magazineImg.hide()
        
        let targetIdx=$(this).index()
        let newSrc = magazineList.eq(targetIdx).find('img').attr('src');
        magazineImg.find('img').attr('src', newSrc);
        magazineImg.stop().show();
    })

})

// 이벤트 섹션
new Swiper('.event-box', {
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 0,
    // autoplay: true,
    navigation: {
        nextEl: '.sw-event-next',
        prevEl: '.sw-event-prev',
    },
});


// 에디터추천 섹션
new Swiper('.sw-playlist',{
    loop: true,
    autoplay: true,
        autoplay: {
            delay: 5000, 
        },
    slidesPerView: 1.5, 
    spaceBetween: 15,
    // centeredSlides: true, // 중앙 정렬하여 양쪽 슬라이드 살짝 보이게
    // slidesOffsetBefore: 0, // 첫 슬라이드 왼쪽에 여백 추가
    // slidesOffsetAfter: 20, // 마지막 슬라이드 오른쪽에 여백 추가

    navigation: {
        nextEl: '.sw-playlist-next',
        prevEl: '.sw-playlist-prev',
    },
    breakpoints: {
        1600: {slidesPerView: 5},
        1280: {slidesPerView: 4},
        980: {slidesPerView: 3, spaceBetween: 20},
        480: {slidesPerView: 2.6,},
        380: {slidesPerView: 1.75},
        0: {slidesPerView: 1.75},
    }
})

// 뮤직비디오 섹션
new Swiper('.mv-swiper', {
    autoplay: true,
    autoplay: true,
        autoplay: {
            delay: 5000, 
        },
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    mousewheel: false,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        scale: 0.9,
        depth: 30,
        slideShadows: false,
    },
    breakpoints : {
        1280 : {
            slidesPerView: 3,
        },
        680 : {
            slidesPerView: 2,
        },
        0 : {
            slidesPerView: 1,
        }
    },
    navigation: {
        nextEl: '.sw-video-next',
        prevEl: '.sw-video-prev',
    },
})









