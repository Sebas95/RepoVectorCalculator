/*Vector dfinition */
class Vector {
  constructor(x, y, z) {
    this.x=x;
    this.y=y;
    this.z=z;
  }

  getMagnitud(){
    return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
  }

}
