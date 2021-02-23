import Box from "./box";

class Animate extends Box {
  constructor(...argu) {
    super(...argu);
  }
  calc({ tick2 }) {
    if (["enemys", "animates"].includes(this.info.cls)) {
      this.offsetX = tick2;
    }
  }
}
export default Animate;
