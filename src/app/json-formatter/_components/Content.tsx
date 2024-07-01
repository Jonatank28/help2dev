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

const Content = () => {
  const { formatJson, formattedJsonValue, jsonValue } = useEditorJson();
  const { theme } = useTheme();
  const themeSelected = theme === 'dark' ? 'dracula' : 'chrome';


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
      <Card>
        {renderAceEditor(jsonValue, formatJson)}
      </Card>
      <Card>
        {renderAceEditor(formattedJsonValue, undefined, true)}
      </Card>
    </div>
  );
};

export default Content;
