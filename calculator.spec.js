describe("calculator.js", function () {
  let calculator;
  let calculator2;

  describe('Calculator', function () {

    beforeEach(function () {
      calculator = new Calculator();
      calculator2 = new Calculator();
    });

    afterEach(function () {

    });

    describe('add', function () {
      it("should add numbers to total", function () {
        calculator.add(5);
        expect(calculator.total).toBe(5);
      });
    });

    describe('subtract', function () {
      xit("should subtract numbers from total", function () {
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
      });
    });

    describe('multiply', function () {
      it("should multiply total by number", function () {
        calculator.total = 100;
        calculator.multiply(2);
        expect(calculator.total).toBe(200);
      });
    });


    describe('divide', function () {
      it("should divide total by number", function () {
        calculator.total = 100;
        calculator.divide(2);
        expect(calculator.total).toBe(50);
      });
    });

    describe('get version', function () {
      it('fetches version from external src', async function (done) {
        spyOn(window, 'fetch').and.returnValue(Promise.resolve(
          new Response('{"version": "0.1"}')
        ));
        const version = await calculator.version;
        expect(version).toBe('0.1');
        done();

      });
    });

    it("can be istantiated", function () {
      jasmine.addMatchers(customMatchers)
      expect(calculator).toBeTruthy();
      expect(calculator).toBeCalculator();
    });
  });
});