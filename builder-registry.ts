"use client";
import { builder, Builder } from "@builder.io/react";
import { Navbar } from "./app/components/nav";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const navInputs = [
  {
    name: "navItems",
    type: "list",
    subFields: [
      {
        name: "path",
        type: "string",
        defaultValue: "/",
      },
      {
        name: "name",
        type: "string",
        defaultValue: "home",
      },
    ],
    defaultValue: [
      { path: "/", name: "home" },
      { path: "/blog", name: "blog" },
      {
        path: "https://vercel.com/templates/next.js/portfolio-starter-kit",
        name: "deploy",
      },
    ],
  },
];

Builder.registerComponent(Navbar, {
  name: "Navbar",
  inputs: navInputs,
});
