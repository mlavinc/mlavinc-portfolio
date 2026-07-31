"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import {
  askPortfolioAssistant,
  createMessageId,
  type ChatMessageData,
} from "./assistant.client";
import { ChatWindow } from "./ChatWindow";

const WELCOME_MESSAGE: ChatMessageData = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm Martín's portfolio assistant. Ask me anything about his background, projects, experience, or technical skills.",
  createdAt: new Date(0).toISOString(),
};

export function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageData[]>([WELCOME_MESSAGE]);
  const [isAsking, setIsAsking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const sendQuestion = useCallback(async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessageData = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
      createdAt: new Date().toISOString(),
    };

    setMessages((previous) => [...previous, userMessage]);
    setIsAsking(true);
    setError(null);

    try {
      const result = await askPortfolioAssistant(trimmed);
      const assistantMessage: ChatMessageData = {
        id: createMessageId(),
        role: "assistant",
        content: result.answer,
        sources: result.sources,
        createdAt: new Date().toISOString(),
      };
      setMessages((previous) => [...previous, assistantMessage]);
    } catch (askError: unknown) {
      const message =
        askError instanceof Error
          ? askError.message
          : "The assistant is unavailable right now.";
      setError(message);
    } finally {
      setIsAsking(false);
    }
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-end p-4 sm:p-5">
      <div className="pointer-events-auto relative flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="portfolio-assistant-window"
              id="portfolio-assistant-panel"
              className="h-[calc(100dvh-6.5rem)] w-[calc(100vw-2rem)] max-sm:max-w-none sm:h-[min(38rem,calc(100dvh-7rem))] sm:w-[24rem]"
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 16, scale: 0.96 }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, scale: 1 }
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 12, scale: 0.96 }
              }
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ChatWindow
                messages={messages}
                isAsking={isAsking}
                error={error}
                onAsk={sendQuestion}
                onClose={() => setIsOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="portfolio-assistant-panel"
          aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-100 text-zinc-950 shadow-lg shadow-black/40 transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
        >
          {isOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v7.5a2.25 2.25 0 01-2.25 2.25H9.31L6 19.5v-2.25H6.75A2.25 2.25 0 014.5 15V6.75z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
