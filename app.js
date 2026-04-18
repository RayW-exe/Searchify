console.log("JS is running");

let auth0client = null;

async function initAuth0() {
    auth0client = await auth0.createAuth0Client({
        domain: 'raywekes.us.auth0.com',
        client_id: 'Bi9y3Ce47YGgdeIhHb6uXusgUuHiP7Wc',
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    });
}

window.onload = async () => {
  await initAuth0();
  await handleRedirect();
};

async function handleRedirect() {
    const query = window.location.search;
    if (query.includes("code=")) {
        await auth0client.handleRedirectCallback();
        
        
        window.history.replaceState({}, document.title, "/");
        window.location.href = "dashboard.html";
    }
}

document.getElementById("loginBtn").onclick = async () => {
    await auth0client.loginWithRedirect();
};

document.getElementById("signupBtn").onclick = async () => {
    await auth0client.loginWithRedirect({
        authorizationParams: {
            screen_hint: "sign up"
        }
    })
}

