export const generateQueryObject = (url: string): Record<string, string> => {
  const regex = /[?&]([^=#]+)=([^&#]*)/g
  const queryObject: Record<string, string> = {}

  for (let match; (match = regex.exec(url)) !== null; ) {
    queryObject[match[1]] = match[2]
  }

  return queryObject
}

export const returnTagList = (articleObject: any) => articleObject['_embedded']['wp:term'][1].map((tag: any) => tag.name)
export const returnArticlePath = (postConfig: PostConfig, domain: string, articleId: string) => `https://${domain}/${postConfig.article_page_path}?${postConfig.query_key_name}=${articleId}`