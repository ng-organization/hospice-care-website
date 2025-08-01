# 🌐 Universal Layout Framework
## 通用网站布局规范框架

> **版本**: v1.0  
> **适用技术栈**: React/Next.js + Tailwind CSS  
> **适用项目**: 任何现代web项目  
> **维护**: 开发团队通用规范  

## 📋 框架概述

这是一个**技术栈无关**的布局规范框架，定义了现代网站的标准布局模式、间距系统和响应式设计原则。可以直接应用到任何使用Tailwind CSS的项目中。

---

## 🏗️ 核心布局系统

### 1. 通用容器架构

#### **标准Section容器 (适用于90%的内容区域)**
```tsx
<section className="min-h-[80vh] w-full bg-{background} {observe-class}">
  <div className="w-full px-4 md:px-8 lg:px-16 py-{vertical-spacing}">
    <div className="max-w-{content-width} mx-auto">
      {/* 内容区域 */}
    </div>
  </div>
</section>
```

#### **配置参数表**
| 参数 | 小型项目 | 中型项目 | 大型项目 | 说明 |
|------|---------|---------|---------|------|
| `content-width` | `max-w-5xl` (1024px) | `max-w-6xl` (1152px) | `max-w-7xl` (1280px) | 内容最大宽度 |
| `vertical-spacing` | `py-16` (64px) | `py-20` (80px) | `py-24` (96px) | 垂直间距 |
| `background` | `white/gray-50` | 根据设计定制 | 支持渐变背景 | 背景色彩 |

### 2. 响应式间距黄金法则

#### **水平间距系统 (适用于所有项目)**
```css
/* 移动端 (< 768px) */     px-4    → 16px 左右间距
/* 平板端 (≥ 768px) */     md:px-8  → 32px 左右间距
/* 桌面端 (≥ 1024px) */    lg:px-16 → 64px 左右间距
```

#### **垂直间距层级**
```css
/* 紧凑型section */        py-12   → 48px 上下 (适合简单内容)
/* 标准section */         py-16   → 64px 上下 (适合一般内容)  
/* 重要section */         py-20   → 80px 上下 (适合重点内容)
/* 主要section */         py-24   → 96px 上下 (适合核心内容)
/* Hero/Landing */       py-32   → 128px 上下 (适合首屏内容)
```

---

## 📱 通用响应式断点

### 标准断点系统 (基于Tailwind CSS默认值)

| 设备类型 | 屏幕宽度 | Tailwind前缀 | 典型用例 |
|---------|---------|-------------|---------|
| **手机** | `< 640px` | `(default)` | 单列布局、堆叠元素 |
| **大手机/小平板** | `≥ 640px` | `sm:` | 开始启用双列 |
| **平板** | `≥ 768px` | `md:` | 多列网格、横向布局 |
| **笔记本** | `≥ 1024px` | `lg:` | 完整桌面体验 |
| **桌面显示器** | `≥ 1280px` | `xl:` | 大屏优化 |
| **4K显示器** | `≥ 1536px` | `2xl:` | 超宽屏适配 |

---

## 🎯 标准布局模式库

### 1. Hero Section 通用模板

```tsx
// 适用于任何网站的首屏Hero区域
function UniversalHeroSection({ 
  backgroundImage, 
  title, 
  subtitle, 
  description,
  ctaButtons,
  height = "h-screen" // 可配置: h-[75vh], h-[90vh], h-screen
}) {
  return (
    <section className={`relative ${height} w-full flex items-center justify-center`}>
      {/* 背景层 - 通用模式 */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <>
            <img src={backgroundImage} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" /> {/* 可配置透明度 */}
          </>
        )}
      </div>
      
      {/* 内容层 - 通用结构 */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center"> {/* 可配置宽度 */}
          {subtitle && (
            <div className="text-sm uppercase tracking-wide mb-4 opacity-80">
              {subtitle}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaButtons}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 2. 标准内容Section模板

```tsx
// 90%的内容区域都可以使用这个模板
function UniversalContentSection({
  badge,
  title,
  titleHighlight,
  description,
  children,
  layout = "center", // "center" | "left" | "split"
  background = "white", // "white" | "gray" | "gradient" | custom
  spacing = "normal" // "compact" | "normal" | "spacious"
}) {
  const spacingMap = {
    compact: "py-12",
    normal: "py-20", 
    spacious: "py-24"
  };
  
  const backgroundMap = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-gray-50 to-white"
  };

  return (
    <section className={`min-h-[60vh] w-full ${backgroundMap[background]}`}>
      <div className={`w-full px-4 md:px-8 lg:px-16 ${spacingMap[spacing]}`}>
        <div className="max-w-7xl mx-auto"> {/* 可配置最大宽度 */}
          
          {/* 通用Header模式 */}
          {(title || description) && (
            <div className={layout === "center" ? "text-center mb-16" : "mb-12"}>
              {badge && (
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  {badge}
                </div>
              )}
              {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
                  {title}
                  {titleHighlight && (
                    <>
                      <br />
                      <span className="font-semibold text-blue-600">
                        {titleHighlight}
                      </span>
                    </>
                  )}
                </h2>
              )}
              {description && (
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* 内容区域 */}
          {children}
          
        </div>
      </div>
    </section>
  );
}
```

### 3. 通用网格布局模式

```tsx
// 适配不同数量内容的网格系统
const GridLayouts = {
  // 2列网格 (适合对比、功能介绍)
  twoColumn: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
  
  // 3列网格 (适合服务、特性展示)  
  threeColumn: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
  
  // 4列网格 (适合图标、小卡片)
  fourColumn: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
  
  // 混合网格 (适合复杂内容布局)
  mixed: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
  
  // 自适应网格 (内容自动适应)
  auto: "grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6"
};

// 使用示例
<div className={GridLayouts.threeColumn}>
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

## 🎨 可配置设计系统

### 1. 颜色主题系统

```tsx
// 支持任何品牌色彩的主题系统
const ThemeColors = {
  // 主色调配置 (根据项目品牌调整)
  primary: {
    50: "bg-blue-50",    // 最淡
    100: "bg-blue-100",
    500: "bg-blue-500",  // 主色
    600: "bg-blue-600",  
    900: "bg-blue-900"   // 最深
  },
  
  // 辅助色配置
  secondary: {
    50: "bg-purple-50",
    500: "bg-purple-500",
    600: "bg-purple-600"
  },
  
  // 中性色 (通用)
  neutral: {
    50: "bg-gray-50",
    100: "bg-gray-100", 
    600: "bg-gray-600",
    800: "bg-gray-800",
    900: "bg-gray-900"
  }
};
```

### 2. 字体层级系统

```tsx
// 通用字体大小系统
const Typography = {
  // 标题层级
  h1: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold",
  h2: "text-3xl md:text-4xl lg:text-5xl font-light", 
  h3: "text-2xl md:text-3xl font-semibold",
  h4: "text-xl md:text-2xl font-medium",
  
  // 正文层级
  body: "text-base md:text-lg",
  bodyLarge: "text-lg md:text-xl", 
  bodySmall: "text-sm md:text-base",
  
  // 特殊用途
  caption: "text-xs md:text-sm text-gray-500",
  button: "text-sm md:text-base font-medium"
};
```

---

## 🔧 项目配置指南

### 1. 快速项目设置

#### **小型项目 (Landing Page, 个人网站)**
```tsx
const ProjectConfig = {
  maxWidth: "max-w-5xl",      // 1024px
  spacing: "py-16",           // 64px垂直间距
  heroHeight: "h-[75vh]",     // 75%视口高度
  gridGap: "gap-6"            // 24px网格间距
};
```

#### **中型项目 (企业官网, 产品网站)**  
```tsx
const ProjectConfig = {
  maxWidth: "max-w-6xl",      // 1152px
  spacing: "py-20",           // 80px垂直间距  
  heroHeight: "h-[90vh]",     // 90%视口高度
  gridGap: "gap-8"            // 32px网格间距
};
```

#### **大型项目 (电商, 平台网站)**
```tsx
const ProjectConfig = {
  maxWidth: "max-w-7xl",      // 1280px
  spacing: "py-24",           // 96px垂直间距
  heroHeight: "h-screen",     // 100%视口高度
  gridGap: "gap-8 lg:gap-12"  // 响应式网格间距
};
```

### 2. 品牌适配步骤

1. **更新颜色变量** - 在`tailwind.config.js`中配置品牌色
2. **调整字体系统** - 根据品牌选择合适的字体层级
3. **设定内容宽度** - 根据项目规模选择最大宽度
4. **配置间距系统** - 选择合适的垂直间距标准

---

## ✅ 通用质量检查清单

### 开发前检查
- [ ] 确认项目规模，选择合适的配置参数
- [ ] 设置品牌色彩变量
- [ ] 确定内容最大宽度标准
- [ ] 选择合适的垂直间距

### 布局结构检查
- [ ] 使用标准容器结构 `section > div > max-w-* mx-auto`
- [ ] 应用响应式水平间距 `px-4 md:px-8 lg:px-16`
- [ ] 设置合适的垂直间距 `py-*`
- [ ] 网格布局使用标准模式

### 响应式检查
- [ ] 320px最小宽度测试通过
- [ ] 所有断点下布局正常
- [ ] 触摸区域 ≥ 44px (移动端)
- [ ] 文本可读性良好

### 性能检查
- [ ] 图片使用`object-cover`正确缩放
- [ ] 避免固定宽高导致的布局问题
- [ ] CSS类名遵循Tailwind标准

---

## 🚀 框架使用示例

### 快速开始 - 5分钟搭建标准页面

```tsx
import { UniversalContentSection, GridLayouts, Typography } from './layout-framework';

function StandardPage() {
  return (
    <>
      {/* Hero区域 */}
      <UniversalHeroSection
        title="Your Project Title"
        description="A brief description of your project"
        ctaButtons={[
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg">
            Get Started
          </button>
        ]}
      />
      
      {/* 服务介绍 */}
      <UniversalContentSection
        badge="Our Services"
        title="What We Offer"
        titleHighlight="Professional Solutions"
        description="A comprehensive overview of our services and capabilities"
        layout="center"
        spacing="normal"
      >
        <div className={GridLayouts.threeColumn}>
          {services.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </UniversalContentSection>
      
      {/* 关于我们 */}
      <UniversalContentSection
        title="About Our Team"
        background="gray"
        layout="split"
      >
        <div className={GridLayouts.twoColumn}>
          <div>
            <h3 className={Typography.h3}>Our Story</h3>
            <p className={Typography.body}>Content here...</p>
          </div>
          <div>
            <img src="/team.jpg" className="w-full rounded-lg" />
          </div>
        </div>
      </UniversalContentSection>
    </>
  );
}
```

---

## 📚 扩展与定制

### 框架扩展点
- **新增布局模式** - 在模式库中添加新的布局组合
- **主题系统扩展** - 支持深色模式、多品牌主题
- **组件库集成** - 与现有UI组件库无缝集成
- **性能优化** - 添加懒加载、图像优化等功能

### 社区贡献
欢迎提交新的布局模式、优化建议和最佳实践到此框架中。

---

*这个通用框架可以让任何团队在30分钟内建立专业的网站布局标准。*