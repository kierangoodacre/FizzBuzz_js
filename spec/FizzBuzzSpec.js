describe("FizzBuzz", function() {

	var fizzbuzz;

	describe("Knows when a number", function() {

		it("is divisible by three", function() {
			fizzbuzz = new FizzBuzz();
			// fizzbuzz = FizzBuzz.new
			expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
		});

		it("is not divisible by three", function() {
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
		});

		it("it is divisible by 5", function() {
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
		});

		it("it is NOT divisible by 5", function() {
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.isDivisibleByFive(7)).toBe(false);
		});

		it("", function(){
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
		});

	}); 

	describe("Returns, Fizz, Buzz or FizzBuzz", function(){

		it("return Fizz when divisible by 3", function(){
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.play(3)).toEqual("Fizz");
		});

		it("to Not return Fizz when not divisible by 3", function(){
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.play(1)).toEqual(1);
		});

		it("To return Buzz when divisible by 5", function(){
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.play(5)).toEqual("Buzz");
		});

		it("To return FizzBuzz when divisible by 15", function(){
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.play(30)).toEqual("FizzBuzz");
		});

	});

});