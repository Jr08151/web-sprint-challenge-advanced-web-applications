import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColor } from './utils/fetchColors'
import { act } from 'react-router-dom-utils'
import ColorList from './ColorList'

jest.mock('./utils/fetchColors')
const res = [
        { code: { hex: '#9a99dd' }, color: 'lilac', id: 5 },
        { code: { hex: '#00FFFF' }, color: 'aqua', id: 3 },
]

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  fetchColor.mockResolvedValueOnce(res)
  await act(async () => {
        render(<ColorList colors={res} />)
  })
  const aliceblue = screen.getByText('lilac')
  expect(aliceblue).toBeInTheDocument()
  const aqua = screen.getByText('aqua')
  expect(aqua).toBeInTheDocument()
});
