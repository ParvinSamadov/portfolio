$(document).ready(function () {
    const aboutButton = $('#turn-button');
    const burgerIcon = $('.burger-icon');
    const closeIcon = $('.close');
    const blurredPart = $('.blurred-part');
    const listsOfBurgerMenu = $('.lists-of-menu');
    const viewWorksButton = $('#works-button');
    let isScrollWork=true
    burgerIcon.click(function () {
        $('.burger-menu').toggleClass('active-transform');
        blurredPart.toggleClass('d-block');
        $("body").addClass('prevent-scroll');
        closeIcon.click(function () {
            $('.burger-menu').removeClass('active-transform');
            blurredPart.removeClass('d-block');
            $("body").removeClass('prevent-scroll');
        })
        blurredPart.click(function () {
            $('.burger-menu').removeClass('active-transform');
            blurredPart.removeClass('d-block');
            $("body").removeClass('prevent-scroll');
        })
        listsOfBurgerMenu.click(function () {
            $('.burger-menu').removeClass('active-transform');
            blurredPart.removeClass('d-block');
            $("body").removeClass('prevent-scroll');
        })
    })
    aboutButton.click(function () {
        $('.profile-image').toggleClass('active');
        aboutButton.toggleClass('active-button');
        $('.profile-image--container').css('transition', '1s');
        if (aboutButton.hasClass('active-button')) {
            aboutButton.text('Turn back');
        } else {
            aboutButton.text('About me');
        }
    })
    $('#projects').hide()
    viewWorksButton.click(function () {

        $('#projects').slideDown()
    })
    $(window).scroll(function(){
        if(Math.floor(window.scrollY) >= Math.floor($('#skills').offset().top) && isScrollWork){
            $('.progress-of-language-container').each(function() {
                let $this = $(this),
                    countTo = $this.attr('data-count');
            
                $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },
                {
                    duration: 3000,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum)+'%');
                    },
                    complete: function() {
                        $this.text(this.countNum+'%');
                    }
                });
                $({ widthNum: $this.css('width')}).animate({
                    widthNum: countTo
                },
                {
                    duration: 3000,
                    easing:'linear',
                    step: function() {
                        $this.css('width',Math.floor(this.widthNum)+'%')
                    },
                    complete: function() {
                        $this.css('width',this.widthNum +'%')
                    }
                });
            });
        isScrollWork=false
    }
    })
})