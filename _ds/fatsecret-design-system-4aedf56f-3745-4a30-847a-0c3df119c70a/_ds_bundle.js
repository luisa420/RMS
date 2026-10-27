/* @ds-bundle: {"format":4,"namespace":"FatSecretDesignSystem_4aedf5","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Card.jsx"},{"name":"FilterChip","sourcePath":"components/core/Chip.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"AssistChip","sourcePath":"components/core/Chip.jsx"},{"name":"SuggestionChip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"MacroBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"}],"sourceHashes":{"components/core/Button.jsx":"87f58a41dc03","components/core/Card.jsx":"3a5deb3faac8","components/core/Chip.jsx":"5bf5f4337e3d","components/core/Input.jsx":"c9df6e63e841","components/core/ProgressBar.jsx":"eac0f12272cc","components/core/Switch.jsx":"ba69ef9d536c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FatSecretDesignSystem_4aedf5 = window.FatSecretDesignSystem_4aedf5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ── Sizes (from Figma FSDS 2026) ────────────────────────── */
const BTN_SIZES = {
  xs: {
    h: 32,
    pV: 6,
    pH: 12,
    font: 14,
    lh: '20px',
    iconSz: 20,
    gap: 4,
    squareR: 'var(--fs-radius-md)',
    pressedR: 'var(--fs-radius-md)'
  },
  sm: {
    h: 40,
    pV: 8,
    pH: 16,
    font: 14,
    lh: '20px',
    iconSz: 20,
    gap: 4,
    squareR: 'var(--fs-radius-md)',
    pressedR: 'var(--fs-radius-md)'
  },
  md: {
    h: 56,
    pV: 16,
    pH: 24,
    font: 16,
    lh: '20px',
    iconSz: 24,
    gap: 8,
    squareR: 'var(--fs-radius-lg)',
    pressedR: 'var(--fs-radius-lg)'
  },
  lg: {
    h: 96,
    pV: 32,
    pH: 48,
    font: 24,
    lh: '32px',
    iconSz: 32,
    gap: 12,
    squareR: 'var(--fs-radius-xl)',
    pressedR: 'var(--fs-radius-xl)'
  },
  xl: {
    h: 136,
    pV: 48,
    pH: 64,
    font: 32,
    lh: '40px',
    iconSz: 40,
    gap: 16,
    squareR: 'var(--fs-radius-2xl)',
    pressedR: 'var(--fs-radius-xl)'
  }
};
const TAP_MIN = 48; // minimum tap-zone height (xs/sm extend invisibly)

/* ── Styles (from Figma FSDS 2026) ───────────────────────── */
const BTN_STYLES = {
  filled: {
    default: {
      background: '#009C41',
      color: '#FFFFFF',
      border: 'none',
      boxShadow: 'none'
    },
    hover: {
      background: '#008839'
    },
    active: {
      background: '#007531'
    }
  },
  tonal: {
    default: {
      background: 'rgb(220,219,252)',
      color: '#030B19',
      border: 'none',
      boxShadow: 'none'
    },
    hover: {
      background: 'rgb(200,199,242)'
    },
    active: {
      background: 'rgb(180,179,230)'
    }
  },
  outline: {
    default: {
      background: 'transparent',
      color: '#009C41',
      border: '1px solid #BCBEC6',
      boxShadow: 'none'
    },
    hover: {
      background: 'rgba(0,156,65,0.06)'
    },
    active: {
      background: 'rgba(0,156,65,0.12)'
    }
  },
  elevated: {
    default: {
      background: '#FFFFFF',
      color: '#009C41',
      border: 'none',
      boxShadow: '0 1px 3px rgba(3,11,25,0.12),0 1px 2px rgba(3,11,25,0.06)'
    },
    hover: {
      background: '#F7F8FF',
      boxShadow: '0 2px 8px rgba(3,11,25,0.14)'
    },
    active: {
      background: '#ECEDF4'
    }
  },
  text: {
    default: {
      background: 'transparent',
      color: '#009C41',
      border: 'none',
      boxShadow: 'none'
    },
    hover: {
      background: 'rgba(0,156,65,0.08)'
    },
    active: {
      background: 'rgba(0,156,65,0.14)'
    }
  }
};
function Button({
  children,
  variant = 'filled',
  size = 'md',
  shape = 'square',
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  as: Tag = 'button',
  style: extraStyle = {},
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const sz = BTN_SIZES[size] || BTN_SIZES.md;
  const v = BTN_STYLES[variant] || BTN_STYLES.filled;
  const state = pressed ? 'active' : hovered ? 'hover' : 'default';
  // Shape morph: round and square both take the same pressed radius
  const radius = pressed ? sz.pressedR : shape === 'round' ? 'var(--fs-radius-pill)' : sz.squareR;
  const combinedStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sz.gap,
    padding: `${sz.pV}px ${sz.pH}px`,
    height: sz.h,
    fontFamily: 'var(--fs-font-sans, Inter, sans-serif)',
    fontWeight: 600,
    fontSize: sz.font,
    lineHeight: sz.lh,
    letterSpacing: '-0.01em',
    borderRadius: radius,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    transition: 'background 100ms, box-shadow 100ms, opacity 100ms, border-radius 150ms var(--fs-easing-standard)',
    textDecoration: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    position: 'relative',
    ...v.default,
    ...(state !== 'default' ? v[state] : {}),
    ...(fullWidth ? {
      width: '100%'
    } : {}),
    ...(disabled || loading ? {
      opacity: 0.38,
      cursor: 'not-allowed',
      pointerEvents: 'none'
    } : {}),
    ...extraStyle
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: combinedStyle,
    disabled: Tag === 'button' ? disabled || loading : undefined,
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => !disabled && setPressed(true),
    onMouseUp: () => setPressed(false)
  }, props), sz.h < TAP_MIN && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: -(TAP_MIN - sz.h) / 2,
      bottom: -(TAP_MIN - sz.h) / 2
    }
  }), loading && /*#__PURE__*/React.createElement("span", {
    style: {
      width: sz.iconSz * 0.7,
      height: sz.iconSz * 0.7,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'fs-spin 0.6s linear infinite',
      flexShrink: 0
    }
  }), !loading && icon && iconPosition === 'left' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, icon), children && /*#__PURE__*/React.createElement("span", null, children), !loading && icon && iconPosition === 'right' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("style", null, `@keyframes fs-spin{to{transform:rotate(360deg)}}`));
}

/* ── Icon Button sizes (from Figma FSDS 2026) ────────────── */
const IB_SIZES = {
  xs: {
    defW: 40,
    defH: 40,
    narrowW: 28,
    narrowH: 32,
    wideW: 56,
    icon: 20,
    squareR: 'var(--fs-radius-sm)'
  },
  sm: {
    defW: 48,
    defH: 48,
    narrowW: 32,
    narrowH: 40,
    wideW: 64,
    icon: 24,
    squareR: 'var(--fs-radius-md)'
  },
  md: {
    defW: 56,
    defH: 56,
    narrowW: 48,
    narrowH: 56,
    wideW: 72,
    icon: 24,
    squareR: 'var(--fs-radius-lg)'
  },
  lg: {
    defW: 96,
    defH: 96,
    narrowW: 64,
    narrowH: 96,
    wideW: 128,
    icon: 32,
    squareR: 'var(--fs-radius-xl)'
  },
  xl: {
    defW: 136,
    defH: 136,
    narrowW: 104,
    narrowH: 136,
    wideW: 168,
    icon: 40,
    squareR: 'var(--fs-radius-2xl)'
  }
};
const IB_STYLES = {
  filled: {
    bg: '#009C41',
    color: '#FFFFFF',
    border: 'none'
  },
  tonal: {
    bg: 'rgb(220,219,252)',
    color: '#030B19',
    border: 'none'
  },
  outline: {
    bg: 'transparent',
    color: '#030B19',
    border: '1.5px solid #696C75'
  },
  standard: {
    bg: 'transparent',
    color: '#030B19',
    border: 'none'
  }
};
const IB_HOVER = {
  filled: {
    bg: '#008839'
  },
  tonal: {
    bg: 'rgb(200,199,242)'
  },
  outline: {
    bg: 'rgba(3,11,25,0.06)'
  },
  standard: {
    bg: 'rgba(3,11,25,0.06)'
  }
};
function IconButton({
  icon,
  label,
  variant = 'standard',
  size = 'md',
  shape = 'round',
  width = 'default',
  disabled = false,
  style: extraStyle = {},
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const sz = IB_SIZES[size] || IB_SIZES.md;
  const st = IB_STYLES[variant] || IB_STYLES.standard;
  const hv = IB_HOVER[variant] || {};
  const w = width === 'narrow' ? sz.narrowW : width === 'wide' ? sz.wideW : sz.defW;
  const h = width === 'narrow' ? sz.narrowH : sz.defH;
  const borderRadius = shape === 'square' ? sz.squareR : 'var(--fs-radius-pill)';
  const bg = pressed ? hv.bg || st.bg : hovered ? hv.bg || st.bg : st.bg;
  const combinedStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: w,
    height: h,
    borderRadius,
    background: bg,
    border: st.border,
    color: st.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    flexShrink: 0,
    transition: 'background 100ms',
    outline: 'none',
    opacity: disabled ? 0.38 : 1,
    boxSizing: 'border-box',
    ...extraStyle
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: combinedStyle,
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => !disabled && setPressed(true),
    onMouseUp: () => setPressed(false)
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: sz.icon,
      height: sz.icon
    }
  }, icon));
}
Object.assign(__ds_scope, { Button, IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const elevationMap = {
  none: {
    background: 'var(--fs-color-surface-container)',
    boxShadow: 'none'
  },
  sm: {
    background: 'var(--fs-color-surface-container-lowest)',
    boxShadow: 'var(--fs-shadow-sm)'
  },
  md: {
    background: 'var(--fs-color-surface-container-lowest)',
    boxShadow: 'var(--fs-shadow-md)'
  },
  lg: {
    background: 'var(--fs-color-surface-container-lowest)',
    boxShadow: 'var(--fs-shadow-lg)'
  },
  filled: {
    background: 'var(--fs-color-surface-container)',
    boxShadow: 'none'
  },
  tinted: {
    background: 'var(--fs-color-primary-container)',
    boxShadow: 'none'
  }
};
function Card({
  children,
  elevation = 'sm',
  radius = 'lg',
  padding = 'md',
  clickable = false,
  onClick,
  style: extraStyle = {},
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const radiusMap = {
    none: '0',
    sm: 'var(--fs-radius-sm)',
    md: 'var(--fs-radius-md)',
    lg: 'var(--fs-radius-lg)',
    xl: 'var(--fs-radius-xl)'
  };
  const paddingMap = {
    none: '0',
    sm: 'var(--fs-space-2xs)',
    md: 'var(--fs-space-sm)',
    lg: 'var(--fs-space-md)'
  };
  const elev = elevationMap[elevation] || elevationMap.sm;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => clickable && setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => clickable && setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      ...elev,
      borderRadius: radiusMap[radius] || 'var(--fs-radius-lg)',
      padding: paddingMap[padding] || padding,
      cursor: clickable ? 'pointer' : 'default',
      transition: 'box-shadow var(--fs-transition-fast), transform var(--fs-transition-fast)',
      transform: pressed && clickable ? 'scale(0.99)' : 'scale(1)',
      boxShadow: clickable && hovered ? 'var(--fs-shadow-md)' : elev.boxShadow,
      ...extraStyle
    }
  }, props), children);
}
function Divider({
  style: extraStyle = {},
  vertical = false,
  ...props
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 'none',
      ...(vertical ? {
        width: '1px',
        height: '100%',
        background: 'var(--fs-color-border-weak)',
        margin: '0 var(--fs-space-2xs)'
      } : {
        height: '1px',
        width: '100%',
        background: 'var(--fs-color-border-weak)',
        margin: 'var(--fs-space-2xs) 0'
      }),
      ...extraStyle
    }
  }, props));
}
Object.assign(__ds_scope, { Card, Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ── Chip constants (from Figma FSDS 2026) ───────────────── */
const CHIP_TEXT = '#030B19';
const CHIP_ICON = '#696C75';
const CHIP_BORDER = '1px solid #BCBEC6';
const CHIP_SEL_BG = 'rgb(220,219,252)';
const CHIP_PRESS = 'rgba(0,0,0,0.09)';
const chipBase = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  height: 32,
  padding: '0 12px',
  fontFamily: 'var(--fs-font-sans, Inter, sans-serif)',
  fontSize: 14,
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '-0.03em',
  color: CHIP_TEXT,
  cursor: 'pointer',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  transition: 'background 100ms, border-color 100ms',
  outline: 'none',
  boxSizing: 'border-box',
  whiteSpace: 'nowrap'
};
function CheckIco() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }));
}
function CloseIco() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }));
}
function ChevIco() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }));
}

/* ═══════════════════════════════════════════════
   FILTER CHIP — pill · toggleable selection
   ═══════════════════════════════════════════════ */
function FilterChip({
  children,
  selected = false,
  onToggle,
  leadingIcon = null,
  trailingChevron = false,
  dismissible = false,
  onDismiss,
  disabled = false,
  style: extraStyle = {},
  ...props
}) {
  const [pressed, setPressed] = React.useState(false);
  // Colour spec: Default · Pressed · Selected
  const bg = selected ? 'var(--fs-color-tertiary-container)' : pressed ? 'var(--fs-color-secondary-container)' : 'transparent';
  const border = selected ? '1px solid var(--fs-color-tertiary-container)' : '1px solid var(--fs-color-border-strong)';
  const fg = selected || pressed ? 'var(--fs-color-on-tertiary-container)' : 'var(--fs-color-on-surface-strong)';

  // Spec: 32 high · 16 side padding without icon · 8 beside an 18px icon · 8 icon-label gap
  const hasLead = selected || !!leadingIcon;
  const hasTrail = trailingChevron || dismissible && selected;
  const icon18 = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18,
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "checkbox",
    "aria-checked": selected,
    onClick: () => !disabled && onToggle && onToggle(!selected),
    onMouseDown: () => !disabled && setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    disabled: disabled,
    style: {
      ...chipBase,
      color: fg,
      height: 32,
      gap: 'var(--fs-space-2xs)',
      paddingLeft: hasLead ? 'var(--fs-space-2xs)' : 'var(--fs-space-sm)',
      paddingRight: hasTrail ? 'var(--fs-space-2xs)' : 'var(--fs-space-sm)',
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: 9999,
      background: bg,
      border,
      opacity: disabled ? 0.38 : 1,
      ...extraStyle
    }
  }, props), selected ? /*#__PURE__*/React.createElement("span", {
    style: icon18
  }, /*#__PURE__*/React.createElement(CheckIco, null)) : leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: icon18
  }, leadingIcon), /*#__PURE__*/React.createElement("span", null, children), dismissible && selected ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      !disabled && onDismiss && onDismiss();
    },
    style: {
      ...icon18,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(CloseIco, null)) : trailingChevron && /*#__PURE__*/React.createElement("span", {
    style: icon18
  }, /*#__PURE__*/React.createElement(ChevIco, null)));
}

/** Alias — default chip variant */
const Chip = FilterChip;

/* ═══════════════════════════════════════════════
   ASSIST CHIP — rounded rect (r8) · action trigger
   ═══════════════════════════════════════════════ */
function AssistChip({
  children,
  leadingIcon = null,
  onClick,
  disabled = false,
  style: extraStyle = {},
  ...props
}) {
  const [pressed, setPressed] = React.useState(false);
  // Colour spec (matches FilterChip; no selected state): Default · Pressed
  const bg = pressed ? 'var(--fs-color-secondary-container)' : 'transparent';
  const fg = pressed ? 'var(--fs-color-on-tertiary-container)' : 'var(--fs-color-on-surface-strong)';
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: () => !disabled && onClick && onClick(),
    onMouseLeave: () => setPressed(false),
    onMouseDown: () => !disabled && setPressed(true),
    onMouseUp: () => setPressed(false),
    disabled: disabled,
    style: {
      ...chipBase,
      color: fg,
      height: 32,
      gap: 'var(--fs-space-2xs)',
      paddingLeft: leadingIcon ? 'var(--fs-space-2xs)' : 'var(--fs-space-sm)',
      paddingRight: 'var(--fs-space-sm)',
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: 'var(--fs-radius-md)',
      background: bg,
      border: '1px solid var(--fs-color-border-strong)',
      opacity: disabled ? 0.38 : 1,
      ...extraStyle
    }
  }, props), leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("span", null, children));
}

/* ═══════════════════════════════════════════════
   SUGGESTION CHIP — rounded rect (r8) · text-only
   ═══════════════════════════════════════════════ */
function SuggestionChip({
  children,
  leadingIcon = null,
  onClick,
  disabled = false,
  style: extraStyle = {},
  ...props
}) {
  const [pressed, setPressed] = React.useState(false);
  // Colour spec (matches FilterChip; no selected state): Default · Pressed
  const bg = pressed ? 'var(--fs-color-secondary-container)' : 'transparent';
  const fg = pressed ? 'var(--fs-color-on-tertiary-container)' : 'var(--fs-color-on-surface-strong)';
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: () => !disabled && onClick && onClick(),
    onMouseLeave: () => setPressed(false),
    onMouseDown: () => !disabled && setPressed(true),
    onMouseUp: () => setPressed(false),
    disabled: disabled,
    style: {
      ...chipBase,
      color: fg,
      height: 32,
      gap: 'var(--fs-space-2xs)',
      paddingLeft: leadingIcon ? 'var(--fs-space-2xs)' : 'var(--fs-space-sm)',
      paddingRight: 'var(--fs-space-sm)',
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: 'var(--fs-radius-md)',
      background: bg,
      border: '1px solid var(--fs-color-border-strong)',
      opacity: disabled ? 0.38 : 1,
      ...extraStyle
    }
  }, props), leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { FilterChip, Chip, AssistChip, SuggestionChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  helper,
  error,
  leadingIcon,
  trailingIcon,
  size = 'md',
  disabled = false,
  style: extraStyle = {},
  containerStyle = {},
  id: idProp,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const id = idProp || React.useId?.() || `fs-input-${Math.random().toString(36).slice(2)}`;
  const hasError = Boolean(error);
  const sizeMap = {
    sm: {
      fontSize: '13px',
      lineHeight: '18px',
      padding: '7px 12px',
      height: '36px'
    },
    md: {
      fontSize: '14px',
      lineHeight: '20px',
      padding: '10px 14px',
      height: '44px'
    },
    lg: {
      fontSize: '16px',
      lineHeight: '24px',
      padding: '12px 16px',
      height: '52px'
    }
  };
  const sz = sizeMap[size] || sizeMap.md;
  const borderColor = hasError ? 'var(--fs-color-critical)' : focused ? 'var(--fs-color-primary)' : 'var(--fs-color-border-weak)';
  const shadowStyle = focused ? `0 0 0 3px ${hasError ? 'rgba(215,65,0,0.12)' : 'rgba(0,156,65,0.12)'}` : 'none';
  const inputStyle = {
    width: '100%',
    ...sz,
    boxSizing: 'border-box',
    fontFamily: 'var(--fs-font-sans)',
    color: 'var(--fs-color-on-surface-strong)',
    background: disabled ? 'var(--fs-color-surface-container)' : 'var(--fs-color-surface-container-lowest)',
    border: `1.5px solid ${borderColor}`,
    borderRadius: 'var(--fs-radius-md)',
    outline: 'none',
    boxShadow: shadowStyle,
    transition: 'border-color var(--fs-transition-fast), box-shadow var(--fs-transition-fast)',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.55 : 1,
    paddingLeft: leadingIcon ? `${parseInt(sz.padding) + 28}px` : sz.padding.split(' ')[1],
    paddingRight: trailingIcon ? `${parseInt(sz.padding) + 28}px` : sz.padding.split(' ')[1]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--fs-font-sans)',
      fontSize: 'var(--fs-type-label-md-size)',
      fontWeight: 'var(--fs-font-weight-medium)',
      color: hasError ? 'var(--fs-color-critical)' : 'var(--fs-color-on-surface-strong)',
      lineHeight: '16px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '12px',
      display: 'inline-flex',
      color: 'var(--fs-color-on-surface-weak)',
      pointerEvents: 'none',
      zIndex: 1
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    disabled: disabled,
    style: {
      ...inputStyle,
      ...extraStyle
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, props)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '12px',
      display: 'inline-flex',
      color: 'var(--fs-color-on-surface-weak)',
      pointerEvents: 'none'
    }
  }, trailingIcon)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--fs-font-sans)',
      fontSize: 'var(--fs-type-body-sm-size)',
      lineHeight: 'var(--fs-type-body-sm-line)',
      color: hasError ? 'var(--fs-color-critical)' : 'var(--fs-color-on-surface-weak)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  variant = 'primary',
  animate = true,
  style: extraStyle = {},
  ...props
}) {
  const pct = Math.min(100, Math.max(0, value / max * 100));
  const overLimit = value > max;
  const sizeMap = {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12
  };
  const height = sizeMap[size] || sizeMap.md;
  const variantMap = {
    primary: 'var(--fs-color-primary)',
    success: 'var(--fs-color-success)',
    critical: 'var(--fs-color-critical)',
    warning: 'var(--fs-color-warning)',
    info: 'var(--fs-color-info)',
    premium: 'var(--fs-color-premium)'
  };
  const fillColor = overLimit ? 'var(--fs-color-critical)' : variantMap[variant] || variantMap.primary;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      ...extraStyle
    }
  }, props), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--fs-font-sans)',
      fontSize: 'var(--fs-type-label-md-size)',
      fontWeight: 'var(--fs-font-weight-medium)',
      color: 'var(--fs-color-on-surface-strong)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--fs-font-sans)',
      fontSize: 'var(--fs-type-label-sm-size)',
      color: overLimit ? 'var(--fs-color-critical)' : 'var(--fs-color-on-surface-weak)',
      fontWeight: 'var(--fs-font-weight-medium)'
    }
  }, Math.round(value), " / ", max)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      borderRadius: 'var(--fs-radius-pill)',
      background: 'var(--fs-color-surface-container-highest)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.min(pct, 100)}%`,
      height: '100%',
      background: fillColor,
      borderRadius: 'var(--fs-radius-pill)',
      transition: animate ? 'width 0.5s var(--fs-easing-standard)' : 'none'
    }
  })));
}
function MacroBar({
  protein = 0,
  carbs = 0,
  fat = 0,
  style: extraStyle = {},
  size = 'md',
  showLabels = false,
  ...props
}) {
  const total = protein + carbs + fat;
  const sizeMap = {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12
  };
  const height = sizeMap[size] || sizeMap.md;
  const protPct = total > 0 ? protein / total * 100 : 33.33;
  const carbPct = total > 0 ? carbs / total * 100 : 33.33;
  const fatPct = total > 0 ? fat / total * 100 : 33.34;
  const segments = [{
    label: 'Protein',
    value: protein,
    pct: protPct,
    color: 'var(--fs-color-primary)'
  }, {
    label: 'Carbs',
    value: carbs,
    pct: carbPct,
    color: 'var(--fs-ref-amber-50)'
  }, {
    label: 'Fat',
    value: fat,
    pct: fatPct,
    color: 'var(--fs-color-tertiary)'
  }];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...extraStyle
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height,
      borderRadius: 'var(--fs-radius-pill)',
      overflow: 'hidden',
      gap: '2px'
    }
  }, segments.map(({
    label,
    pct,
    color
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      flex: pct,
      background: color,
      height: '100%',
      minWidth: pct > 0 ? 2 : 0,
      transition: 'flex 0.5s var(--fs-easing-standard)'
    }
  }))), showLabels && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--fs-space-sm)'
    }
  }, segments.map(({
    label,
    value,
    color
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--fs-font-sans)',
      fontSize: 'var(--fs-type-label-sm-size)',
      color: 'var(--fs-color-on-surface-weak)'
    }
  }, label, " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fs-color-on-surface-strong)'
    }
  }, Math.round(value), "g"))))));
}
Object.assign(__ds_scope, { ProgressBar, MacroBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  helper,
  disabled = false,
  size = 'md',
  style: extraStyle = {},
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const trackWidth = size === 'sm' ? 36 : 52;
  const trackHeight = size === 'sm' ? 20 : 28;
  const thumbSize = size === 'sm' ? 14 : 20;
  const thumbOffset = size === 'sm' ? 3 : 4;
  const thumbTravel = trackWidth - thumbSize - thumbOffset * 2;
  const trackBg = checked ? 'var(--fs-color-primary)' : 'var(--fs-color-surface-container-highest)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...extraStyle
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flexShrink: 0,
      display: 'inline-block',
      width: trackWidth,
      height: trackHeight,
      borderRadius: 'var(--fs-radius-pill)',
      background: trackBg,
      transition: 'background var(--fs-transition)',
      boxShadow: hovered && !disabled ? `0 0 0 4px ${checked ? 'rgba(0,156,65,0.12)' : 'rgba(3,11,25,0.06)'}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, props)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: thumbOffset,
      left: thumbOffset,
      width: thumbSize,
      height: thumbSize,
      borderRadius: '50%',
      background: 'var(--fs-ref-white)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      transform: checked ? `translateX(${thumbTravel}px)` : 'translateX(0)',
      transition: 'transform var(--fs-transition)'
    }
  })), (label || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      paddingTop: size === 'sm' ? 2 : 4
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--fs-font-sans)',
      fontSize: size === 'sm' ? '13px' : 'var(--fs-type-body-md-size)',
      fontWeight: 'var(--fs-font-weight-medium)',
      color: 'var(--fs-color-on-surface-strong)',
      lineHeight: size === 'sm' ? '18px' : 'var(--fs-type-body-md-line)'
    }
  }, label), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--fs-font-sans)',
      fontSize: 'var(--fs-type-body-sm-size)',
      color: 'var(--fs-color-on-surface-weak)',
      lineHeight: 'var(--fs-type-body-sm-line)'
    }
  }, helper)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.AssistChip = __ds_scope.AssistChip;

__ds_ns.SuggestionChip = __ds_scope.SuggestionChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.MacroBar = __ds_scope.MacroBar;

__ds_ns.Switch = __ds_scope.Switch;

})();
