export const lessonsData = {
  "python-basics": {
    id: "python-basics",
    title: "Python Basics: Printing",
    language: "python",
    explanation: "Python uses the `print()` function to output text. In DevOps, Python is used for automation scripts, API interactions, and parsing logs.",
    starterCode: "# Write code to print: Hello DevOps\n\n",
    expectedOutput: "Hello DevOps",
    hints: ["Use print('Hello DevOps')"]
  },
  "javascript-basics": {
    id: "javascript-basics",
    title: "JavaScript: Console Log",
    language: "javascript",
    explanation: "In JavaScript, we use `console.log()` to print text. Node.js (JavaScript on the server) is a massive part of modern DevOps tooling.",
    starterCode: "// Write code to print: Hello DevOps\n\n",
    expectedOutput: "Hello DevOps",
    hints: ["Use console.log('Hello DevOps')"]
  },
  "java-basics": {
    id: "java-basics",
    title: "Java: Hello World",
    language: "java",
    explanation: "Java requires a class and a main method. Use `System.out.println()` to print. Many enterprise DevOps tools (like Jenkins) run on Java.",
    starterCode: "public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n        \n    }\n}",
    expectedOutput: "Hello DevOps",
    hints: ["Type: System.out.println(\"Hello DevOps\"); inside the main method."]
  },
  "html-basics": {
    id: "html-basics",
    title: "HTML: Basic Page Structure",
    language: "html",
    explanation: "HTML uses tags to structure web pages. Create an `<h1>` tag with the text 'Hello DevOps'.",
    starterCode: "<!-- Write your HTML below -->\n\n",
    expectedOutput: "<h1>Hello DevOps</h1>",
    hints: ["Use <h1>Hello DevOps</h1>"]
  },
  "linux-basics": {
    id: "linux-basics",
    title: "Linux Basics: Navigation",
    language: "linux", // <-- CHANGED FROM "shell" to "linux"
    explanation: "In DevOps, you will live in the terminal. The `pwd` command stands for 'Print Working Directory' and shows you exactly which folder you are currently inside.",
    starterCode: "# Type the command to see your current directory\n\n",
    expectedOutput: "/home/user",
    hints: ["Use the pwd command.", "Type: pwd"]
  },
  "git-basics": {
    id: "git-basics",
    title: "Git Basics: Initialization",
    language: "linux", // <-- CHANGED FROM "shell" to "linux"
    explanation: "Git is the standard version control system. To start tracking a folder with Git, you must initialize it using the `git init` command.",
    starterCode: "# Type the command to initialize a new git repository\n\n",
    expectedOutput: "Initialized empty Git repository",
    hints: ["Type: git init"]
  }
};