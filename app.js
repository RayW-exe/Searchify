console.log("JS is running");

let auth0client = null;

async function initAuth0() {
    auth0client = await auth0.createAuth0Client({
    domain: 'raywekes.us.auth0.com',
    clientId: '6h32eairREMieGb5I6w14RwG54NmkdpA',
     authorizationParams: {
        redirect_uri: "https://rayw-exe.github.io/Searchify/"
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
        
        
        window.history.replaceState({}, document.title, "/Searchify/");
        window.location.href = "dashboard.html";
    }
}

document.getElementById("loginBtn").onclick = async () => {
    console.log("Auth0 client:", auth0client);
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

const logoutBtn = localStorage.getItem('logout-btn');
if (logoutBtn) {
    async function logout() {
    if (!auth0client) {
        console.log("Auth0 client not initialized");
        return;
    }
    await auth0client.logout({
        logoutParams: {
            returnTo: "https://rayw-exe.github.io/Searchify/"
        }
    });
}
}





