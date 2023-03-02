import { Ui } from "../js module/Ui.js";
import { detillas } from "../js module/detailis.js";

export class games {
  constructor() {
    this.displayData("mmorpg");
    // var dTarget;
    // $(".nav-item a").click(function () {
    //   $(".nav-item a").removeClass("Myactive");
    //   $(this).addClass("Myactive");
    //   dTarget = $(this).attr("data-bs-target");
    //   console.log(dTarget);
    // });
    document.querySelectorAll(".nav-item a").forEach((link) => {
      link.addEventListener("click", (e) => {
        document
          .querySelector(".nav-item .Myactive")
          .classList.remove("Myactive");
        e.target.classList.add("Myactive");
        console.log(e.target.dataset);
        this.displayData(e.target.dataset.bsTarget);
      });
    });
    // this.displayData(dTarget);
    // console.log(dTarget);
    this.ui = new Ui();
  }
  async displayData(change) {
    $(".banter-loader").removeClass("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f776405fabmsh8681f5e8390ecbbp1409d8jsn9279bbb50302",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let Data = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${change}`,
      options
    );
    let newData = await Data.json();
    this.ui.displaycardGames(newData);
    this.startEvent();
    console.log(newData);
    $(".banter-loader").addClass("d-none");
  }
  // $(".card").click(function () {
  //     let idCard = $(this).attr("data-bs-target");
  //     showDetails(idCard);
  // });
  startEvent() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.bsTarget;
        this.showDetails(id);
      });
    });
  }
  showDetails(idGame) {
    const detials = new detillas(idGame);
    $(".gameMain").addClass("d-none");
    $(".detils").removeClass("d-none");
  }
}
