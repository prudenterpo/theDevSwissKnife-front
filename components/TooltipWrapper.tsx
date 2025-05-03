'use client';

import * as Tooltip from "@radix-ui/react-tooltip";

export default function TooltipWrapper({ content, children }: { content: string, children: React.ReactNode }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="bg-black text-white text-sm rounded px-2 py-1 shadow" sideOffset={4}>
            {content}
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}