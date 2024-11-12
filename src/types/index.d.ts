export type Category = {
  id: string
  name: string
}

export type ListSettings = {
  domainToUse: string
  postConfig: PostConfig
  isEnabledPickUp: boolean
}

export type PostConfig = {
  article_page_path: string
  query_key_name: string
  useAuthor: boolean
  useCategory: boolean
  useTag: boolean
}