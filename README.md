# Folder Structure

/.next
/app
/folder =>url

- page.tsx - any component we design inside this file must have a default export
  -routing
  /public
  -static files or content to deliver to the public use this folder
  /node_modules

# Render

-file structure
...
layout
page
loading
not-found
error
global-error
route // js or ts
template
default

   <Layout>
     <ErrorBoundary fallback {<Error/>}>
      <Suspense fallback{<Loading/>}>
       <Layout> 
        <ErrorBoundary fallback {<Error/>}>
         <Suspense fallback{<Loading/>}>
           <page/>
          </Suspense> 
        </ErrorBoundary >
      </Layout> 
    </Suspense> 
  </ErrorBoundary >   
 </Layout>

...

# Code Syntax

-React Code

- 2 types of components
  a. Server side Component (default)
  - not allowed to use react hook
  - that can be async in next

  b. Clint side component
  - can use anything from react
  - connot be async

  # css

  :root {
  --background: #ffffff;
  --foreground: #171717;
  }

@theme inline {
--color-background: var(--background);
--color-foreground: var(--foreground);
--font-sans: var(--font-geist-sans);
--font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
:root {
--background: #0a0a0a;
--foreground: #ededed;
}
}

body {
background: var(--background);
color: var(--foreground);
font-family: Arial, Helvetica, sans-serif;
}
