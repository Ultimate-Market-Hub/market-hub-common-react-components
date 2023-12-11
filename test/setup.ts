import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
import { configure } from '@testing-library/react';
import fetch, { Request, Response } from 'node-fetch';
import { expect } from 'vitest';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

configure({
  defaultIgnore: 'script, style, svg',
});

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
vi.stubGlobal('scrollTo', vi.fn());

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

// @ts-expect-error
globalThis.fetch = fetch;
// @ts-expect-error
globalThis.Request = Request;
// @ts-expect-error
globalThis.Response = Response;

if (!globalThis.AbortController) {
  // @ts-expect-error
  globalThis.AbortController = new AbortController();
}
