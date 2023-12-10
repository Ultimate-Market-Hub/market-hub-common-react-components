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

//This is needed to be able to navigate between pages in our 'integ' tests
//https://github.com/remix-run/react-router/blob/main/packages/router/__tests__/setup.ts
// See https://github.com/vitest-dev/vitest/issues/3077
// Built-in lib.dom.d.ts expects `fetch(Request | string, ...)` but the web
// fetch API allows a URL so @remix-run/web-fetch defines
// `fetch(string | URL | Request, ...)`
// @ts-expect-error
globalThis.fetch = fetch;
// Same as above, lib.dom.d.ts doesn't allow a URL to the Request constructor
// @ts-expect-error
globalThis.Request = Request;
// web-std/fetch Response does not currently implement Response.error()
// @ts-expect-error
globalThis.Response = Response;

if (!globalThis.AbortController) {
  // @ts-expect-error
  globalThis.AbortController = new AbortController();
}
