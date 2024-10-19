import { Character } from "./character.mjs";
import { Game } from "./game.mjs";
import { UP } from "./dir.mjs";

const gameConfig = {
  canavsSize: 600,
  canvasId: "canvas",

  playerSize: 30,
  playerColor: "red",
  playerSpeed: 10,
  playerHealth: 10,
  playerBulletDamage: 5,
  playerBulletSpeed: 10,
  playerBulletSize: 8,
  playerBulletColor: "blue",

  maxEnemies: 3,
  enemyFiringRate: 2,

  kilbishSize: 35,
  kilbishColor: "green",
  kilbishSpeed: 2,
  kilbishHealth: 50,
  kilbishBulletDamage: 7,
  kilbishBulletSpeed: 2,
  kilbishBulletSize: 10,
  kilbishBulletColor: "orange",

  shakaSize: 25,
  shakaColor: "orange",
  shakaSpeed: 2,
  shakaHealth: 10,
  shakaBulletDamage: 3,
  shakaBulletSpeed: 1,
  shakaBulletSize: 8,
  shakaBulletColor: "yellow",
};

const rango = new Character(
  gameConfig.canavsSize / 2,
  gameConfig.canavsSize / 2,
  UP,
  gameConfig.playerSize,
  gameConfig.playerSpeed,
  gameConfig.playerColor,
  gameConfig.playerHealth,
  false,
  gameConfig.canavsSize,
  gameConfig.playerBulletDamage,
  gameConfig.playerBulletSpeed,
  gameConfig.playerBulletSize,
  gameConfig.playerBulletColor
);

const rangoGame = new Game(gameConfig, rango);
rangoGame.run();

export { rangoGame };
