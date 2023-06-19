import * as m3o from '@m3o/m3o-node'

export class AiService {
  private client: m3o.Client

  constructor(token: string) {
    this.client = new m3o.Client({ token: token })
  }
  // Make a request to ChatGPT
  chat(request: ChatRequest): Promise<ChatResponse> {
    return this.client.call('ai', 'Chat', request) as Promise<ChatResponse>
  }
  // Make a request to the AI
  complete(request: CompleteRequest): Promise<CompleteResponse> {
    return this.client.call(
      'ai',
      'Complete',
      request
    ) as Promise<CompleteResponse>
  }
  // Edit or edit prompt/code
  edit(request: EditRequest): Promise<EditResponse> {
    return this.client.call('ai', 'Edit', request) as Promise<EditResponse>
  }
  // Generate an image from prompt
  generate(request: GenerateRequest): Promise<GenerateResponse> {
    return this.client.call(
      'ai',
      'Generate',
      request
    ) as Promise<GenerateResponse>
  }
  // Moderate hate speech
  moderate(request: ModerateRequest): Promise<ModerateResponse> {
    return this.client.call(
      'ai',
      'Moderate',
      request
    ) as Promise<ModerateResponse>
  }
}

export interface ChatRequest {
  // context for the call
  context?: { [key: string]: any }[]
  // the model e.g gpt-3.5-turbo-16k
  model?: string
  // the prompt
  prompt?: string
  // role e.g system or user
  role?: string
}

export interface ChatResponse {
  // the response
  reply?: string
}

export interface CompleteRequest {
  // input to pass in
  text?: string
}

export interface CompleteResponse {
  // text returned
  text?: string
}

export interface Context {
  // prompt used
  prompt?: string
  // response for prompt
  reply?: string
}

export interface EditRequest {
  // instruction hint e.g check the grammar
  instruction?: string
  // text/code to check
  text?: string
}

export interface EditResponse {
  // response output
  text?: string
}

export interface GenerateRequest {
  // number of images to generate (max 10)
  limit?: number
  // size of image 256x256, 512x512, 1024x1024
  size?: string
  // text description of image
  text?: string
}

export interface GenerateResponse {
  // image urls
  images?: Image[]
}

export interface Image {
  // base64 encoded
  base64?: string
  // image url
  url?: string
}

export interface ModerateRequest {
  // text to check
  text?: string
}

export interface ModerateResponse {
  // categories tested and identified
  categories?: { [key: string]: boolean }
  // whether it was flagged or not
  flagged?: boolean
  // related scores
  scores?: { [key: string]: number }
}
