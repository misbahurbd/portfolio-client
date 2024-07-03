"use client"

import "@blocknote/core/fonts/inter.css"
import { useCreateBlockNote } from "@blocknote/react"
import { BlockNoteView } from "@blocknote/mantine"
import "@blocknote/mantine/style.css"
import { PartialBlock } from "@blocknote/core"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Editor({
  initialContent,
}: {
  initialContent: PartialBlock[]
}) {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const editor = useCreateBlockNote({ initialContent: initialContent || [] })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <BlockNoteView
      editable={false}
      editor={editor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      data-style
    />
  )
}
