import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEditor } from '@/context/editorContext'
import { aceDarkThemes, aceLightThemes } from '@/data/themes'
import { useTheme } from 'next-themes'

const SelectedThemeEditor = () => {
  const { theme: themeRoot } = useTheme()
  const { onChangeThemeEditor, themeSelected } = useEditor()

  return (
    <Select value={themeSelected} onValueChange={(e) => onChangeThemeEditor(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {(themeRoot === 'light'
          ? Object.values(aceLightThemes)
          : Object.values(aceDarkThemes)
        ).map((theme) => {
          return (
            <SelectItem key={theme} value={theme} defaultValue={themeSelected}>
              {theme}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

export default SelectedThemeEditor
