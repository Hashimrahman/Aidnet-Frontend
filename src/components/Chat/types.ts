export interface ChatRoom {
    id: string; 
    name: string; 
    campaignId: string;
  }
  
  export interface Message {
    user_id: number;
    message: string;
    timestamp?: string;  
    user_name?: string;  
  }