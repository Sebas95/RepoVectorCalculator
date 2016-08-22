

QUnit.test( "Constructor Test", function( assert ) {
	assert.expect(3);
	var v = new Vector(66,53,19);
  	assert.strictEqual( v.x , 66 , "x:66" );
  	assert.strictEqual( v.y , 53 , "y:53" );
  	assert.strictEqual( v.z , 19 , "z:19" );
});


QUnit.test( "Magnitud Test", function( assert ) {
	var v = new Vector(1,2,2);
  	assert.ok( v.getMagnitud() == 3, "Magnitud =  3" );
});


/**
Prop equal
*/
QUnit.test( "SumaVectores Test", function( assert ) {
	var v1 = new Vector(1,1,1);
	var v2 = new Vector(9,5,34);
	var op = new VectorOps();
	var result = new Vector(10,6,35);

	assert.propEqual(op.sumarVectores(v1,v2),result,"(1,1,1)  +  (9,5,34)  =  (10,6,35)  ");
});

QUnit.test( "RestaVectores Test", function( assert ) {
	var v1 = new Vector(1,1,1);
	var v2 = new Vector(9,5,34);
	var op = new VectorOps();
	var result = op.restarVectores(v1,v2)

	assert.expect(3);
	assert.equal(result.x,-8,"X is fine");
	assert.equal(result.y,-4,"Y is fine");
	assert.equal(result.z,-33,"Z is fine");
});

QUnit.test( "ProductoVectores Test", function( assert ) {
	var v1 = new Vector(1,1,1);
	var v2 = new Vector(9,5,34);
	var op = new VectorOps();
	var result = op.puntoVectores(v1,v2)

	assert.equal(result,48,"operation is fine");
});

QUnit.test( "SCruzVectores Test", function( assert ) {
	var v1 = new Vector(1,1,1);
	var v2 = new Vector(9,5,34);
	var op = new VectorOps();
	var result = op.cruzVectores(v1,v2)

	assert.expect(3);
	assert.equal(result.x,29,"X is fine");
	assert.equal(result.y,25,"Y is fine");
	assert.equal(result.z,-4,"Z is fine");
});