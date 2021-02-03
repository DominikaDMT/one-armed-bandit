class Wallet {
  constructor(money) {
    let _money = money

    //metody muszą być w konstruktorze, żeby mieć dostęp do ukrytych

    // pobieranie aktialnej zawartości portfela
    this.getWalletValue = () => _money
    // przed -money będzie return w strzałkowej 

    // sprawdzanie czy użytkownik ma odpowiednią ilość środków
    this.checkCanPlay = (value) => {
      if (_money>= value) return true;
      return false;
    }

    // Zmmienianie zawartości portfela
    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !(isNaN(value))){
        if (type ==="+") {
          return _money += value;
        } else if (type === "-") {
          return _money -= value;
        } else {
          throw new Error("Nieprawidłowy typ działania");
        }
      } else {
        console.log(typeof value);
        throw new Error ("Nieprawidłowa liczba");
      }
    }
  }
}
// const wallet = new Wallet(200);

