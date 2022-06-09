export function getFilename(fullPath: string) {
  return fullPath.substring(fullPath.lastIndexOf('/') + 1);
}
