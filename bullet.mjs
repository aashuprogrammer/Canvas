import { LEFT, RIGHT, UP, DOWN } from "./dir.mjs";

class Bullet {
  #x;
  #y;
  #dir;
  #damage;
  #size;
  #color;
  #isEnemy;
  #speed;
  #markForRemoval = false;
  constructor(x, y, dir, isEnemy, damage, speed, size, color) {
    this.#x = x;
    this.#y = y;
    this.#dir = dir;
    this.#damage = damage;
    this.#size = size;
    this.#color = color;
    this.#isEnemy = isEnemy;
    this.#speed = speed;
  }
  get posX() {
    return this.#x;
  }
  get posY() {
    return this.#y;
  }
  get damage() {
    return this.#damage;
  }
  get size() {
    return this.#size;
  }
  get color() {
    return this.#color;
  }

  get markForRemoval() {
    return this.#markForRemoval;
  }
  set markForRemoval(val) {
    this.#markForRemoval = val;
  }
  reduceBulletDamage = function (d) {
    this.#damage -= d;
  };
  move = function () {
    if (this.#dir === UP) {
      this.#y -= this.#speed;
    } else if (this.#dir === DOWN) {
      this.#y += this.#speed;
    } else if (this.#dir === LEFT) {
      this.#x -= this.#speed;
    } else if (this.#dir === RIGHT) {
      this.#x += this.#speed;
    }
  };
}

export { Bullet };
