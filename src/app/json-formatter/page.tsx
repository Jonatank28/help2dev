'use client'

import React, { useEffect, useRef } from 'react'
import { Card } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/ext-language_tools'
import '../../data/aceEditorImports'
import { aceDarkThemes, aceLightThemes } from '../../data/themes'
import { useEditor } from '@/context/editorContext'

const PageJsonFormatter = () => {
  const { theme: themeRoot } = useTheme()
  const {
    themeSelected,
    formattedJson,
    setFormattedJson,
    jsonInput,
    setJsonInput,
  } = useEditor()
  const defaultThemes = themeRoot === 'dark' ? aceDarkThemes : aceLightThemes
  const editorRef = useRef<AceEditor | null>(null)

  useEffect(() => {
    if (editorRef.current && editorRef.current.editor) {
      editorRef.current.editor.focus()
    }

    try {
      const parsedJson = JSON.parse(jsonInput)
      if (typeof parsedJson === 'object' && parsedJson !== null) {
        setFormattedJson(JSON.stringify(parsedJson, null, 2))
      } else {
        setFormattedJson('')
      }
    } catch (error) {
      setFormattedJson('')
    }
  }, [jsonInput, setFormattedJson])

  const handleChange = (value: string) => {
    setJsonInput(value)
  }

  return (
    defaultThemes && (
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 h-[calc(100vh-52px)]">
          <Card className="rounded-none flex overflow-auto relative flex-col">
            <AceEditor
              mode="json"
              ref={editorRef}
              value={jsonInput}
              onChange={handleChange}
              theme={themeSelected}
              name="leftEditor"
              className="!h-full !w-full text-justify"
              fontSize={14}
              tabSize={2}
              enableBasicAutocompletion={true}
              enableLiveAutocompletion={true}
              showPrintMargin={false}
              showGutter={true}
              highlightActiveLine={true}
              wrapEnabled={true}
              editorProps={{ $blockScrolling: Infinity }}
            />
          </Card>
          <Card className="rounded-none overflow-auto relative">
            <AceEditor
              mode="json"
              theme={themeSelected}
              name="rightEditor"
              className="!h-full !w-full"
              fontSize={14}
              tabSize={2}
              showPrintMargin={false}
              enableBasicAutocompletion={true}
              enableLiveAutocompletion={true}
              showGutter={true}
              highlightActiveLine={true}
              value={formattedJson}
              readOnly={true}
              wrapEnabled={true}
              editorProps={{ $blockScrolling: Infinity }}
            />
          </Card>
        </div>
      </main>
    )
  )
}

export default PageJsonFormatter
