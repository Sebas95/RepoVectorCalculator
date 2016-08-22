
/*
Tests if the poperties of the class Vector where instantiated correctly.
 It compares by type and value
Uses de function assert.strictEqual() that compare both values and types.
*/

QUnit.test( "Constructor Test", function( assert ) {
	assert.expect(3); //expects 3 assertions
	var v = new Vector(66,53,19);
  	assert.strictEqual( v.x , 66 , "x:66" );
  	assert.strictEqual( v.y , 53 , "y:53" );
  	assert.strictEqual( v.z , 19 , "z:19" );
});


/*
Tests the function getMagnitud() of the class VectorOps
*/
QUnit.test( "Magnitud Test", function( assert ) {
	var v = new Vector(1,2,2);
  	assert.ok( v.getMagnitud() == 3, "Magnitud =  3" );
});


/*
Tests the function sumarVectores() from the class VectorOps.
It receives two vectors and the result is another vector that is compared
property by property with and expected resulting vector.
PropEqual()
*/
QUnit.test( "SumaVectores Test", function( assert ) {
	var v1 = new Vector(1,1,1);
	var v2 = new Vector(9,5,34);
	var op = new VectorOps();
	var result = new Vector(10,6,35);

	assert.propEqual(op.sumarVectores(v1,v2),result,"(1,1,1)  +  (9,5,34)  =  (10,6,35)  ");
});

/*
Tests the result of the function restarVectores(), by testing each property of the result vector object
equal()
expect()
*/
QUnit.test( "RestaVectores Test", function( assert ) {
	var v1 = new Vector(1,1,1);
	var v2 = new Vector(9,5,34);
	var op = new VectorOps();
	var result = op.restarVectores(v1,v2)

	assert.expect(3); //expects 3 assertions

	assert.equal(result.x,-8,"X is -8"); //result in the x axis
	assert.equal(result.y,-4,"Y is -4"); // result in the y axis
	assert.equal(result.z,-33,"Z is -33"); // result in the z axis
});

/*
Tests the function puntoVectores() of the class VectorOps. For doing the assertion, 
it uses the function assert.equal().Doing a non-estrict comparison between the result 
and "48". Note that equal doesn´t compare type, so comparison between strings and numbers
 are valid.
*/
QUnit.test( "ProductoVectores Test", function( assert ) {
	var v1 = new Vector(1,1,1);
	var v2 = new Vector(9,5,34);
	var op = new VectorOps();
	var result = op.puntoVectores(v1,v2)

	assert.equal(result,"48","operation is fine");
});


/*
Tests the function cruzVectores(args) of the class VectorOps. It compares
each property of the resulting vector object with the function assert.equa()
*/
QUnit.test( "CruzVectores Test", function( assert ) {
	var v1 = new Vector(1,1,1);
	var v2 = new Vector(9,5,34);
	var op = new VectorOps();
	var result = new Vector(29,25,-4);

	assert.expect(1); //expects one assertion
	assert.propEqual(op.cruzVectores(v1,v2),result, "(1,1,1)  +  (9,5,34)  =  (29,25,-4)  ");
});