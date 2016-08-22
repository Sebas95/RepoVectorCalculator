/*Vector dfinition */
class VectorOps {
  constructor() {
  }

    sumarVectores(VectorA, VectorB){
      var VectorC = new Vector (VectorA.x+VectorB.x, VectorA.y+VectorB.y, VectorA.z+VectorB.z)
      return VectorC
    }

    restarVectores(VectorA, VectorB){
      var VectorC = new Vector (VectorA.x-VectorB.x, VectorA.y-VectorB.y, VectorA.z-VectorB.z)
      return VectorC
    }

    puntoVectores(VectorA, VectorB){
      var Producto = (VectorA.x*VectorB.x+VectorA.y*VectorB.y+VectorA.z*VectorB.z)
      return Producto
    }

    cruzVectores(VectorA, VectorB){
      var VectorC = new Vector (VectorA.y*VectorB.z-VectorA.z*VectorB.y,
                                VectorA.x*VectorB.z-VectorA.z*VectorB.x,
                                VectorA.x*VectorB.y-VectorA.y*VectorB.x)
      return VectorC
    }



}
