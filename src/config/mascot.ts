/**
 * 看板娘配置 — 替换图片只需改这里或覆盖 public/mascot/ 下的文件
 *
 * 1. 把你的立绘放到 public/mascot/character.png（推荐透明底 PNG，高约 400~600px）
 * 2. 修改 image 路径即可；加载失败会自动用 default.svg
 */
export const mascotConfig = {
  /** 自定义立绘（相对网站根路径，部署在 /blog/ 时会自动加 base） */
  image: 'mascot/character.png',
  /** 默认占位立绘（项目自带 SVG） */
  fallback: 'mascot/default.svg',
  /** 点击气泡台词，可随意增删 */
  speeches: [
    '真相，可不会自己跳出来哦。',
    '线索已经暴露啦，笨蛋。',
    '让我看看，你藏了什么？',
    '不许乱动现场，知道吗？',
    '哼，我早就看穿你了。',
    '小心点，我可是很敏锐的。',
    '今天的推理状态超好！',
    '真相只有一个……大概吧。',
    '这点谜题，根本难不倒我。',
    '可疑的人，我会盯紧哦。',
  ],
  /** 右下角距边缘（px） */
  offsetRight: 12,
  offsetBottom: 8,
}
