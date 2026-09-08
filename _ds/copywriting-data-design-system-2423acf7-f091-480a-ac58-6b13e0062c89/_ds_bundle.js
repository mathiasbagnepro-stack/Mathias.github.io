/* @ds-bundle: {"format":3,"namespace":"CopywritingDataDesignSystem_2423ac","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ComparisonRow","sourcePath":"components/data/ComparisonRow.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6a7306d071d4","components/core/Button.jsx":"7ddbc349e36c","components/core/Card.jsx":"83ab611dbd16","components/data/ComparisonRow.jsx":"66e898a9488a","components/data/MetricCard.jsx":"4532aa3312c2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CopywritingDataDesignSystem_2423ac = window.CopywritingDataDesignSystem_2423ac || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Compact label component — métriques, statuts, catégories.
 */
function Badge({
  children,
  variant = 'default',
  size = 'md'
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      padding: '2px 8px',
      fontSize: '9px'
    },
    md: {
      padding: '4px 10px',
      fontSize: 'var(--text-xs)'
    }
  };
  const variants = {
    default: {
      background: 'rgba(254,250,225,0.10)',
      color: 'var(--color-cream-70)',
      border: '1px solid rgba(254,250,225,0.15)'
    },
    accent: {
      background: 'var(--color-tangerine-dim)',
      color: 'var(--color-tangerine)',
      border: '1px solid rgba(255,92,2,0.25)'
    },
    dim: {
      background: 'transparent',
      color: 'var(--color-cream-50)',
      border: '1px solid rgba(254,250,225,0.08)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-cream-70)',
      border: '1px solid rgba(254,250,225,0.30)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Primary action button for Copywriting Data brand.
 * Three variants: primary (tangerine CTA), secondary (cream outline), ghost.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'all var(--transition-base)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    width: fullWidth ? '100%' : undefined
  };
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-xs)',
      borderRadius: 'var(--radius-sm)'
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--text-sm)',
      borderRadius: 'var(--radius-sm)'
    },
    lg: {
      padding: '16px 32px',
      fontSize: 'var(--text-base)',
      borderRadius: 'var(--radius-md)'
    }
  };
  const variants = {
    primary: {
      background: pressed ? '#CC4900' : hovered ? '#E65200' : 'var(--color-tangerine)',
      color: 'var(--color-deep-black)',
      border: 'none',
      boxShadow: hovered && !disabled ? '0 0 20px rgba(255,92,2,0.30)' : 'none',
      transform: pressed ? 'scale(0.98)' : 'none'
    },
    secondary: {
      background: hovered ? 'rgba(254,250,225,0.08)' : 'transparent',
      color: 'var(--color-cream)',
      border: '1px solid rgba(254,250,225,0.30)'
    },
    ghost: {
      background: hovered ? 'rgba(254,250,225,0.06)' : 'transparent',
      color: 'var(--color-cream-70)',
      border: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Container sombre premium pour le contenu structuré.
 */
function Card({
  children,
  variant = 'default',
  padding = 'md',
  clickable = false,
  onClick
}) {
  const [hovered, setHovered] = useState(false);
  const paddings = {
    sm: '16px',
    md: '24px 28px',
    lg: '32px 36px'
  };
  const variants = {
    default: {
      background: 'linear-gradient(135deg, #121A34 0%, #0C1228 100%)',
      border: hovered && clickable ? '1px solid rgba(255,92,2,0.35)' : '1px solid rgba(254,250,225,0.12)'
    },
    elevated: {
      background: 'linear-gradient(135deg, #1A2444 0%, #121A34 100%)',
      border: hovered && clickable ? '1px solid rgba(255,92,2,0.35)' : '1px solid rgba(254,250,225,0.15)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
    },
    accent: {
      background: 'linear-gradient(135deg, #121A34 0%, #0C1228 100%)',
      border: '1px solid rgba(255,92,2,0.35)',
      boxShadow: '0 0 20px rgba(255,92,2,0.10)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: clickable ? onClick : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: paddings[padding],
      cursor: clickable ? 'pointer' : 'default',
      transform: hovered && clickable ? 'translateY(-2px)' : 'none',
      transition: 'all var(--transition-base)',
      boxShadow: variants[variant].boxShadow || (hovered && clickable ? '0 4px 16px rgba(0,0,0,0.4)' : '0 2px 12px rgba(0,0,0,0.4)'),
      ...variants[variant]
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/ComparisonRow.jsx
try { (() => {
/**
 * Ligne de tableau comparatif — Copywriter standard vs Copywriting Data.
 * Composant signature de la section différenciation.
 */
function ComparisonRow({
  label,
  standard,
  copData,
  highlight = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1px',
      background: highlight ? 'rgba(255,92,2,0.08)' : 'transparent',
      borderRadius: highlight ? 'var(--radius-sm)' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: '500',
      color: 'rgba(254,250,225,0.70)',
      borderBottom: '1px solid rgba(254,250,225,0.08)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'rgba(254,250,225,0.40)',
      borderBottom: '1px solid rgba(254,250,225,0.08)',
      borderLeft: '1px solid rgba(254,250,225,0.08)'
    }
  }, standard), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: highlight ? '600' : '400',
      color: highlight ? 'var(--color-tangerine)' : 'rgba(254,250,225,0.90)',
      borderBottom: '1px solid rgba(254,250,225,0.08)',
      borderLeft: '1px solid rgba(254,250,225,0.08)'
    }
  }, copData));
}
Object.assign(__ds_scope, { ComparisonRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ComparisonRow.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
/**
 * KPI display card — valeur principale mono tangerine, label, delta.
 * Actif de marque : la dataviz est une preuve, pas un détail.
 */
function MetricCard({
  value,
  label,
  delta,
  deltaPositive = true,
  description,
  size = 'md'
}) {
  const valueSizes = {
    sm: '28px',
    md: '40px',
    lg: '56px'
  };
  const labelSizes = {
    sm: '10px',
    md: '11px',
    lg: '12px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #121A34 0%, #0C1228 100%)',
      border: '1px solid rgba(254,250,225,0.12)',
      borderRadius: 'var(--radius-lg)',
      padding: size === 'sm' ? '16px 18px' : '24px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: labelSizes[size],
      fontWeight: '600',
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      color: 'rgba(254,250,225,0.50)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: valueSizes[size],
      fontWeight: '700',
      color: 'var(--color-tangerine)',
      letterSpacing: '-0.01em',
      lineHeight: 1
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      fontWeight: '600',
      color: deltaPositive ? '#2ECC71' : '#E74C3C'
    }
  }, delta)), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'rgba(254,250,225,0.50)',
      lineHeight: '1.5',
      marginTop: '4px'
    }
  }, description));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ComparisonRow = __ds_scope.ComparisonRow;

__ds_ns.MetricCard = __ds_scope.MetricCard;

})();
