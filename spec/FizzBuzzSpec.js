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

	}); 

});