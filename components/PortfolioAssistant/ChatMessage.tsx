import ReactMarkdown from "react-markdown";
import type { ChatMessageData } from "./assistant.client";

interface ChatMessageProps {
  message: ChatMessageData;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-2xl rounded-br-md bg-zinc-100 text-zinc-950"
            : "rounded-2xl rounded-bl-md border border-zinc-800 bg-zinc-900 text-zinc-200"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="assistant-md">
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="mb-2 whitespace-pre-wrap last:mb-0">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-zinc-50">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-zinc-100">{children}</em>
                ),
                ul: ({ children }) => (
                  <ul className="mb-2 list-disc space-y-1 pl-5 last:mb-0">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-2 list-decimal space-y-1 pl-5 last:mb-0">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline decoration-zinc-600 underline-offset-2 transition-colors hover:text-zinc-50 hover:decoration-zinc-300"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="rounded bg-zinc-950/60 px-1 py-0.5 text-[0.85em] text-zinc-100">
                    {children}
                  </code>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
