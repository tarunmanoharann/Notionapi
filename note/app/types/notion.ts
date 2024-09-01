export interface Product {
    id: string;
    title: string;
    category: string;
    mainCategory: string;
    description: string;
    image: string;
    price?: number;
  }
  
  export interface NotionResponse {
    results: NotionPage[];
    // Add other Notion API response fields as needed
  }
  
  export interface NotionPage {
    id: string;
    properties: {
      Title: { title: [{ plain_text: string }] };
      Category: { select: { name: string } };
      MainCategory: { select: { name: string } };
      Description: { rich_text: [{ plain_text: string }] };
      Image: { files: [{ file: { url: string } }] };
      Price: { number: number };
      // Add other properties as needed
    };
    // Add other Notion page fields as needed
  }