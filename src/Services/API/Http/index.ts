import axios from "axios";

export const Http = {
  get: (url: string) => {
    return new Promise((resolve, reject) => {
      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .get(url, {
          headers,
        })
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  },
};
