import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useSearch } from "../../hooks/useSearch";

describe("Test hook useSearch", () => {
  const { result } = renderHook(() => useSearch());
  expect(result.current.handleSearch).toBe(1);
});
