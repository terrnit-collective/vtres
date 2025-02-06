# vtres = Vue 3 + TypeScript + Vite + Tailwind CSS + TresJS (Three JS)

A stunning, modern landing page template built with Vue 3, TypeScript, and TresJS. Features beautiful 3D animations, smooth transitions, and a responsive design.

![Vue 3D Landing Page](./preview.png)

## ✨ Features

- 🎨 **Modern Design** - Clean, minimal, and beautiful UI
- 🚀 **Performance Optimized** - Built with Vue 3 and Vite
- 🎭 **Smooth Animations** - Powered by VueUse Motion
- 🎮 **Interactive 3D Background** - Using TresJS (Three.js for Vue)
- 🎯 **TypeScript Support** - Full type safety and better DX
- 🎪 **Responsive Layout** - Looks great on all devices
- 🎨 **TailwindCSS** - For rapid UI development
- 📦 **Component-Based Architecture** - Modular and maintainable

## 🚀 Quick Start

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TresJS](https://tresjs.org/) - Build Three.js scenes with Vue components
- [VueUse Motion](https://motion.vueuse.org/) - Vue Composables for smooth animations
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework

## 📁 Project Structure

```
src/
├── components/           # Vue components
│   ├── hero/            # Hero section components
│   └── ui/              # Reusable UI components
├── composables/         # Vue composables
├── assets/             # Static assets
└── App.vue             # Root component
```

## 🎨 Customization

### Colors
Update the primary and secondary colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#YOUR_PRIMARY_COLOR',
      secondary: '#YOUR_SECONDARY_COLOR'
    }
  }
}
```

### 3D Scene
Modify the 3D background in `components/Background3D.vue`. Add or remove 3D objects, adjust lighting, or change materials.

### Animations
Customize animations in `composables/useAnimations.ts`. Adjust timing, delays, and animation properties.

## 📝 License

MIT License © 2024

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💖 Support

Give a ⭐️ if this project helped you!
