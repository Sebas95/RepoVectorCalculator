/*Vector dfinition 
Representation of the mathematical entity called 
*/
class Vector {

  /*
  Constructor of the class Vector
  */
  constructor(x, y, z) {
    this.x=x; //x axis coordinate
    this.y=y; //y axis coordinate
    this.z=z; //x axis coordinate
  }

/*
Calculates the mathematical magnitude of itself
Retunrs a float number 
*/
  getMagnitud(){

    return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
  }

}
