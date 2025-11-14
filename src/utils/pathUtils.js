// src/utils/pathUtils.js

// تصحيح المسار عبر دمج BASE_URL (الذي يحتوي على /portfolio/)
export const correctPath = (path) => {
  // استخدام BASE_URL من Vite
  if (typeof import.meta.env.BASE_URL !== 'undefined') {
    // إزالة '/' من بداية المسار لتجنب المسار المزدوج (//)
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    // الجمع بين المسار الأساسي (مثل /portfolio/) والمسار النظيف
    return import.meta.env.BASE_URL + cleanPath;
  }
  return path;
};