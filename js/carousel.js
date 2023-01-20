const slider = new A11YSlider(document.querySelector(".slider"), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
      950: {
        dots: false, // 
      },
    },
  });