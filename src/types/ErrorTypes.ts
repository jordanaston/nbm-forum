interface ErrorResponse {
  statusCode: number;
  timestamp: string;
  method: string;
  message: string;
  data: {
    message: string;
    error?: string;
    statusCode?: number;
  };
}

export type LikeResponse = void | ErrorResponse;

export type DeleteResponse = void | ErrorResponse;
