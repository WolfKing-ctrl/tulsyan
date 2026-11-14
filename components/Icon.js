const P = {
  diabetes: <><rect x="62" y="12" width="76" height="126" rx="16" fill="currentColor" opacity=".9" /><rect x="74" y="26" width="52" height="40" rx="5" fill="#cfd8c9" /><circle cx="86" cy="90" r="8" fill="#888" /><circle cx="114" cy="90" r="8" fill="#888" /></>,
  monitors: <><rect x="40" y="20" width="120" height="100" rx="14" fill="currentColor" opacity=".9" /><rect x="56" y="34" width="60" height="44" rx="5" fill="#cfd8c9" /><circle cx="138" cy="50" r="7" fill="#888" /><rect x="70" y="124" width="60" height="10" rx="5" fill="#1f3d99" /></>,
  respiratory: <><rect x="50" y="62" width="100" height="70" rx="12" fill="currentColor" opacity=".9" /><circle cx="130" cy="100" r="12" fill="#888" /><rect x="88" y="22" width="26" height="40" fill="#cfd8c9" /></>,
  supports: <><path d="M58 14h84l-10 52 18 70h-44l-6-40-6 40H48l18-70z" fill="currentColor" opacity=".9" /><rect x="58" y="60" width="84" height="12" fill="#1f3d99" opacity=".7" /></>,
  consumables: <><rect x="40" y="40" width="120" height="76" rx="6" fill="currentColor" opacity=".9" /><path d="M40 40l20-24h80l20 24" fill="#cfd8c9" /></>,
};
export default function Icon({ c }) { return <svg viewBox="0 0 200 150" aria-hidden>{P[c] || P.consumables}</svg>; }
