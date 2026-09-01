if (location.pathname.endsWith("/index.html")) {
  history.replaceState(null, "", "./");
}

!function (t, e) {
  var o, n, p, r;
  e.__SV ||
    ((window.posthog = e),
    (e._i = []),
    (e.init = function (i, s, a) {
      function g(t, e) {
        var o = e.split(".");
        2 == o.length && ((t = t[o[0]]), (e = o[1]));
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }
      (p = t.createElement("script")).type = "text/javascript";
      p.crossOrigin = "anonymous";
      p.async = !0;
      p.src =
        s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") +
        "/static/array.js";
      (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
      var u = e;
      void 0 !== a ? (u = e[a] = []) : (a = "posthog");
      u.people = u.people || [];
      u.toString = function (t) {
        var e = "posthog";
        return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e;
      };
      u.people.toString = function () {
        return u.toString(1) + ".people (stub)";
      };
      o =
        "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(
          " ",
        );
      for (n = 0; n < o.length; n++) g(u, o[n]);
      e._i.push([i, s, a]);
    }),
    (e.__SV = 1));
}(document, window.posthog || []);

posthog.init("phc_uUKR39x5TLFjzFPqWKDFxVq7YMCTxA7ZrCVmyKWcDB7E", {
  api_host: "https://us.i.posthog.com",
  defaults: "2026-01-30",
  person_profiles: "always",
  capture_pageview: true,
  capture_pageleave: true,
});

function destinationFromHref(href) {
  if (href.indexOf("github.com") !== -1) return "github";
  if (href.indexOf("linkedin.com") !== -1) return "linkedin";
  if (href.indexOf("instagram.com") !== -1) return "instagram";
  if (href.indexOf("tiktok.com") !== -1) return "tiktok";
  if (href.indexOf("goodreads.com") !== -1) return "goodreads";
  if (href.indexOf("resumelm") !== -1) return "resumelm";
  return "other";
}

document.addEventListener(
  "click",
  function (event) {
    var copyBtn = event.target.closest("[data-copy]");
    if (copyBtn) {
      posthog.capture("email_copied");
      return;
    }

    var link = event.target.closest("a[href]");
    if (!link) return;

    var href = link.getAttribute("href") || "";

    if (link.hasAttribute("download") || href.indexOf("alex-resume.pdf") !== -1) {
      posthog.capture("resume_downloaded");
      return;
    }

    if (href === "resume.html" || /resume\.html$/i.test(href)) {
      posthog.capture("resume_opened");
      return;
    }

    if (href.indexOf("http") === 0) {
      posthog.capture("outbound_clicked", {
        destination: destinationFromHref(href),
      });
    }
  },
  true,
);
