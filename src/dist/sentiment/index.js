import * as m3o from '@m3o/m3o-node';
var SentimentService = /** @class */ (function () {
  function SentimentService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Analyze and score a piece of text
  SentimentService.prototype.analyze = function (request) {
    return this.client.call('sentiment', 'Analyze', request);
  };
  return SentimentService;
})();
export { SentimentService };
