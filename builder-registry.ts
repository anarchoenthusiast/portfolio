"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import { CustomMDX } from "./app/components/mdx";
import Footer from "./app/components/footer";
import { Navbar } from "./app/components/nav";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Navbar, {
  name: "Navbar",
});

Builder.registerComponent(CustomMDX, {
  name: "CustomMDX",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});
