import Image from "next/image";

import { ExternalLinkIcon, RssIcon, Share2Icon } from "lucide-react";

import { cn } from "@ju/utils";
import { format, parseISO } from "date-fns";

const ARENA_TOKEN = process.env.ARENA_TOKEN;

import { decodeHTML5Strict } from "entities";

export default async function Signals() {
  const url = new URL(
    "https://api.are.na/v2/channels/signals-7hs7c25tc7s/contents"
  );
  url.searchParams.append("sort", "position");
  url.searchParams.append("direction", "desc");

  const signals = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${ARENA_TOKEN}`,
    },
    cache: "default",
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());

  const blocks = signals.contents as Arena.Block[];

  return (
    <>
      <p className="[text-wrap:balance] mt-24 mb-36 leading-relaxed text-muted-foreground text-xl text-center max-w-3xl mx-auto px-3">
        <span className="font-semibold text-foreground">Signals</span> is a
        collection of stuff I discovered and felt like sharing — not bound to
        any specific topic. But mostly music.
      </p>
      <ol className="grid max-w-2xl mx-auto px-2 md:px-8 my-48 gap-48 grid-cols-1">
        {blocks.map((signal, index) => {
          return (
            <li key={signal.id} className="">
              <div
                className={cn(
                  "flex flex-col md:flex-row text-center md:text-left items-center gap-8 bg-white",
                  signal.source?.url && "",
                  !signal.image?.thumb?.url && "py-12"
                )}
              >
                {signal.image?.thumb?.url && (
                  <div className="flex-shrink-0 w-[200px] md:w-[160px]">
                    <div className="aspect-square bg-muted rounded-sm border border-muted overflow-hidden shadow-sm">
                      {signal.image?.thumb?.url && (
                        <Image
                          src={signal.image.thumb.url}
                          alt={signal.title ?? "Block thumb nail"}
                          width={200}
                          height={200}
                        />
                      )}
                    </div>
                  </div>
                )}
                <div
                  className={cn(
                    "py-0 flex flex-col h-auto flex-grow",
                    !signal.image?.thumb?.url && "text-center"
                  )}
                >
                  {!!signal.title && (
                    <div className="leading-normal text-2xl font-semibold text-foreground underline-offset-2">
                      {decodeHTML5Strict(signal.title)}
                    </div>
                  )}
                  {!!signal.content && (
                    <div className="leading-normal font-serif my-1 text-3xl font-medium text-slate-900">
                      {signal.content}
                    </div>
                  )}
                  <p className="flex-grow text-2xl font-normal text-muted-foreground">
                    {signal.description}
                  </p>
                  <div
                    className={cn(
                      "flex flex-row justify-center md:justify-start items-center text-sm space-x-2 pt-4 mt-auto text-muted-foreground",
                      !signal.image?.thumb?.url && "md:justify-center"
                    )}
                  >
                    <span>
                      {format(parseISO(signal.updated_at), "MMMM dd, yyyy")}
                    </span>

                    {signal.source?.provider?.name && (
                      <>
                        <span>—</span>
                        <a
                          href={signal.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline underline-offset-2 flex flex-row items-center"
                        >
                          {signal.source.provider?.name || "Source"}{" "}
                          <ExternalLinkIcon className="w-3 h-3 ml-1" />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="flex flex-row justify-center items-center h-20 space-x-4 text-xs text-slate-500">
        <a
          href="/signals/feed"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center space-x-1 text-slate-500 hover:text-slate-900"
        >
          <span>Subscribe</span>
          <RssIcon className="w-3 h-3" />
        </a>
        <span>or</span>
        <a
          href="https://www.are.na/julian-kempff/signals-7hs7c25tc7s"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center space-x-1 text-slate-500 hover:text-slate-900"
        >
          Follow on Are.na
        </a>
      </div>
    </>
  );
}
