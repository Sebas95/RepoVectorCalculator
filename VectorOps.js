/*Vector dfinition 
This class is a multiple-operator for two mathematical vectors as arguments
*/
class VectorOps {

  /*
  Constructo of the class VectorOps
  */
  constructor() {
  }

    /*
    Do the addition of two vectors
    Receives two vectors
    Returns another vector object as the result
    */
    sumarVectores(VectorA, VectorB){
      var VectorC = new Vector (VectorA.x+VectorB.x, VectorA.y+VectorB.y, VectorA.z+VectorB.z)
      return VectorC
    }

    /*
     Do the substraction of two vectors
     Receives two vectors
     Returns another vector object as the result
    */
    restarVectores(VectorA, VectorB){
      var VectorC = new Vector (VectorA.x-VectorB.x, VectorA.y-VectorB.y, VectorA.z-VectorB.z)
      return VectorC
    }

    /*
    Do the product of two vectors
    Receives two vectors
    Retuns a number as the result
    */
    puntoVectores(VectorA, VectorB){
      var Producto = (VectorA.x*VectorB.x+VectorA.y*VectorB.y+VectorA.z*VectorB.z)
      return Producto
    }

    /*
    Do the cartesian product of two vectors
    Receives two vectors
    Returns another vector object as the result
    */
    cruzVectores(VectorA, VectorB){
      var VectorC = new Vector (VectorA.y*VectorB.z-VectorA.z*VectorB.y,
                                VectorA.x*VectorB.z-VectorA.z*VectorB.x,
                                VectorA.x*VectorB.y-VectorA.y*VectorB.x)
      return VectorC
    }
}
