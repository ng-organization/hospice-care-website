# 🎨 Layout Standards & Spacing Guidelines

> **版本**: v1.0  
> **创建日期**: 2024年12月  
> **适用范围**: IE Community Hospice Website  
> **维护**: 开发团队  

## 📋 规范概述

本文档定义了网站布局、间距、响应式设计的统一标准，确保所有页面保持一致的视觉体验和专业水准。

---

## 🏗️ 核心布局规范

### 1. 标准容器结构

#### **主容器 (Section Container)**
```tsx
<section className="min-h-[80vh] w-full bg-white observe-section">
  <div className="w-full px-4 md:px-8 lg:px-16 py-24">
    <div className="max-w-7xl mx-auto">
      {/* 内容 */}
    </div>
  </div>
</section>
```

#### **关键参数**
- **容器高度**: `min-h-[80vh]` (主要section) / `min-h-screen` (重要section)
- **响应式padding**: `px-4 md:px-8 lg:px-16` 
- **垂直间距**: `py-24` (96px 上下间距)
- **最大宽度**: `max-w-7xl mx-auto` (1280px 居中)

### 2. 响应式间距系统

#### **水平内边距 (Horizontal Padding)**
```css
/* 移动端 */   px-4    → 16px 左右
/* 平板端 */   md:px-8  → 32px 左右  
/* 桌面端 */   lg:px-16 → 64px 左右
```

#### **垂直间距 (Vertical Spacing)**
```css
/* 标准section间距 */    py-24 → 96px 上下
/* 紧凑section */        py-16 → 64px 上下
/* Hero sections */     py-32 → 128px 上下
```

---

## 📱 响应式设计标准

### 1. 断点系统 (Breakpoints)

| 设备类型 | 屏幕宽度 | Tailwind前缀 | 用途 |
|---------|---------|-------------|------|
| 移动端 | `< 640px` | `(default)` | 手机竖屏 |
| 小屏 | `≥ 640px` | `sm:` | 大手机/小平板 |
| 中屏 | `≥ 768px` | `md:` | 平板 |
| 大屏 | `≥ 1024px` | `lg:` | 桌面/笔记本 |
| 超大屏 | `≥ 1280px` | `xl:` | 大显示器 |

### 2. 标准网格系统

#### **服务卡片网格**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

#### **内容网格**  
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
```

#### **团队网格**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
```

### 3. 排版响应式规范

#### **标题层级**
```tsx
{/* 主标题 */}
<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light">

{/* Section标题 */}  
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-light">

{/* 正文 */}
<p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
```

---

## 🎯 组件布局模式

### 1. Hero Section 模式

```tsx
export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* 背景图层 */}
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/95 to-primary-900/90" />
      </div>
      
      {/* 内容层 */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero内容 */}
        </div>
      </div>
    </section>
  );
}
```

### 2. 标准Section模式

```tsx
export function StandardSection() {
  return (
    <section className="min-h-[80vh] w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* 标准Header */}
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {badge}
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
              {title}
              <br />
              <span className="font-semibold text-primary-600">
                {titleHighlight}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* 主要内容 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 内容项 */}
          </div>
          
        </div>
      </div>
    </section>
  );
}
```

### 3. 双栏布局模式

```tsx
export function TwoColumnSection() {
  return (
    <section className="min-h-[80vh] w-full bg-gradient-to-br from-secondary-50/30 to-white">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* 左栏 - 内容 */}
          <div className="space-y-8">
            {/* 文本内容 */}
          </div>
          
          {/* 右栏 - 图片 */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden shadow-xl">
              <img className="w-full h-full object-cover" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
```

---

## 🔧 移动端优化规范

### 1. 触摸友好设计

#### **按钮尺寸**
```tsx
{/* 移动端最小点击区域 44px */}
<Button className="min-h-[44px] px-6 py-3">

{/* 响应式按钮组 */}
<div className="flex flex-col sm:flex-row gap-4">
```

#### **固定元素**
```tsx
{/* 移动端友好的固定元素 */}
<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-lg">
  <div className="bg-white shadow-2xl rounded-full px-4 sm:px-6 py-3">
    {/* 响应式内容 */}
  </div>
</div>
```

### 2. 文本可读性

#### **移动端文本规范**
```tsx
{/* 移动端隐藏长文本，显示简化版 */}
<span className="text-xs sm:text-sm font-medium text-slate-700 hidden sm:block">
  完整文本
</span>
<span className="text-xs font-medium text-slate-700 sm:hidden">
  简化文本
</span>
```

### 3. 图像响应式

```tsx
{/* 标准响应式图片 */}
<div className="aspect-square rounded-2xl overflow-hidden">
  <img 
    className="w-full h-full object-cover"
    alt="描述性alt文本"
  />
</div>
```

---

## ✅ 质量检查清单

### 开发前检查
- [ ] 确认section使用标准容器结构
- [ ] 验证响应式padding: `px-4 md:px-8 lg:px-16`  
- [ ] 设置适当的最大宽度: `max-w-7xl mx-auto`
- [ ] 配置垂直间距: `py-24`

### 移动端测试
- [ ] 320px最小宽度测试通过
- [ ] 触摸区域 ≥ 44px
- [ ] 文本在移动端可读
- [ ] 图片正确缩放
- [ ] 网格布局在小屏幕正确折叠

### 桌面端验证  
- [ ] 1280px最大宽度约束生效
- [ ] 网格布局在大屏幕正确展开
- [ ] 文本大小适中
- [ ] 交互元素正确响应

---

## 🚀 实施指南

### 新建Section时
1. 复制标准Section模板
2. 根据需要调整网格布局
3. 确保移动端友好
4. 进行多设备测试

### 修改现有Section时
1. 对照此规范检查现有代码
2. 逐步更新不符合规范的部分  
3. 测试修改后的响应式效果
4. 确保无回归问题

### 团队协作
- 代码审查时对照此规范
- 新成员培训必读此文档
- 定期更新和完善规范

---

## 📚 相关资源

- [Tailwind CSS 响应式设计](https://tailwindcss.com/docs/responsive-design)
- [STYLING_GUIDE.md](./STYLING_GUIDE.md) - 详细样式指南
- [项目组件库文档](./components/)

---

*本规范将持续更新，以适应项目发展需要。如有疑问或建议，请联系开发团队。*