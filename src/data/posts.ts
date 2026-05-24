/**
 * 博客文章元数据
 *
 * - id：路由用编号，如 '001' → /#/blog/001
 * - file：public/blog 下的 Markdown 文件名（不含 .md），可与 id 不同
 *   例如 file: 'Vue3_Study' 对应 public/blog/Vue3_Study.md
 */
export const blogPosts = [
  { id: '001', file: '1.vue2', title: 'Vue2的学习', summary: 'Vue2基础知识总结', date: '2025-05-12' },
  { id: '002', file: '2', title: 'md的学习', summary: 'md知识点总结', date: '2025-05-14' },
  { id: '003', file: '3', title: 'Vue3的学习', summary: 'vue3的新内容', date: '2025-05-16' },
  { id: '004', file: '4', title: '每天两个算法题', summary: '算法学习', date: '2025-05-16' },
  { id: '005', file: '5', title: '异步学习', summary: 'promise和async/await语法糖', date: '2025-05-17' },
  { id: '006', file: '6', title: 'ts学习', summary: '记录ts的部分语法', date: '2025-05-18' },
  { id: '007', file: '7', title: 'MySql', summary: 'MySql数据库的学习', date: '2025-05-19' },
  { id: '008', file: '8', title: 'Pinia', summary: 'Pinia的学习', date: '2025-05-19' },
  { id: '009', file: '9', title: '一些语法糖', summary: '一些语法糖', date: '2025-05-22' },
  { id: '010', file: '10', title: 'sql语法基础', summary: 'sql', date: '2025-05-23' },
  { id: '011', file: '11', title: '好用的第三方库', summary: '好用的第三方库推荐', date: '2025-05-24' },
  { id: '012', file: '12', title: 'es6牛逼语法', summary: '记录es6语法', date: '2025-05-24' },
]

/** 根据路由参数 id（如 '001'）查找文章 */
export function findPostById(id) {
  return blogPosts.find((post) => post.id === id)
}
