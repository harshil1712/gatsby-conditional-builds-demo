import React from "react"
import { Box, Text, Link } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <Box>
      <Text>
        Hey everyone <span role="img" aria-label="Waves hand">👋🏽</span>, welcome to the Guestbook of <Link href='https://amorpheuz.dev/'>Yash Dave</Link>!
        I built this site to test out <Link href="https://www.gatsbyjs.org/docs/conditional-page-builds/">Gatsby Conditional Page Builds</Link> using <Link href="https://github.com/features/actions">GitHub Actions</Link> <span role="img" aria-label="A Robot automating things">🤖</span>.
        While you are here, Feel free to <span role="img" aria-label="Signing hand">✍🏽</span> <Link sx={{variant: 'link.highlight'}} href="#">Sign the Guestbook</Link> to see a live demo of how the action works!
      </Text>
    </Box>
  )
}
