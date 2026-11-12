// Helper to quickly generate lessons for the sidebar
const createLesson = (id, title, category, language) => ({
  id, title, category, language,
  explanation: `This is the theoretical overview for ${title}. In a complete platform, this section would contain the detailed documentation and examples for this specific concept.`,
  starterCode: `# This is a theoretical lesson.\n# Click 'Run Code' to see a simulated output.\n`,
  expectedOutput: "Theoretical Lesson",
  hints: ["This is a concept lesson. Check the explanation panel."]
});

// Generates a whole category of lessons at once
const generateCategory = (baseId, categoryName, language, topics) => {
  return topics.reduce((acc, topic) => {
    // Format the title nicely (e.g., "if-else" -> "If Else")
    const title = `${language === 'html' || language === 'css' ? language.toUpperCase() : language === 'javascript' ? 'JS' : language === 'cpp' ? 'C++' : language === 'csharp' ? 'C#' : language.toUpperCase()} ${topic.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}`;
    acc[`${baseId}-${topic}`] = createLesson(`${baseId}-${topic}`, title, categoryName, language);
    return acc;
  }, {});
};

export const lessonsData = {
  // ==========================================
  // PYTHON (Full W3Schools Structure)
  // ==========================================
  "python-home": {
    id: "python-home", title: "Python HOME", category: "Python Tutorial", language: "python",
    explanation: "Python is a popular programming language. It is used for web development, software creation, and system scripting.",
    starterCode: "print('Hello, World!')\n", expectedOutput: "Hello, World!", hints: ["Use print()"]
  },
  ...generateCategory("python", "Python Tutorial", "python", [
    "intro", "get-started", "syntax", "output", "comments", "variables", "datatypes", "numbers", "casting", "strings", "booleans", "operators", "lists", "tuples", "sets", "dictionaries", "if-else", "match", "while-loops", "for-loops", "functions", "range", "arrays", "iterators", "modules", "dates", "math", "json", "regex", "pip", "try-except", "string-formatting", "none", "user-input", "virtualenv"
  ]),
  ...generateCategory("python", "Python Classes", "python", [
    "oop", "classes-objects", "init-method", "self-parameter", "class-properties", "class-methods", "magic-methods", "inheritance", "polymorphism", "encapsulation", "inner-classes"
  ]),
  ...generateCategory("python", "File Handling", "python", [
    "file-handling", "read-files", "write-create-files", "delete-files"
  ]),
  ...generateCategory("python", "Python Modules", "python", [
    "numpy", "pandas", "scipy", "django"
  ]),
  ...generateCategory("python", "Machine Learning", "python", [
    "getting-started", "mean-median-mode", "standard-deviation", "percentile", "data-distribution", "normal-data-distribution", "scatter-plot", "linear-regression", "polynomial-regression", "multiple-regression", "scale", "train-test", "decision-tree", "confusion-matrix", "hierarchical-clustering", "logistic-regression", "grid-search", "categorical-data", "k-means", "bootstrap-aggregation", "cross-validation", "auc-roc-curve", "k-nearest-neighbors"
  ]),

  // ==========================================
  // JAVASCRIPT (Full W3Schools Structure)
  // ==========================================
  "javascript-home": {
    id: "javascript-home", title: "JS HOME", category: "JS Tutorial", language: "javascript",
    explanation: "JavaScript is the programming language of the Web.",
    starterCode: "console.log('Hello, World!');\n", expectedOutput: "Hello, World!", hints: ["Use console.log()"]
  },
  ...generateCategory("javascript", "JS Tutorial", "javascript", [
    "intro", "where-to", "output", "syntax", "comments", "variables", "let", "const", "operators", "datatypes", "functions", "objects", "events", "strings", "string-methods", "numbers", "arrays", "array-methods", "dates", "math", "random", "booleans", "if-else", "switch", "loops", "breaks", "typeof", "type-conversion", "errors", "classes"
  ]),
  ...generateCategory("javascript", "JS Versions", "javascript", [
    "versions", "es5", "es6"
  ]),
  ...generateCategory("javascript", "JS Objects", "javascript", [
    "object-definition", "object-properties", "object-methods", "object-display", "object-accessors", "object-constructors", "object-prototypes"
  ]),

  // ==========================================
  // HTML (Full W3Schools Structure)
  // ==========================================
  "html-home": {
    id: "html-home", title: "HTML HOME", category: "HTML Tutorial", language: "html",
    explanation: "HTML is the standard markup language for creating Web pages.",
    starterCode: "<h1>Hello HTML</h1>\n", expectedOutput: "<h1>Hello HTML</h1>", hints: ["Use <h1>"]
  },
  ...generateCategory("html", "HTML Tutorial", "html", [
    "intro", "editors", "basic", "elements", "attributes", "headings", "paragraphs", "styles", "formatting", "quotations", "comments", "colors", "css", "links", "images", "favicon", "page-title", "tables", "lists", "block-inline", "div", "classes", "id", "iframes", "javascript", "file-paths", "head", "layout", "responsive", "computercode", "semantics", "style-guide", "entities", "symbols", "emojis", "charsets", "url-encode", "url-decode", "forms", "form-attributes", "form-elements", "input-types", "input-attributes", "input-form-attributes"
  ]),
  ...generateCategory("html", "HTML Graphics", "html", [
    "canvas", "svg"
  ]),

  // ==========================================
  // CSS (Full W3Schools Structure)
  // ==========================================
  "css-home": {
    id: "css-home", title: "CSS HOME", category: "CSS Tutorial", language: "css",
    explanation: "CSS is the language we use to style an HTML document.",
    starterCode: "<style>\n  body { background-color: lightblue; }\n</style>\n<h1>Hello CSS</h1>\n", expectedOutput: "Theoretical Lesson", hints: ["Use <style>"]
  },
  ...generateCategory("css", "CSS Tutorial", "css", [
    "intro", "syntax", "selectors", "how-to", "comments", "colors", "backgrounds", "borders", "margins", "padding", "height-width", "box-model", "outline", "text", "fonts", "icons", "links", "lists", "tables", "display", "max-width", "position", "z-index", "overflow", "float", "inline-block", "align", "combinators", "pseudo-class", "pseudo-element", "opacity", "navigation-bar", "dropdowns", "image-gallery", "image-sprites", "attr-selectors", "forms", "counters", "website-layout", "units", "specificity", "important"
  ]),

  // ==========================================
  // JAVA (Full W3Schools Structure)
  // ==========================================
  "java-home": {
    id: "java-home", title: "Java HOME", category: "Java Tutorial", language: "java",
    explanation: "Java is a popular programming language. It is used to develop mobile apps, web apps, desktop apps, games, and much more.",
    starterCode: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello Java\");\n  }\n}",
    expectedOutput: "Hello Java", hints: ["Use System.out.println()"]
  },
  ...generateCategory("java", "Java Tutorial", "java", [
    "intro", "get-started", "syntax", "output", "comments", "variables", "datatypes", "type-casting", "operators", "strings", "math", "booleans", "if-else", "switch", "while-loop", "for-loop", "break-continue", "arrays", "methods", "method-parameters", "method-overloading", "scope", "recursion", "oop", "classes-objects", "attributes", "class-methods", "constructors", "modifiers", "encapsulation", "packages-api", "inheritance", "polymorphism", "inner-classes", "abstraction", "interfaces", "enums", "user-input", "date", "arraylist", "linkedlist", "hashmap", "hashset", "iterator", "wrapper-classes", "exceptions", "regex", "threads", "lambda", "files", "create-write-files", "read-files", "delete-files"
  ]),

  // ==========================================
  // C++ (Full W3Schools Structure)
  // ==========================================
  "cpp-home": {
    id: "cpp-home", title: "C++ HOME", category: "C++ Tutorial", language: "cpp",
    explanation: "C++ is a popular programming language. C++ is used to create computer programs, and is one of the most used languages in game development.",
    starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello C++\";\n  return 0;\n}",
    expectedOutput: "Hello C++", hints: ["Use cout"]
  },
  ...generateCategory("cpp", "C++ Tutorial", "cpp", [
    "intro", "get-started", "syntax", "output", "comments", "variables", "datatypes", "operators", "strings", "math", "booleans", "if-else", "switch", "while-loop", "for-loop", "break-continue", "arrays", "structures", "references", "pointers", "functions", "function-parameters", "function-overloading", "recursion", "classes-objects", "class-methods", "constructors", "access-specifiers", "encapsulation", "inheritance", "polymorphism", "files"
  ]),

  // ==========================================
  // C# (Full W3Schools Structure)
  // ==========================================
  "csharp-home": {
    id: "csharp-home", title: "C# HOME", category: "C# Tutorial", language: "csharp",
    explanation: "C# is a programming language developed by Microsoft that runs on the .NET Framework.",
    starterCode: "using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine(\"Hello C#\");\n  }\n}",
    expectedOutput: "Hello C#", hints: ["Use Console.WriteLine()"]
  },
  ...generateCategory("csharp", "C# Tutorial", "csharp", [
    "intro", "get-started", "syntax", "output", "comments", "variables", "datatypes", "type-casting", "user-input", "operators", "math", "strings", "booleans", "if-else", "switch", "while-loop", "for-loop", "break-continue", "arrays", "methods", "method-parameters", "method-overloading", "classes-objects", "class-members", "constructors", "access-modifiers", "properties", "inheritance", "polymorphism", "abstraction", "interfaces", "enums", "files", "exceptions"
  ]),

  // ==========================================
  // SQL (Full W3Schools Structure)
  // ==========================================
  "sql-home": {
    id: "sql-home", title: "SQL HOME", category: "SQL Tutorial", language: "sql",
    explanation: "SQL is a standard language for storing, manipulating and retrieving data in databases.",
    starterCode: "SELECT * FROM Customers;\n", expectedOutput: "Theoretical Lesson", hints: ["Use SELECT"]
  },
  ...generateCategory("sql", "SQL Tutorial", "sql", [
    "intro", "syntax", "select", "select-distinct", "where", "order-by", "and", "or", "not", "insert-into", "null-values", "update", "delete", "min-max", "count", "sum", "avg", "like", "wildcards", "in", "between", "aliases", "joins", "inner-join", "left-join", "right-join", "full-join", "self-join", "union", "group-by", "having", "exists", "any-all", "case", "comments"
  ]),

  // ==========================================
  // DEVOPS TOOLS
  // ==========================================
  "linux-basics": {
    id: "linux-basics", title: "Linux Navigation", category: "Linux Tutorial", language: "linux",
    explanation: "In DevOps, you will live in the terminal. The `pwd` command stands for 'Print Working Directory'.",
    starterCode: "# Type the command to see your current directory\n\n", expectedOutput: "Theoretical Lesson", hints: ["Type: pwd"]
  },
  "git-basics": {
    id: "git-basics", title: "Git Initialization", category: "Git Tutorial", language: "linux",
    explanation: "Git is the standard version control system. To start tracking a folder with Git, use `git init`.",
    starterCode: "# Type the command to initialize a new git repository\n\n", expectedOutput: "Theoretical Lesson", hints: ["Type: git init"]
  }
};