import fs from 'fs';

const MEMORY_FILE_PATH = './memory.txt';

export const writeToFile = (data: string) => {
  fs.writeFileSync(MEMORY_FILE_PATH, data);
};

export const readFromFile = (): string | null => {
  if (fs.existsSync(MEMORY_FILE_PATH)) {
    return fs.readFileSync(MEMORY_FILE_PATH, 'utf-8');
  }
  return null;
};
