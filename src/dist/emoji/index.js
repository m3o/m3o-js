import * as m3o from '@m3o/m3o-node';
var EmojiService = /** @class */ (function () {
  function EmojiService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Find an emoji by its alias e.g :beer:
  EmojiService.prototype.find = function (request) {
    return this.client.call('emoji', 'Find', request);
  };
  // Get the flag for a country. Requires country code e.g GB for great britain
  EmojiService.prototype.flag = function (request) {
    return this.client.call('emoji', 'Flag', request);
  };
  // Print text and renders the emojis with aliases e.g
  // let's grab a :beer: becomes let's grab a 🍺
  EmojiService.prototype.print = function (request) {
    return this.client.call('emoji', 'Print', request);
  };
  // Send an emoji to anyone via SMS. Messages are sent in the form '<message> Sent from <from>'
  EmojiService.prototype.send = function (request) {
    return this.client.call('emoji', 'Send', request);
  };
  return EmojiService;
})();
export { EmojiService };
