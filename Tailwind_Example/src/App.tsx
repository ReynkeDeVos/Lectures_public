import { useEffect, useState } from "react";

/* ============================================
   THEME HOOK
   ============================================
   Manages light/dark theme with:
   - localStorage persistence
   - System preference detection
   - Applies .dark class to <html>
   ============================================ */

type Theme = "light" | "dark" | "system";

function useTheme() {
  // Initialize from localStorage or default to "system"
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    // Determine if dark mode should be active
    const isDark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Apply or remove the .dark class
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Persist to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system preference changes when in "system" mode
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const root = document.documentElement;
      if (mediaQuery.matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return { theme, setTheme };
}

/* ============================================
   MAIN APP COMPONENT
   ============================================ */

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header with Theme Switcher */}
        <header className="text-center">
          <div className="mb-6 flex justify-end">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </div>
          <h1>Design System Example</h1>
          <p className="mt-4" style={{ color: "var(--text-muted)" }}>
            A baseline template demonstrating global colors and typography with Tailwind CSS v4
          </p>
        </header>

        {/* Theme Switching Section */}
        <section>
          <h2>Theme Switching</h2>
          <p className="mt-2 mb-6" style={{ color: "var(--text-muted)" }}>
            The theme switcher demonstrates CSS custom properties that change based on theme. Check{" "}
            <code
              className="rounded px-1"
              style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
            >
              index.css
            </code>{" "}
            for the <strong>:root</strong> and <strong>.dark</strong> variable definitions.
          </p>

          <div
            className="rounded-lg border p-6"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-default)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <h3 className="mb-4">How It Works</h3>
            <ol
              className="list-inside list-decimal space-y-3"
              style={{ color: "var(--text-muted)" }}
            >
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Define semantic variables
                </strong>
                in
                <code
                  className="rounded px-1"
                  style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
                >
                  :root
                </code>
                and
                <code
                  className="rounded px-1"
                  style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
                >
                  .dark
                </code>
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>Toggle</strong> the
                <code
                  className="rounded px-1"
                  style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
                >
                  .dark
                </code>
                class on
                <code
                  className="rounded px-1"
                  style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
                >
                  &lt;html&gt;
                </code>
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>Persist</strong> user preference
                in
                <code
                  className="rounded px-1"
                  style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
                >
                  localStorage
                </code>
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>Respect</strong> system
                preference with
                <code
                  className="rounded px-1"
                  style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
                >
                  prefers-color-scheme
                </code>
              </li>
            </ol>
          </div>
        </section>

        {/* Color Palette Section */}
        <section>
          <h2>Color Palette</h2>
          <p className="mt-2 mb-6" style={{ color: "var(--text-muted)" }}>
            Use these colors with Tailwind classes like
            <code
              className="rounded px-1"
              style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
            >
              bg-primary
            </code>
            or
            <code
              className="rounded px-1"
              style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
            >
              text-secondary
            </code>
          </p>

          {/* Primary Colors */}
          <div className="mb-6">
            <h3 className="mb-3">Primary</h3>
            <div className="flex gap-4">
              <ColorSwatch color="bg-primary-light" label="primary-light" />
              <ColorSwatch color="bg-primary" label="primary" />
              <ColorSwatch color="bg-primary-dark" label="primary-dark" light />
            </div>
          </div>

          {/* Secondary Colors */}
          <div className="mb-6">
            <h3 className="mb-3">Secondary</h3>
            <div className="flex gap-4">
              <ColorSwatch color="bg-secondary-light" label="secondary-light" />
              <ColorSwatch color="bg-secondary" label="secondary" />
              <ColorSwatch color="bg-secondary-dark" label="secondary-dark" light />
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-6">
            <h3 className="mb-3">Accent</h3>
            <div className="flex gap-4">
              <ColorSwatch color="bg-accent-light" label="accent-light" />
              <ColorSwatch color="bg-accent" label="accent" />
              <ColorSwatch color="bg-accent-dark" label="accent-dark" />
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-6">
            <h3 className="mb-3">Neutral</h3>
            <div className="flex flex-wrap gap-4">
              <ColorSwatch color="bg-neutral-50" label="50" border />
              <ColorSwatch color="bg-neutral-100" label="100" border />
              <ColorSwatch color="bg-neutral-200" label="200" />
              <ColorSwatch color="bg-neutral-300" label="300" />
              <ColorSwatch color="bg-neutral-400" label="400" />
              <ColorSwatch color="bg-neutral-500" label="500" light />
              <ColorSwatch color="bg-neutral-600" label="600" light />
              <ColorSwatch color="bg-neutral-700" label="700" light />
              <ColorSwatch color="bg-neutral-800" label="800" light />
              <ColorSwatch color="bg-neutral-900" label="900" light />
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-6">
            <h3 className="mb-3">Semantic</h3>
            <div className="flex gap-4">
              <ColorSwatch color="bg-success" label="success" light />
              <ColorSwatch color="bg-warning" label="warning" />
              <ColorSwatch color="bg-error" label="error" light />
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2>Typography</h2>
          <p className="mt-2 mb-6" style={{ color: "var(--text-muted)" }}>
            Headings use <strong>Poppins</strong>, body text uses <strong>Inter</strong>. These are
            set globally in{" "}
            <code
              className="rounded px-1"
              style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
            >
              index.css
            </code>
          </p>

          <div
            className="space-y-6 rounded-lg border p-6"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-default)",
            }}
          >
            <div>
              <span className="text-sm" style={{ color: "var(--text-subtle)" }}>
                h1 - Poppins 700
              </span>
              <h1>The quick brown fox jumps</h1>
            </div>

            <div>
              <span className="text-sm" style={{ color: "var(--text-subtle)" }}>
                h2 - Poppins 700
              </span>
              <h2>The quick brown fox jumps over</h2>
            </div>

            <div>
              <span className="text-sm" style={{ color: "var(--text-subtle)" }}>
                h3 - Poppins 700
              </span>
              <h3>The quick brown fox jumps over the lazy dog</h3>
            </div>

            <div>
              <span className="text-sm" style={{ color: "var(--text-subtle)" }}>
                p - Inter 400
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </section>

        {/* Example Components */}
        <section>
          <h2>Example Components</h2>
          <p className="mt-2 mb-6" style={{ color: "var(--text-muted)" }}>
            Buttons and cards using the design system colors
          </p>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="mb-3">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="cursor-pointer rounded-lg bg-primary px-4 py-2 font-medium text-white transition hover:bg-primary-dark">
                Primary Button
              </button>
              <button className="cursor-pointer rounded-lg bg-secondary px-4 py-2 font-medium text-white transition hover:bg-secondary-dark">
                Secondary Button
              </button>
              <button className="cursor-pointer rounded-lg bg-accent px-4 py-2 font-medium text-neutral-900 transition hover:bg-accent-dark">
                Accent Button
              </button>
              <button
                className="cursor-pointer rounded-lg border px-4 py-2 font-medium transition"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-strong)",
                  color: "var(--text-secondary)",
                }}
              >
                Outline Button
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="mb-3">Cards</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <Card
                title="Primary Card"
                accentColor="bg-primary"
                description="A card with primary color accent on top."
              />
              <Card
                title="Secondary Card"
                accentColor="bg-secondary"
                description="A card with secondary color accent on top."
              />
              <Card
                title="Accent Card"
                accentColor="bg-accent"
                description="A card with accent color on top."
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="border-t pt-8 text-center"
          style={{ borderColor: "var(--border-default)", color: "var(--text-subtle)" }}
        >
          <p>
            Edit
            <code
              className="rounded px-1"
              style={{ backgroundColor: "var(--bg-code)", color: "var(--text-secondary)" }}
            >
              src/index.css
            </code>
            to customize colors and fonts
          </p>
        </footer>
      </div>
    </div>
  );
}

/* ============================================
   THEME SWITCHER COMPONENT
   ============================================
   A segmented control for Light / Dark / System
   ============================================ */

type ThemeSwitcherProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
  const options: { value: Theme; label: string; icon: string }[] = [
    { value: "light", label: "Light", icon: "☀️" },
    { value: "dark", label: "Dark", icon: "🌙" },
    { value: "system", label: "System", icon: "💻" },
  ];

  return (
    <div
      className="inline-flex rounded-lg border p-1"
      style={{
        backgroundColor: "var(--bg-muted)",
        borderColor: "var(--border-default)",
      }}
      role="radiogroup"
      aria-label="Theme selection"
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className="cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium transition-all"
          style={{
            backgroundColor: theme === option.value ? "var(--bg-surface)" : "transparent",
            color: theme === option.value ? "var(--text-primary)" : "var(--text-muted)",
            boxShadow: theme === option.value ? "var(--shadow-sm)" : "none",
          }}
          role="radio"
          aria-checked={theme === option.value}
        >
          <span className="mr-1.5">{option.icon}</span>
          {option.label}
        </button>
      ))}
    </div>
  );
}

/* ============================================
   HELPER COMPONENTS
   ============================================ */

type ColorSwatchProps = {
  color: string;
  label: string;
  light?: boolean;
  border?: boolean;
};

function ColorSwatch({ color, label, light, border }: ColorSwatchProps) {
  return (
    <div className="text-center">
      <div
        className={`h-16 w-16 rounded-lg ${color}`}
        style={{
          borderWidth: border ? "1px" : undefined,
          borderColor: border ? "var(--border-default)" : undefined,
        }}
      />
      <span
        className="mt-1 block text-xs"
        style={{ color: light ? "var(--text-inverted)" : "var(--text-muted)" }}
      >
        {label}
      </span>
    </div>
  );
}

type CardProps = {
  title: string;
  accentColor: string;
  description: string;
};

function Card({ title, accentColor, description }: CardProps) {
  return (
    <div
      className="overflow-hidden rounded-lg border"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-default)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className={`h-2 ${accentColor}`} />
      <div className="p-4">
        <h3 className="mb-2 text-lg">{title}</h3>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default App;
