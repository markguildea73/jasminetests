describe ("what my funtion does", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
            it("should exist", function() {
                expect(whatCanIDrink).toBeDefined();
            });
    it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(14)
            expect(result).toBe("Drink Toddy");
        });
        
        
        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(16)
            expect(result).toBe("drink Coke");
        });

        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("drink beer");
        }); 
        
        it("should return drink whisky when called as whatCanIDrink(35)", function() {
            var result = whatCanIDrink(30)
            expect(result).toBe("drink whiskey");
        });
        
        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("sorry I cant tell what age you are");
        });
        
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});

            