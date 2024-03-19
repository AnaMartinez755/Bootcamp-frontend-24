class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.ok) {
    console.log(response);
    const res = await response.json();
    return res;
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser(name) {
  if (!name) {
    console.error("Enter a valid username.");
    return;
  }

  try {
    const user = await loadJson(`https://api.github.com/users/${name}`);
    console.log(`Full name: ${user.name}.`);
    return user;
  } catch (err) {
    if (err instanceof HttpError) {
      if (err.response.status === 404) {
        console.error("No such user");
        return;
      } else {
        console.error(`Error: ${err.message}`);
      }
    } else {
      console.error("Unexpected error occurred");
      console.error(err);
    }
  }
}

demoGithubUser("AnaMartinez755");
