(function () {
  "use strict";

  let counter = 1;

  function contentRotator() {
    $(`#content img:nth-child(${counter})`).fadeIn(2000, function () {
      if ($(this).is("#content img:last-child")) {
        setTimeout(function () {
          $(`#content img:nth-child(${counter})`).fadeOut(2000, function () {
            counter = 1;
            contentRotator();
          });
        }, 7000);
      } else {
        setTimeout(function () {
          $(`#content img:nth-child(${counter})`).fadeOut(2000, function () {
            counter++;
            contentRotator();
          });
        }, 7000);
      }
    });
  }

  let timer = 1;

  function paragraphRotator() {
    $(`#paragraphs p:nth-child(${timer})`).fadeIn(2000, function () {
      if ($(this).is("#paragraphs p:last-child")) {
        setTimeout(function () {
          $(`#paragraphs p:nth-child(${timer})`).fadeOut(2000, function () {
            timer = 1;
            paragraphRotator();
          });
        }, 7000);
      } else {
        setTimeout(function () {
          $(`#paragraphs p:nth-child(${timer})`).fadeOut(2000, function () {
            timer++;
            paragraphRotator();
          });
        }, 7000);
      }
    });
  }
  contentRotator();
  paragraphRotator();
})();
