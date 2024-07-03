"use client"

import { PartialBlock } from "@blocknote/core"
import { useEffect, useState } from "react"
import Editor from "./editor"

export default function BlockNoteViewer({
  initialContent,
}: {
  initialContent: PartialBlock[]
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <Editor initialContent={initialContent} />
}
