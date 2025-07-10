// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Judicial Opinions in Gayatri Balasamy v. ISG Novasoft: Can Courts Modify Arbitral Awards?",
        excerpt: "In Gayatri Balasamy v. ISG Novasoft (2025), the Supreme Court’s Constitution Bench clarified whether courts can modify arbitral awards under Section 34 of the Arbitration Act. The majority affirmed limited powers, while the minority cautioned against judicial overreach. This post presents both sides of the split verdict.",
        image: "img/post1.png",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "10th July 2024",
        dateSort: new Date("2024-07-10"),
        tags: ["Supreme Court", "Arbitration"],
        category: "cases",
        content: `
            <h1>Judicial Opinions in <em>Gayatri Balasamy v. ISG Novasoft</em></h1>
            <p><strong>Topic:</strong> Can Courts Modify Arbitral Awards?</p>

            <p>In a landmark decision delivered in 2025, the Supreme Court of India addressed a long-standing question in arbitration law—whether courts under Section 34 of the Arbitration and Conciliation Act, 1996, have the power to modify arbitral awards. The judgment resulted in a split opinion. While the majority view supported limited modification powers under specific circumstances, the minority opposed it, emphasizing party autonomy and the sanctity of arbitral proceedings.</p>

            <h2>Majority View</h2>

            <p>The court has a limited power under Sections 34 and 37 to modify an arbitral award. This limited power may be exercised under the following circumstances:</p>
            <ul>
                <li>When the award is severable, by separating the “invalid” portion from the “valid” portion.</li>
                <li>By correcting clerical, computational, or typographical errors which are apparent on the face of the record.</li>
                <li>Post-award interest may be modified in some circumstances.</li>
                <li>Article 142 of the Constitution applies but must be used with great caution and should not result in rewriting or modifying the award on merits.</li>
                <li>The power can be exercised to bring finality to litigation, not to reopen merit-based issues.</li>
                <li>Setting aside an award includes the power to do so in part, where the invalid and valid parts can be clearly separated.</li>
                <li>Section 34 implies limited power to modify, even though the 1996 Act does not expressly state it.</li>
                <li>The court can correct evident errors without conducting a merit-based review.</li>
                <li>If there is any doubt about the appropriateness of the modification, the court should refrain and redirect to Section 33 or 34(4).</li>
                <li>The court may intervene to modify post-award interest if justified by circumstances arising after the award.</li>
            </ul>

            <h2>Minority View</h2>

            <p>The minority held that courts exercising powers under Section 34 or appeals thereunder do <strong>not</strong> have the power to modify an award:</p>
            <ul>
                <li>Arbitration is a consensual process. Courts cannot enter a merits review under Section 34 unless expressly permitted by law.</li>
                <li>The power to modify is not subsumed in the power to set aside—both are qualitatively different.</li>
                <li>Severance (partial setting aside) is permissible, but not modification.</li>
                <li>Modification entails adjudicating on merits, which is outside the scope of Section 34.</li>
                <li>The court cannot modify even the interest component—if needed, the matter should be remitted under Section 34(4).</li>
                <li>Article 142 powers should not override the statutory scheme of the Arbitration Act.</li>
                <li>Granting such modification powers creates uncertainty for contracting parties and undermines arbitration as an effective resolution mechanism.</li>
            </ul>`
    },
    {
        id: 2,
        title: "Improve Your Design Skills: Develop an 'Eye' for Design",
        excerpt: "Design is timeless. Learn how to quickly develop an 'eye' for design and improve your design skills in this comprehensive guide.",
        image: "img/blog.jpeg",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "18 April 2024",
        dateSort: new Date("2024-04-18"),
        tags: ["writings", "design"],
        category: "writings",
        content: `
            <p>Developing an 'eye' for design is one of the most valuable skills you can acquire as a creative professional. It's the ability to instinctively recognize what works and what doesn't in visual compositions.</p>
            
            <h2>Understanding Visual Hierarchy</h2>
            <p>Visual hierarchy is the foundation of good design. It guides the viewer's eye through your composition in a deliberate and meaningful way.</p>
            
            <h2>Color Theory in Practice</h2>
            <p>Understanding how colors interact with each other can dramatically improve your design work. Learn to use color as a tool for communication, not just decoration.</p>
            
            <p>Remember, developing an eye for design takes time and practice. Be patient with yourself and keep experimenting with different approaches and techniques.</p>
        `
    },
    {
        id: 3,
        title: "A Relentless Pursuit of Perfection: Thoughts on Design",
        excerpt: "Between self-doubt, creative products and poorly made apps, what is your greater distinction between the good and the great?",
        image: "img/blog.jpeg",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "17 April 2024",
        dateSort: new Date("2024-04-17"),
        tags: ["writings", "philosophy"],
        category: "writings",
        content: `
            <p>The pursuit of perfection in design is both a blessing and a curse. It drives us to create exceptional work, but it can also paralyze us with self-doubt and endless iterations.</p>
            
            <h2>The Good vs The Great</h2>
            <p>What separates good design from great design? It's often the attention to details that most people will never notice, but somehow feel.</p>
            
            <h2>Embracing Imperfection</h2>
            <p>Sometimes, the most beautiful designs come from embracing imperfection and allowing for happy accidents. The key is knowing when to stop refining and when to ship.</p>
            
            <p>Great design is not about perfection—it's about solving problems elegantly and creating experiences that resonate with people on an emotional level.</p>
        `
    },
    {
        id: 4,
        title: "How Remote Collaboration Makes Us Better Designers",
        excerpt: "Collaboration can make us better designers, and our design better. Here are some insights on how to navigate the new challenges of remote collaboration.",
        image: "img/blog.jpeg",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "16 April 2024",
        dateSort: new Date("2024-04-16"),
        tags: ["writings", "collaboration"],
        category: "writings",
        content: `
            <p>Remote work has fundamentally changed how designers collaborate. While it presents challenges, it has also opened up new opportunities for creative collaboration across geographical boundaries.</p>
            
            <h2>Breaking Down Barriers</h2>
            <p>Remote collaboration has democratized access to talent and opportunities. Designers can now work with teams from around the world, bringing diverse perspectives to every project.</p>
            
            <h2>New Tools, New Possibilities</h2>
            <p>The evolution of design tools has made remote collaboration not just possible, but in many ways superior to traditional in-person workflows.</p>
            
            <p>The key to successful remote collaboration is establishing clear communication channels, setting expectations, and leveraging the right tools for your team's needs.</p>
        `
    },
    {
        id: 5,
        title: "Best Books on Scaling Your Early-stage Startup",
        excerpt: "This comprehensive guide covers the best books for scaling your early-stage startup, from foundational business advice to take your business to the next level.",
        image: "img/blog.jpeg",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "15 April 2024",
        dateSort: new Date("2024-04-15"),
        tags: ["book-nook", "business"],
        category: "book-nook",
        content: `
            <p>Scaling a startup is one of the most challenging phases of building a business. These carefully selected books provide invaluable insights from entrepreneurs who have successfully navigated this journey.</p>
            
            <h2>Essential Reading List</h2>
            <p>From "The Lean Startup" to "Blitzscaling," these books offer practical frameworks and strategies for sustainable growth.</p>
            
            <h2>Learning from Failures</h2>
            <p>Some of the most valuable lessons come from understanding what doesn't work. These books don't shy away from discussing the failures and setbacks that are part of the entrepreneurial journey.</p>
            
            <p>Remember, every startup's journey is unique. Use these books as guides, but don't be afraid to forge your own path when the situation calls for it.</p>
        `
    },
    {
        id: 6,
        title: "Conversations with London Hair & Co.",
        excerpt: "We sat down with London's fast-growing brand and product design studio, Hair & Co, to find out how they've built their reputation.",
        image: "img/blog.jpeg",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "14 April 2024",
        dateSort: new Date("2024-04-14"),
        tags: ["cases", "business"],
        category: "cases",
        content: `
            <p>Hair & Co has become one of London's most talked-about design studios. Their rapid growth and innovative approach to branding have caught the attention of the entire creative industry.</p>
            
            <h2>Building a Reputation</h2>
            <p>Success in the creative industry isn't just about talent—it's about consistently delivering exceptional work and building strong relationships with clients.</p>
            
            <h2>The London Creative Scene</h2>
            <p>London's creative ecosystem provides unique opportunities and challenges for emerging studios. Hair & Co has navigated this landscape with remarkable skill.</p>
            
            <p>Their story offers valuable insights for any creative professional looking to build a successful studio or agency.</p>
        `
    },
    {
        id: 7,
        title: "Why Food Matters — Disease Prevention & Treatment",
        excerpt: "Eating more plants and less meat has been found to be a longer life and a reduced risk of cardiovascular disease, cancer, and other chronic diseases.",
        image: "img/blog.jpeg",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "13 April 2024",
        dateSort: new Date("2024-04-13"),
        tags: ["book-nook", "health"],
        category: "book-nook",
        content: `
            <p>The relationship between food and health has never been more important. Research consistently shows that our dietary choices have profound impacts on our long-term health outcomes.</p>
            
            <h2>Plant-Based Benefits</h2>
            <p>Studies have shown that diets rich in plants and lower in animal products are associated with reduced risks of chronic diseases and increased longevity.</p>
            
            <h2>Prevention vs Treatment</h2>
            <p>While medical treatments are important, prevention through proper nutrition is often more effective and certainly more cost-effective than treating diseases after they develop.</p>
            
            <p>Making informed food choices is one of the most powerful tools we have for maintaining our health and preventing disease.</p>
        `
    },
    {
        id: 8,
        title: "How to Run a Successful Business With Your Partner",
        excerpt: "Starting a business with your spouse or significant other can be challenging. Here are some tips to make it work and maintain a healthy relationship.",
        image: "img/blog.jpeg",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "12 April 2024",
        dateSort: new Date("2024-04-12"),
        tags: ["writings", "business"],
        category: "writings",
        content: `
            <p>Running a business with your romantic partner can be incredibly rewarding, but it also comes with unique challenges that require careful navigation.</p>
            
            <h2>Setting Boundaries</h2>
            <p>One of the most important aspects of working with your partner is establishing clear boundaries between work and personal life.</p>
            
            <h2>Defining Roles and Responsibilities</h2>
            <p>Clear role definition prevents conflicts and ensures that both partners can contribute their strengths to the business.</p>
            
            <p>Success in business partnerships, especially romantic ones, requires constant communication, mutual respect, and the ability to separate business decisions from personal emotions.</p>
        `
    },
    {
        id: 9,
        title: "A Continually Unfolding History — Made by Hand",
        excerpt: "A long-standing occupation that involves the creation of objects, Made by Hand explores the intersection of traditional craftsmanship and modern design.",
        image: "img/blog.jpeg",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "3 July 2024",
        dateSort: new Date("2024-07-03"),
        tags: ["archives", "craftsmanship"],
        category: "archives",
        content: `
            <p>The art of making things by hand has been with humanity since the beginning of time. In our digital age, there's something profoundly satisfying about creating physical objects with our own hands.</p>
            
            <h2>Traditional Craftsmanship Meets Modern Design</h2>
            <p>Today's artisans are finding innovative ways to blend traditional techniques with contemporary aesthetics, creating pieces that honor the past while speaking to the present.</p>
            
            <h2>The Value of Handmade</h2>
            <p>In a world of mass production, handmade objects carry a special significance. They tell stories, preserve traditions, and connect us to the human experience in ways that machine-made products cannot.</p>
            
            <p>The future of craftsmanship lies not in rejecting technology, but in thoughtfully integrating it with time-honored techniques to create something entirely new.</p>
        `
    },
    {
        id: 10,
        title: "Interview with Photographer & UX Designer, Viola Leitano",
        excerpt: "From New York, she has worked with Spotify, Nike, Chanel, Vogue and other major brands. We sat down with Viola to discuss her journey.",
        image: "img/blog.jpeg",
        author: "Niharika Verma - 4th year BSc LLB student, Gujarat National Law University",
        authorAvatar: "img/avatar.jpg",
        date: "19 April 2024",
        dateSort: new Date("2024-04-19"),
        tags: ["writings", "design"],
        category: "cases",
        content: `
            <p>Viola Leitano is a remarkable photographer and UX designer who has made her mark in the creative industry. Based in New York, she has collaborated with some of the world's most prestigious brands including Spotify, Nike, Chanel, and Vogue.</p>
            
            <h2>Early Beginnings</h2>
            <p>Viola's journey into photography began during her college years when she discovered her passion for capturing moments that tell stories. Her unique perspective and technical skills quickly caught the attention of industry professionals.</p>
            
            <h2>Transition to UX Design</h2>
            <p>What sets Viola apart is her ability to seamlessly blend her photography background with UX design principles. This unique combination allows her to create visually stunning and user-friendly digital experiences.</p>
            
            <p>Her work continues to inspire a new generation of creative professionals who are looking to break traditional boundaries and explore interdisciplinary approaches to design.</p>
        `
    }

];

// Comments storage (in real app, this would be in a database)
let comments = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    loadPosts();
    setupEventListeners();
    loadComments();
}

function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Comment form submission
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', handleCommentSubmission);
    }

    // Share and copy buttons
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('share-btn')) {
            handleShare();
        }
        if (e.target.classList.contains('copy-btn')) {
            handleCopyUrl();
        }
    });
}

function loadPosts(category = 'all', isHomepage = false) {
    const postsGrid = document.getElementById('postsGrid');
    if (!postsGrid) return;

    let filteredPosts = [...blogPosts];

    // Sort posts by date in descending order (newest first)
    filteredPosts.sort((a, b) => b.dateSort - a.dateSort);

    if (category !== 'all') {
        filteredPosts = filteredPosts.filter(post => post.category === category);
    }

    // If it's homepage, show only the 6 most recent posts
    if (isHomepage) {
        filteredPosts = filteredPosts.slice(0, 6);
    }

    postsGrid.innerHTML = filteredPosts.map(post => createPostCard(post)).join('');
}

function createPostCard(post) {
    return `
        <article class="post-card" onclick="navigateToPost(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <div class="post-author">
                        <img src="${post.authorAvatar}" alt="${post.author}">
                        <span>
                            ${post.author.replace(" - ", "<br><small>").concat("</small>")}
                        </span>
                    </div>
                    <span class="post-date">${post.date}</span>
                </div>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </article>
    `;
}


function navigateToPost(postId) {
    window.location.href = `blog-post.html?id=${postId}`;
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-open');
}

function handleShare() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`;
        window.open(shareUrl, '_blank');
    }
}

function handleCopyUrl() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('URL copied to clipboard!');
    }).catch(() => {
        showToast('Failed to copy URL', 'error');
    });
}

function handleCommentSubmission(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const comment = {
        id: Date.now(),
        name: formData.get('name'),
        email: formData.get('email'),
        content: formData.get('comment'),
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };

    const postId = getPostIdFromUrl();
    if (!comments[postId]) {
        comments[postId] = [];
    }

    comments[postId].push(comment);
    saveComments();
    displayComments(postId);
    e.target.reset();
    showToast('Comment added successfully!');
}

function loadComments() {
    const stored = localStorage.getItem('blogComments');
    if (stored) {
        comments = JSON.parse(stored);
    }
}

function saveComments() {
    localStorage.setItem('blogComments', JSON.stringify(comments));
}

function displayComments(postId) {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;

    const postComments = comments[postId] || [];

    if (postComments.length === 0) {
        commentsList.innerHTML = '<p class="no-comments">No comments yet. Be the first to comment!</p>';
        return;
    }

    commentsList.innerHTML = postComments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${comment.name}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <div class="comment-content">${comment.content}</div>
        </div>
    `).join('');
}

function getPostIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Export functions for use in other pages
window.blogApp = {
    blogPosts,
    loadPosts,
    navigateToPost,
    handleShare,
    handleCopyUrl,
    displayComments,
    getPostIdFromUrl,
    showToast
};