# 📝 Blog Website - README

This project is a simple client-side blog system built using **HTML, CSS, and JavaScript**, with no external backend. All blog posts and user comments are stored in the browser's memory and `localStorage`, respectively.

---

## 📁 Data Structure

### Blog Posts

The blog posts are stored as an array of JavaScript objects:

```js
const blogPosts = [ ... ];
```

Each blog post has the following structure:

| Field          | Type        | Description                                                                        |
| -------------- | ----------- | -----------------------------------------------------------------------------------|
| `id`           | Number      | Unique ID of the blog post                                                         |
| `title`        | String      | Title of the blog                                                                  |
| `excerpt`      | String      | Short summary used on the homepage or list view                                    |
| `image`        | String      | Path to the featured image                                                         |
| `author`       | String      | Name of the author                                                                 |
| `authorAvatar` | String      | Avatar image of the author                                                         |
| `date`         | String      | Formatted publish date (for display)                                               |
| `dateSort`     | Date        | Actual JavaScript `Date` object for sorting                                        |
| `tags`         | Array       | Tags related to the blog (e.g., `["design", "writings"]`)                          |
| `category`     | String      | Used for filtering by category (e.g., `cases`, `writings`, `book-nook`,`archives`) |
| `content`      | HTML String | Full blog content in HTML (displayed on the detailed blog page)                    |

---


## ➕ How to Add a New Blog Post

To manually add a new blog post:

1. Open the JavaScript file.
2. Locate the `const blogPosts = [...]` array.
3. Add a new object at the end (or start) of the array with the structure described above:

```js
{
    id: 11, // Make sure it's unique
    title: "Your Blog Title",
    excerpt: "Short summary of your blog",
    image: "img/blog.jpeg",
    author: "Your Name",
    authorAvatar: "img/avatar.png",
    date: "4 July 2025",
    dateSort: new Date("2025-07-04"),
    tags: ["your", "tags"],
    category: "writings",
    content: `
        <p>This is the content of the blog.</p>
        <h2>Subheading</h2>
        <p>More content goes here...</p>
    `
}
```

## 📌 Notes

* Make sure `id` is unique to avoid rendering conflicts.
* To make sure the category is working fine, enter the category field correctly. There are a total of 4 categories "cases" "writings" "book-nook" "archives"

---

Let me know if you'd like a version with dynamic form-based blog submissions or integration with Firebase or a JSON backend.
