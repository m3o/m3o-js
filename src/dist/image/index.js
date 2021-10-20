import * as m3o from '@m3o/m3o-node';
var ImageService = /** @class */ (function () {
  function ImageService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Convert an image from one format (jpeg, png etc.) to an other either on the fly (from base64 to base64),
  // or by uploading the conversion result.
  ImageService.prototype.convert = function (request) {
    return this.client.call('image', 'Convert', request);
  };
  // Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
  // If one of width or height is 0, the image aspect ratio is preserved.
  // Optional cropping.
  ImageService.prototype.resize = function (request) {
    return this.client.call('image', 'Resize', request);
  };
  // Upload an image by either sending a base64 encoded image to this endpoint or a URL.
  // To resize an image before uploading, see the Resize endpoint.
  ImageService.prototype.upload = function (request) {
    return this.client.call('image', 'Upload', request);
  };
  return ImageService;
})();
export { ImageService };
