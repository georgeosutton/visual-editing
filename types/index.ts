export interface PagePayload {
  title?: string;
  slug?: { current?: string };
  blocks?: any;
}

export interface MenuItem {
  _type: string;
  _key: string;
  slug?: string;
  text?: string;
}

export interface SettingsPayload {
  menuItems?: MenuItem[];
}
