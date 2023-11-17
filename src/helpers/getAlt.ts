export const getAltNameFromPath = (filePath: string) => {
  const fileName = filePath.split("/").pop(); // Get the last part of the path (filename)
  const nameWithoutExtension = fileName?.split(".")[0]; // Remove the file extension
  // You can customize this to format the name as needed
  return nameWithoutExtension;
};
