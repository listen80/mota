import Box from "./box";

class Enemy extends Box {
  constructor(...argu) {
    super(...argu);
  }
  calc({ tick2 }) {
    if (["enemys", "animates"].includes(this.info.cls)) {
      this.offsetX = tick2;
    }
  }
  getEnemyInfo() {
    console.log(this.enemys);
  }
}
export default Enemy;
