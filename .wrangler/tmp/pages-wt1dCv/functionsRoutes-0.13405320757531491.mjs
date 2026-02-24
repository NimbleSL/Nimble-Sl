import { onRequestOptions as __api_chat_js_onRequestOptions } from "/Users/anik/Desktop/30 Days/Software Products/Nimble-Sl/functions/api/chat.js"
import { onRequestPost as __api_chat_js_onRequestPost } from "/Users/anik/Desktop/30 Days/Software Products/Nimble-Sl/functions/api/chat.js"

export const routes = [
    {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_chat_js_onRequestOptions],
    },
  {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_chat_js_onRequestPost],
    },
  ]