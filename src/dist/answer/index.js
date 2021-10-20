import * as m3o from '@m3o/m3o-node';
var AnswerService = /** @class */ (function () {
  function AnswerService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Ask a question and receive an instant answer
  AnswerService.prototype.question = function (request) {
    return this.client.call('answer', 'Question', request);
  };
  return AnswerService;
})();
export { AnswerService };
