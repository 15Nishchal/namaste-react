#   Namaste React 🐱‍🏍

# Parcel
- Dev Build //creates a dev build for you
- Local server //creates a local server for you. It hosts your app to the server
- Parcel is automatically refreshing your page also, it is doing HMR - Hot Module Replacement
- Parcel uses File Watching Algorithm - written in C++
- parcel is giving you faster development experience because it is using caching
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Error Handling
- HTTPs
- Diagnostic
- Tree Shaking - remove unused code
- Different dev and production bundles
It is caching on the files, it is watching the changes so the next build is faster.

# What is the most important thing in your web browser?
To load Images in your Web Page
- Parcel do image optimization for you as well
- When you do production build, parcel will minify our file, it will do minification also
- Parcel will bundle all the file for us
It's basic core job is to bundle  things up

# It's not just react that is making our app faster. There are lot of things such as bundlers vite, parcel
# that are doing whole lot of things under the hood to make our app fast 
# Parcel is not doing everything on its own, it's using other libraries

Your web app can be opened inside Internet Explorer, it can also be opened inside older version of Internet Explorer.
Your app can be opened in Goodle Chrome, Firefox so parcel takes care of all that and it gives differential
bundling to your app so your app runs smoothly to older versions of your browser

# npx parcel build index.html

**build is a command that tells Parcel to create an optimized, production-ready build of your application. This includes bundling your JavaScript, CSS, HTML, and other assets, and often involves minification and other optimizations.**


When you write npx parcel index.html, it generates a development build of your project and it hosted on 1234
When it generates a development build, it puts up in this **dist** folder

# Now when you will build a production build, it will build inside this dist folder
- parcel compress all your files, all the code to just three files when you build a production build.
- This production build is highly optimized build which can push to production.

- parcel-cache, dist and node_modules folder are temporary and can be regenerated.

# npx parcel index.html // This is the dev build


- The copy of the node_modules on the local is different.
- The copy of the node_modules on the server is different.

# NOTE: You don't have to put parcel-cache and dist folder on git. They can be regenerated

- If you create, create-react-app, it will automatically takes care of everything

# BrowserList
- you have to tell your browser what all browsers should your app be supported in.
- you have to configure it in package.json
"browserlist": [
    **This browserlist will take an array of browsers**
    "last 2 Chrome versions"
    // If I write this, my app will be compatible with last 2 chrome versions
]
- Suppose your app is a government website, then government websites work on the oldest of the browsers also

# In your Interview, whenever your interviewer asks -
# Why your app is fast? How it is optimized?
-----------------------------------------------------------

# What does the command npx mean?
- npx means you are executing the npm package parcel and you give the source file as index.html. 
These commands are different for development build and production build

To make our life easier, what we do, we create a script that will build our project instead of writing this command again and again.
- You need to create that script in package.json
- Let's create a script for starting our project in dev mode

- start means starting the project in dev mode
- build means building the project for production mode
- npm run start is equivalent to npx parcel index.html, since we have written a script to start our project in
dev mode so we no longer need to write npx parcel index.html
- Similarly we can write 
# npm run build - It builds our project for production

# npm run start - or  npm run  both will start our project in dev mode