import { AuthenticationData } from "../services/tokenGenerator";

export interface IHashGenerator {
  hash(s: string): Promise<string>;
  compareHash(s: string, hash: string): Promise<boolean>;
}

export interface IIdGenerator {
  generate(): string;
}

export interface ITokenGenerator {
  generate(input: AuthenticationData): string;
  verify(token: string): AuthenticationData;
}
