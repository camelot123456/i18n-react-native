import { create } from 'zustand';

const DATA_SAMPLE = [
  {
    id: '1',
    name: 'Document One',
    description: 'This is the first document.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
  {
    id: '2',
    name: 'Document Two',
    description: 'This is the second document.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
  {
    id: '3',
    name: 'Presentation',
    description: 'Company presentation slides.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
  {
    id: '4',
    name: 'Report Q1',
    description: 'Quarter 1 financial report.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
  {
    id: '5',
    name: 'Marketing Strategy',
    description: 'Strategy document for marketing campaigns.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
  {
    id: '6',
    name: 'Research Paper',
    description: 'Research on market trends.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
  {
    id: '7',
    name: 'Technical Specification',
    description: 'Technical details and requirements.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
  {
    id: '8',
    name: 'User Guide',
    description: 'User guide for the new software.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
  {
    id: '9',
    name: 'Policy Document',
    description: 'Company policy and regulations.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
  {
    id: '10',
    name: 'Invoice April',
    description: 'Invoice for April transactions.',
    logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
  },
];

export type FilesTest = {
  id: string;
  name: string;
  description?: string;
  logo?: string;
};

type FilesStateCreatorTest = {
  files?: FilesTest[];
  file?: FilesTest;
  findFile?: (id: string) => void;
  addFile?: (file: FilesTest) => void;
  updateFile?: (file: FilesTest) => void;
  deleteFile?: (id: string) => void;
};

export const useFilesStore = create<FilesStateCreatorTest>((set, get) => ({
  files: DATA_SAMPLE,
  file: undefined,
  findFile: (id: string) => {
    const existing = get().files.find((f) => f.id == id);
    if (!existing) return;
    set((state) => ({ file: existing }));
  },
  addFile: (file: FilesTest) => {
    set((state) => ({
      files: [file, ...state.files],
    }));
  },
  updateFile: (modified: FilesTest) => {
    const filesModified = get().files.map((f) => {
      if (f.id == modified.id) return modified;
      return f;
    });

    set(() => ({
      files: filesModified,
      file: modified,
    }));
  },
  deleteFile: (id: string) => {
    const existing = get().files.find((f) => f.id == id);
    if (!existing) return;
    set((state) => ({
      files: state.files.filter((f) => f.id != id),
    }));
  },
}));
