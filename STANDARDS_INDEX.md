# 📚 开发规范索引 | Development Standards Index

> **项目**: IE Community Hospice Website  
> **维护**: 开发团队  
> **最后更新**: 2024年12月  

本文档汇总了项目中所有开发规范和指导文件，帮助团队成员快速找到所需的标准和最佳实践。

---

## 🎯 核心规范文件

### 🏗️ 布局与间距规范
- **文件**: [LAYOUT_STANDARDS.md](./LAYOUT_STANDARDS.md)
- **用途**: Section布局、响应式设计、间距系统
- **适用范围**: 所有页面组件
- **关键词**: `spacing`, `responsive`, `grid`, `mobile-first`

### 🎨 样式设计指南  
- **文件**: [STYLING_GUIDE.md](./STYLING_GUIDE.md)
- **用途**: 颜色系统、字体、组件样式、动画效果、按钮设计、移动端菜单
- **适用范围**: UI组件、主题设计、交互组件、移动端适配
- **关键词**: `colors`, `typography`, `components`, `animations`, `buttons`, `mobile-menu`
- **备注**: 已整合 `styling-guideline.md` 的所有内容

---

## 📋 规范分类

### 🌐 通用规范框架
| 规范名称 | 文件路径 | 主要内容 | 适用范围 |
|---------|---------|---------|---------|
| 通用布局框架 | `UNIVERSAL_LAYOUT_FRAMEWORK.md` | 跨项目的布局标准、响应式系统、可配置模板 | ⭐ **任何React+Tailwind项目** |

### 🎨 UI/UX 规范
| 规范名称 | 文件路径 | 主要内容 | 状态 |
|---------|---------|---------|------|
| 布局标准 | `LAYOUT_STANDARDS.md` | 容器结构、响应式布局、间距系统 | ✅ 完成 |
| 样式指南 | `STYLING_GUIDE.md` | 颜色、字体、组件、动画、按钮、菜单、表单设计 | ✅ 完成 |

### 🔧 技术规范 
| 规范名称 | 文件路径 | 主要内容 | 状态 |
|---------|---------|---------|------|
| 项目指南 | `project-guide-en.md` | 项目结构、开发流程 | ✅ 完成 |
| 项目指南(中文) | `project-guide-zh.md` | 中文版项目说明 | ✅ 完成 |

### 🌐 国际化规范
| 规范名称 | 文件路径 | 主要内容 | 状态 |
|---------|---------|---------|------|
| 翻译验证 | `scripts/validate-translations.ts` | 多语言内容验证 | ✅ 完成 |
| 语言配置 | `i18n/config.ts` | 国际化配置 | ✅ 完成 |

---

## 🔍 快速查找指南

### 按开发任务查找

#### 📱 **创建新页面/Section**
1. **通用布局框架** → [UNIVERSAL_LAYOUT_FRAMEWORK.md](./UNIVERSAL_LAYOUT_FRAMEWORK.md) ⭐ **推荐先看这个**
2. **项目特定布局** → [LAYOUT_STANDARDS.md](./LAYOUT_STANDARDS.md) 
3. **样式设计** → [STYLING_GUIDE.md](./STYLING_GUIDE.md) 
4. **响应式设计** → [UNIVERSAL_LAYOUT_FRAMEWORK.md](./UNIVERSAL_LAYOUT_FRAMEWORK.md) - 通用响应式标准

#### 🎨 **设计UI组件**
1. **颜色系统** → [STYLING_GUIDE.md](./STYLING_GUIDE.md) - 颜色规范
2. **按钮设计** → [STYLING_GUIDE.md](./STYLING_GUIDE.md) - 按钮系统
3. **卡片布局** → [LAYOUT_STANDARDS.md](./LAYOUT_STANDARDS.md) - 组件布局模式

#### 📱 **移动端优化**
1. **响应式布局** → [LAYOUT_STANDARDS.md](./LAYOUT_STANDARDS.md) - 移动端优化规范
2. **移动端菜单** → [STYLING_GUIDE.md](./STYLING_GUIDE.md) - 移动菜单设计
3. **触摸友好** → [LAYOUT_STANDARDS.md](./LAYOUT_STANDARDS.md) - 触摸友好设计

#### 🌈 **主题和样式**
1. **色彩搭配** → [STYLING_GUIDE.md](./STYLING_GUIDE.md) - 色彩系统
2. **字体层级** → [STYLING_GUIDE.md](./STYLING_GUIDE.md) - 字体规范
3. **动画效果** → [STYLING_GUIDE.md](./STYLING_GUIDE.md) - 动画系统

### 按文件类型查找

#### **组件开发**
- Section组件 → `LAYOUT_STANDARDS.md`
- UI组件 → `STYLING_GUIDE.md`
- 交互组件 → `STYLING_GUIDE.md`

#### **页面开发**  
- 页面结构 → `project-guide-en.md`
- 布局系统 → `LAYOUT_STANDARDS.md`
- 样式应用 → `STYLING_GUIDE.md`

---

## 📝 规范使用流程

### 1. 开发前准备
- [ ] 阅读相关规范文档
- [ ] 确认设计符合现有标准
- [ ] 准备必要的资源文件

### 2. 开发过程中
- [ ] 对照规范编写代码
- [ ] 使用标准化的class名称
- [ ] 遵循响应式设计原则

### 3. 开发完成后
- [ ] 对照质量检查清单
- [ ] 进行多设备测试
- [ ] 代码审查对比规范

---

## 🚀 未来规范计划

### 通用框架扩展
- [ ] **通用组件库规范** - `UNIVERSAL_COMPONENTS_FRAMEWORK.md`
- [ ] **通用主题系统** - `UNIVERSAL_THEME_FRAMEWORK.md`
- [ ] **通用动画框架** - `UNIVERSAL_ANIMATION_FRAMEWORK.md`

### 计划新增规范
- [ ] **性能优化规范** - `PERFORMANCE_STANDARDS.md`
- [ ] **可访问性规范** - `ACCESSIBILITY_STANDARDS.md`  
- [ ] **测试规范** - `TESTING_STANDARDS.md`
- [ ] **代码质量规范** - `CODE_QUALITY_STANDARDS.md`
- [ ] **SEO优化规范** - `SEO_STANDARDS.md`

### 规范维护计划
- 每月审查和更新现有规范
- 根据项目演进添加新规范
- 收集团队反馈改进规范质量
- 定期培训团队规范使用

---

## 👥 团队协作

### 规范责任分工
- **前端负责人**: 维护UI/UX相关规范
- **项目经理**: 维护项目流程规范  
- **设计师**: 参与样式设计规范制定
- **全体开发者**: 执行规范并提供改进建议

### 规范更新流程
1. 提出规范修改建议
2. 团队讨论和评审
3. 更新相关文档
4. 通知团队成员
5. 在项目中实施

---

## 📞 联系与反馈

如有规范相关问题或建议：
- 创建GitHub Issue
- 在团队会议中讨论
- 直接联系项目维护者

---

*本索引将随着项目发展持续更新。建议收藏此页面以便快速访问各项规范。*