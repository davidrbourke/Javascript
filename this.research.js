// research for understanding 'this' is javascript.

// var foo = {
//     a: 2,
//     bar: function() {
//         console.log(this);
//     }
// };

// foo.bar();
// console.log(this);

// function foo() {
// 	console.log( this.a );
// }

// var a = 2;
// var o = { a: 3, foo: foo };
// var p = { a: 4 };

// o.foo(); // 3
// (p.foo = o.foo)(); // 2


function foo() {
	// return an arrow function
	return (a) => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	};
}

var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};

var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, not 3!
