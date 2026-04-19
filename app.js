console.log("JS is running");

let auth0client = null;

async function initAuth0() {
    auth0client = await auth0.createAuth0Client({
        domain: 'raywekes.us.auth0.com',
        client_id: 'Bi9y3Ce47YGgdeIhHb6uXusgUuHiP7Wc',
        authorizationParams: {
            redirect_uri: window.location.origin + "/Searchify"
        }
    });

    console.log("Auth0 initialized", auth0client);
}

const loginBtn = document.getElementById("loginBtn");
loginBtn.disabled = true;

window.onload = async () => {
  await initAuth0();
  await handleRedirect();
  loginBtn.disabled = false;
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
    if (!auth0client) {
        console.log("Auth0 client not initialized");
        return;
    }
    await auth0client.loginWithRedirect();
};

document.getElementById("signupBtn").onclick = async () => {
    if (!auth0client) {
        console.log("Auth0 client not initialized");
        return;
    }
    await auth0client.loginWithRedirect({
        authorizationParams: {
            screen_hint: "sign up"
        }
    })
}

