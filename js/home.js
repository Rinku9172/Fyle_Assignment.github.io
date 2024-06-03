$(document).ready(function () {

    $('#div1').click(function () {
        $('#mainImage').attr('src', "./assets/div1Img.jpg"); // Update with the desired image source
    });

    $('#div2').click(function () {
        $('#mainImage').attr('src', './assets/div2Img.jpg'); // Update with the desired image source
    });

    $('#div3').click(function () {
        $('#mainImage').attr('src', './assets/div3Img.jpg'); // Update with the desired image source
    });

    $(document).ready(function () {
        AOS.init();
    });
    const $scrollingWrapper = $('.scrolling-wrapper');
    const $dots = $('.dot');

    $dots.click(function () {
        const index = $(this).index();
        const scrollWidth = $scrollingWrapper.get(0).scrollWidth - $scrollingWrapper.outerWidth();
        const scrollPosition = (index / ($dots.length - 1)) * scrollWidth;

        $dots.removeClass('active');
        $(this).addClass('active');

        $scrollingWrapper.animate({
            scrollLeft: scrollPosition
        }, 500);
    });


    const cardData = [
        {
            imageSrc: './assets/2.png',
            hoverImageSrc: './assets/6.png',
            title: 'Web Development',
            description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque',
            buttonText: 'Read More',
            buttonIconSrc: './assets/arrow.png'
        },
        {
            imageSrc: './assets/3.png',
            hoverImageSrc: './assets/6.png',
            title: 'Graphic Design',
            description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque',
            buttonText: 'Read More',
            buttonIconSrc: './assets/arrow.png'
        },
        {
            imageSrc: './assets/4.png',
            hoverImageSrc: './assets/6.png',
            title: 'SEO Optimization',
            description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque',
            buttonText: 'Read More',
            buttonIconSrc: './assets/arrow.png'
        },
        {
            imageSrc: './assets/flowers.jpg',
            hoverImageSrc: './assets/6.png',
            title: 'Web Development',
            description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque',
            buttonText: 'Read More',
            buttonIconSrc: './assets/arrow.png'
        }

    ];

    const $cardContainer = $('#card-container');

    $.each(cardData, function (index, data) {
        const cardHtml = `
            <div class="col-4 ">
                <div class="card card-block">
                    <img src="${data.imageSrc}" alt="" />
                    <div class="card-details">
                        <img src="${data.hoverImageSrc}" alt="" />
                        <h3>${data.title}</h3>
                        <p>${data.description}</p>
                        <button>${data.buttonText} <img src="${data.buttonIconSrc}" alt=""></button>
                    </div>
                </div>
            </div>
        `;
        $cardContainer.append(cardHtml);
    });


    $('.card-details button').on('click', function () {

        window.open('https://fylehq.com', '_blank');
    });
});

