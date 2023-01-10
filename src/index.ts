class Player {
  public first: string;
  public readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): void {
    console.log("SECRET METHOD");
  }
}

const elton = new Player("Elton", "Steele");
elton.first = "elton";
// elton.secretMethod()
