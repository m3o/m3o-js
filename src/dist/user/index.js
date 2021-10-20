import * as m3o from '@m3o/m3o-node';
var UserService = /** @class */ (function () {
  function UserService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a new user account. The email address and username for the account must be unique.
  UserService.prototype.create = function (request) {
    return this.client.call('user', 'Create', request);
  };
  // Delete an account by id
  UserService.prototype.delete = function (request) {
    return this.client.call('user', 'Delete', request);
  };
  // Login using username or email. The response will return a new session for successful login,
  // 401 in the case of login failure and 500 for any other error
  UserService.prototype.login = function (request) {
    return this.client.call('user', 'Login', request);
  };
  // Logout a user account
  UserService.prototype.logout = function (request) {
    return this.client.call('user', 'Logout', request);
  };
  // Read an account by id, username or email. Only one need to be specified.
  UserService.prototype.read = function (request) {
    return this.client.call('user', 'Read', request);
  };
  // Read a session by the session id. In the event it has expired or is not found and error is returned.
  UserService.prototype.readSession = function (request) {
    return this.client.call('user', 'ReadSession', request);
  };
  // Send a verification email
  // to the user being signed up. Email from will be from 'support@m3o.com',
  // but you can provide the title and contents.
  // The verification link will be injected in to the email as a template variable, $micro_verification_link.
  // Example: 'Hi there, welcome onboard! Use the link below to verify your email: $micro_verification_link'
  // The variable will be replaced with an actual url that will look similar to this:
  // 'https://user.m3o.com/user/verify?token=a-verification-token&rediretUrl=your-redir-url'
  UserService.prototype.sendVerificationEmail = function (request) {
    return this.client.call('user', 'SendVerificationEmail', request);
  };
  // Update the account password
  UserService.prototype.updatePassword = function (request) {
    return this.client.call('user', 'UpdatePassword', request);
  };
  // Update the account username or email
  UserService.prototype.update = function (request) {
    return this.client.call('user', 'Update', request);
  };
  // Verify the email address of an account from a token sent in an email to the user.
  UserService.prototype.verifyEmail = function (request) {
    return this.client.call('user', 'VerifyEmail', request);
  };
  return UserService;
})();
export { UserService };
