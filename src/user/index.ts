import * as m3o from "@m3o/m3o-node";

export class UserService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a new user account. The email address and username for the account must be unique.
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "user",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete an account by id
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "user",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // List all users. Returns a paged list of results
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("user", "List", request) as Promise<ListResponse>;
  }
  // Login using username or email. The response will return a new session for successful login,
  // 401 in the case of login failure and 500 for any other error
  login(request: LoginRequest): Promise<LoginResponse> {
    return this.client.call("user", "Login", request) as Promise<LoginResponse>;
  }
  // Logout a user account
  logout(request: LogoutRequest): Promise<LogoutResponse> {
    return this.client.call(
      "user",
      "Logout",
      request
    ) as Promise<LogoutResponse>;
  }
  // Read an account by id, username or email. Only one need to be specified.
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call("user", "Read", request) as Promise<ReadResponse>;
  }
  // Read a session by the session id. In the event it has expired or is not found and error is returned.
  readSession(request: ReadSessionRequest): Promise<ReadSessionResponse> {
    return this.client.call(
      "user",
      "ReadSession",
      request
    ) as Promise<ReadSessionResponse>;
  }
  // Reset password with the code sent by the "SendPasswordResetEmail" endoint.
  resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    return this.client.call(
      "user",
      "ResetPassword",
      request
    ) as Promise<ResetPasswordResponse>;
  }
  // Login using email only - Passwordless
  sendMagicLink(request: SendMagicLinkRequest): Promise<SendMagicLinkResponse> {
    return this.client.call(
      "user",
      "SendMagicLink",
      request
    ) as Promise<SendMagicLinkResponse>;
  }
  // Send an email with a verification code to reset password.
  // Call "ResetPassword" endpoint once user provides the code.
  sendPasswordResetEmail(
    request: SendPasswordResetEmailRequest
  ): Promise<SendPasswordResetEmailResponse> {
    return this.client.call(
      "user",
      "SendPasswordResetEmail",
      request
    ) as Promise<SendPasswordResetEmailResponse>;
  }
  // Send a verification email
  // to the user being signed up. Email from will be from 'noreply@email.m3ocontent.com',
  // but you can provide the title and contents.
  // The verification link will be injected in to the email as a template variable, $micro_verification_link.
  // Example: 'Hi there, welcome onboard! Use the link below to verify your email: $micro_verification_link'
  // The variable will be replaced with an actual url that will look similar to this:
  // 'https://user.m3o.com/user/verify?token=a-verification-token&redirectUrl=your-redir-url'
  sendVerificationEmail(
    request: SendVerificationEmailRequest
  ): Promise<SendVerificationEmailResponse> {
    return this.client.call(
      "user",
      "SendVerificationEmail",
      request
    ) as Promise<SendVerificationEmailResponse>;
  }
  // Update the account password
  updatePassword(
    request: UpdatePasswordRequest
  ): Promise<UpdatePasswordResponse> {
    return this.client.call(
      "user",
      "UpdatePassword",
      request
    ) as Promise<UpdatePasswordResponse>;
  }
  // Update the account username or email
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "user",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
  // Verify the email address of an account from a token sent in an email to the user.
  verifyEmail(request: VerifyEmailRequest): Promise<VerifyEmailResponse> {
    return this.client.call(
      "user",
      "VerifyEmail",
      request
    ) as Promise<VerifyEmailResponse>;
  }
  // Check whether the token attached to MagicLink is valid or not.
  // Ideally, you need to call this endpoint from your http request
  // handler that handles the endpoint which is specified in the
  // SendMagicLink request.
  verifyToken(request: VerifyTokenRequest): Promise<VerifyTokenResponse> {
    return this.client.call(
      "user",
      "VerifyToken",
      request
    ) as Promise<VerifyTokenResponse>;
  }
}

export interface Account {
  // unix timestamp
  created?: number;
  // an email address
  email?: string;
  // unique account id
  id?: string;
  // Store any custom data you want about your users in this fields.
  profile?: { [key: string]: string };
  // unix timestamp
  updated?: number;
  // alphanumeric username
  username?: string;
  // date of verification
  verificationDate?: number;
  // if the account is verified
  verified?: boolean;
}

export interface CreateRequest {
  // the email address
  email?: string;
  // optional account id
  id?: string;
  // the user password
  password?: string;
  // optional user profile as map<string,string>
  profile?: { [key: string]: string };
  // the username
  username?: string;
}

export interface CreateResponse {
  account?: { [key: string]: any };
}

export interface DeleteRequest {
  // the account id
  id?: string;
}

export interface DeleteResponse {}

export interface ListRequest {
  // Maximum number of records to return. Default limit is 25.
  // Maximum limit is 1000. Anything higher will return an error.
  limit?: number;
  offset?: number;
}

export interface ListResponse {
  users?: Account[];
}

export interface LoginRequest {
  // The email address of the user
  email?: string;
  // The password of the user
  password?: string;
  // The username of the user
  username?: string;
}

export interface LoginResponse {
  // The session of the logged in  user
  session?: { [key: string]: any };
}

export interface LogoutRequest {
  // the session id for the user to logout
  sessionId?: string;
}

export interface LogoutResponse {}

export interface ReadRequest {
  // the account email
  email?: string;
  // the account id
  id?: string;
  // the account username
  username?: string;
}

export interface ReadResponse {
  account?: { [key: string]: any };
}

export interface ReadSessionRequest {
  // The unique session id
  sessionId?: string;
}

export interface ReadSessionResponse {
  // the session for the user
  session?: { [key: string]: any };
}

export interface ResetPasswordRequest {
  // The code from the verification email
  code?: string;
  // confirm new password
  confirmPassword?: string;
  // the email to reset the password for
  email?: string;
  // the new password
  newPassword?: string;
}

export interface ResetPasswordResponse {}

export interface SendMagicLinkRequest {
  // Your web site address, example www.example.com or user.example.com
  address?: string;
  // the email address of the user
  email?: string;
  // Endpoint name where your http request handler handles MagicLink by
  // calling M3O VerifyToken endpoint. You can return as a result a success,
  // failed or redirect to another page.
  endpoint?: string;
  // Display name of the sender for the email. Note: the email address will still be 'support@m3o.com'
  fromName?: string;
  subject?: string;
  // Text content of the email. Don't forget to include the string '$micro_verification_link' which will be replaced by the real verification link
  // HTML emails are not available currently.
  textContent?: string;
}

export interface SendMagicLinkResponse {}

export interface SendPasswordResetEmailRequest {
  // email address to send reset for
  email?: string;
  // Display name of the sender for the email. Note: the email address will still be 'noreply@email.m3ocontent.com'
  fromName?: string;
  // subject of the email
  subject?: string;
  // Text content of the email. Don't forget to include the string '$code' which will be replaced by the real verification link
  // HTML emails are not available currently.
  textContent?: string;
}

export interface SendPasswordResetEmailResponse {}

export interface SendVerificationEmailRequest {
  // email address to send the verification code
  email?: string;
  failureRedirectUrl?: string;
  // Display name of the sender for the email. Note: the email address will still be 'noreply@email.m3ocontent.com'
  fromName?: string;
  redirectUrl?: string;
  // subject of the email
  subject?: string;
  // Text content of the email. Don't forget to include the string '$micro_verification_link' which will be replaced by the real verification link
  // HTML emails are not available currently.
  textContent?: string;
}

export interface SendVerificationEmailResponse {}

export interface Session {
  // unix timestamp
  created?: number;
  // unix timestamp
  expires?: number;
  // the session id
  id?: string;
  // the associated user id
  userId?: string;
}

export interface UpdatePasswordRequest {
  // confirm new password
  confirm_password?: string;
  // the new password
  newPassword?: string;
  // the old password
  oldPassword?: string;
  // the account id
  userId?: string;
}

export interface UpdatePasswordResponse {}

export interface UpdateRequest {
  // the new email address
  email?: string;
  // the account id
  id?: string;
  // the user profile as map<string,string>
  profile?: { [key: string]: string };
  // the new username
  username?: string;
}

export interface UpdateResponse {}

export interface VerifyEmailRequest {
  // the email address to verify
  email?: string;
  // The token from the verification email
  token?: string;
}

export interface VerifyEmailResponse {}

export interface VerifyTokenRequest {
  token?: string;
}

export interface VerifyTokenResponse {
  is_valid?: boolean;
  message?: string;
  session?: { [key: string]: any };
}
