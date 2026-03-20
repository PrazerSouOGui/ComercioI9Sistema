"use client";
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            const t = localStorage.getItem('i9-theme') || 'light';
            if (t === 'dark') document.documentElement.classList.add('dark');
          } catch(e) {}
        `,
      }}
    />
  );
}
