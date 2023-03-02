import { games } from "../js module/gamesFin.js";
new games();

let navOffset = $("nav").offset().top;
$(window).scroll(() => {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > navOffset) {
    $("nav").css("top", "0");
    $("nav").css("position", "fixed");
  } else {
    $("nav").css("position", "relative");
    $("nav").css("top", `0`);
  }
});
