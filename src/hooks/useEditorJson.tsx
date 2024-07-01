import { create } from 'zustand'
// import toast from 'react-hot-toast'

interface IEditorJson {
  formattedJsonValue: string
  jsonValue: string
  setJsonValue: (value: string) => void
  setFormattedJsonValue: (value: string) => void
  formatJson: (value: string) => void
  clearEditors: () => void
  copyToClipboard: (value: string) => void
  compactJson: () => void
  reformatJson: () => void
}

export const useEditorJson = create<IEditorJson>((set, get) => ({
  formattedJsonValue: '',
  jsonValue: '',
  setJsonValue: (value) => set({ jsonValue: value }),
  setFormattedJsonValue: (value) => set({ formattedJsonValue: value }),
  formatJson: (value) => {
    set({ jsonValue: value });
    try {
      const parsedJson = JSON.parse(value);
      const formattedJson = JSON.stringify(parsedJson, null, 2);
      set({ formattedJsonValue: formattedJson });
    } catch (error) {
      set({ formattedJsonValue: 'Invalid JSON' });
    }
  },
  clearEditors: () => set({ formattedJsonValue: '', jsonValue: '' }),
  copyToClipboard: (message: string) => {
    const formattedJsonValue = get().formattedJsonValue;
    navigator.clipboard.writeText(formattedJsonValue);
    // toast.success(message);
  },
  compactJson: () => {
    const jsonValue = get().jsonValue;
    try {
      const parsedJson = JSON.parse(jsonValue);
      const compactedJson = JSON.stringify(parsedJson);
      set({ formattedJsonValue: compactedJson });
    } catch (error) {
      set({ formattedJsonValue: 'Invalid JSON' });
    }
  },
  reformatJson: () => {
    const jsonValue = get().jsonValue;
    const valueFormat = JSON.stringify(JSON.parse(jsonValue), null, 2);
    set({ formattedJsonValue: valueFormat });
  }
}));
