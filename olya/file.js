  var imagesCount = document.images.length;
  var difference = 0;
  const num = document.querySelector('#num');
  const imagesPositions = [];
  num.innerText = imagesCount;

  $(window).on('load', function() {

    console.log("Window height " + $(window).height());
    console.log("Image height " + $("#imageFirst").height);
    difference = $("#imageFirst").height - $(window).height();
    difference = difference / 2;
    console.log("Top margin should be " + difference);

    $("img").each(function() {
      imagesPositions.push($(this).prop("offsetTop"));
    });

    function getImageNumber(number, imagesPositions) {
      for (var i = 0; i < imagesPositions.length; ++i) {
        if (number < imagesPositions[i]) {
          return i;
        }
      }
    }

    console.log(imagesPositions);

    window.addEventListener('scroll', function(e) {
      num.innerText = getImageNumber(window.scrollY - $(window).height() / 2, imagesPositions) + 1 + "/" + imagesCount;
    });

  });
