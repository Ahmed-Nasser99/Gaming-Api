import { Ui } from "./Ui.js";

export class detillas {
  constructor(id) {
    this.ui = new Ui();

    $("#closeTap").click(() => {
      $(".gameMain").removeClass("d-none");
      $(".detils").addClass("d-none");
    });
    this.showDetilis(id);
  }

  async showDetilis(id) {
    $(".banter-loader").removeClass("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f776405fabmsh8681f5e8390ecbbp1409d8jsn9279bbb50302",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let detiliasData = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    let Detdata = await detiliasData.json();
    this.ui.displaydetailsGames(Detdata);
    $(".banter-loader").addClass("d-none");
  }
}
