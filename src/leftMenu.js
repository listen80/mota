export const leftMenu = {
  floorId: -22,
  map: [
    [3, 3, 3, 3],
    [3, 0, 0, 0],
    [3, 0, 0, 0],
    [3, 0, 0, 0],
    [3, 0, 0, 0],
    [3, 0, 0, 0],
    [3, 0, 0, 0],
    [3, 21, 0, 0],
    [3, 22, 0, 0],
    [3, 23, 0, 0],
    [3, 0, 0, 0],
    [3, 0, 0, 0],
    [3, 3, 3, 3],
  ],
};

export const leftMenu2 = [
  [3, 3, 3, 3],
  [3, 0, 0, 0],
  [3, "生命", 0, "{hero.battleInfo.hp}"],
  [3, "攻击", 0, "{hero.battleInfo.atk}"],
  [3, "防御", 0, "{hero.battleInfo.def}"],
  [3, "金币", 0, "{hero.coin}"],
  [3, "经验", 0, "{hero.exp}"],
  [3, 21, 0, "10"],
  [3, 22, 0, "10"],
  [3, 23, 0, "10"],
  [3, 0, 0, 0],
  [3, 0, "{floor.name}", 0, 0],
  [3, 3, 3, 3],
];