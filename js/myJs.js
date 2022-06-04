const textConfig = {
  text1: "He luu cậu!",
  text2: "Tớ có điều này muốn hỏi cậu nhớ phải trả lời thật lòng nhaaa.",
  text3: "Are you love me ._.",
  text4: "",
  text5: "Hông",
  text6: "Iu Thưn",
  text7: "lí do cậu thích tớ đi :vvvv",
  text8: "Gửi cho tớ <3",
  text9: "Vì cậu đẹp try vlllll",
  text10: "Dạ làm gì chọn được cái kia :))))",
  text11:
    "Iu Thưn",
  text12: "Đồng ý",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    // firstQuestion();
    $(".content").show(200);
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  // $("#yes").html(textConfig.text6);

  // function firstQuestion() {
  //   $(".content").hide();
  //   Swal.fire({
  //     title: textConfig.text1,
  //     text: textConfig.text2,
  //     imageUrl: "img/cuteCat.jpg",
  //     imageWidth: 300,
  //     imageHeight: 300,
  //     background: '#fff url("img/iput-bg.jpg")',
  //     imageAlt: "Custom image",
  //   }).then(function () {
  //     $(".content").show(200);
  //   });
  // }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
      Swal.fire({
        width: 900,
        confirmButtonText: textConfig.text12,
        background: '#fff url("img/iput-bg.jpg")',
        title: textConfig.text10,
        text: textConfig.text11,
        confirmButtonColor: "#83d0c9",
        onClose: () => {
          window.location = "http://fb.com";
        },
      });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
