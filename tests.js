

QUnit.test( "Constructor Test", function( assert ) {
	var v = new Vector(66,53,19);
  	assert.equal( v.x , 66 , "x:66" );
  	assert.equal( v.y , 53 , "y:53" );
  	assert.equal( v.z , 19 , "z:19" );
});


QUnit.test( "Magnitud Test", function( assert ) {
	var v = new Vector(1,2,2);
  	assert.ok( v.getMagnitud() == 3, "Magnitud =  3" );
});
