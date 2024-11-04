export const predefinedHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maham Jabbar - Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 2rem 0;
        }
        header h1 {
            margin: 0;
        }
        .container {
            width: 80%;
            margin: auto;
            padding: 1rem 0;
        }
        section {
            padding: 2rem 0;
        }
        .section-title {
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
        }
        .project {
            margin-bottom: 1rem;
        }
        footer {
            text-align: center;
            padding: 1rem 0;
            background-color: #333;
            color: #fff;
            margin-top: 2rem;
        }
    </style>
</head>
<body>

    <!-- Header Section -->
    <header>
        <h1>Maham Jabbar</h1>
        <p>Web Developer | Designer | Programmer</p>
    </header>

    <div class="container">

        <!-- About Section -->
        <section id="about">
            <h2 class="section-title">About Me</h2>
            <p>Hello! I'm a passionate developer with a knack for creating clean, functional designs and user-friendly applications. I specialize in front-end development but have experience across the entire web stack.</p>
        </section>

        <!-- Skills Section -->
        <section id="skills">
            <h2 class="section-title">Skills</h2>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React, Vue.js, Angular</li>
                <li>Node.js, Express</li>
                <li>Python, Django</li>
                <li>UI/UX Design</li>
            </ul>
        </section>

        <!-- Projects Section -->
        <section id="projects">
            <h2 class="section-title">Projects</h2>
            <div class="project">
                <h3>Project 1: Portfolio Website</h3>
                <p>A responsive and modern personal portfolio website to showcase my work and skills.</p>
            </div>
            <div class="project">
                <h3>Project 2: E-commerce App</h3>
                <p>An e-commerce application with a secure payment gateway and intuitive user interface.</p>
            </div>
            <div class="project">
                <h3>Project 3: Blogging Platform</h3>
                <p>A full-stack blogging platform with user authentication, post management, and comments.</p>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact">
            <h2 class="section-title">Contact Me</h2>
            <p>If you'd like to get in touch, feel free to reach out via email or connect with me on social media.</p>
            <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></p>
        </section>

    </div>

    <!-- Footer Section -->
    <footer>
        <p>&copy; 2023 Your Name. All Rights Reserved.</p>
    </footer>

</body>
</html>

`