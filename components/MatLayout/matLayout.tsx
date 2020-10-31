

export default function MatLayout({
    children,
    home
  }: {
    children: React.ReactNode
    home?: boolean
  }) {
    return (
      <div>
        <header>
        </header>
        <main>
            <h2>TODOS</h2>
        <ul>
            <li>Themeing</li>
            <li>Add accordions</li>
            <li>Add pages/tabs</li>
            <li>Buttons</li>
            <li>Tables</li>
            <li>Inputs</li>
            <li>Progress bars</li>
            <li>App bars</li>
            <li>toggles</li>
        </ul>
            {children}
        </main>
      </div>
    )
  }