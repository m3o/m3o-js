export declare class UserService {
  private client;
  constructor(token: string);
  create(request: CreateRequest): Promise<CreateResponse>;
  delete(request: DeleteRequest): Promise<DeleteResponse>;
  login(request: LoginRequest): Promise<LoginResponse>;
  logout(request: LogoutRequest): Promise<LogoutResponse>;
  read(request: ReadRequest): Promise<ReadResponse>;
  readSession(request: ReadSessionRequest): Promise<ReadSessionResponse>;
  sendVerificationEmail(
    request: SendVerificationEmailRequest
  ): Promise<SendVerificationEmailResponse>;
  updatePassword(
    request: UpdatePasswordRequest
  ): Promise<UpdatePasswordResponse>;
  update(request: UpdateRequest): Promise<UpdateResponse>;
  verifyEmail(request: VerifyEmailRequest): Promise<VerifyEmailResponse>;
}
export interface Account {
  created?: number;
  email?: string;
  id?: string;
  profile?: {
    [key: string]: string;
  };
  updated?: number;
  username?: string;
  verificationDate?: number;
  verified?: boolean;
}
export interface CreateRequest {
  email?: string;
  id?: string;
  password?: string;
  profile?: {
    [key: string]: string;
  };
  username?: string;
}
export interface CreateResponse {
  account?: {
    [key: string]: any;
  };
}
export interface DeleteRequest {
  id?: string;
}
export interface DeleteResponse {}
export interface LoginRequest {
  email?: string;
  password?: string;
  username?: string;
}
export interface LoginResponse {
  session?: {
    [key: string]: any;
  };
}
export interface LogoutRequest {
  sessionId?: string;
}
export interface LogoutResponse {}
export interface ReadRequest {
  email?: string;
  id?: string;
  username?: string;
}
export interface ReadResponse {
  account?: {
    [key: string]: any;
  };
}
export interface ReadSessionRequest {
  sessionId?: string;
}
export interface ReadSessionResponse {
  session?: {
    [key: string]: any;
  };
}
export interface SendVerificationEmailRequest {
  email?: string;
  failureRedirectUrl?: string;
  fromName?: string;
  redirectUrl?: string;
  subject?: string;
  textContent?: string;
}
export interface SendVerificationEmailResponse {}
export interface Session {
  created?: number;
  expires?: number;
  id?: string;
  userId?: string;
}
export interface UpdatePasswordRequest {
  confirmPassword?: string;
  newPassword?: string;
  oldPassword?: string;
  userId?: string;
}
export interface UpdatePasswordResponse {}
export interface UpdateRequest {
  email?: string;
  id?: string;
  profile?: {
    [key: string]: string;
  };
  username?: string;
}
export interface UpdateResponse {}
export interface VerifyEmailRequest {
  token?: string;
}
export interface VerifyEmailResponse {}
