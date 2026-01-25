export interface AppEvent {
  id: string;
  name: string;
  description: string;
  time: string;
  condition: string;
  reward: string;
  link: string;
  refCode?: string; // ⭐ 추가
  logo?: string;
}