const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tapaco/projects/tarasblog/myapp/.cache/dev-404-page.js"))),
  "component---src-templates-categories-list-template-js": hot(preferDefault(require("/home/tapaco/projects/tarasblog/myapp/src/templates/categories-list-template.js"))),
  "component---src-templates-category-template-js": hot(preferDefault(require("/home/tapaco/projects/tarasblog/myapp/src/templates/category-template.js"))),
  "component---src-templates-index-template-js": hot(preferDefault(require("/home/tapaco/projects/tarasblog/myapp/src/templates/index-template.js"))),
  "component---src-templates-not-found-template-js": hot(preferDefault(require("/home/tapaco/projects/tarasblog/myapp/src/templates/not-found-template.js"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("/home/tapaco/projects/tarasblog/myapp/src/templates/page-template.js"))),
  "component---src-templates-post-template-js": hot(preferDefault(require("/home/tapaco/projects/tarasblog/myapp/src/templates/post-template.js"))),
  "component---src-templates-tag-template-js": hot(preferDefault(require("/home/tapaco/projects/tarasblog/myapp/src/templates/tag-template.js"))),
  "component---src-templates-tags-list-template-js": hot(preferDefault(require("/home/tapaco/projects/tarasblog/myapp/src/templates/tags-list-template.js")))
}

