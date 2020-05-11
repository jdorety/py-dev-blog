import React from "react"
import renderer from "react-test-renderer"

import BlogLink from "./blogLink"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BlogLink title="Test title" path="/test/test.md">
        BlogLink
      </BlogLink>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
