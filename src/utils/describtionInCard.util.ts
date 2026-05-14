export const handleDescribtion = (text: string) => {
  const splittedText = text.split(" ");
  return splittedText.length > 30
    ? `${splittedText.slice(0, 30).join(" ")} ...`
    : text;
};
