interface ICharacter {
  name: string;
  moveSpeed: number;
  move: () => void;
}

class Character implements ICharacter {
  constructor(public name: string, public moveSpeed: number) {}
  move() {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
