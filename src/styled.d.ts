// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      main: string
      secondary: string
    }

    type: {
      h1: {
        size: string
        color: string
      }
      h2: {
        size: string
        color: string
      }
    }
  }
}
