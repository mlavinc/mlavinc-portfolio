"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import type { ChatMessageData } from "./assistant.client";
import { ChatMessage } from "./ChatMessage";

const SUGGESTIONS = [
  "Who is Martín Lavín?",
  "Tell me about his projects",
  "What AWS experience does he have?",
  "What did he build at Nestlé?",
];

interface ChatWindowProps {
  messages: ChatMessageData[];
  isAsking: boolean;
  error: string | null;
  onAsk: (question: string) => void;
  onClose: () => void;
}

export function ChatWindow({
  messages,
  isAsking,
  error,
  onAsk,
  onClose,
}: ChatWindowProps) {
  const [input, setInput] = useState("");
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const hasUserMessages = messages.some((message) => message.role === "user");

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isAsking, error]);

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isAsking) {
      return;
    }
    onAsk(trimmed);
    setInput("");
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl shadow-black/50 backdrop-blur-md">
      <header className="flex shrink-0 items-center justify-between border-b border-zinc-800 px-4 py-3">
        <div>
          <p className="text-sm font-semibold tracking-tight text-zinc-50">
            Portfolio Assistant
          </p>
          <p className="text-xs text-zinc-500">Ask about Martín&apos;s work</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition-colors duration-200 hover:bg-zinc-900 hover:text-zinc-50"
          aria-label="Close chat"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3.5 3.5l7 7M10.5 3.5l-7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {!hasUserMessages && (
          <ul className="flex flex-col gap-2 pt-1">
            {SUGGESTIONS.map((suggestion) => (
              <li key={suggestion}>
                <button
                  type="button"
                  disabled={isAsking}
                  onClick={() => onAsk(suggestion)}
                  className="w-full rounded-xl border border-zinc-800 bg-transparent px-3.5 py-2.5 text-left text-sm text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        )}

        {isAsking && (
          <div className="flex justify-start" aria-live="polite" aria-busy="true">
            <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400" />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400"
                style={{ animationDelay: "0.15s" }}
              />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400"
                style={{ animationDelay: "0.3s" }}
              />
              <span className="sr-only">Assistant is typing</span>
            </div>
          </div>
        )}

        <div ref={scrollAnchorRef} />
      </div>

      {error && (
        <p
          role="alert"
          className="mx-4 mb-2 shrink-0 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-300"
        >
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex shrink-0 gap-2 border-t border-zinc-800 p-3"
      >
        <label className="sr-only" htmlFor="portfolio-assistant-question">
          Your question
        </label>
        <input
          id="portfolio-assistant-question"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask a question..."
          autoComplete="off"
          disabled={isAsking}
          className="min-w-0 flex-1 rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-zinc-50 outline-none placeholder:text-zinc-600 focus:border-zinc-500 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isAsking || !input.trim()}
          className="shrink-0 rounded-xl bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:bg-white disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}
