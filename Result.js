class Result {
  // prefix statis przy wywołaniu mówi, że tworzymy metodę statyczną, dostępną tylko z poziomu klasy 
  static moneyWinInGame(result, bid) {
    if (result) return 3*bid
    else return 0;
  } 

  static checkWinner(draw) {
    if ((draw[0] === draw[1] && draw[1] === draw[2]) || (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])) return true;
    else return false;
  }
}


// Do odwoływania się do metod w klasie nie jest potrzebna żadna instancja

// Result.moneyWinInGame(true, 12);