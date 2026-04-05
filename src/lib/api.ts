const API_BASE = "/api";

export type Teacher = {
  id: number;
  name: string;
  bio: string;
  photo_url: string | null;
  created_at: string;
};

export type TeacherListItem = {
  id: number;
  name: string;
  photo_url: string | null;
};

export type NewsItem = {
  id: number;
  title: string;
  date: string;
  image_url: string | null;
  preview: string;
};

export type NewsDetail = {
  id: number;
  title: string;
  content: string;
  date: string;
  image_url: string | null;
};

export async function fetchTeachers(): Promise<TeacherListItem[]> {
  const res = await fetch(`${API_BASE}/teachers`);
  if (!res.ok) throw new Error("Не удалось загрузить педагогов");
  return res.json();
}

export async function fetchTeacher(id: string): Promise<Teacher> {
  const res = await fetch(`${API_BASE}/teachers/${id}`);
  if (!res.ok) throw new Error("Педагог не найден");
  return res.json();
}

export async function fetchNewsList(): Promise<NewsItem[]> {
  const res = await fetch(`${API_BASE}/news`);
  if (!res.ok) throw new Error("Не удалось загрузить новости");
  return res.json();
}

export async function fetchNewsDetail(id: string): Promise<NewsDetail> {
  const res = await fetch(`${API_BASE}/news/${id}`);
  if (!res.ok) throw new Error("Новость не найдена");
  return res.json();
}
