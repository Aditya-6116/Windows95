import { create } from 'zustand';
import hiddenCharacters from '../data/hiddenCharacters';

let zCounter = 100;

const useOsStore = create((set, get) => ({
  // ── Window Management ──────────────────────────────────────────────────
  windows: {},        // { [id]: windowObj }
  windowOrder: [],    // array of ids, last = top
  activeWindow: null,

  openWindow: (config) => {
    const id = config.id || `${config.app}-${Date.now()}`;
    set((state) => {
      if (state.windows[id]) {
        // Already open — bring to front and restore
        const wins = { ...state.windows };
        if (wins[id].minimized) wins[id] = { ...wins[id], minimized: false };
        const order = state.windowOrder.filter(w => w !== id);
        order.push(id);
        return { windows: wins, windowOrder: order, activeWindow: id };
      }
      const win = {
        id,
        app: config.app,
        title: config.title || config.app,
        icon: config.icon || '🖥️',
        x: config.x ?? 80 + (Object.keys(state.windows).length % 8) * 24,
        y: config.y ?? 60 + (Object.keys(state.windows).length % 8) * 24,
        width: config.width || 520,
        height: config.height || 360,
        minimized: false,
        maximized: false,
        props: config.props || {},
      };
      const order = [...state.windowOrder, id];
      return {
        windows: { ...state.windows, [id]: win },
        windowOrder: order,
        activeWindow: id,
      };
    });
    return id;
  },

  closeWindow: (id) => set((state) => {
    const wins = { ...state.windows };
    delete wins[id];
    const order = state.windowOrder.filter(w => w !== id);
    const active = order.length ? order[order.length - 1] : null;
    return { windows: wins, windowOrder: order, activeWindow: active };
  }),

  minimizeWindow: (id) => set((state) => {
    const wins = { ...state.windows };
    wins[id] = { ...wins[id], minimized: true };
    const order = state.windowOrder.filter(w => w !== id);
    const active = order.length ? order[order.length - 1] : null;
    return { windows: wins, windowOrder: order, activeWindow: active };
  }),

  maximizeWindow: (id) => set((state) => {
    const wins = { ...state.windows };
    const win = wins[id];
    if (win.maximized) {
      wins[id] = { ...win, maximized: false };
    } else {
      wins[id] = { ...win, maximized: true, minimized: false };
    }
    return { windows: { ...wins } };
  }),

  focusWindow: (id) => set((state) => {
    const wins = { ...state.windows };
    if (wins[id]?.minimized) wins[id] = { ...wins[id], minimized: false };
    const order = state.windowOrder.filter(w => w !== id);
    order.push(id);
    return { windows: wins, windowOrder: order, activeWindow: id };
  }),

  moveWindow: (id, x, y) => set((state) => ({
    windows: { ...state.windows, [id]: { ...state.windows[id], x, y } },
  })),

  resizeWindow: (id, width, height) => set((state) => ({
    windows: { ...state.windows, [id]: { ...state.windows[id], width, height } },
  })),

  updateWindowProps: (id, propsUpdate) => set((state) => ({
    windows: {
      ...state.windows,
      [id]: {
        ...state.windows[id],
        props: { ...state.windows[id]?.props, ...propsUpdate },
      },
    },
  })),

  // ── Start Menu ────────────────────────────────────────────────────────
  startMenuOpen: false,
  toggleStartMenu: () => set((s) => ({ startMenuOpen: !s.startMenuOpen })),
  closeStartMenu: () => set({ startMenuOpen: false }),

  // ── Context Menu ──────────────────────────────────────────────────────
  contextMenu: null, // { x, y, items: [{ label, action }] }
  openContextMenu: (menu) => set({ contextMenu: menu }),
  closeContextMenu: () => set({ contextMenu: null }),

  // ── Desktop Selection ─────────────────────────────────────────────────
  selectedDesktopItem: null,
  selectDesktopItem: (id) => set({ selectedDesktopItem: id }),
  clearDesktopSelection: () => set({ selectedDesktopItem: null }),

  // ── Puzzle: Hidden Characters ─────────────────────────────────────────
  hiddenChars: hiddenCharacters.map(c => ({ ...c })),
  discoveredCharacters: [],  // array of clue ids

  discoverCharacter: (id) => set((state) => {
    if (state.discoveredCharacters.includes(id)) return {};
    const chars = state.hiddenChars.map(c =>
      c.id === id ? { ...c, discovered: true } : c
    );
    return {
      hiddenChars: chars,
      discoveredCharacters: [...state.discoveredCharacters, id],
    };
  }),

  // ── Visited Locations ─────────────────────────────────────────────────
  visitedLocations: [],
  markVisited: (location) => set((state) => ({
    visitedLocations: state.visitedLocations.includes(location)
      ? state.visitedLocations
      : [...state.visitedLocations, location],
  })),

  // ── Toast Notification ─────────────────────────────────────────────────
  toast: null,
  showToast: (message) => {
    set({ toast: { message, key: Date.now() } });
  },

  // ── Station Completion ────────────────────────────────────────────────
  stationCompleted: false,
  setStationCompleted: () => set({ stationCompleted: true }),

  // ── Helpers ───────────────────────────────────────────────────────────
  getZIndex: (id) => {
    const state = get();
    const idx = state.windowOrder.indexOf(id);
    return 200 + idx * 2;
  },
}));

export default useOsStore;
