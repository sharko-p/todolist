// Механизм работы запроса регистрации пользователя с использованием интерсепторов (interceptors) обычно включает в себя следующие
//  шаги:

// Настройка Axios и интерсепторов: Вы создаете экземпляр Axios с нужными настройками и добавляете интерсепторы для перехвата
//  запросов и ответов. Интерсепторы могут быть глобальными или применяться к конкретному экземпляру Axios.

// Запрос на регистрацию: Вы отправляете POST-запрос на сервер, чтобы зарегистрировать пользователя. В этом запросе вы обычно
// отправляете данные, такие как имя, электронную почту и пароль.

// Перехват запроса (Request Interceptor): Интерсепторы могут перехватывать запросы перед отправкой на сервер. В случае регистрации,
//  вы можете использовать этот момент, чтобы добавить заголовок с токеном, если у вас есть авторизация.

// Отправка запроса на сервер: Запрос регистрации отправляется на сервер с необходимыми данными.

// Получение ответа: После того как сервер обработает запрос, вы получаете ответ.

// Перехват ответа (Response Interceptor): Интерсепторы также могут перехватывать ответы от сервера. Вы можете использовать этот
// момент для обработки ответа сервера, например, для обработки ошибок или сохранения токена, если он был создан.

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://todo-redev.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

let authToken: string | null = null;

instance.interceptors.request.use((request) => {
  try {
    const token = localStorage.getItem(" token") || null

    if (request && request.headers && token) {
      request.headers.Authorization = token ? `Bearer ${token}` : false;
    }

    return request;
  } catch (error) {
    return request;
  }
});


instance.interceptors.request.use((request) => {
  try {
    authToken = localStorage.getItem("authToken") || null; // Устанавливаем токен из localStorage

    if (request && request.headers && authToken) {
      request.headers.Authorization = authToken ? `Bearer ${authToken}` : false;
    }

    return request;
  } catch (error) {
    return request;
  }
});