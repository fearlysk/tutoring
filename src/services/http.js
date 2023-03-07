const http = async (url, method) => {
    try {
      const response = await fetch(url, {
        method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      return response.json();
    } catch (err) {
      return new Error("Data fetching error");
    }
  };

export default http;
