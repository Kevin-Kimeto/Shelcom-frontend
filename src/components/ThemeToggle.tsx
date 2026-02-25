export default function ThemeToggle() {
  function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('light');
    html.classList.toggle('dark');
  }

  return (
    <button
      onClick={toggleTheme}
      className="border px-3 py-1 rounded text-xs"
    >
      Toggle
    </button>
  );
}
