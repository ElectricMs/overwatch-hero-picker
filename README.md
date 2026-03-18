# 🎯 守望先锋本命英雄抽取器

一个简单的守望先锋英雄抽取小游戏，类似"猪猪检测器"的风格。

## 功能特点

- ✅ 随机抽取守望先锋英雄
- ✅ 显示英雄名称、类型（坦克/输出/辅助）和 emoji 图标
- ✅ 收集进度追踪
- ✅ 本地存储，刷新页面后不会丢失收集记录
- ✅ 响应式设计，支持移动端
- ✅ 精美的渐变色 UI

## 游戏玩法

1. 长按"抽取英雄"按钮
2. 等待 2 秒钟的抽取动画
3. 查看你抽取到的本命英雄
4. 收集更多英雄，完善你的英雄图鉴

## 技术栈

- HTML5
- CSS3（渐变、动画、响应式设计）
- 原生 JavaScript（ES6+）
- LocalStorage（数据持久化）

## 如何运行

### 方法 1：直接在浏览器中打开

1. 双击 `index.html` 文件，或
2. 右键 `index.html` → 选择"打开方式" → 选择你的浏览器

### 方法 2：使用本地服务器（推荐）

```bash
# 使用 Python 3
python3 -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000

# 或使用 Node.js
npx http-server -p 8000
```

然后在浏览器中打开：`http://localhost:8000`

### 方法 3：使用 VS Code Live Server

1. 在 VS Code 中安装 Live Server 插件
2. 右键 `index.html` → "Open with Live Server"

## 英雄分类

### 坦克（10位）
莱因哈特、温斯顿、D.Va、查莉娅、路霸、奥丽莎、西格玛、破坏球、拉玛塔、毛加

### 输出（16位）
源氏、麦克雷、法老之鹰、黑百合、半藏、猎空、死神、士兵76、铁拳、艾什、回声、索杰恩、伞兵、托比昂、秩序之光、狂鼠

### 辅助（10位）
天使、安娜、莫伊拉、布丽吉特、卢西奥、禅雅塔、巴蒂斯特、伊拉芮、基里科、生命之梭

**总计：36 位英雄**

## 自定义

你可以轻松修改以下内容：

1. **添加/修改英雄**：编辑 `script.js` 中的 `heroes` 对象
2. **更改颜色**：编辑 `style.css` 中的渐变色
3. **调整抽取时间**：修改 `script.js` 中 `setTimeout` 的时间（默认 2000ms）
4. **更改动画效果**：编辑 `style.css` 中的 `@keyframes`

## 数据存储

收集的英雄数据保存在浏览器的 LocalStorage 中，格式为 JSON。

如果要重置收集进度，可以在浏览器控制台运行：

```javascript
localStorage.removeItem('collectedHeroes');
location.reload();
```

## 浏览器兼容性

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ 移动端浏览器（iOS Safari, Chrome Mobile）

## 许可证

MIT License - 自由使用和修改

## 致谢

参考项目：https://pig.collegehub.cn（猪猪检测器）

---

祝玩得开心！🎮
