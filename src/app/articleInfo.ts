export interface IArticleInfo {
  batchComplete: string;
  query: {
    pages: {}
  };
}

export interface IArticleInfoArray {
  batchComplete: string;
  query: {
    pages: any[]
  };
}
