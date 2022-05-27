import * as m3o from "@m3o/m3o-node";

export class WordleService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Make a guess
  guess(request: GuessRequest): Promise<GuessResponse> {
    return this.client.call(
      "wordle",
      "Guess",
      request
    ) as Promise<GuessResponse>;
  }
  // When does the next game start
  next(request: NextRequest): Promise<NextResponse> {
    return this.client.call("wordle", "Next", request) as Promise<NextResponse>;
  }
}

export interface Char {
  // whether it was correct
  correct?: boolean;
  // whether it's in the word
  in_word?: boolean;
  // the character itself
  letter?: string;
  // position in the string
  position?: number;
}

export interface Guess {
  // individual characters
  chars?: Char[];
  // the highlighted word e.g n[o]is{e}
  // where [ ] is correct, { } is in word
  highlight?: string;
  // the full guess word
  word?: string;
}

export interface GuessRequest {
  // player
  player?: string;
  // guess word
  word?: string;
}

export interface GuessResponse {
  // the guess words tried
  guesses?: Guess[];
  // informational message
  status?: string;
  // number of tries left
  tries_left?: number;
  // the actual word if failed
  answer?: string;
  // whether it was correct
  correct?: boolean;
}

export interface NextRequest {}

export interface NextResponse {
  // in hh:mm:ss
  duration?: string;
  // number of seconds
  seconds?: number;
}
