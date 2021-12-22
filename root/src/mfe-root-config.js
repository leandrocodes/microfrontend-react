import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/navbar",
  app: () => System.import("@mfe/navbar"),
  activeWhen: ["/navbar"],
});

registerApplication({
  name: "@mfe/app1",
  app: () => System.import("@mfe/app1"),
  activeWhen: ["/app1"],
});

start({
  urlRerouteOnly: true,
});
