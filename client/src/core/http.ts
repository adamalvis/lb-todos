let accessToken: string | null = null;

type RequestOptions = {
  method: string;
  headers: HeadersInit;
  body?: string;
}

function setAccessToken(token: string) {
  accessToken = token;
}

function getDefaultHeaders(): HeadersInit {
  return {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

async function send(url: string, method: string, headers = {}, body?: object) {
  const finalHeaders = { ...getDefaultHeaders(), ...headers };
  const options: RequestOptions = {
    method,
    headers: finalHeaders,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options)
    .then(res => {
      return res.json();
    })
    .catch((err: Error) => {
      console.error(err.message);
      throw err;
    });
}

async function get(url: string, headers = {}) {
  return send(url, 'GET', headers);
}

const http = {
  setAccessToken,
  send,
  get,
};

export default http;
