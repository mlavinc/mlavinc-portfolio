export interface SearchSource {
  document_id: string;
  title: string;
  chunk_index: number;
  score: number;
}

export interface SearchResponseBody {
  answer: string;
  sources: SearchSource[];
}

export type MessageRole = "user" | "assistant";

export interface ChatMessageData {
  id: string;
  role: MessageRole;
  content: string;
  sources?: SearchSource[];
  createdAt: string;
}

const DEFAULT_GATEWAY =
  "https://6cwjcmekm6.execute-api.sa-east-1.amazonaws.com";

function getGatewayUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_API_GATEWAY_URL?.trim();
  return (fromEnv || DEFAULT_GATEWAY).replace(/\/$/, "");
}

export async function askPortfolioAssistant(
  question: string,
): Promise<SearchResponseBody> {
  const response = await fetch(`${getGatewayUrl()}/api/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RAG-Collection": "portfolio",
    },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    let message = "The assistant is unavailable right now.";
    try {
      const payload = (await response.json()) as { error?: string };
      if (payload.error) {
        message = payload.error;
      }
    } catch {
      // keep default message
    }
    throw new Error(message);
  }

  return (await response.json()) as SearchResponseBody;
}

export function createMessageId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
