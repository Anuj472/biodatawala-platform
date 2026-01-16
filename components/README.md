# Components Directory

This directory contains all reusable React components for the BioDatawala platform.

## Structure

```
components/
├── common/           # Common UI components (buttons, cards, etc.)
├── templates/        # Template display and preview components
├── editor/           # Document editor components
├── layout/           # Layout components (header, footer, nav)
└── forms/            # Form components
```

## Component Guidelines

1. **Naming**: Use PascalCase for component files (e.g., `Button.tsx`)
2. **Props**: Always define TypeScript interfaces for props
3. **Styling**: Use Tailwind CSS classes
4. **Accessibility**: Include ARIA labels and keyboard navigation
5. **Performance**: Use React.memo for expensive components
