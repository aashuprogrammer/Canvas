import { Bullet } from "./bullet.mjs";
import { LEFT, RIGHT, UP, DOWN } from "./dir.mjs";

class Character {
  #score = 0;
  #x = 0;
  #y = 0;
  #o = UP;
  #maxPos;
  #speed;
  #health;
  #color;
  #size;
  #isEnemy;
  #bulletDamage;
  #bulletSpeed;
  #bulletSize;
  #bulletColor;
  constructor(
    x,
    y,
    o,
    size,
    speed,
    color,
    health,
    isEnemy,
    maxPos,
    bulletDamage,
    bulletSpeed,
    bulletSize,
    bulletColor
  ) {
    this.#x = x;
    this.#y = y;
    this.#o = o;
    this.#size = size;
    this.#speed = speed;
    this.#color = color;
    this.#health = health;
    this.#isEnemy = isEnemy;
    this.#maxPos = maxPos;
    this.#bulletDamage = bulletDamage;
    this.#bulletSpeed = bulletSpeed;
    this.#bulletSize = bulletSize;
    this.#bulletColor = bulletColor;
  }
  moveUp = function () {
    this.#o = UP;
    this.#y -= this.#speed;
    if (this.#y < this.#size / 2) {
      this.#y = this.#size / 2;
    }
  };
  moveDown = function () {
    this.#o = DOWN;
    this.#y += this.#speed;
    if (this.#y > this.#maxPos - this.#size / 2) {
      this.#y = this.#maxPos - this.#size / 2;
    }
  };
  moveLeft = function () {
    this.#o = LEFT;
    this.#x -= this.#speed;
    if (this.#x < this.#size / 2) {
      this.#x = this.#size / 2;
    }
  };
  moveRight = function () {
    this.#o = RIGHT;
    this.#x += this.#speed;
    if (this.#x > this.#maxPos - this.#size / 2) {
      this.#x = this.#maxPos - this.#size / 2;
    }
  };
  get posX() {
    return this.#x;
  }
  get posY() {
    return this.#y;
  }
  get health() {
    return this.#health;
  }
  get color() {
    return this.#color;
  }
  get size() {
    return this.#size;
  }
  get orientation() {
    return this.#o;
  }
  get score() {
    return this.#score;
  }
  increaseScore = function (points) {
    this.#score += points;
  };
  damage = function (damage) {
    this.#health -= damage;
  };

  fire = function () {
    return new Bullet(
      this.#x,
      this.#y,
      this.#o,
      this.#isEnemy,
      this.#bulletDamage,
      this.#bulletSpeed,
      this.#bulletSize,
      this.#bulletColor
    );
  };
}

export { Character };
