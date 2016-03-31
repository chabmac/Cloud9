var currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});



// function slideShow() {
//     document.getElementById('slider').className += "fadeOut";
//     setTimeout(function() {
//         document.getElementById('slider').src = imgArray[curIndex];
//         document.getElementById('slider').className = "";
//     },1000);
//     curIndex++;
//     if (curIndex == imgArray.length) { curIndex = 0; }
//     setTimeout(slideShow, imgDuration);
// }
// slideShow();
