const assert = require('assert');
const indiceEquilibrio = require('../indice-equilibrio');

describe('Indice Equilibrio', function() {
  describe('#process()', function() {
    it('retorna -1 quando nao tiver indice equilibrio', function() {
      const input = [1,2,3];
      assert.equal(-1, indiceEquilibrio.process(input));
    });

    it('retorna primeiro indice equilibrio quando existir um', function() {
      var input = [-7,1,5,2,-4,3,0];
      assert.equal(3, indiceEquilibrio.process(input));
    });

    it('retorna o n-1 quando a soma a esqueda é zero', function() {
      input = [3,-1,-1,-1,0];
      assert.equal(4, indiceEquilibrio.process(input));
    });

    it('retorna 0 quando a soma a direita é zero', function() {
      input = [0,3,-1,-1,-1,1,1,2];
      assert.equal(0, indiceEquilibrio.process(input));
    });
  });
});
