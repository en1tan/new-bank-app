(function($) {
    "use strict";
    $(document).ready(function() {

        /* -------------------------------------------------
            menu
        ------------------------------------------------- */
        if ($('.menu-bar').length) {
            $(".menu-bar").on('click', function() {
                $(".ba-navbar").toggleClass("ba-navbar-show", "linear");
            });
            $('body').on('click', function(event) {
                if (!$(event.target).closest('.menu-bar').length && !$(event.target).closest('.ba-navbar').length) {
                    $('.ba-navbar').removeClass('ba-navbar-show');
                }
            });
            $(".menu-close").on('click', function() {
                $(".ba-navbar").toggleClass("ba-navbar-show", "linear");
            });
        }

        /* -------------------------------------------------
            add balance
        ------------------------------------------------- */
        if ($('.ba-add-balance-btn').length) {
            $(".ba-add-balance-btn").on('click', function() {
                $(".add-balance-inner-wrap").toggleClass("add-balance-inner-wrap-show", "linear");
            });
            $('.close').on('click', function () {
                    $('.add-balance-inner-wrap').removeClass('add-balance-inner-wrap-show');
                });
            $('body').on('click', function(event) {
                if (!$(event.target).closest('.ba-add-balance-btn').length && !$(event.target).closest('.add-balance-inner-wrap').length) {
                    $('.add-balance-inner-wrap').removeClass('add-balance-inner-wrap-show');
                }
            });
        }

        /* -----------------------------------------------
            withdraw
        ------------------------------------------------*/
        if ($('.ba-withdraw-balance-btn').length) {
            $('.ba-withdraw-balance-btn').on('click', function () {
                $(".withdraw-balance-inner-wrap").toggleClass('withdraw-balance-inner-wrap-show', 'linear');
            });
            $('.close').on('click', function () {
                $('.withdraw-balance-inner-wrap').removeClass('withdraw-balance-inner-wrap-show');
            });
            $('body').on('click', function (event) {
                if (!$(event.target).closest('.ba-withdraw-balance-btn').length && !$(event.target).closest('.withdraw-balance-inner-wrap').length) {
                    $('.withdraw-balance-inner-wrap').removeClass('withdraw-balance-inner-wrap-show');
                }
            })
        };

        /*------------------------------------------------
            Search Popup
        ------------------------------------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click', '#body-overlay', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '.search', function(e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });


        /*------------------------------------------------
            trading-product-slider
        ------------------------------------------------*/
        var leftArrow = '<i class="fa fa-angle-left"></i>';
        var rightArrow = '<i class="fa fa-angle-right"></i>';
        $('.send-money-slider').owlCarousel({
            stagePadding: 50,
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 2
                },
                374: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        $('.blog-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        /* -------------------------------------------------------------
        	RoundCircle Progress js
        ------------------------------------------------------------- */
        if ($('.chart-circle').length) {
            $('.chart-circle').each(function() {
                let $this = $(this);
                $this.circleProgress({
                    fill: {
                        color: $this.attr('data-color')
                    },
                    size: $this.height(),
                    startAngle: -Math.PI / 4 * 2,
                    emptyFill: 'rgba(0,0,0,0.2)',
                    lineCap: 'round'
                });
            });
        }

        /* circle-one */
        $('.single-goal-one .chart-circle').circleProgress({
            fill: {
                gradient: ["#1dcc70", "#1dcc70"]
            }
        });
        /* circle-two */
        $('.single-goal-two .chart-circle').circleProgress({
            fill: {
                gradient: ["#9a3ada", "#9a3ada"]
            }
        });
        /* circle-three */
        $('.single-goal-three .chart-circle').circleProgress({
            fill: {
                gradient: ["#ff396f", "#ff396f"]
            }
        });
        /* circle-four */
        $('.single-goal-four .chart-circle').circleProgress({
            fill: {
                gradient: ["#6236ff", "#6236ff"]
            }
        });


        /*-----------------
        auto notification
        ------------------*/
        $('#overlay').modal('show');

        setTimeout(function() {
            $('#overlay').modal('hide');
        }, 1500);


    });

    $(window).on('load', function() {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function(e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });

     /* -----------------------------------------------
            Datepicker
        ------------------------------------------------*/

    // $('#date-from').datepicker({
    //     autoclose: true,
    //     format: "mm/dd",
    //     maxViewMode: 0,
    //     startDate: "now"
    // });

    // $('#date-to').datepicker({
    //     autoclose: true,
    //     format: "mm/dd",
    //     maxViewMode: 0,
    //     startDate: "now"
    // });

    $('.carousel').carousel({
        interval: false
    });

     /* -----------------------------------------------
            Send Airtime
        ------------------------------------------------*/
        if ($('.ba-send-airtime-btn').length) {
            $('.ba-send-airtime-btn').on('click', function () {
                $(".send-airtime-inner-wrap").toggleClass('send-airtime-inner-wrap-show', 'linear');
            });
            $('.close').on('click', function () {
                $('.send-airtime-inner-wrap').removeClass('send-airtime-inner-wrap-show');
            });
            $('body').on('click', function (event) {
                if (!$(event.target).closest('.ba-send-airtime-btn').length && !$(event.target).closest('.send-airtime-inner-wrap').length) {
                    $('.send-airtime-inner-wrap').removeClass('send-airtime-inner-wrap-show');
                }
            })
    };

     /* -----------------------------------------------
            Send Data
        ------------------------------------------------*/
        if ($('.ba-send-data-btn').length) {
            $('.ba-send-data-btn').on('click', function () {
                $(".send-data-inner-wrap").toggleClass('send-data-inner-wrap-show', 'linear');
            });
            $('.close').on('click', function () {
                $('.send-data-inner-wrap').removeClass('send-data-inner-wrap-show');
            });
            $('body').on('click', function (event) {
                if (!$(event.target).closest('.ba-send-data-btn').length && !$(event.target).closest('.send-data-inner-wrap').length) {
                    $('.send-data-inner-wrap').removeClass('send-data-inner-wrap-show');
                }
            });
    };

     /* -----------------------------------------------
            Add Card
        ------------------------------------------------*/
        if ($('.ba-add-card-btn').length) {
            $('.ba-add-card-btn').on('click', function () {
                $(".add-card-inner-wrap").toggleClass('add-card-inner-wrap-show', 'linear');
            });
            $('.close').on('click', function () {
                $('.add-card-inner-wrap').removeClass('add-card-inner-wrap-show');
            });
            $('body').on('click', function (event) {
                if (!$(event.target).closest('.ba-add-card-btn').length && !$(event.target).closest('.add-card-inner-wrap').length) {
                    $('.add-card-inner-wrap').removeClass('add-card-inner-wrap-show');
                }
            });
    };

    /* -----------------------------------------------
            Change Email Address
        ------------------------------------------------*/
    if ($('.ba-change-email').length) {
        $('.ba-change-email').on('click', function () {
            $(".ba-change-email-inner-wrap").toggleClass("ba-change-email-inner-wrap-show", 'linear');
        });
        $('.close').on('click', function () {
            $('.ba-change-email-inner-wrap').removeClass('ba-change-email-inner-wrap-show');
        });
        $('body').on('click', function (event) {
            if (!$(event.target).closest('.ba-change-email').length && !$(event.target).closest('.ba-change-email-inner-wrap').length) {
                $('.ba-change-email-inner-wrap').removeClass('ba-change-email-inner-wrap-show');
            }
        });

    };

    /* -----------------------------------------------
            Change Contact Address
        ------------------------------------------------*/
    if ($('.ba-change-address').length) {
        $('.ba-change-address').on('click', function () {
            $(".ba-change-address-inner-wrap").toggleClass("ba-change-address-inner-wrap-show", 'linear');
        });
        $('.close').on('click', function () {
            $('.ba-change-address-inner-wrap').removeClass('ba-change-address-inner-wrap-show');
        });
        $('body').on('click', function (event) {
            if (!$(event.target).closest('.ba-change-address').length && !$(event.target).closest('.ba-change-address-inner-wrap').length) {
                $('.ba-change-address-inner-wrap').removeClass('ba-change-address-inner-wrap-show');
            }
        });

    }



})(jQuery);