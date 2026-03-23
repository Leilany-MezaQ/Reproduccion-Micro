import { BellIcon, LogOutIcon, ChevronLeftIcon } from './icons'

interface NavbarProps {
  onBack?: () => void
  backLabel?: string
}

export const Navbar = ({ onBack, backLabel = 'Volver al catálogo' }: NavbarProps) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          {/* Pon el logo en /public/trailix-logo.png y se cargará automáticamente */}
          <img src="/trailix-logo.png" alt="Trailix logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">TRAILIX</span>
        </div>
        {onBack && (
          <button className="navbar-back" onClick={onBack}>
            <ChevronLeftIcon />
            {backLabel}
          </button>
        )}
      </div>
      <div className="navbar-right">
        <button className="navbar-icon-btn">
          <BellIcon />
        </button>
        <button className="navbar-admin-btn">Admin</button>
        <button className="navbar-avatar">
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=admin"
            alt="Admin avatar"
          />
        </button>
        <button className="navbar-icon-btn">
          <LogOutIcon />
        </button>
      </div>
    </header>
  )
}
