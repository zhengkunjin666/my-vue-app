export function fontSize(res: any) {
  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return;
  const designWidth = 1920; // 设计稿宽度
  const minWidth = 0; // 最小适配的屏幕宽度
  const screenWidth = Math.max(clientWidth, minWidth); // 当前屏幕宽度与最小适配宽度比较
  const fontSize = screenWidth / designWidth;
  console.log(res, fontSize, res * fontSize)
  return res * fontSize;
}
