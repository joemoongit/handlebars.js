import { Exception } from '@handlebars/parser';
import { isFunction } from '../utils';

export default function(instance) {
  instance.registerHelper('ifCond', function(v1, v2, options) {
    if (arguments.length != 3) {
      throw new Exception('#ifCond requires exactly two arguments');
    }
    if (isFunction(v1)) {
      v1 = v1.call(this);
    }
    if (isFunction(v2)) {
      v2 = v2.call(this);
    }

    // https://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
  });

}
