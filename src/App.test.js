import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("./Network/contentful", () => ({
  getPageRoutes: vi.fn(async () => null),
  getResume: vi.fn(async () => null),
  getDesignPage: vi.fn(async () => null),
  getMoreAboutMePage: vi.fn(async () => null),
  getContentFromEntry: vi.fn(async () => null),
}));

import App from "./App";

describe("App", () => {
  it("renders the home greeting", () => {
    render(<App />);
    expect(screen.getByText(/Hi! My name is Saljuk/i)).toBeInTheDocument();
  });
});
