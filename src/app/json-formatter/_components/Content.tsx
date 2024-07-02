'use client'

import { useEditorJson } from '@/hooks/useEditorJson';
import { useTheme } from 'next-themes';
import AceEditor from "react-ace";
import { Card } from '@/components/ui/card';

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-chrome';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Content = () => {
  const { formatJson, formattedJsonValue, jsonValue, setFormattedJsonValue, setJsonValue } = useEditorJson();
  const [client, setClient] = useState(false);
  const { theme } = useTheme();
  const themeSelected = theme === 'dark' ? 'dracula' : 'chrome';

  useEffect(() => {
    setClient(true);
    setFormattedJsonValue('')
    setJsonValue('')
  }, []);


  const renderAceEditor = (value: string, onChange?: (value: string) => void, readOnly = false) => (
    <AceEditor
      mode="json"
      value={value}
      onChange={onChange}
      theme={themeSelected}
      fontSize={14}
      tabSize={2}
      className="!h-full !w-full text-justify"
      enableBasicAutocompletion
      enableLiveAutocompletion
      showPrintMargin={false}
      showGutter
      setOptions={{
        enableSearch: true,
        showLineNumbers: true,
        showGutter: true,
        readOnly: readOnly,
      }}
      highlightActiveLine
      wrapEnabled
      editorProps={{
        $blockScrolling: Infinity,
        highlightSelectedWord: true,
      }}
    />
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <Card className='rounded-none'>
        {client && renderAceEditor(jsonValue, formatJson)}
        {!client && <Skeleton className='h-full w-full rounded-none' />}
      </Card>
      <Card className='rounded-none'>
        {client && renderAceEditor(formattedJsonValue, undefined, true)}
        {!client && <Skeleton className='h-full w-full rounded-none' />}
      </Card>
    </div>
  );
};

export default Content;
