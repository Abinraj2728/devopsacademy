/*! coi-serviceworker v0.1.7 - Guido Zuidhof and contributors, licensed under MIT */
let coepCredentialless = false;
if (typeof window === 'undefined') {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

    self.addEventListener("message", (ev) => {
        if (!ev.data) {
            return;
        } else if (ev.data.type === "deregister") {
            self.registration
                .unregister()
                .then(() => {
                    return self.clients.matchAll();
                })
                .then(clients => {
                    clients.forEach((client) => client.navigate(client.url));
                });
        } else if (ev.data.type === "coepCredentialless") {
            coepCredentialless = ev.data.value;
        }
    });

    self.addEventListener("fetch", function (event) {
        const r = event.request;
        if (r.cache === "only-if-cached" && r.mode !== "same-origin") {
            return;
        }

        const request = (coepCredentialless && r.mode === "no-cors")
            ? new Request(r, {
                credentials: "omit",
            })
            : r;
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response.status === 0) {
                        return response;
                    }

                    const newHeaders = new Headers(response.headers);
                    newHeaders.set("Cross-Origin-Embedder-Policy",
                        coepCredentialless ? "credentialless" : "require-corp"
                    );
                    if (!coepCredentialless) {
                        newHeaders.set("Cross-Origin-Resource-Policy", "cross-origin");
                    }
                    newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");

                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: newHeaders,
                    });
                })
                .catch((e) => console.error(e))
        );
    });
} else {
    (() => {
        const reloadedBySelf = window.sessionStorage.getItem("coiReloadedBySelf");
        window.sessionStorage.removeItem("coiReloadedBySelf");
        const coepDegrading = (reloadedBySelf === "coepdegrade");

        // You can customize the behavior of this script through a global `coi` variable.
        const coi = {
            shouldRegister: () => !reloadedBySelf,
            shouldDeregister: () => false,
            coepCredentialless: () => true,
            coepDegrade: () => true,
            doReload: () => window.location.reload(),
            quiet: false,
            ...window.coi
        };

        const n = navigator;
        const controlling = n.serviceWorker && n.serviceWorker.controller;

        // Record the failure if the page is served by a cross-origin isolated document.
        if (controlling && !window.crossOriginIsolated) {
            window.sessionStorage.setItem("coiCoepHasFailed", "true");
        }
        const coepHasFailed = window.sessionStorage.getItem("coiCoepHasFailed");

        if (controlling) {
            // We need to reload the page only if the cross-origin isolation status is different from the expected one.
            const reload = () => {
                if (coi.doReload) {
                    window.sessionStorage.setItem("coiReloadedBySelf", "true");
                    coi.doReload();
                }
            };

            // Use the `coepCredentialless` setting to see if we need to reload the page.
            if (coepHasFailed && coi.coepDegrade()) {
                const reload = () => {
                    window.sessionStorage.setItem("coiReloadedBySelf", "coepdegrade");
                    window.location.reload();
                };
                // This is a degraded mode, but it's better than nothing.
                if (!window.crossOriginIsolated) {
                    reload();
                }
            } else {
                // This is a normal mode.
                if (!window.crossOriginIsolated) {
                    reload();
                }
            }
        }

        // Register the service worker if needed.
        if (coi.shouldRegister()) {
            if (!n.serviceWorker) {
                console.error("Cross-Origin Isolation requires Service Workers.");
                return;
            }
            n.serviceWorker.register(window.document.currentScript.src).then(
                (registration) => {
                    if (coi.quiet) return;
                    registration.addEventListener("updatefound", () => {
                        console.log("Reloading page to make use of updated COOP/COEP Service Worker.");
                        window.sessionStorage.setItem("coiReloadedBySelf", "updatefound");
                        if (coi.doReload) coi.doReload();
                    });
                    // If the registration is active, but it's not controlling the page
                    if (registration.active && !n.serviceWorker.controller) {
                        console.log("Reloading page to make use of COOP/COEP Service Worker.");
                        window.sessionStorage.setItem("coiReloadedBySelf", "notcontrolling");
                        if (coi.doReload) coi.doReload();
                    }
                },
                (err) => {
                    if (coi.quiet) return;
                    console.error("COOP/COEP Service Worker failed to register:", err);
                }
            );
        } else if (coi.shouldDeregister()) {
            n.serviceWorker.getRegistrations().then((registrations) => {
                for (let registration of registrations) {
                    registration.unregister();
                }
            });
        }
    })();
}