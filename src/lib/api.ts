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

export type Collective = {
  id: number;
  name: string;
  description: string | null;
  photo_url: string | null;
  age_range: string | null;
  schedule: string | null;
  teacher_name: string | null;
  created_at: string;
};

export type CollectiveListItem = {
  id: number;
  name: string;
  photo_url: string | null;
  age_range: string | null;
  teacher_name: string | null;
};

export async function fetchCollectives(): Promise<CollectiveListItem[]> {
  const res = await fetch(`${API_BASE}/collectives`);
  if (!res.ok) throw new Error("Не удалось загрузить коллективы");
  return res.json();
}

export async function fetchCollective(id: string): Promise<Collective> {
  const res = await fetch(`${API_BASE}/collectives/${id}`);
  if (!res.ok) throw new Error("Коллектив не найден");
  return res.json();
}

export type Application = {
  id: number;
  parent_name: string;
  phone: string;
  child_name: string | null;
  child_age: string | null;
  collective_name: string | null;
  message: string | null;
  status: string;
  created_at: string;
};

export type StaticPage = {
  id: number;
  slug: string;
  title: string;
  content: string;
  section: string | null;
  updated_at: string;
};

export async function fetchStaticPage(slug: string): Promise<StaticPage> {
  const res = await fetch(`${API_BASE}/pages/${slug}`);
  if (!res.ok) throw new Error("Страница не найдена");
  return res.json();
}

export async function submitApplication(data: {
  parent_name: string;
  phone: string;
  child_name?: string;
  child_age?: string;
  collective_name?: string;
  message?: string;
}): Promise<{ id: number }> {
  const res = await fetch(`${API_BASE}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Не удалось отправить заявку");
  return res.json();
}
